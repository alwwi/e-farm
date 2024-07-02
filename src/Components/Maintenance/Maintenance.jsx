import React, { Component } from "react";
import { Link } from "react-router-dom";
import PreviousBtn from "../PreviousBtn";


export default class Maintenance extends Component {

    render() {
        return (
            <div className="font-poppins">
                <img src={`${process.env.PUBLIC_URL}Image-Assets/maintenance-img.jpg`} alt="maintenance-img" width={370} height={230} />
                <p className="mt-4">
                    Sorry, this page is currently under development
                </p>

                <div className="grid grid-flow-row justify-items-center gap-2">
                    <Link to='/' className="bg-[#BC6949] w-50 py-2 font-semibold text-white rounded-[27px] no-underline">
                        Back to Home
                    </Link>
                    <PreviousBtn />
                </div>
            </div>
        )
    }
}