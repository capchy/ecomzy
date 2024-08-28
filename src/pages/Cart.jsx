import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CardItem from "../components/CardItem";
import "../redux/slices/CartSlice";

const Cart = () => {

    const { cart } = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    console.log(cart);

    useEffect(() => setTotalAmount(cart.reduce((accumulator, curr) => accumulator + curr.price, 0)), [cart]);

    return (
        <div>
            {
                cart.length > 0 ?
                    (<div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap ">
                        <div className="lg:w-[70%] ">
                            {
                                cart.map((item) => {
                                    return <CardItem key={item.id} item={item} />
                                })
                            }
                        </div>

                        <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">
                            <div className="mt-20">
                                <div className="text-xl text-[#166534] uppercase font-[600]">YOUR CART</div>
                                <div className="text-5xl font-[600] text-[#15803d] uppercase mb-4">SUMMARY</div>
                                <p className="font-[600] text-xl text-slate-700">
                                    Total Items:<span className="font-normal">{cart.length}</span>
                                </p>
                            </div>

                            <div className="mb-20">
                                <p className="text-slate-700 text-xl font-[600] mb-5 ">
                                    Total Amount : <span className="font-bold ml-2 text-black">${totalAmount.toFixed(2)}</span>
                                </p>
                                <button className="text-lg w-full bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md 
                                border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
                                Checkout Now</button>
                            </div>
                        </div>

                    </div>
                    ) :
                    (<div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
                        <p className="font-[600] text-xl">Your Cart Empty</p>
                        <NavLink to="/">
                            <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
                                Shop Now
                            </button>
                        </NavLink>


                    </div>
                    )
            }

        </div>
    )
}

export default Cart;