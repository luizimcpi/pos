import { MdOutlineReorder, MdTableBar } from "react-icons/md";

import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BottomNav = () => {  

    const navigate = useNavigate();
    const [isModalOpen, setIsModalsOpen] = useState(false);
    const openModal = () => setIsModalsOpen(true);
    const closeModal = () => setIsModalsOpen(false);

    return (  
        <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
            <button onClick={() => navigate("/")} className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]"><FaHome className="inline mr-4" size={30}/>Home</button>
            <button onClick={() => navigate("/orders")} className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px]"><MdOutlineReorder className="inline mr-4" size={30}/>Orders</button>
            <button onClick={() => navigate("/tables")} className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px]"><MdTableBar className="inline mr-4" size={30}/>Tables</button>
            <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px]"><CiCircleMore className="inline mr-4" size={30}/>More</button>
            <button onClick={openModal} 
            className="absolute bottom-6 bg-[#F68100] text-[#f5f5f5] rounded-full p-3 items-center">
                <BiSolidDish size={40}/>
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
                
            </Modal>
        </div>
    )
}

export default BottomNav;