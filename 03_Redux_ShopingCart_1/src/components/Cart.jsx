import React from 'react';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../Features/Cart/cartSlice';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';

function Cart() {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    let Amount = 0;

    const totalAmount = () => {
        items.forEach(item => {
            Amount += item.price;
        });
        return Amount;
    };

    totalAmount();

    const hasItems = items.length > 0;

    return (
        <div className={`flex ${hasItems ? 'justify-center' : 'items-center'}`}>
            {/* Column 1: Cards */}
            <div className={`w-full p-4 ${hasItems ? 'sm:w-1/2' : ''}`}>
                {hasItems ? (
                    items.map((item) => (
                        <Card
                            key={item.id}
                            shadow="sm"
                            isPressable
                            className='bg-[#ffffff] border-slate-200 shadow-xl shadow-slate-400 p-3
                            hover:border-none hover:scale-110 hover:shadow-slate-800 hover:shadow-2xl w-full mb-4'
                        >
                            <CardBody className="overflow-visible p-0 flex justify-center items-center">
                                <Image
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="h-32"
                                    src={item.image}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <div>
                                    <b>{item.title}</b>
                                    <p className="text-default-500">${item.price}</p>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        className='text-white bg-red-500 p-2 rounded-full'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(deleteFromCart(item.id));
                                            console.log(item);
                                            toast.success("Item deleted successfully");
                                        }}
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <div className="text-center flex flex-col justify-center items-center">
                        <h1 className='text-black'>Your cart is empty</h1>
                        <Link to="/">
                            <button>Shop Now</button>
                        </Link>
                    </div>
                )}
            </div>

            {/* Column 2: Summary */}
            {hasItems && (
                <div className="w-1/2 p-4">
                    <h1 className='text-black font-bold text-3xl'>YOUR CART
                        <span className='font-bold text-4xl'> SUMMARY</span></h1>
                    <p>Total items: {items.length}</p>
                    <h1 className='text-black font-bold text-3xl'>Total Amount: ${Amount}</h1>
                </div>
            )}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce />

            <ToastContainer />
        </div>
    );
}

export default Cart;
