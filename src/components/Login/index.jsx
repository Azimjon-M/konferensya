import React from "react";
import { useFormik } from "formik";

const Login = () => {
    const formik = useFormik({
        initialValues: {
            isimFamilya: "",
            orsit: "",
            email: "",
            mamlakat: "",
            ishJoyi: "",
            tasdiqlashKodi: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const formikForEmail = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleClickEmailBtn = (e) => {
        e.preventDefault()
        formikForEmail.handleSubmit();
    };

    return (
        <div className="flex justify-center items-center">
            <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col">
                    <label className="w-full" htmlFor="IsmFamilya">
                        Ism Familya
                        <input
                            type="text"
                            id="IsmFamilya"
                            className="input input-bordered w-full max-w-xs"
                            name="isimFamilya"
                            onChange={formik.handleChange}
                            value={formik.values.isimFamilya}
                        />
                    </label>
                    <label htmlFor="ORSIT">
                        ORSIT
                        <input
                            type="number"
                            id="ORSIT"
                            className="input input-bordered w-full max-w-xs"
                            name="orsit"
                            onChange={formik.handleChange}
                            value={formik.values.orsit}
                        />
                    </label>
                    <label htmlFor="Mamlakat">
                        Mamlakat
                        <input
                            type="text"
                            id="Mamlakat"
                            className="input input-bordered w-full max-w-xs"
                            name="mamlakat"
                            onChange={formik.handleChange}
                            value={formik.values.mamlakat}
                        />
                    </label>
                    <label htmlFor="Ishjoyi">
                        Ish joyi
                        <textarea
                            id="Ishjoyi"
                            className="w-full h-[80px] textarea textarea-bordered block max-w-xs"
                            name="ishJoyi"
                            onChange={formik.handleChange}
                            value={formik.values.ishJoyi}
                        ></textarea>
                    </label>
                </div>
                <div className="flex flex-col">
                    <form onSubmit={formikForEmail.handleSubmit}>
                        <label className="w-full" htmlFor="email">
                            <p>Email</p>
                            <div className="join w-full">
                                <input
                                    id="email"
                                    type="email"
                                    className="input input-bordered join-item w-full"
                                    name="email"
                                    onChange={formikForEmail.handleChange}
                                    value={formikForEmail.values.email}
                                />
                                <button
                                    onClick={handleClickEmailBtn}
                                    className="btn btn-success join-item rounded-r-full text-white"
                                >
                                    Jo'natish
                                </button>
                            </div>
                        </label>
                    </form>
                    <label htmlFor="Tasdiqlashkodi">
                        Tasdiqlash ko'di
                        <input
                            type="text"
                            id="Tasdiqlashkodi"
                            className="input input-bordered w-full max-w-[100px] block"
                            name="tasdiqlashKodi"
                            onChange={formik.handleChange}
                            value={formik.values.tasdiqlashKodi}
                        />
                    </label>
                    <label htmlFor="Mamlakat">
                        Parol o'ylab toping
                        <input
                            type="text"
                            id="Mamlakat"
                            className="input input-bordered w-full max-w-xs"
                            name="mamlakat"
                            onChange={formik.handleChange}
                            value={formik.values.mamlakat}
                        />
                    </label>
                    <label htmlFor="Mamlakat">
                        Parolni tasdiqlash
                        <input
                            type="text"
                            id="Mamlakat"
                            className="input input-bordered w-full max-w-xs"
                            name="mamlakat"
                            onChange={formik.handleChange}
                            value={formik.values.mamlakat}
                        />
                    </label>
                    <button className="w-full btn btn-success text-white">
                        Yuborish
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
