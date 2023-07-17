import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <nav className="bg-white sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-black">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <h1 className="text-black text-xl font-bold md:text-2xl">
                                Chirper
                            </h1>
                        </div>
                        <div className="flex items-center">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route("register")}
                                        className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
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
            <section className="bg-gradient-to-br from-lime-700 via-stone-500 to-amber-700 py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
                    <div className="w-full md:w-1/2 px-4 text-center md:text-left">
                        <div className="mb-8">
                            <h2 className="text-4xl text-white font-bold leading-tight">
                                Welcome to Chirper
                            </h2>
                            <p className="text-gray-200 text-xl">
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
                    <div className="w-full md:w-1/2 px-4 text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="512"
                            height="512"
                        >
                            <path
                                fill="#421D13"
                                d="M210.161 50.889c18.631-1.477 38.215 3.021 54.688 11.683 32.137 16.899 53.572 49.923 55.887 86.178.355 5.561.349 11.165.037 16.728-.26 4.632-1.371 9.733-.633 14.303.399 2.466 1.515 4.343 3.067 6.25.952 1.17 2.144 2.355 2.814 3.714.84 1.706.512 3.982.861 5.843.28 1.499.842 3.012 1.293 4.47 7.942.525 16.031.237 23.995.26 8.517.024 17.037.308 25.553.243 1.62-.012 3.078-.472 4.652-.539 2.78-.118 5.604-.014 8.387.032 2.666.044 5.378.02 7.984.65 4.26 1.03 8.61 4.069 10.86 7.862 2.099 3.536 2.813 7.62 1.767 11.627-1.472 5.637-4.721 8.537-9.6 11.407 3.182.315 6.479.135 9.677.136 5.773.002 11.546.002 17.317.042 3.117.022 6.861-.217 9.88.559 2.363.606 4.545 1.926 6.388 3.498 3.373 2.876 5.621 6.927 5.906 11.362.291 4.531-1.087 9.51-4.183 12.913-2.27 2.495-5.58 3.983-8.848 4.625-5.39 1.057-11.572.485-17.083.578-14.656.25-29.329.06-43.977.471l-.097 3.562c.87.389 2.359.303 3.326.365 4.868.306 9.741.227 14.614.392 7.623.26 15.242.966 20.694 6.914 3.441 3.755 4.599 8.294 4.389 13.286-.153 3.607-1.743 7.991-4.48 10.455-2.412 2.172-5.272 3.38-8.438 3.966-2.379.441-4.976.319-7.393.32-3.897.003-7.795-.015-11.692-.023-6.937-.014-14.046.363-20.96.049l-4.809 10.18c-2.443 4.736-5.403 8.952-8.517 13.25-15.018 20.731-36.137 34.928-60.442 42.673l.083 29.108-.024.332c3.839 1.825 7.774 3.425 11.633 5.206 1.945.898 3.88 1.82 5.813 2.743 1.146.546 2.371 1.231 3.618 1.495 1.682.356 3.65.321 5.379.442 4.212.294 8.394.505 12.613.672 5.19.206 10.365.687 15.558.909 4.536.194 9.821.181 14.187 1.493 3.683 1.106 6.717 3.023 9.47 5.704 4.33 4.214 6.567 10.245 6.668 16.228.115 6.779-1.928 12.909-6.745 17.794-7.539 7.644-16.935 7.509-26.89 7.507-5.178-.001-10.356-.01-15.533-.02-40.325.126-80.65-.083-120.975.005-12.893.027-25.787.087-38.681.075-3.94-.005-7.88-.024-11.82-.057-2.798-.023-5.62.038-8.399-.338-5.987-.809-10.434-2.259-14.844-6.491-4.831-4.635-7.7-10.894-7.806-17.634-.106-6.689 2.387-12.502 7.01-17.25 2.688-2.761 6.257-4.875 10.015-5.798 6.381-1.565 13.531-1.137 20.078-1.49 15.319-.824 30.714-1.7 46.054-1.837a41.277 41.277 0 00-5.061-3.65c-2.928-1.8-8.435-4.04-9.974-7.133-.45-.905-.368-2.277.042-3.188.457-1.016 1.413-1.766 2.457-2.115 2.251-.755 4.652.675 6.662 1.576 2.469 1.107 4.901 2.291 7.365 3.41l.117-29.19c-2.237-1.048-4.536-1.933-6.76-3.014-6.875-3.342-13.334-7.004-19.576-11.439-6.424-4.563-12.231-10.178-17.321-16.173-12.876-15.165-20.728-32.695-22.812-52.546-.65-6.197-.869-12.796.01-18.978.862-6.065 3.178-11.841 4.886-17.696 2.538-8.697 2.533-19.773-.161-28.44-1.06-3.41-2.582-6.682-4.739-9.541-3.342-4.427-7.855-7.904-11.548-12.023-8.67-9.67-15.245-23.257-17.422-36.066-6.05-.011-12.108-.075-18.157.01-5.454.076-10.905.326-16.359.402-1.786.025-4.628.353-6.281-.24-3.085-1.104-11.96-7.6-13.154-10.591-.511-1.279-.208-2.816.386-4.01.974-1.957 4.587-3.711 6.379-4.891 3.24-2.132 6.834-5.26 10.516-6.448 1.98-.639 4.307-.566 6.381-.668 5.413-.266 10.825-.26 16.243-.279 1.303-.004 4.468.313 5.51-.263l.364-.282c2.73-2.065 4.156-5.585 7.219-7.099.747-.369.907-2.17 1.079-2.963 3.53-16.295 12.26-31.173 23.55-43.278 18.467-19.799 43.781-31.327 70.813-32.276zm8.645 321.736c.162 7.09.231 14.18.295 21.272.014 1.51.048 3.023.03 4.533-.01.73-.15 1.683.047 2.377 4.15 2.085 8.427 3.785 12.744 5.492 3.315 1.312 6.667 2.703 10.078 3.74l.452.142c2.214.64 4.947.357 7.235.338 4.134-.034 8.266-.109 12.399-.204 6.8-.158 13.603-.186 20.4-.364l.152-.093c-3.256-3.226-14.615-6.755-15.746-10.483l-.04-.252c-.188-1.271-.138-2.76.686-3.82.638-.822 1.475-1.43 2.53-1.55 2.088-.238 4.516 1.06 6.416 1.843 2.726 1.124 5.458 2.239 8.169 3.397l-.024-25.529c-17.028 4.092-34.942 4.695-52.248 1.924-3.12-.5-6.197-1.207-9.263-1.966-1.027-.254-3.348-1.134-4.312-.797z"
                            ></path>
                            <path
                                fill="#3C110F"
                                d="M152.753 419.529c.867-1.257 1.853-1.58 3.334-1.843 1.483-.263 2.942-.128 4.41.15l1.755 1.688.364 1.169c-.181 1.613-.479 2.142-1.649 3.255l-.286.093c-2.548.662-5.425.62-7.682-.77-.271-1.322-.444-2.381-.246-3.742z"
                            ></path>
                            <path
                                fill="#AD664F"
                                d="M135.312 436.416c-.47-2.526-1.312-7.651-.467-10.033.787-2.22 4.226-3.845 6.23-4.675 1.929-.8 10.097-2.845 11.678-2.179-.197 1.361-.025 2.42.246 3.742-2.159-.036-4.387-.211-6.498.298-3.345.806-6.096 2.108-8.032 5.101-.831 1.285-1.004 2.442-.933 3.955l-.215.18-.321.286-.203.175c-.978.872-1.214 1.928-1.267 3.193l-.218-.043z"
                            ></path>
                            <path
                                fill="#B97965"
                                d="M162.252 419.524c1.15-.557 3.135-.37 4.421-.404 2.945-.077 5.892-.115 8.835-.236 10.979-.456 21.985-1.159 32.97-1.398l-8.692 9.773c-6.114.074-33.177-2.979-37.17-6.566l-.364-1.17z"
                            ></path>
                            <path
                                fill="#B16615"
                                d="M109.204 144.14l5.071-.133.058 12.894c-5.333.011-10.665.09-15.998.112-5.768.023-11.171.177-16.776-1.464-1.626-.66-3.346-1.316-4.809-2.3-.53-.356-1.065-.72-1.21-1.374 2.913-3.143 6.524-5.905 10.773-6.85l.437-.095c3.352-.752 6.823-.657 10.237-.664 4.076-.008 8.144-.035 12.218-.126z"
                            ></path>
                            <path
                                fill="#B97965"
                                d="M230.918 425.762l-8.236-9.455-.01-.159c6.495.667 12.96 1.583 19.48 2.012 4.06.268 8.194.221 12.264.186 3.529-.03 7.112.031 10.635-.172 5.22-.301 10.953-.957 16.17-.397-3.097 3.257-7.934 7.31-9.49 11.594l-.15.391-.087.236c-.15-.085-.348-.208-.511-.255-.441-.125-.689-.082-1.131-.303-.945-.474-1.998-.673-2.977-1.063-.497-.197-.751-.147-1.25-.25-.51-.104-.987-.154-1.5-.25-.603-.112-.902-.261-1.592-.254l-.283.005c-.604-.392-1.524-.248-2.25-.25-.603-.402-1.286-.25-2-.25-.627-.418-1.731-.25-2.5-.25-.843-.563-3.625-.25-4.75-.25-.765-.51-2.543-.25-3.5-.25l-.375-.25c-.452.007-.89.034-1.337-.056-.607-.123-1.346-.207-1.913-.445-1.074-.45-2.542-.243-3.716-.243-2.945-.001-6.117-.254-8.991.377z"
                            ></path>
                            <path
                                fill="#532820"
                                d="M344.565 205.99l.22-.271c2.561-.059 5.04-.085 7.59.031 1.813.083 3.551-.293 5.375.019l.688.04c1.01.048 2.839.374 3.687-.161l.25.23c.562-.002.637.074 1.125-.25l.261.03a7.864 7.864 0 001.884.001c.946-.105 4.074.244 4.605-.281l.328.044c1.496.188 3.041.021 4.547.008 6.067-.05 11.962-.473 17.929.909 2.966.687 5.664 1.724 7.576 4.22 1.653 2.16 2.199 4.827 1.707 7.484-.617 3.344-2.924 6.852-5.785 8.675-2.457 1.566-5.3 2.227-8.114 2.808-2.752.569-5.636 1.228-8.438 1.443-1.97.151-3.888-.007-5.848.063-1.415.051-3.422.427-4.786.157l-.23-.064-.08-.486c-.105-.571-.305-.837-.707-1.259l-.375.091-.001-2.096c.861-.931 2.195-1.618 3.263-2.311 1.988-1.292 3.978-2.583 5.673-4.256 2.067-2.043 3.691-4.624 3.594-7.643-.069-2.142-1.722-4.107-3.179-5.525-.48-.389-.672-.578-1.298-.674-.313-.048-.495-.054-.793-.185-.949-.42-1.67-.426-2.687-.412l-.421.008c-.377-.376-.49-.25-1-.25.263-.268 1.379-.174 1.795-.19-.816-.15-1.724-.059-2.545.042-5.084.625-10.563.236-15.691.22-3.286-.012-6.897.331-10.119-.209zM375.942 279.182l.308-.42c5.17-.571 10.733-.33 15.928-.094 4.533.206 11.277-.05 14.946 2.977 1.548 1.279 2.686 3.466 2.841 5.467a8.546 8.546 0 01-2.305 6.541c-3.129 3.333-8.74 2.84-12.908 2.837l-24.519-.514c.522-1.173 1.12-3.599 1.892-4.47l.765-.198-1.14-.103-.187-.455c.747-3.137 2.029-6.066 3.029-9.122.297-.906.386-2.269.908-3l.442.554z"
                            ></path>
                            <path
                                fill="#3C110F"
                                d="M372.89 291.308l-1.14-.103-.187-.455c.747-3.137 2.029-6.066 3.029-9.122.297-.906.386-2.269.908-3l.442.554c-.374 1.647-.768 3.3-1.44 4.856 6.43.318 12.894.256 19.332.283 2.292.01 5.211-.367 7.44.036.676.121 1.288.51 1.73 1.027.743.87.9 2.027.78 3.137-.072.659-.358 1.268-.885 1.688-2.015 1.606-11.801 1-14.459 1.01-5.183.02-10.366.05-15.55.089z"
                            ></path>
                            <path
                                fill="#532820"
                                d="M377.29 244.19l-.15-.251c-.3-.725-.041-1.825.023-2.596.105-1.277.099-2.556.097-3.837 10.922.142 21.846 1.061 32.762 1.482 4.77.184 9.547.292 14.319.444 3.05.097 6.306.022 9.284.743l.392.092c2.277.558 4.394 2.016 5.596 4.059 1.055 1.793 1.767 4.103 1.164 6.167l-.216.632-.087.28c-.645 1.988-2.39 3.662-4.224 4.577a9.634 9.634 0 01-3.173.943c-5.812.704-12.098.292-17.969.298-13.03.013-26.065-.242-39.09-.205l.068-.391c.176-1.092-.338-3.459.414-4.11l1.048-.2c-.81 0-.937.092-1.585-.442-.27-2.217-.363-5.648.471-7.73l.856.045z"
                            ></path>
                            <path
                                fill="#3C110F"
                                d="M377.548 252.317c-.81 0-.937.092-1.585-.442-.27-2.217-.363-5.648.471-7.73l.856.045c10.482.304 20.963.505 31.451.412 5.005-.044 10.006-.08 15.01-.046 2.972.02 6.005-.089 8.958.275 1.13 1.226 1.907 2.406 1.874 4.154-.017.898-.223 1.362-.85 2.021-.621.653-1.959.863-2.815.966-3.918.468-8.324.067-12.293.086-3.91.019-7.83.161-11.74.096-9.732-.164-19.623-.578-29.337.163z"
                            ></path>
                            <path
                                fill="#9EA848"
                                d="M243.962 169.672c-.16 6.394.9 12.085 3.858 17.798 1.268 2.448.945 16.99 1.058 20.461.223 6.857.55 13.722.866 20.577l-90.673-.208c-1.311-6.22-2.517-12.706-5.845-18.239-3.002-4.99-8.358-8.708-12.355-12.91-9.715-10.216-15.546-23.594-18.272-37.31-.67-3.368-1.328-6.779-1.551-10.21-.358-5.496.226-11.22 1.203-16.631 2.493-13.814 8.238-27.65 17.511-38.319l6.976 2.352c-8.391 8.678-12.702 20.074-15.677 31.562-1.486 5.738-2.684 10.944-2.573 16.927.093 5.071 1.172 10.338 2.422 15.244 2.509 9.844 6.367 19.811 12.458 28.042 2.162 2.923 4.974 5.476 7.587 7.99 5.311 5.112 10.193 9.939 13.264 16.802.994 2.221 1.61 4.6 2.553 6.838l.293-.025 74.002-.377c.097-9.125.103-18.248.207-27.375.076-6.614-.315-13.965 1.276-20.409.262-1.06.676-1.781 1.411-2.58z"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="gradient_0"
                                    x1="689.75"
                                    x2="688.257"
                                    y1="905.25"
                                    y2="831.818"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stopColor="#8E533F"></stop>
                                    <stop offset="1" stopColor="#B57059"></stop>
                                </linearGradient>
                            </defs>
                            <path
                                fill="url(#gradient_0)"
                                d="M609.132 871.118c1.863-1.873 3.996-4.585 4.144-7.368.287-5.41-13.023-20.69-16.707-24.903-1.403-1.604-4.507-4.095-5.205-5.982 18.415.269 36.827 3.197 55.234 4.311 13.687.827 27.384 1.278 41.077 1.943 8.152.396 16.657.401 24.653 2.131 6.737 1.458 13.17 5.399 17.955 10.296 5.814 5.95 9.92 13.614 9.752 22.079-.171 8.588-4.345 16.591-10.486 22.451-5.586 5.331-12.647 8.114-20.265 8.975-18.729 2.118-38.521 1.235-57.365 1.174-29.285-.095-58.594-.235-87.877-.088-52.334.263-104.669-.525-156.998-.291-26.624.12-53.195.83-79.828.64-7.449-.053-15.033.2-22.466-.121-9.031-.389-18.173-2.793-24.5-9.622-5.16-5.57-10.061-16.341-9.626-23.911l.435.086c1.594 3.103 3.12 6.415 5.586 8.945 5.851 6.004 16.704 10.455 24.605 13.05l3.5.941 3 .737.431-.269c1.238-.76 2.13-1.177 3.569-1.481l21.607-5.604c7.167-1.488 14.716.592 21.597 2.457 8.963 2.429 20.547.362 29.673-.45 6.182-.55 12.391-.746 18.595-.787 12.66-.084 25.378.156 38.028.634 3.593.136 7.151.705 10.75.769 14.099.25 28.165-.552 42.258-.617 10.03-.046 20.025.682 30.046.593 16.364-.145 32.864-.827 49.206-1.635 7.668-.38 15.339-1.22 23.021-1.273 16.228-.113 32.59.184 48.812.643 5.555.157 11.109.285 16.665.433 3.302.088 6.18.494 9.492-.126l2.696-.37c2.767 1.167 5.869 1.451 8.792 2.151l.342-.66 1.667.504c1.408.378 2.589 1.118 4 1.5 1.175.317 2.121.884 3.266 1.265l.734.235c1.185.428 2.003.979 3.315.604 3.339-.954 6.755-4.884 8.593-7.707l-3.357-3.248-.548-.407-.997-.748-2.003-.752c-1.134-.631-.312-.422-1.327-.624-.987-.196-.393-.025-1.436-.373l-.734-.251-1.003-.252c-1.043-.54-.848-.495-2-.5l-.5-.495c-1.323-.007-.702.1-1.969-.328-1.575-.534-3.158-.844-4.781-1.193l-6.75-1.098c-7.867-1.444-17.077-.265-24.55-3.075l-.91-.367-42.908-2.571z"
                                transform="scale(.5)"
                            ></path>
                            <path
                                fill="#AD664F"
                                d="M326.02 436.844c3.834-1.566 7.438-3.145 10.48-5.999.582-.546 1.079-.96 1.562-1.609.568-.762 1.282-1.303 1.813-2.113l.483-.623 1.096-1.399c.445-.525.162-.155.46-.65.432-.718 1.034-1.346 1.867-1.514l1.217-.21.336-.061c1.203-.167 5.548-.36 6.416.199.932-.016 1.508.112 2.375.257.63.106.884.026 1.5.25l.627.119.75.252.375.12c.483.163.899.436 1.39.569.337.09.445.251.733.428 1.938 1.183 3.581 2.43 4.326 4.695.622 1.892-.115 3.892-1.09 5.498-1.642 2.707-4.981 5.755-8.111 6.488-.954.224-2.47.135-3.375-.195l-.221.125.317.282c.625.577 1.07 1.386 1.525 2.102-1.402 2.07-2.652 3.402-4.962 4.438l-6.415-2.464.171-.33.833.252c.704.19 1.295.56 2 .75.588.159 1.061.442 1.634.633l.366.118c.593.214 1.002.489 1.658.301 1.67-.476 3.377-2.442 4.296-3.853l-1.678-1.624-.274-.204-.498-.374-1.002-.375c-.567-.316-.156-.212-.663-.313-.494-.098-.197-.012-.719-.186l-.366-.126-.502-.125c-.522-.27-.424-.248-1-.25l-.25-.248c-.661-.003-.351.05-.985-.164-.787-.267-1.578-.422-2.39-.596l-3.375-.55c-3.933-.721-8.538-.132-12.275-1.537l-.455-.184z"
                            ></path>
                            <path
                                fill="#B5715B"
                                d="M162.616 420.693c3.993 3.587 31.055 6.64 37.17 6.566-.662 1.137-1.062 2.208-1.442 3.454l.8 2.272 1.119 1.248c1.084 1.03 2.263 1.341 3.737 1.263.636-.034 1.357-.188 1.911-.516 1.881-1.115 3.436-3.408 4.803-5.089 1.754-2.156 3.556-4.265 5.368-6.373 1.663 2.389 8.241 11.61 11.014 12.212 1.252.27 2.845.027 3.938-.639 1.153-.702 2.13-2.063 2.372-3.396.445-2.457-1.17-4.074-2.488-5.933 2.874-.632 6.046-.379 8.99-.378 1.175 0 2.643-.207 3.717.243.567.238 1.306.322 1.913.445.446.09.885.063 1.337.055l.375.25c.957 0 2.735-.26 3.5.25 1.125 0 3.907-.312 4.75.25.769 0 1.873-.167 2.5.25.714 0 1.397-.151 2 .25.726.003 1.646-.142 2.25.25l.283-.004c.69-.007.988.142 1.592.255.513.095.99.145 1.5.25.499.102.753.052 1.25.25.98.39 2.031.589 2.977 1.062.442.221.69.178 1.131.303.163.047.361.17.511.255.022 2.111.073 3.029 1.583 4.536 1.122 1.12 2.219 1.303 3.757 1.26.49-.013.933-.079 1.411-.178l.306-.193c2.129-1.356 3.632-3.299 5.196-5.238a513.724 513.724 0 004.876-6.142c2.23 2.815 4.456 5.634 6.801 8.354 1.074 1.245 2.154 2.671 3.427 3.712.436.356 1.044.747 1.625.777 1.351.07 2.959-.642 4.09-1.327l21.454 1.285.455.184c3.736 1.405 8.341.815 12.275 1.537l3.375.55c.812.174 1.603.329 2.39.596.634.214.324.16.985.164l.25.248c.576.002.478-.02 1 .25l.502.125.366.126c.522.174.225.088.719.186.507.101.096-.003.663.313l1.002.375.498.375.274.203 1.678 1.624c-.918 1.411-2.627 3.377-4.296 3.853-.656.188-1.065-.087-1.658-.301l-.366-.118c-.573-.19-1.046-.474-1.634-.632-.705-.192-1.296-.562-2-.75l-.833-.252-.171.33c-1.462-.35-3.013-.493-4.396-1.076l-1.348.185c-1.656.31-3.095.107-4.746.063-2.778-.074-5.555-.138-8.333-.216-8.11-.23-16.291-.378-24.406-.322-3.84.026-7.676.447-11.51.637-8.171.404-16.421.745-24.603.817-5.01.044-10.008-.32-15.023-.296-7.046.032-14.08.433-21.129.308-1.8-.032-3.578-.317-5.375-.385a428.968 428.968 0 00-19.014-.317c-3.102.021-6.206.119-9.297.394-4.564.406-10.356 1.44-14.837.225-3.44-.933-7.215-1.972-10.798-1.228l-10.804 2.801c-.72.152-1.166.361-1.785.741l-.215.135-1.5-.369-1.75-.47c-3.95-1.298-9.377-3.524-12.303-6.525-1.233-1.266-1.995-2.922-2.792-4.473.053-1.264.289-2.321 1.267-3.192l.203-.175.32-.287.216-.18c-.071-1.512.102-2.67.933-3.954 1.936-2.994 4.687-4.296 8.032-5.102 2.111-.509 4.339-.334 6.498-.298 2.257 1.39 5.134 1.432 7.683.77l.285-.093c1.17-1.113 1.468-1.642 1.649-3.255z"
                            ></path>
                            <path
                                fill="#AD664F"
                                d="M157.849 428.875l.341.226c2.428 1.444 4.243 3.133 6.33 5.014.881.795 1.881 1.43 2.6 2.385l.185 1.116.067.259-.843.869c-.401.262-.681.453-1.156.554-.635.135-1.09.479-1.748.575-.152-.971-.832-2.001-1.291-2.873-.913-1.733-1.827-3.478-2.81-5.173-.577-.995-1.27-1.869-1.675-2.952zM162.616 420.693c3.993 3.587 31.055 6.64 37.17 6.566-.662 1.137-1.062 2.208-1.442 3.454l.8 2.272c-4.637-.733-9.358-2.392-13.979-3.384-7.941-1.704-16.648-2.592-24.198-5.653 1.17-1.113 1.468-1.642 1.649-3.255z"
                            ></path>
                            <path
                                fill="#B97965"
                                d="M278.245 435.615l.306-.192c2.129-1.356 3.632-3.299 5.196-5.238a513.724 513.724 0 004.876-6.142c2.23 2.815 4.456 5.634 6.801 8.354 1.074 1.245 2.154 2.671 3.427 3.712.436.356 1.044.747 1.625.777 1.351.07 2.959-.642 4.09-1.327l21.454 1.285.455.184c3.736 1.405 8.341.815 12.275 1.537l3.375.55c.812.174 1.603.329 2.39.596.634.214.324.16.985.164l.25.248c.576.002.478-.02 1 .25l.502.125.366.126c.522.174.225.088.719.186.507.101.096-.003.663.313l1.002.375.498.375.274.203 1.678 1.624c-.918 1.411-2.627 3.377-4.296 3.853-.656.188-1.065-.087-1.658-.301l-.366-.118c-.573-.19-1.046-.474-1.634-.632-.705-.192-1.296-.562-2-.75l-.833-.252-.171.33c-1.462-.35-3.013-.493-4.396-1.076-.977-.454-2.052-.597-2.97-1.057l-.94-.445-.313-.125c-.43-.176-.788-.304-1.25-.377l-.75-.123c-1.993-.613-4.818-.428-6.957-.512-5.764-.23-11.69-.221-17.418-.887-2.144-.25-4.648-.411-6.687-1.131-1.354-.478-2.599-1.314-4.024-1.579-5.034-.934-10.114-1.241-15.164-2.055-.993-.16-1.524-.291-2.38-.848zM367.974 229.471c-.211 4.722.102 9.514.2 14.241.109 5.272.046 10.547.124 15.82.119 8.063.147 15.657-1.68 23.604-.767 3.334-2.066 6.731-3.394 9.874-1.668 3.952-3.491 7.53-6.196 10.877l-1.7.159c-6.402.238-12.828.188-19.233.203-5.637.013-11.278.106-16.892-.476-15.305-1.587-29.255-7.84-40.542-18.377-4.988-4.656-8.959-10.103-12.25-16.063-3.694-6.69-6.356-14.03-7.602-21.583-1.984-12.018-1.162-24.667-1.564-36.829 1.528.95 3.253 1.537 4.971 2.045-1.519-1.01-2.976-2.016-4.661-2.734l-.32-.135-.285-8.73c1.774 1.835 3.502 3.145 5.678 4.478.246-.129.748-.486.997-.524 1.411-.218 3.43.458 4.907.592 2.517.229 4.985.314 7.511.317 10.303.014 20.677-.207 30.974-.605 5.226-.202 10.426-.635 15.663-.612 7.313.033 14.58.953 21.885.977 3.222.54 6.833.197 10.119.208 5.128.017 10.606.406 15.691-.219.822-.101 1.73-.192 2.545-.042-.416.016-1.532-.078-1.795.19.51 0 .623-.126 1 .25l.421-.008c1.017-.014 1.738-.007 2.688.412.297.131.48.137.792.185.626.096.818.285 1.298.673 1.457 1.419 3.11 3.384 3.179 5.526.097 3.019-1.527 5.6-3.594 7.643-1.695 1.673-3.685 2.964-5.673 4.256-1.067.694-2.402 1.38-3.263 2.311l.001 2.096z"
                            ></path>
                            <path
                                fill="#753F35"
                                d="M262.628 205.845c.246-.129.748-.486.997-.524 1.411-.218 3.43.458 4.907.592 2.517.229 4.985.314 7.511.317 10.303.014 20.677-.207 30.974-.605 5.226-.202 10.426-.635 15.663-.612 7.313.033 14.58.953 21.885.977 3.222.54 6.833.197 10.119.208 5.128.017 10.606.406 15.691-.219.822-.101 1.73-.192 2.545-.042-.416.016-1.532-.078-1.795.19.51 0 .623-.126 1 .25l.421-.008c1.017-.014 1.738-.007 2.688.412.297.131.48.137.792.185.626.096.818.285 1.298.673-2.252.493-4.652.594-6.949.761-6.255.457-12.572.305-18.842.316-4.849.01-9.692.231-14.533.25-8.052.031-16.126-.269-24.185-.284-8.861-.016-17.724.034-26.586.053-4.772.01-9.731.28-14.48-.16-3.394-.314-6.166-.975-9.12-2.73z"
                            ></path>
                            <path
                                fill="#532820"
                                d="M211.064 57.608c13.11-.343 25.056 2.21 37.21 7.091 7.287 2.926 14.644 6.716 20.979 11.364 7.514 5.513 13.697 12.243 19.302 19.64 2.563 3.384 5.116 6.845 7.21 10.546 1.226 2.168 2.185 4.486 3.265 6.729 2.388 4.961 4.496 9.931 5.991 15.242 2.638 9.369 3.787 19.247 4.127 28.953.168 4.797.156 9.662-.169 14.452-.279 4.118-1.14 8.431-.692 12.551.33 3.052 1.3 5.495 2.359 8.324.685 1.835 1.778 3.573 2.399 5.415l.102.335c.276.768.31 1.415.321 2.229-3.528.886-8.176.335-11.799.146-4.085-.214-8.281-.219-12.373-.268-2.998-.036-6.183.304-9.171.016-1.2-.117-2.777.206-3.873-.124-.876-.264-1.843-.151-2.752-.126-.42-.416-1.72-.267-2.383-.436l-.242-.065c-.739-.162-1.4-.42-2.123-.623-.346-.097-.51-.125-.842-.305l-1.66-.821c-1.112-.861-2.423-1.99-3.611-2.748-1.444-.92-2.404-2.355-3.47-3.684l-2.882-5.111-.16-.33c-.177-.352-.35-.64-.446-1.024l-.054-.226c-.226-.446-.562-.737-.688-1.243-.136-.551-.488-1.368-.75-1.89-.27-.54-.284-1.279-.561-1.742-.288-.48-.25-.392-.25-1-.407-.407-.25-.695-.25-1.25-.444-.444-.25-1.373-.25-2-.396-.396-.25-.833-.25-1.375.417-.422.249-1.625.25-2.25.438-.442.183-1.108.304-1.718l.069-.281c.994-4.526 1.05-8.671.306-13.253-.569-3.505-1.634-6.882-2.968-10.165-6.265-15.417-20.244-26.533-34.036-34.931-3.21-1.955-6.41-4.16-9.904-5.571-2.106-.85-4.234-1.724-6.406-2.386-2.013-.613-4.13-.988-6.118-1.598-.342-.105-.609-.229-.968-.296l-2.137-.571-.756-.244-.639-.125c-.342-.115-.5-.248-.885-.323l-1.871-.453-.349-.105-.395-.114c-.469-.159-.86-.333-1.36-.414-.566-.091-.98-.306-1.524-.412L177 97.61l-30.534-8.653c2.94-2.679 5.643-5.61 8.558-8.315 2.697-2.504 5.67-4.87 8.618-7.07 2.488-1.858 5.338-3.227 8.059-4.701 12.535-6.789 25.109-10.594 39.363-11.262z"
                            ></path>
                            <path
                                fill="#A9B351"
                                d="M146.738 97.033c9.809 2.573 19.665 5.028 29.512 7.457 7.244 1.787 14.805 3.363 21.75 6.125 4.56 1.814 8.632 4.731 12.71 7.426 5.322 3.518 10.702 6.949 15.502 11.178 5.199 4.58 9.722 10.362 13.23 16.327 3.034 5.156 4.993 10.905 5.06 16.933.027 2.414-.361 4.791-.54 7.193-.736.799-1.15 1.52-1.411 2.58-1.591 6.444-1.201 13.794-1.277 20.409-.104 9.127-.11 18.25-.207 27.375l-74.002.377-.293.024c-.942-2.238-1.559-4.616-2.553-6.838-3.071-6.862-7.953-11.689-13.264-16.801-2.613-2.514-5.425-5.067-7.588-7.99-6.09-8.23-9.948-18.198-12.457-28.042-1.25-4.906-2.33-10.173-2.422-15.244-.111-5.983 1.088-11.19 2.573-16.927 2.975-11.488 7.286-22.883 15.677-31.562z"
                            ></path>
                            <path
                                fill="#421D13"
                                d="M167.887 120.837c4.692-.416 10.246 1.671 14.166 4.151 4.429 2.804 8.309 8.426 9.44 13.583l.09.429c.487 2.249.607 4.656.254 6.936l-.072.439c-.484 3.28-1.876 6.214-3.864 8.853-4.035 5.358-9.517 8.027-16.036 8.937l-.272.048c-5.345.519-10.852-1.179-15.132-4.399-4.657-3.504-7.651-8.516-8.451-14.291-.758-5.475.609-11.121 3.984-15.512 3.905-5.08 9.555-8.355 15.893-9.174z"
                            ></path>
                            <path
                                fill="#818892"
                                d="M168.37 128.601c3.612.144 6.809.746 9.798 2.95 2.976 2.193 4.89 5.83 5.397 9.449.472 3.368-.286 7.222-2.421 9.944-2.598 3.312-5.95 4.793-10.081 5.192-3.712.351-7.298-.873-10.163-3.206-2.95-2.401-4.712-6.156-5.037-9.911-.316-3.638 1.063-7.499 3.393-10.269 2.504-2.975 5.404-3.851 9.113-4.149z"
                            ></path>
                            <path
                                fill="#949CAB"
                                d="M170.28 135.061c1.964-.15 4.078.075 5.825 1.058 1.666.938 2.734 2.738 3.246 4.545.52 1.839.047 3.58-.901 5.199-1.937 3.305-4.923 4.665-8.482 5.585-1.793.353-3.512.399-5.27-.16-1.018-.323-2.608-.929-3.114-1.918-.447-.874-.934-1.538-1.14-2.53-.494-2.367-.042-5.216 1.344-7.215 1.918-2.766 5.361-3.901 8.492-4.564z"
                            ></path>
                            <path
                                fill="#A9B351"
                                d="M214.631 235.627l35.141.174c.918 19.366 7.207 38.127 20.537 52.574 9.608 10.412 22.122 18.864 36.16 21.816 8.047 1.693 16.296 1.875 24.483 1.96 7.822.08 15.647.075 23.466.394-4.108 6.156-8.363 12.471-13.163 18.106-14.09 16.544-33.188 28.21-54.13 33.943-13.695 3.788-27.68 5.517-41.883 4.292-27.93-2.409-54.5-13.826-72.727-35.682-3.642-4.367-7.037-9.11-9.766-14.099-2.082-3.805-3.692-7.805-5.185-11.87-4.607-12.546-7.078-26.667-4.92-39.983.885-5.46 2.981-10.67 4.355-16.012 1.294-5.03 1.711-10.102 2.188-15.254l55.444-.359z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    );
}
