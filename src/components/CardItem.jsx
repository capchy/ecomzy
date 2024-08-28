import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/slices/CartSlice";



const CardItem = ({ item }) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed ")
    }
    return (
        <div className="flex flex-col w-[550px] mt-6  justify-center items-center gap-16 h-[300px] rounded-[30px] 
        shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]  ">
            <div  className=" flex gap-8 mt-8 h-[200px] w-[400px]  ">
                <div>
                    <img src={item.image} className=" mt-1 h-[200px] " alt="" />
                </div>
                <div className="h-[180px] ">
                    <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item?.title}</h1>
                    <h1 className="w-40 text-gray-500 font-normal text-sm text-[12px] text-left">{item?.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
                    <div className="flex justify-between mt-4">
                        <p className="text-green-600 font-bold flex">${item?.price}</p>
                        <div onClick={removeFromCart}>
                            <span className=" bg-red-400  w-5 h-5 flex 
                                 justify-center items-center rounded-full text-white"><MdDelete /></span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardItem;