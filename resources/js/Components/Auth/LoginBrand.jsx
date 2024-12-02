import React from "react";

function LoginBrand() {
    return (
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 h-[80vh] flex flex-col justify-center items-center relative">
            <h1 className="text-3xl poppins-black text-white">S-TIX</h1>
            <p className="text-center mt-2 text-white leading-[20px]">
                Temukan Event Favorit, Kelola Tiket dengan Mudah, Nikmati
                Pengalaman Tanpa Hambatan
            </p>
            <div className="absolute bottom-5">
                <span className="text-sm text-white">S-TIX 1.0.0</span>
            </div>
        </div>
    );
}

export default LoginBrand;
