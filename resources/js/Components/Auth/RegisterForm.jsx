import { Link } from "@inertiajs/react";
import React from "react";
import FormGroup from "../Form/FormGroup";
import Button from "./Button";

function RegisterForm({ handleRegister, data, setData, processing }) {
    return (
        <form
            onSubmit={handleRegister}
            action=""
            method="POST"
            className="w-[80%] mt-8"
        >
            <FormGroup
                data={data}
                setData={setData}
                id={"name"}
                name={"name"}
                type={"text"}
                title={"Nama"}
                icon={"fa-solid fa-user"}
                placeholder={"John Doe"}
            />
            <FormGroup
                data={data}
                setData={setData}
                id={"email"}
                name={"email"}
                type={"email"}
                title={"Email"}
                icon={"fa-solid fa-envelope"}
                placeholder={"email@example.com"}
            />
            <FormGroup
                data={data}
                setData={setData}
                id={"password"}
                name={"password"}
                type={"password"}
                title={"Kata Sandi"}
                icon={"fa-solid fa-lock"}
                placeholder={"*********"}
            />
            <FormGroup
                data={data}
                setData={setData}
                id={"password_confirmation"}
                name={"password_confirmation"}
                type={"password"}
                title={"Konfirmasi Kata Sandi"}
                icon={"fa-solid fa-lock"}
                placeholder={"*********"}
            />
            <div className="mb-6 mt-8 flex justify-center">
                <Button
                    type={"button"}
                    name={"Register"}
                    processing={processing}
                />
            </div>
            <div className="flex justify-center gap-1 text-sm">
                <span>Sudah punya akun?</span>
                <Link
                    href={route("login")}
                    className="text-teal-700 hover:underline poppins-medium"
                >
                    Masuk
                </Link>
            </div>
        </form>
    );
}

export default RegisterForm;
