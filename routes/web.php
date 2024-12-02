<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\PageController;
use App\Http\Middleware\UserRoleMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get("/", [PageController::class, "home"])->name("home");

Route::middleware("guest")->group(function () {
    Route::prefix("/login")->group(function () {
        Route::get("/", [AuthController::class, "login"])->name("login");
        Route::post("/", [AuthController::class, "loginPost"])->name("login.post");
        Route::get("/google", [AuthController::class, "redirectToGoogle"])->name("login.google");
        Route::get("/google/callback", [AuthController::class, "handleGoogleCallback"])->name("login.google.callback");
    });

    Route::prefix("/register")->group(function () {
        Route::get("/", [AuthController::class, "register"])->name("register");
        Route::post("/", [AuthController::class, "registerPost"])->name("register.post");
    });

    Route::prefix("/forgot-password")->group(function () {
        Route::get("/", [AuthController::class, "forgotPassword"])->name("forgot-password");
        Route::post("/", [AuthController::class, "forgotPasswordPost"])->name("forgot-password.post");
        Route::get("/done", [AuthController::class, "forgotPasswordDone"])->name("forgot-password.done");
    });

    Route::prefix("/reset-password")->group(function () {
        Route::get("/{token}", [AuthController::class, "resetPassword"])->name("password.reset");
        Route::post("/", [AuthController::class, "resetPasswordPost"])->name("password.update");
    });
});

Route::middleware("auth")->group(function () {
    Route::prefix("/profile")->group(function () {
        Route::get("/", [PageController::class, "profile"])->name("profile");
        Route::put("/", [AuthController::class, "update"])->name("profile.update");
    });

    Route::prefix("/transaction")->group(function () {
        Route::get("/", [PageController::class, "transaction"])->name("transaction");
    });

    Route::prefix("/ticket")->group(function () {
        Route::get("/", [PageController::class, "ticket"])->name("ticket");
        Route::get("/{id}", [PageController::class, "ticketDetail"])->name("ticket.detail");
    });

    Route::get("/logout", [AuthController::class, "logout"])->name("logout");

    include __DIR__ . '/api.php';
    require __DIR__ . '/admin.php';
});

Route::prefix("event")->group(function () {
    Route::get("/{slug}", [PageController::class, "event"])->name("event");
    Route::get("/{slug}/tickets", [PageController::class, "eventTickets"])->name("event.tickets");
    Route::post("/{slug}/data-diri", [PageController::class, "eventDataDiri"])->name("event.data-diri");
    Route::post("/{slug}/pembayaran", [PageController::class, "eventPembayaran"])->name("event.pembayaran");
    Route::post("/{slug}/payment", [TransactionController::class, "store"])->name("event.payment");
    Route::get("/{slug}/payment-waiting/{invoice}", [PageController::class, "eventPaymentWaiting"])->name("event.payment-waiting");
});
