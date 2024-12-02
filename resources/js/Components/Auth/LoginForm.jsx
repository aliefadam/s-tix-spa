import { Link } from "@inertiajs/react";
import React from "react";
import FormGroup from "../Form/FormGroup";
import FormGroupCheckbox from "../Form/FormGroupCheckbox";
import Button from "./Button";

function LoginForm({ handleLogin, data, setData, processing }) {
    return (
        <div className="bg-white h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-3xl poppins-bold text-teal-700">LOGIN</h1>
            <form
                onSubmit={handleLogin}
                action=""
                method="POST"
                className="w-[80%] mt-8"
            >
                {/*  */}
                <FormGroup
                    data={data}
                    setData={setData}
                    name={"email"}
                    id={"email"}
                    type={"email"}
                    placeholder={"email@example.com"}
                    title={"Email"}
                    icon={"fa-solid fa-user"}
                />
                <FormGroup
                    data={data}
                    setData={setData}
                    name={"password"}
                    id={"password"}
                    type={"password"}
                    placeholder={"*********"}
                    title={"Kata Sandi"}
                    icon={"fa-solid fa-lock"}
                />
                <div className="mb-5 flex items-center justify-between">
                    <FormGroupCheckbox
                        id={"remember"}
                        name={"remember"}
                        title={"Ingat Saya"}
                    />
                    <div className="">
                        <Link
                            href={route("forgot-password")}
                            className="text-sm font-medium hover:text-teal-700 hover:underline"
                        >
                            Lupa Kata Sandi?
                        </Link>
                    </div>
                </div>
                <div className="mb-5 mt-6 flex justify-center">
                    <Button
                        name={"Login"}
                        processing={processing}
                        type={"button"}
                    />
                </div>
                <div className="flex items-center gap-3 mb-5">
                    <hr className="flex-[1]" />
                    <span className="text-xs">Atau login dengan</span>
                    <hr className="flex-[1]" />
                </div>
                <div className="mb-5 flex justify-center">
                    <Button
                        type={"link"}
                        href={"login.google"}
                        name={"Google"}
                        srcImage={"/imgs/google.png"}
                    />
                </div>
                <div className="flex justify-center gap-1 text-sm">
                    <span>Belum punya akun?</span>
                    <Link
                        href={route("register")}
                        className="text-teal-700 hover:underline poppins-medium"
                    >
                        Daftar
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
