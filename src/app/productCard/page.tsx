'use client'
import React, { useState, useEffect } from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Product {
  id: number;
  title: string;
  price: string;
  imgSrc: string;
}

interface CartProduct extends Product {
  quantity: number;
}

const ProductCart: React.FC = () => {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart: Product[] = JSON.parse(savedCart);
      setCart(consolidateCart(parsedCart));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const handleRemove = (id: number) => {
    setCart(prevCart => prevCart.filter(product => product.id !== id));
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCart(prevCart =>
      prevCart.map(product =>
        product.id === id ? { ...product, quantity: product.quantity + change } : product
      ).filter(product => product.quantity > 0)
    );
  };

  const consolidateCart = (products: Product[]): CartProduct[] => {
    const consolidated: CartProduct[] = [];
    products.forEach(product => {
      const existingProduct = consolidated.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        consolidated.push({ ...product, quantity: 1 });
      }
    });
    return consolidated;
  };

  const calculateSubtotal = (): number => {
    return cart.reduce((total, product) => total + parseFloat(product.price) * product.quantity, 0);
  };

  const shippingEstimate = 5.00;
  const taxEstimate = (calculateSubtotal() * 0.08);

  return (
    <div className="container mx-auto mt-32 px-4 mb-5">
      <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          {isClient && cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <ListGroup>
              {isClient && cart.map(product => (
                <ListGroup.Item key={product.id} className="mb-3 p-0 border-0">
                  <Card className="shadow-sm w-full">
                    <Card.Body className="d-flex">
                      <div>
                        <Card.Img
                          variant="top"
                          src={product.imgSrc}
                          alt={product.title}
                          style={{ width: '200px', height: '200px', objectFit: 'cover', maxWidth: 'none' }}
                        />
                      </div>
                      <div className="ms-3 flex-grow-1 mt-20 justify-center">
                        <Card.Title className="line-clamp-2 mt-2">{product.title}</Card.Title>
                        <p className="text-danger font-bold">{product.price}</p>
                      </div>
                      <div className="d-flex align-items-center ms-3">
                        <button
                          className="bg-gray-200 hover:bg-gray-400 text-black font-bold px-3 py-1 rounded-l"
                          onClick={() => handleQuantityChange(product.id, -1)}
                        >
                          -
                        </button>
                        <span className="bg-white text-black px-3 py-1 border">{product.quantity}</span>
                        <button
                          className="bg-gray-200  hover:bg-gray-400 text-black font-bold  px-3 py-1 rounded-r"
                          onClick={() => handleQuantityChange(product.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <Button
                        onClick={() => handleRemove(product.id)}
                        className="text-blue-700 font-bold border-0 bg-transparent hover:text-red-500"
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </div>
        <div>
          <Card className="shadow-sm p-4 w-full">
            <h3 className="text-xl font-bold mb-3">Order summary</h3>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping estimate</span>
              <span>${shippingEstimate.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>Tax estimate</span>
              <span>${taxEstimate.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between font-bold text-lg">
              <span>Order total</span>
              <span>${(calculateSubtotal() + shippingEstimate + taxEstimate).toFixed(2)}</span>
            </div>
            <Button variant="primary" className="mt-4 w-full" onClick={() => alert('Proceed to Checkout')}>
              Checkout
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
