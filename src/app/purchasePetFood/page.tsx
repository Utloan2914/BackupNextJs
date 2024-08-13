
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Card, Button, Row, Col, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter }from 'next/navigation';
import { useLanguage } from '@/context/languageContext';
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
        "link": "https://th.bing.com/th/id/OIP.hukxh2QMNY_XXpHLgstBygAAAA?rs=1&pid=ImgDetMain",
        "imgSrc": "https://th.bing.com/th/id/OIP.hukxh2QMNY_XXpHLgstBygAAAA?rs=1&pid=ImgDetMain",
        "price": "212.450 VND",
        "status": "Out Of Stock",
        "text": "Origi-7 Organic Soft DRY FOOD for Dogs of All Ages 1.5kg - 2kg",
        "category": "PATE"
      },
      {
        "id": 2,
        "title": "Pedigree Adult Beef & Vegetable Flavor 500g",
        "link": "https://bizweb.dktcdn.net/thumb/1024x1024/100/092/840/products/ca-ngu-ga.png?v=1669104445513",
        "imgSrc": "https://bizweb.dktcdn.net/thumb/1024x1024/100/092/840/products/ca-ngu-ga.png?v=1669104445513",
        "price": "56.000 VND",
        "status": "In Stock",
        "text": "Pedigree Adult DRY FOOD with Chicken and Vegetables - 500g",
        "category": "PATE"
      },
      {
        "id": 3,
        "title": "ME-O Kitten Ocean Fish - 400g",
        "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAxadEluqjeFXQmeqObV3OQyDtJ8rdIyiiQ&s",
        "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAxadEluqjeFXQmeqObV3OQyDtJ8rdIyiiQ&s",
        "price": "56.000 VND",
        "status": "In Stock",
        "text": "ME-O Kitten DRY FOOD",
        "category": "PATE"
      },
      {
        "id": 4,
        "title": "PEDIGREE Puppy Egg & Milk Flavor 2.7kg",
        "link": "https://petshopdanang.vn/wp-content/uploads/2023/01/pate-cho-cho-con-smart-heart-130g-1.jpg",
        "imgSrc": "https://petshopdanang.vn/wp-content/uploads/2023/01/pate-cho-cho-con-smart-heart-130g-1.jpg",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Puppy DRY FOOD with Chicken, Egg, and Milk - 3kg",
        "category": "PATE"
      },
      {
        "id": 5,
        "title": "Origi-7 Organic Soft DRY FOOD with Lamb",
        "link": "https://bizweb.dktcdn.net/100/307/433/products/pate-cho-tellme.jpg?v=1625575851187",
        "imgSrc": "https://bizweb.dktcdn.net/100/307/433/products/pate-cho-tellme.jpg?v=1625575851187",
        "price": "212.450 VND",
        "status": "Out Of Stock",
        "text": "Origi-7 Organic Soft DRY FOOD for Dogs of All Ages 1.5kg - 2kg",
        "category": "PATE"
      },
      {
        "id": 6,
        "title": "Pedigree Adult Beef & Vegetable Flavor 500g",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
"imgSrc": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "price": "56.000 VND",
        "status": "In Stock",
        "text": "Pedigree Adult DRY FOOD with Chicken and Vegetables - 500g",
        "category": "DRY FOOD"
      },
      {
        "id": 7,
        "title": "ME-O Kitten Ocean Fish - 400g",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://sieupet.com/sites/default/files/pictures/images/thuc-an-kho-cho-cho.gif",
        "price": "56.000 VND",
        "status": "In Stock",
        "text": "ME-O Kitten DRY FOOD",
        "category": "DRY FOOD"
      },
      {
        "id": 8,
        "title": "PEDIGREE Puppy Egg & Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Puppy DRY FOOD with Chicken, Egg, and Milk - 3kg",
        "category": "DRY FOOD"
      },
      {
        "id": 9,
        "title": "Origi-7 Organic Soft DRY FOOD with Lamb",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "price": "212.450 VND",
        "status": "Out Of Stock",
        "text": "Origi-7 Organic Soft DRY FOOD for Dogs of All Ages 1.5kg - 2kg",
        "category": "DRY FOOD"
      },
      {
        "id": 10,
        "title": "Pedigree Adult Beef & Vegetable Flavor 500g",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "price": "56.000 VND",
        "status": "In Stock",
        "text": "Pedigree Adult DRY FOOD with Chicken and Vegetables - 500g",
        "category": "DRY FOOD"
      },
      {
        "id": 11,
        "title": "ME-O Kitten Ocean Fish - 400g",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://sieupet.com/sites/default/files/pictures/images/thuc-an-kho-cho-cho.gif",
        "price": "56.000 VND",
        "status": "In Stock",
        "text": "Me-o Kitten Dry Food",
        "category": "DRY FOOD"
      },
      {
        "id": 12,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
"imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "DRY FOOD"
      },
      {
        "id": 13,
        "title": "Origi-7 Organic Soft Dry Food with Lamb",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "price": "212.450 VND",
        "status": "Out Of Stock",
        "text": "Origi-7 Organic Soft Dry Food for Dogs of All Ages 1.5kg - 2kg",
        "category": "DRY FOOD"
      },
      {
        "id": 14,
        "title": "Pedigree Adult Beef and Vegetable Flavor 500glllllllllllllll",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "price": "56.000 VND",
        "status": "In Stock",
        "text": "Pedigree Adult Dry Food with Chicken and Vegetables - 500g",
        "category": "DRY FOOD"
      },
      {
        "id": 15,
        "title": "ME-O Kitten Ocean Fish - 400g",
        "link": "https://channel.mediacdn.vn/thumb_w/640/428462621602512896/2023/7/10/photo-1-16889633943321951018013.jpg",
        "imgSrc": "https://sieupet.com/sites/default/files/pictures/images/thuc-an-kho-cho-cho.gif",
        "price": "56.000 VND",
        "status": "In Stock",
        "text": "Me-o Kitten Dry Food",
        "category": "TOYS"
      },
      {
        "id": 16,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "TOYS"
      },
      {
        "id": 17,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "TOYS"
      },
      {
        "id": 18,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
"imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "TOYS"
      },
      {
        "id": 19,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "TOYS"
      },
      {
        "id": 20,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "TOYS"
      },
      {
        "id": 21,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "ACCESSORIES"
      },
      {
        "id": 22,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "ACCESSORIES"
      },
      {
        "id": 23,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "ACCESSORIES"
      },
      {
        "id": 24,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
"imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "ACCESSORIES"
      },
      {
        "id": 25,
        "title": "PEDIGREE Puppy Egg and Milk Flavor 2.7kg",
        "link": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "imgSrc": "https://salt.tikicdn.com/cache/w1200/ts/product/a3/b1/20/94c6093cd7517922bbd649ec2e959d72.png",
        "price": "210.000 VND",
        "status": "In Stock",
        "text": "Pedigree Dry Food for Puppies with Chicken, Egg, and Milk - 3kg",
        "category": "ACCESSORIES"
      },
];


