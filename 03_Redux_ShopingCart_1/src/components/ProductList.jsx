import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/Cart/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductList() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);

    const addToCartHandler = (product) => {
        const item = {
            id: product.id,
            image: product.image,
            title: product.title,
            price: product.price,
        };
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 max-w-[1000px] m-auto space-x-5 space-y-10">
            {products.map((product) => (
                <Card shadow="sm" key={product.id} isPressable className='bg-[#ffffff] border-slate-200 shadow-xl shadow-slate-400 
                hover:border-none hover:scale-110 hover:shadow-slate-800 hover:shadow-2xl'>
                    <CardBody className="overflow-visible p-0 flex justify-center items-center">
                        <Image
                            radius="lg"
                            width="100%"
                            alt={product.title}
                            className="h-fit"
                            src={product.image}
                        />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                        <b>{product.title}</b>
                        <p className="text-default-500">{product.price}</p>
                    </CardFooter>
                    <button
                        className="w-full text-center text-white"
                        onClick={() => addToCartHandler(product)}
                    >
                        Add to Cart
                    </button>
                </Card>
            ))}
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
                transition:Bounce/>
            
            <ToastContainer />
        </div>
    );
}

export default ProductList;
