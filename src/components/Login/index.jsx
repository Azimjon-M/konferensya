import React, { useState } from "react";
import { useFormik } from "formik";
import Logo from "../../assets/icons/kspi-icon.jpg";
import * as Yup from "yup";
import APItoken from "../../services/getToken";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [errMessage, setErrMessage] = useState("");
    const validationSchema = Yup.object({
        username: Yup.string()
            .min(5)
            .required("Username must be at least 5 characters"),
        password: Yup.string().min(10).required("Last Name is required"),
    });

    const data = JSON.parse(localStorage.getItem("data"));

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            remember: false,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await APItoken.getToken({
                username: values.username,
                password: values.password,
            })
                .then((res) => {
                    const data = JSON.stringify({
                        ...values,
                        token: res?.data?.access,
                    });
                    localStorage.setItem("data", data);
                    navigate("/admin-panel/home/carousel");
                })
                .catch((err) => {
                    if (err.response.status === 401) {
                        setErrMessage("Username or Password wrong!");
                        setTimeout(() => {
                            setErrMessage("");
                        }, 3000);
                    }
                });
        },
    });

    // if localStorage.data be true
    if (data?.remember) {
        formik.values.username = data.username;
        formik.values.password = data.password;
    }

    const handleClickPassword = () => {
        const btn = document.getElementById("password");
        btn.type = btn.type === "text" ? "password" : "text";
    };

    return (
        <div className="w-full h-[100vh] flex justify-center items-center ">
            <div className="flex flex-col justify-center gap-2 border rounded-md shadow-2xl p-4 -mt-20">
                <div className="w-[300px] h-full">
                    <div className="flex justify-center">
                        <img
                            className="w-[50px] lg:w-[70px] h-[50px] lg:h-[70px]"
                            src={Logo}
                            alt="logo"
                        />
                    </div>
                    <h1 className="text-center font-bold text-[1.3rem] lg:text-[1.4rem]">
                        Konference
                    </h1>
                </div>
                <form
                    className="w-[300px] flex flex-col gap-2"
                    onSubmit={formik.handleSubmit}
                >
                    <label
                        className="w-full flex flex-col gap-1"
                        htmlFor="username"
                    >
                        Username
                        <input
                            type="text"
                            id="username"
                            className={`${
                                formik.errors.username
                                    ? "border border-red-600 focus:border-red-600 focus:outline-red-600"
                                    : "focus:border-green-600 focus:outline-green-600"
                            } input input-sm input-bordered w-full max-w-xs`}
                            name="username"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                        />
                    </label>
                    <label
                        className="relative flex flex-col gap-1"
                        htmlFor="password"
                    >
                        Password
                        <input
                            type="password"
                            id="password"
                            className={`${
                                formik.errors.password
                                    ? "border border-red-600 focus:border-red-600 focus:outline-red-600"
                                    : "focus:border-green-600 focus:outline-green-600"
                            } input input-sm input-bordered w-full max-w-xs`}
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        <div
                            onClick={handleClickPassword}
                            className="cursor-pointer absolute top-[50%] right-3 font-bold"
                        >
                            M
                        </div>
                    </label>
                    <div className="form-control">
                        <label className="cursor-pointer justify-start gap-2 label">
                            <input
                                id="remember"
                                name="remember"
                                type="checkbox"
                                onChange={formik.handleChange}
                                value={formik.values.remember}
                                className="checkbox checkbox-sm checkbox-accent"
                            />
                            <span className="label-text">Remember me</span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full btn btn-sm btn-success text-white"
                    >
                        Yuborish
                    </button>
                    {errMessage && (
                        <h1 className="text-white font-semibold bg-red-600 rounded-md transfo text-center">
                            {errMessage}
                        </h1>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
