import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";

const Reservation = () => {
    return (
        <section className="text-gray-700 body-font bg-yellow-500 bg-opacity-30 min-h-screen">
            <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/4 md:w-1/3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight={0} marginWidth={0} scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.204606035188!2d-73.98621468459392!3d40.75617797932834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768
                        !4f13.1!3m3!1m2!1s0x89c259f0f7f9b4c7%3A0x2c7f7d8b9b5d4e5!2sLittle%20Lemon%20Restaurant!5e0!3m2!1sen!2sus!4v1620862706548!5m2!1sen!2sus" />
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">1234 Lemon Street, New York, NY 10001</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a href="mailto:info@example.com" className="text-indigo-500 leading-relaxed">info@example.com</a>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">PHONE</h2>
                            <p className="leading-relaxed">+1 123 456 7890</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">HOURS</h2>
                            <div className="flex-grow">
                                <p className="leading-relaxed">Open from:</p>
                                <p className="leading-relaxed">Monday - Friday: 9am - 10pm</p>
                                <p className="leading-relaxed">Saturday - Sunday: 10am - 12pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/4 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:ml-10 p-10 flex items-end justify-start relative mt-10 sm:mt-0">
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md px-2">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">DATE</h2>
                            <input className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 text-xxs" type="date" placeholder="YYYY-MM-DD" />
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">TIME</h2>
                            <input className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 text-xxs" type="time" placeholder="HH:MM"/>
                        </div>
                        <div className="lg:flex-grow px-6 mt-4">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">PARTY SIZE</h2>
                            <select className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                                <option>1 Person</option>
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                                <option>5 People</option>
                                <option>6+ People</option>
                            </select>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">NAME</h2>
                            <input className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <input className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">PHONE</h2>
                            <input className="w-full mt-2 p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4">
                            <button
                                className="flex px-6 py-2 text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600">Reserve Now</button>
                        </div>
                        <p className="text-xs text-gray-500 mt-3 ml-6">*Please note that your reservation is not confirmed until you hear from us.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reservation;
