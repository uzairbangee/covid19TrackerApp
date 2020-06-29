import React from 'react';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import * as legoData from "./legoloading.json";
// import "bootstrap/dist/css/bootstrap.css";

const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: legoData.default,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div>
            <FadeIn>
                    <h1>Getting app ready for you</h1>
                    <Lottie options={defaultOptions} height={120} width={120} />
            </FadeIn>
        </div>
    )
}

export default Loading;
