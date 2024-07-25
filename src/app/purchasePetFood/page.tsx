import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Card, Button, Row, Col, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Product {
  id: number;
  title: string;
  link: string;
  imgSrc: string;
  price: string;
  status: string;
  text: string;
  category: string;
}


const allProducts: Product[] = [
    {
        "id": 1,
        "title": "Origi-7 Organic Soft DRY FOOD with Lamb",
        "link": "https://pateforpet.com/admin/uploads/images/pate-dong-hop-cho-meo.jpg",
        "imgSrc": "https://pateforpet.com/admin/uploads/images/pate-dong-hop-cho-meo.jpg",
        "price": "250,000 VND",
        "status": "Out Of Stock",
        "text": "Origi-7 Organic Soft DRY FOOD for Dogs of All Ages 1.5kg - 2kg",
        "category": "PATE"
      },
      {
        "id": 2,
        "title": "Pedigree Adult Beef & Vegetable Flavor 500g",
        "link": "https://bizweb.dktcdn.net/thumb/1024x1024/100/092/840/products/ca-ngu-ga.png?v=1669104445513",
        "imgSrc": "https://bizweb.dktcdn.net/thumb/1024x1024/100/092/840/products/ca-ngu-ga.png?v=1669104445513",
        "price": "45,000 VND",
        "status": "In Stock",
        "text": "Pedigree Adult DRY FOOD with Chicken and Vegetables - 500g",
        "category": "PATE"
      },
      {
        "id": 3,
        "title": "ME-O Kitten Ocean Fish - 400g",
        "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAxadEluqjeFXQmeqObV3OQyDtJ8rdIyiiQ&s",
        "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAxadEluqjeFXQmeqObV3OQyDtJ8rdIyiiQ&s",
        "price": "45,000 VND",
        "status": "In Stock",
        "text": "ME-O Kitten DRY FOOD",
        "category": "PATE"
      },
      {
        "id": 4,
        "title": "PEDIGREE Puppy Egg & Milk Flavor 2.7kg",
        "link": "https://petshopdanang.vn/wp-content/uploads/2023/01/pate-cho-cho-con-smart-heart-130g-1.jpg",
        "imgSrc": "https://petshopdanang.vn/wp-content/uploads/2023/01/pate-cho-cho-con-smart-heart-130g-1.jpg",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Puppy DRY FOOD with Chicken, Egg, and Milk - 3kg",
        "category": "PATE"
      },
      {
        "id": 5,
        "title": "Origi-7 Organic Soft DRY FOOD with Lamb",
        "link": "https://bizweb.dktcdn.net/100/307/433/products/pate-cho-tellme.jpg?v=1625575851187",
        "imgSrc": "https://bizweb.dktcdn.net/100/307/433/products/pate-cho-tellme.jpg?v=1625575851187",
        "price": "250,000 VND",
        "status": "Out Of Stock",
        "text": "Origi-7 Organic Soft DRY FOOD for Dogs of All Ages 1.5kg - 2kg",
        "category": "PATE"
      },
      {
        "id": 6,
        "title": "Pedigree Adult Beef & Vegetable Flavor 500g",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
"imgSrc": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "price": "45,000 VND",
        "status": "In Stock",
        "text": "Pedigree Adult DRY FOOD with Chicken and Vegetables - 500g",
        "category": "DRY FOOD"
      },
      {
        "id": 7,
        "title": "ME-O Kitten Ocean Fish - 400g",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://sieupet.com/sites/default/files/pictures/images/thuc-an-kho-cho-cho.gif",
        "price": "45,000 VND",
        "status": "In Stock",
        "text": "ME-O Kitten DRY FOOD",
        "category": "DRY FOOD"
      },
      {
        "id": 8,
        "title": "PEDIGREE Puppy Egg & Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Puppy DRY FOOD with Chicken, Egg, and Milk - 3kg",
        "category": "DRY FOOD"
      },
      {
        "id": 9,
        "title": "Origi-7 Organic Soft DRY FOOD with Lamb",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "price": "250,000 VND",
        "status": "Out Of Stock",
        "text": "Origi-7 Organic Soft DRY FOOD for Dogs of All Ages 1.5kg - 2kg",
        "category": "DRY FOOD"
      },
      {
        "id": 10,
        "title": "Pedigree Adult Beef & Vegetable Flavor 500g",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "price": "45,000 VND",
        "status": "In Stock",
        "text": "Pedigree Adult DRY FOOD with Chicken and Vegetables - 500g",
        "category": "DRY FOOD"
      },
      {
        "id": 11,
        "title": "ME-O Kitten Ocean Fish - 400g",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://sieupet.com/sites/default/files/pictures/images/thuc-an-kho-cho-cho.gif",
        "price": "45,000 VND",
        "status": "In Stock",
        "text": "Me-o Kitten Dry Food",
        "category": "DRY FOOD"
      },
      {
        "id": 12,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
"imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "DRY FOOD"
      },
      {
        "id": 13,
        "title": "Origi-7 Organic Soft Dry Food with Lamb",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "price": "250,000 VND",
        "status": "Out Of Stock",
        "text": "Origi-7 Organic Soft Dry Food for Dogs of All Ages 1.5kg - 2kg",
        "category": "DRY FOOD"
      },
      {
        "id": 14,
        "title": "Pedigree Adult Beef and Vegetable Flavor 500glllllllllllllll",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "price": "45,000 VND",
        "status": "In Stock",
        "text": "Pedigree Adult Dry Food with Chicken and Vegetables - 500g",
        "category": "DRY FOOD"
      },
      {
        "id": 15,
        "title": "ME-O Kitten Ocean Fish - 400g",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://sieupet.com/sites/default/files/pictures/images/thuc-an-kho-cho-cho.gif",
        "price": "45,000 VND",
        "status": "In Stock",
        "text": "Me-o Kitten Dry Food",
        "category": "TOYS"
      },
      {
        "id": 16,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "TOYS"
      },
      {
        "id": 17,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "TOYS"
      },
      {
        "id": 18,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
"imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "TOYS"
      },
      {
        "id": 19,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "TOYS"
      },
      {
        "id": 20,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "TOYS"
      },
      {
        "id": 21,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "ACCESSORIES"
      },
      {
        "id": 22,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "ACCESSORIES"
      },
      {
        "id": 23,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "ACCESSORIES"
      },
      {
        "id": 24,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
"imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "ACCESSORIES"
      },
      {
        "id": 25,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "215,000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "ACCESSORIES"
      },
];


