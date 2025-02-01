"use client";

import React from "react";
import Lottie from "react-lottie";
import * as animationData from "@/app/lottie.json";

export default class LottieControl extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        />
      </div>
    );
  }
}