const Purchase: React.FC = () => {
const router = useRouter();
const [error, setError] = useState<string | null>(null);
const [isClient, setIsClient] = useState(false);
const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [category, setCategory] = useState<string>("PATE");
  const [products, setProducts] = useState<Product[]>(allProducts);
  const { language } = useLanguage(); 
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
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
    console.log('Show Form:', showForm);
  }, [showForm]);
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = products.filter(product => product.category === category);

  const handleAddToCart = (product: Product) => {
    if (product.status === "Out Of Stock") {
      setToastMessage("Sản phẩm này đã hết hàng, vui lòng chọn sản phẩm khác");
      setShowToast(true);
      return;
    }
    setCart(prevCart => [product, ...prevCart]);
    if (typeof setCartCount === 'function') {
      setCartCount(prevCount => prevCount + 1);
    } else {
      console.error('setCartCount is not a function');
    }
  };

  const handleSubmit = () => {
    setPaymentSuccess(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedProduct(null);
  };
  const handleBuyNow = (product: Product) => {
    console.log("Product:", product);
    if (product.status === "Out Of Stock") {
      setToastMessage("Sản phẩm này đã hết hàng, vui lòng chọn sản phẩm khác");
      setShowToast(true);
      return;
    }
    setSelectedProduct(product);
    setShowForm(true);
    console.log("Show Form:", showForm);
    console.log("Selected Product:", selectedProduct);
  };

return (
  <div>
    <Head >
      <title>{category}</title>
    </Head>
    <div className="container-fluid" style={{ marginTop: "30px" }}>
      <div className="row">
        <div className="col-md-2 h-100" style={{width:'16%', marginTop:'95px'}}>
          <nav className="navbar flex-column align-items-stretch p-3">
            <h3 className="text-2xl" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            {language === 'en' ? 'PRODUCT PORTFOLIO' : 'DANH MỤC SẢN PHẨM'} 
            </h3>
         <ul className="nav nav-pills flex-column">
  <li className="nav-item h-12">
    <a 
      className={`nav-link font-bold text-xl flex items-center h-full cursor-pointer ${category === 'PATE' ? 'bg-orange-400 text-black hover:bg-white hover:text-black' : 'hover:bg-white hover:text-black'}`} 
      onClick={() => setCategory('PATE')}
    >
      {language === 'en' ? 'PATE' : 'PATE'}  
    </a>
  </li>
  <li className="nav-item h-12">
    <a 
      className={`nav-link font-bold text-xl flex items-center h-full cursor-pointer ${category === 'DRY FOOD' ? 'bg-orange-400 text-black hover:bg-white hover:text-black' : 'hover:bg-white hover:text-black'}`} 
      onClick={() => setCategory('DRY FOOD')}
    >
       {language === 'en' ? 'DRY FOOD' : 'THỰC PHẨM KHÔ'}  
    </a>
  </li>
  <li className="nav-item h-12">
    <a 
      className={`nav-link flex font-bold text-xl items-center h-full cursor-pointer ${category === 'TOYS' ? 'bg-orange-400 text-black hover:bg-white hover:text-black' : 'hover:bg-white hover:text-black'}`} 
      onClick={() => setCategory('TOYS')}
    >
       {language === 'en' ? 'TOYS' : 'ĐỒ CHƠI'}  
    </a>
  </li>
  <li className="nav-item h-12">
    <a 
      className={`nav-link flex items-center font-bold text-xl h-full cursor-pointer ${category === 'ACCESSORIES' ? 'bg-orange-400 text-black hover:bg-white hover:text-black' : 'hover:bg-white hover:text-black'}`} 
      onClick={() => setCategory('ACCESSORIES')}
    >
        {language === 'en' ? 'ACCESSORIES' : 'PHỤ KIỆN'} 
    </a>
  </li>
</ul>
          </nav>
        </div>
        <div className="col-md-10">
        <h2 className="my-4 text-center text-3xl font-bold mt-6">
  {language === 'en' ? category : 
    category === 'PATE' ? 'PATE' :
    category === 'DRY FOOD' ? 'THỰC PHẨM KHÔ' :
    category === 'TOYS' ? 'ĐỒ CHƠI' :
    category === 'ACCESSORIES' ? 'PHỤ KIỆN' :
    category // Dùng `category` như fallback nếu không khớp
  }
</h2>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} md={3} className="mb-4 mt-14" style={{ height: 'auto' }}>
                <Card style={{ height: '100%' }}>
                  <Card.Img variant="top" src={product.imgSrc} style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title className="text-xl" style={{ color: '#272727', lineHeight: '20px', overflow: 'hidden', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box',  fontWeight: 'bold', marginTop: '5px', height: '40px' }}>
                      {product.title}
                    </Card.Title>
                    <Card.Text style={{ marginBottom:'5px',color: '#272727', lineHeight: '20px', fontSize:'18px', overflow: 'hidden', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box',  fontWeight: 'normal', marginTop: '5px', height: '40px' }}>
                      {product.text}
                    </Card.Text>
                    <p className="text-danger font-bold">
                      {product.price}
                    </p>

                    <div style={{ marginTop: '2px', marginBottom: '2px', gap: "30px" }}>
                      <Button
                        variant="primary"
                        className="me-2 text-xl font-bold"
                        onClick={() => handleAddToCart(product)}
                        disabled={product.status === "Out Of Stock"}
                      >
                        {language === 'en' ? ' Add to cart' : 'Thêm vào giỏ hàng'}  
                      </Button>
                      <Button
                      className="text-xl font-bold"
                        variant="success"
                        onClick={() => handleBuyNow(product)}
                        disabled={product.status === "Out Of Stock"}
                      >
                      {language === 'en' ? 'Buy Now' : 'Mua ngay'}     
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
    {showForm && selectedProduct && (

  paymentSuccess ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-4 rounded-lg h-auto w-full md:w-[900px]">
      <h2 className="text-3xl font-bold mb-4 text-center text-black">{language === 'en' ? 'Payment success!' : 'Thanh toán thành công!'}</h2>
      <p className="text-lg mb-4 text-center text-black">{language === 'en' ? 'Thank you for your payment. Your order has been processed.' : 'Cảm ơn bạn đã thanh toán. Đơn đặt hàng của bạn đã được xử lý.'}</p>
      <div className="flex justify-center gap-4">
        <a href="/qaq" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{language === 'en' ? 'Return to the store' : 'Quay lại cửa hàng'}</a>
      </div>
    </div>
  </div>
  ) : (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative container mx-auto mt-14 flex flex-wrap justify-center rounded-lg bg-white px-5 py-10" style={{ height: 'auto', width: '900px' }}>
        {/* Close Button */}
        <button 
          className="absolute top-2 right-2 text-black hover:text-red-600" 
          onClick={() => setShowForm(false)} // Hàm để đóng form
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 hover:text-red-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-center text-3xl font-bold mb-4 w-full text-black"> {language === 'en' ? 'Scan QR Code for Payment' : 'Quét mã QR để thanh toán'}</h2>
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Column with Steps */}
          <div className="md:w-1/2 flex mr-28 mt-6 flex-col justify-between w-full">
            <div className="mb-12">
              <div className="relative flex pb-12 w-full">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-black">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-black">
                    {language === 'en' ? 'STEP 1' : 'BƯỚC 1'}
                  </h2>
                  <p className="font-laonoto leading-relaxed text-black">
                    {language === 'en'
                      ? 'Make a payment by scanning the QR CODE or transfer funds using the account number.'
                      : 'Thực hiện thanh toán bằng cách quét mã QR hoặc chuyển khoản sử dụng số tài khoản.'}
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12 w-full">
                <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                  <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                </div>
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-black">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-black">
                    {language === 'en' ? 'STEP 2' : 'BƯỚC 2'}
                  </h2>
                  <p className="font-laonoto leading-relaxed text-black">
                    {language === 'en'
                      ? 'Notify us of your payment by uploading a receipt image or proof of payment.'
                      : 'Thông báo cho chúng tôi về việc thanh toán của bạn bằng cách tải lên hình ảnh biên lai hoặc chứng từ thanh toán.'}
                  </p>
                </div>
              </div>
              <div className="relative flex pb-12 w-full">
                <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-black">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-black">
                    {language === 'en' ? 'STEP 3' : 'BƯỚC 3'}
                  </h2>
                  <p className="font-laonoto leading-relaxed text-black">
                    {language === 'en'
                      ? 'Once you complete the payment, please wait for our staff to verify. You can check the payment status on the Payments page.'
                      : 'Khi bạn hoàn tất thanh toán, vui lòng đợi nhân viên của chúng tôi xác minh. Bạn có thể kiểm tra tình trạng thanh toán trên trang Thanh toán.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

               
  
          {/* QR Code and File Upload Section */}
          <div className="md:w-1/2 flex flex-col items-center">
            <img className="mx-auto h-40 w-40 md:h-52 md:w-52 rounded-lg border p-2" src="./img/image.png" alt="QR Code for Payment" />
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-black">Huỳnh Thị Tố Loan</p>
              <p className="text-sm font-medium text-black"> {language === 'en' ? 'Bank: Viettinbank' : 'Ngân hàng: Viettinbank'}</p>
              <p className="text-sm font-medium text-black">{language === 'en' ? 'Number account: 1008 7686 3333' : 'Số tài khoản: 1008 7686 3333'}</p>
            </div>
  
            <div className="mt-8 w-full flex flex-col items-center">
              <button className="mt-4 rounded-md border bg-[#0033FF] hover:bg-[#0022CC] px-6 py-2 text-white outline-none" style={{ fontSize: '20px' }} onClick={handleSubmit}>
              {language === 'en' ? 'Submit payment receipt' : 'Gửi biên lai thanh toán'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
)}

    <style jsx>{`
      .container-fluid {
        max-width: 100%;
        margin-top: 70px;
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