const Purchase: React.FC = () => {
  const [category, setCategory] = useState<string>("PATE");
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [cartCount, setCartCount] = useState<number>(0);
  const [cart, setCart] = useState<Product[]>(() => {
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
    const updateProductStatus = () => {
      setProducts(prevProducts =>
        prevProducts.map(product => {
          if (product.status === "In Stock") {
            return { ...product, status: "Out Of Stock" };
          } else if (product.status === "Out Of Stock") {
            return { ...product, status: "In Stock" };
          }
          return product;
        })
      );
    };
    const intervalId = setInterval(updateProductStatus, 50000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = products.filter(product => product.category === category);

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product]);
    
    if (product.status === "Out Of Stock") {
      setToastMessage("Sản phẩm này đã hết hàng, vui lòng chọn sản phẩm khác");
      setShowToast(true);
      return;
    }
    if (typeof setCartCount === 'function') {
      setCartCount(prevCount => prevCount + 1);
    } else {
      console.error('setCartCount is not a function');
    }
    window.location.href = "/purchase"
  };
  

  const handlePurchase = (product: Product) => {
    if (product.status === "Out Of Stock") {
      setToastMessage("Sản phẩm này đã hết hàng, vui lòng chọn sản phẩm khác");
      setShowToast(true);
      return;
    }
    // Logic để mua sản phẩm
};

  return (
    <div>
      <Head>
        <title>{category}</title>
      </Head>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-2 h-100% mt-20">
            <nav className="navbar flex-column align-items-stretch p-3">
              <h3 style={{
                fontWeight: 'bold',
                marginBottom: '10px',
                fontSize: '22px'
              }}>
                PRODUCT PORTFOLIO
              </h3>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className={`nav-link ${category === 'PATE' ? 'active' : ''}`} onClick={() => setCategory('PATE')}>PATE</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${category === 'DRY FOOD' ? 'active' : ''}`} onClick={() => setCategory('DRY FOOD')}>DRY FOOD</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${category === 'TOYS' ? 'active' : ''}`} onClick={() => setCategory('TOYS')}>TOYS</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${category === 'ACCESSORIES' ? 'active' : ''}`} onClick={() => setCategory('ACCESSORIES')}>ACCESSORIES</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">
            <h2 className="my-4 text-center text-3xl font-bold mb-8">{category}</h2>

            <Row>
              {filteredProducts.map((product) => (
                <Col key={product.id} md={3} className="mb-4" style={{ height: 'auto' }}>
                  <Card style={{ height: '100%' }}>
                    <Card.Img variant="top" src={product.imgSrc} style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                    <Card.Body>
                      <Card.Title style={{
                        color: '#272727',
                        lineHeight: '20px',
                        overflow: 'hidden',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        marginTop: '5px',
                        height: '40px'
                      }}>{product.title}</Card.Title>
                      <Card.Text style={{
                        color: '#272727',
                        lineHeight: '20px',
                        overflow: 'hidden',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box',
                        fontSize: '14px',
                        fontWeight: 'normal',
                        marginTop: '5px',
                        height: '40px'
                      }}>
                        {product.text}
</Card.Text>
                      <p className="text-danger font-bold">
                        {product.price}
                      </p>

                      <div style={{ marginTop: '2px', marginBottom: '2px', gap: "30px" }}>
                        <Button
                          variant="primary"
                          className="me-2"
                          onClick={() => handleAddToCart(product)}
                          disabled={product.status === "Out Of Stock"}
                        >
                          Add to Cart
                        </Button>
                        <Button
                          variant="success"
                          onClick={() => handlePurchase(product)}
                          disabled={product.status === "Out Of Stock"}
                        >
                          Purchase
                        </Button>
                      </div>

                    </Card.Body>
                    <Card.Footer className={`text-center ${product.status === "In Stock" ? "bg-success" : "bg-danger"}`}>
                      <small className="text-white">{product.status}</small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
      <style jsx>{`
        .container-fluid {
          max-width: 100%;
          margin-top: 100px;
          padding: 20px;
        }
        .nav-link.active {
          color: black;
          font-weight: bold;
        }
        .nav-link {
          font-weight: bold;
        }
        .text-center {
          text-align: center;
        }
        .bg-success {
          background-color: #2ecc71 !important;
        }
        .bg-danger {
          background-color: #e74c3c !important;
        }
      `}</style>
    </div>
  );
};

export default Purchase;