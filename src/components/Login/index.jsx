import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Logo from "../../assets/icons/kspi-icon.jpg";
import * as Yup from "yup";
import APItoken from "../../services/getToken";

const Login = () => {
    const [token, setToken] = useState(null);
    const validationSchema = Yup.object({
        username: Yup.string().min(5).required("First Name is required"),
        password: Yup.string().min(6).required("Last Name is required"),
    });

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            remember: false,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            APItoken.getToken({
                username: values.username,
                password: values.password,
            })
                .then((res) => setToken(res.data))
                .catch((err) => console.log(err));

            // formik.resetForm();
            // alert(JSON.stringify(values, null, 2));
        },
    });

    useEffect(() => {
        console.log(token);
    }, [token]);

    return (
        <div className="w-full h-[100vh] flex justify-center items-center ">
            <div className="flex flex-col justify-center gap-2 border rounded-md shadow-2xl p-4">
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
                    <label className="flex flex-col gap-1" htmlFor="password">
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
                    </label>
                    <div className="form-control">
                        <label className="cursor-pointer justify-start gap-2 label">
                            <input
                                id="remember"
                                name="remember"
                                type="checkbox"
                                onChange={formik.handleChange}
                                value={formik.values.remember}
                                className="checkbox checkbox-sm checkbox-success"
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
                </form>
            </div>
        </div>
    );
};

export default Login;
