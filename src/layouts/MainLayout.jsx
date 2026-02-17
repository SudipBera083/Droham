import React from "react";
import Navbar from "@/components/Navbar";
import { ReactLenis } from 'lenis/react'

const MainLayout = ({ children }) => {
    return (
        <ReactLenis root>
            <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-white">
                <Navbar />
                <main>{children}</main>
                <footer className="py-12 border-t border-white/5 text-center text-secondary text-sm">
                    <div className="max-w-7xl mx-auto px-6">
                        <p>© {new Date().getFullYear()} Droham Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </ReactLenis>
    );
};

export default MainLayout;
