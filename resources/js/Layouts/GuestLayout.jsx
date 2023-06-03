import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className=" bg-gradient-to-br from-lime-700 via-stone-500 to-amber-700 min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-6 bg-white shadow-md overflow-hidden sm:rounded-lg rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
                {children}
            </div>
        </div>
    );
}
