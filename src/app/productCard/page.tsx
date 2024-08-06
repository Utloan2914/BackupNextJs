'use client'
import React, { useState, useEffect } from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";
interface Product {
  id: number;
  title: string;
  price: string;
  imgSrc: string;
  category: string;
}

interface CartProduct extends Product {
  quantity: number;
}

const ProductCart: React.FC = () => {
  const router = useRouter();
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [cartlocal, setCartlocal] = useState<Product[]>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
        console.error('Error parsing cart data from localStorage:', error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart: Product[] = JSON.parse(savedCart);
      setCart(consolidateCart(parsedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartlocal));
  }, [cartlocal]);

  const handleRemove = (id: number) => {
    const cartString = localStorage.getItem('cart');
    let cart: { id: number; quantity: number }[] = [];
  
    if (cartString) {
      cart = JSON.parse(cartString);
    }
  
    cart = cart.filter(item => item.id !== id);
  
    localStorage.setItem('cart', JSON.stringify(cart));
    setCart(prevCart => prevCart.filter(product => product.id !== id));
  };

  const handleRemoveFirstItem = (id: number) => {
    const cartString = localStorage.getItem('cart');
    let cart: { id: number; quantity: number }[] = [];
    if (cartString) {
        cart = JSON.parse(cartString);
    }
    const firstItemIndex = cart.findIndex(item => item.id === id);
    if (firstItemIndex !== -1) {
        cart.splice(firstItemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  const handleAddToCart = (product: Product) => {
    const productsString = localStorage.getItem('cart');
    let products: Product[] = [];

    if (productsString) {
      products = JSON.parse(productsString);
    }

    setCartlocal([...products, product]);
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCart(prevCart =>
      prevCart.map(product =>
        product.id === id ? { ...product, quantity: product.quantity + change } : product
      ).filter(product => product.quantity > 0)
    );
  };
  const handleCheckout = () => {
    const totalAmount = calculateSubtotal() + shippingEstimate;
    router.push('/payment');
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

  const shippingEstimate = 5;

  const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });
  };

  return (
    <div className="container-build mt-44 mb-5" style={{ width: '80%' }}>
  <h2 className="text-center text-3xl font-bold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          {isClient && cart.length === 0 ? (
              <div className="text-center w-full items-center ml-72" style={{ marginTop: '20px' }}>
              <h2 style={{  fontSize:'25px',fontWeight: 'bold', marginBottom:'20px' }}>There are no products in the cart yet.</h2>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.location.href = '/purchase'}
              >
              Return to the store
              </button>
            </div>
          ) : (
            <div className="d-flex ml-24">
            <ListGroup className="flex-grow-1 me-3" style={{ minWidth: '1000px' }}>
              {isClient && cart.map(product => (
                <ListGroup.Item key={product.id} className="mb-3 p-0 border-0">
                  <Card className="shadow-sm w-full" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', maxWidth: '100%' }}>
                    <Card.Img
                      variant="top"
                      src={product.imgSrc}
                      alt={product.title}
                      style={{ width: '70px', height: '70px', objectFit: 'cover', margin: '20px' }}
                    />
                    <Card.Body className="d-flex align-items-center w-100">
                      <div className="ms-3 flex-grow-1">
                        <Card.Title className="line-clamp-2">{product.title}</Card.Title>
                        <p className="text-muted mb-2">Category: {product.category}</p>
                        <p className="mb-2 text-black">
                          Discounted price, 20% off, now only: <span className="text-danger">{product.price}</span>
                        </p>
                      </div>
                      <p className="text-danger font-bold mb-0 mr-7">
                        {product.price}
                      </p>
                      <div className="d-flex align-items-center mr-6">
                        <button
                          className="bg-gray-200 hover:bg-gray-400 text-black font-bold px-3 py-1 rounded-l"
                          onClick={() => {
                            handleQuantityChange(product.id, -1);
                            handleRemoveFirstItem(product.id)
                          }}
                        >
                          -
                        </button>
                        <span className="bg-white text-black px-3 py-1 border">{product.quantity}</span>
                        <button
                          className="bg-gray-200 hover:bg-gray-400 text-black font-bold px-3 py-1 rounded-r"
                          onClick={() => {
                            handleQuantityChange(product.id, 1);
                            handleAddToCart(product);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div className="d-flex flex-column align-items-end">
                        <Button
                          onClick={() => handleRemove(product.id)}
                          className="text-blue-700 font-bold border-0 bg-transparent hover:text-red-500"
                        >
                          Remove
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <div className="flex-shrink-0" style={{ minWidth: '500px' }}>
              <Card className="shadow-sm p-4 w-full">
                <h3 className="text-xl font-bold mb-3">Order summary</h3>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>{formatCurrency(calculateSubtotal())} VND</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping Charges</span>
                  <span>{formatCurrency(shippingEstimate)} VND</span>
                </div>
                <div className="d-flex justify-content-between font-bold text-lg">
                  <span>Total order amount</span>
                  <span>{formatCurrency(calculateSubtotal() + shippingEstimate)} VND</span>
                </div>
                <Button
                  variant="primary"
                  className="mt-4 w-full"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </Card>
            </div>
          </div>
          
          )}
        </div>
      
      </div>
    </div>
  );
};

export default ProductCart;
