//tailwind footer classic
// center copyright text 
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white shadow">
            <div className="container flex items-center justify-center px-6 py-8 mx-auto">
                <div className="text-center">
                    <h2 className="mb-2 text-xs font-semibold tracking-widest text-black uppercase title-font">Little Lemon</h2>
                    <p className="text-sm text-gray-500">© 2024 Little Lemon Restaurant —
                        <a href="https://kuray.dev/" rel="noopener noreferrer" className="ml-1 text-gray-600" target="_blank">@kuraykaraaslan</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
