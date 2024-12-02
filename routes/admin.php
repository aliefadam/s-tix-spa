<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\TalentController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\VendorController;
use App\Http\Middleware\AdminRoleMiddleware;
use Illuminate\Support\Facades\Route;

Route::middleware(AdminRoleMiddleware::class)->group(function () {
    Route::prefix("admin")->group(function () {
        Route::get("/", [PageController::class, "directDashboard"])->name("admin.directDashboard");
        Route::get("/dashboard", [PageController::class, "dashboard"])->name("admin.dashboard");

        Route::get("/change-password", [PageController::class, "changePassword"])->name("admin.changePassword");
        Route::post("/change-password", [AuthController::class, "changePasswordPost"])->name("admin.changePasswordPost");

        Route::prefix("vendor")->group(function () {
            Route::get("/", [VendorController::class, "index"])->name("admin.vendor.index");
            Route::get("/create", [VendorController::class, "create"])->name("admin.vendor.create");
            Route::post("/", [VendorController::class, "store"])->name("admin.vendor.store");
            Route::get("/{vendor}/edit", [VendorController::class, "edit"])->name("admin.vendor.edit");
            Route::put("/{vendor}", [VendorController::class, "update"])->name("admin.vendor.update");
            Route::delete("/{vendor}", [VendorController::class, "destroy"])->name("admin.vendor.delete");
        });

        Route::prefix("event")->group(function () {
            Route::get("/", [EventController::class, "index"])->name("admin.event.index");
            Route::get("/create", [EventController::class, "create"])->name("admin.event.create");
            Route::post("/", [EventController::class, "store"])->name("admin.event.store");
            Route::get("/{id}/show", [EventController::class, "show"])->name("admin.event.show");
            Route::put("/{id}", [EventController::class, "update"])->name("admin.event.update");
            Route::delete("/{id}", [EventController::class, "destroy"])->name("admin.event.delete");
            Route::get("/{id}/detail", [EventController::class, "eventDetail"])->name("admin.event.detail");
        });

        Route::prefix("ticket")->group(function () {
            Route::get("/{id}", [TicketController::class, "show"])->name("admin.ticket.show");
            Route::post("/{id}", [TicketController::class, "store"])->name("admin.ticket.store");
            Route::put("/{id}", [TicketController::class, "update"])->name("admin.ticket.update");
            Route::delete("/{id}", [TicketController::class, "destroy"])->name("admin.ticket.delete");
        });

        Route::prefix("talent")->group(function () {
            Route::get("/", [TalentController::class, "index"])->name("admin.talent.index");
            Route::get("/create", [TalentController::class, "create"])->name("admin.talent.create");
            Route::post("/{event_id}", [TalentController::class, "store"])->name("admin.talent.store");
            Route::get("/{id}", [TalentController::class, "show"])->name("admin.talent.show");
            Route::put("/{id}", [TalentController::class, "update"])->name("admin.talent.update");
            Route::delete("/{id}", [TalentController::class, "destroy"])->name("admin.talent.delete");
        });
    });
});
