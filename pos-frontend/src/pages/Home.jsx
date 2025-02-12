import React from "react";  
import BottomNav from "../components/shared/BottomNav";

const Home = () => {
    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
            {/* LEFT DIV */}
            <div className="flex-[3] bg-[#1a1a1a]">

            </div>
            {/* Right DIV */}
            <div className="flex-[2] bg-[#121212]">
                
            </div>
            <BottomNav />
        </section>
    )
}

export default Home;