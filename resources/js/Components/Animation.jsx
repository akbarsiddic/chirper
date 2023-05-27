import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { usePage } from "@inertiajs/inertia-react";

const LottieAnimation = ({ animationFile, options }) => {
    const containerRef = useRef();
    const { animationData, autoplay, loop } = useLottie(animationFile, options);
    const { lottieRef, Lottie } = usePage().props;

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: loop ?? false,
            autoplay: autoplay ?? true,
            animationData: animationData ?? lottieRef,
        });

        return () => {
            anim.destroy();
        };
    }, [autoplay, loop, animationData, lottieRef]);

    return <div ref={containerRef} />;
};

export default LottieAnimation;
