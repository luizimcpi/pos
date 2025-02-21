import { getRandomBG } from "../../utils";
import PropTypes from 'prop-types';

const TableCard = ({key, name, status, initials}) => { 
    return (
        <div key={key} className="w-[300px] hover:bg[#2c2c2c] bg-[#262626] p-4 rounded-lg cursor-pointer">
            <div className="flex items-center justify-between px-1">
                <h1 className="text-[#f5f5f5] text-x1 font-semibold">{name}</h1>
                <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "bg-[#664a04] text-white"} px-2 py-1 rounded-lg`}>
                    {status}
                </p>
            </div>
            <div className="flex items-center justify-center mt-5 mb-7">
                <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-x1`}>{initials}</h1>
            </div>
        </div>
    );
};

TableCard.propTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
};

export default TableCard;
