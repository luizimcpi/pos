import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="bg-[#025cca] p-3 text-x1 font-bold rounded-full text-white">
            <IoArrowBackOutline className="text-2xl" />
        </button>
    )
}

export default BackButton;