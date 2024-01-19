import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import ProductCards from './components/ProductCards';

const filterData = [
  {
    id:1,
    brand:'All'
  },
  {
    id: 2,
    brand: "Nike",
    
  },
  {
    id: 3,
    brand: "Adidas",
    
  },
  {
    id: 4,
    brand: "Puma",
  },
  {
    id: 5,
    brand: "Puma",
  },
]

const dummyProducts = [
  {
    id: 1,
    name: "KICKS ALLTEAM CASUAL",
    brand: "Nike",
    category: "Running",
    price: 120,
    size: ["US 7", "US 8", "US 9", "US 10"],
    color: "Black/White",
    image: "https://kicks-ecommerce-store.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdivyanshu08%2Fimage%2Fupload%2Fv1698999228%2Fkicks%2Fspxhubnttwhrpusy1c2o.webp&w=1920&q=75",
  },
  {
    id: 2,
    name: "KICKS HALICON CASUAL",
    brand: "Adidas",
    category: "Running",
    price: 180,
    size: ["US 8", "US 9", "US 10", "US 11"],
    color: "White/Blue",
    image: "https://kicks-ecommerce-store.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdivyanshu08%2Fimage%2Fupload%2Fv1698677450%2Fkicks%2Fan85n58aik3l5eckvltx.webp&w=1920&q=75",
  },
  {
    id: 3,
    name: "KICKS SUPERSTAR SNEAKER",
    brand: "Puma",
    category: "Casual",
    price: 80,
    size: ["US 8", "US 9", "US 10", "US 11"],
    color: "Red/Black",
    image: "https://kicks-ecommerce-store.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdivyanshu08%2Fimage%2Fupload%2Fv1698670216%2Fkicks%2Fklqmyato0lcb9k9uw8ca.webp&w=1920&q=75",
  },
  {
    id: 4,
    name: "KICKS HOOPS BASKETBALL",
    brand: "Puma",
    category: "Casual",
    price: 80,
    size: ["US 8", "US 9", "US 10", "US 11"],
    color: "Red/Black",
    image: "https://kicks-ecommerce-store.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdivyanshu08%2Fimage%2Fupload%2Fv1698677650%2Fkicks%2Fuif5xqjip3joyugblodx.webp&w=1920&q=75",
  },
  // Add more dummy products as needed
];

function App() {

  const allProducts = [];

  {
    dummyProducts.forEach((product) =>{
      
    })
  }

  return (
    <div>
      <Navbar />
      <Filter dummyProduct={dummyProducts} filterData={filterData}/>
      <ProductCards />
    </div>
  )
}
export {filterData}
export default App

