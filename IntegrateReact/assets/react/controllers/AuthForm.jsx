import React from 'react';
import {useState} from "react";
import Button from "./Button";
import RouterApp from "../constants/routes";


export default function (props) {

    const [isSubmit, setIsSubmit] = useState(false);
    const onChangeUsername =  (e)  => {
        console.log(e);
    }

     const onSubmit = async function(e)  {
        e.preventDefault();
        setIsSubmit(true)
        try {
            const response = await fetch(RouterApp.loginRouter, {
                method: "POST",
                data: {
                    username: "13",
                    password: "14"
                }
            });
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error.message);
            setIsSubmit(false);
        }

    }

    return <form className="form w-100" noValidate="novalidate" method="post" onSubmit={onSubmit}>
        <div className="text-center mb-11">
            <h1 className="text-dark fw-bolder mb-3">Sign In {isSubmit ? "submiting": "not submit"}</h1>
            <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
        </div>
        <div className="separator separator-content my-14">
            <span className="w-125px text-gray-500 fw-semibold fs-7">Or with username</span>
        </div>
        <div className="fv-row mb-8">
            <input type="text" placeholder="Username" name="username" autoComplete="off" className="form-control bg-transparent" />
        </div>
        <div className="fv-row mb-3">
            <input type="password" placeholder="Password" name="password" autoComplete="off" className="form-control bg-transparent" />
        </div>
        <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
            <div></div>
            <a href="#" className="link-primary">Forgot Password ?</a>
        </div>
        <div className="d-grid mb-10">
            <Button disabled={isSubmit} />
        </div>
    </form>;
}
