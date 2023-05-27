import { Link, Head } from "@inertiajs/react";
import Animation from "@/Components/Animation";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <nav className="bg-gray-800">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <h1 className="text-white text-xl font-bold md:text-2xl">
                                Chirper
                            </h1>
                        </div>
                        <div className="flex items-center">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route("register")}
                                        className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            {/* hero section */}
            <section className="bg-gradient-to-r from-indigo-500 to-purple-500 py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <div className="w-full md:w-1/2 px-4 text-center">
                        {/* <Animation animationFile="bird.json" /> */}
                    </div>
                    <div className="w-full md:w-1/2 px-4 text-center md:text-left">
                        <div className="mb-8">
                            <h2 className="text-4xl font-bold leading-tight">
                                Welcome to Chirper
                            </h2>
                            <p className="text-gray-800 text-xl">
                                A simple social media app built with Laravel and
                                React.
                            </p>
                        </div>
                        <div>
                            <Link
                                href={route("register")}
                                className="inline-block text-lg px-4 py-2 leading-none border rounded text-white bg-blue-500 hover:bg-blue-600"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
