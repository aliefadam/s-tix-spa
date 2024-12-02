import LoginBrand from "@/Components/Auth/LoginBrand";
import LoginForm from "@/Components/Auth/LoginForm";
import AuthLayout from "@/Layouts/AuthLayout";
import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

function Login({ title }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <AuthLayout title={title}>
            <main className="shadow-md w-[70%] grid grid-cols-2 rounded-md overflow-hidden">
                <LoginBrand />
                <LoginForm
                    handleLogin={handleLogin}
                    data={data}
                    setData={setData}
                    processing={processing}
                />
            </main>
        </AuthLayout>
    );
}

export default Login;
