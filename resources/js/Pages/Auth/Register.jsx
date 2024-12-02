import LoginBrand from "@/Components/Auth/LoginBrand";
import RegisterForm from "@/Components/Auth/RegisterForm";
import AuthLayout from "@/Layouts/AuthLayout";
import { Link, useForm } from "@inertiajs/react";
import React from "react";

function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleRegister = (e) => {
        e.preventDefault();
        post(route("register.post"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <AuthLayout title="Register">
            <main className="shadow-md w-[70%] grid grid-cols-2 rounded-md overflow-hidden">
                <LoginBrand />
                <div className="bg-white h-[80vh] flex flex-col justify-center items-center">
                    <h1 className="text-3xl poppins-bold text-teal-700">
                        REGISTER
                    </h1>
                    <RegisterForm
                        handleRegister={handleRegister}
                        data={data}
                        setData={setData}
                        processing={processing}
                    />
                </div>
            </main>
        </AuthLayout>
    );
}

export default Register;
