import React from "react";
import bagImg from '../assets/images/bag.jpg';
import shirtImg from '../assets/images/shirt.jpg';
import laptopImg from '../assets/images/laptop.jpg';
import shoesImg from '../assets/images/shoes.jpg'

const products = [
  { id: 1, name: 'Peshawari', price: 2000, image: bagImg },
  { id: 2, name: 'Armani', price: 2500, image: shirtImg },
  { id: 3, name: 'Lenovo', price: 500000, image: laptopImg },
  { id: 4, name: 'Nike ', price: 3000, image: shoesImg },
  { id: 5, name: 'Peshawari', price: 2000, image: bagImg },
  { id: 6, name: 'Armani', price: 2500, image: shirtImg },
  { id: 7, name: 'Lenovo', price: 500000, image: laptopImg },
  { id: 8, name: 'Nike ', price: 3000, image: shoesImg },
];

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-4    ">
      {products.map((value) => (
        <div key={value.id} className="w-full mx-auto mt-8 border-solid border-2 border-gray-400 rounded overflow-hidden hover:bg-gray-100 cursor-pointer  ">
          <div className="flex flex-col relative overflow-hidden">
            
            <img src={value.image}  alt="" className="object-cover w-full h-64" />
            <div className="text-center my-4">
              <h1 className="font-bold text-xl sm:text-2xl">{value.name}</h1>
              <p className="font-medium">Rs.{value.price}</p>
              <button onClick={() => alert(`Added to Cart`)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"  data-modal-target="static-modal" data-modal-toggle="static-modal">
                
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
