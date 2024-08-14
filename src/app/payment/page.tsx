'use client';
import React, { useState, useEffect } from 'react';
import { Button, ListGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/languageContext';

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

const PaymentInstructions = () => {
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
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

  const { language } = useLanguage(); // Access the current language

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

  useEffect(() => {
    // Consolidate cart items
    setCart(consolidateCart(cartlocal));
  }, [cartlocal]);

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

  const handleSubmit = () => {
    localStorage.removeItem('cart');
    setCart([]);
    setPaymentSuccess(true);
  };
  const handleButtonClick = () => {
    router.push('/productCard');
  };
  return (
    <div className="mt-16">
      <h2 style={{ textAlign: "center" }} className="text-3xl font-bold mb-1">
        {language === 'en' ? 'Payment' : 'Thanh toán'}
      </h2>

      <section className="mt-3 mb-20 w-8/10 mx-auto" style={{ display: "flex" }}>
        <div className="flex flex-col mt-14 mr-2 md:flex-row" style={{ width: '900px' }}>
          <div className="flex-1 bg-white p-4 rounded-lg h-auto w-full md:w-2/3">
            <h2 className="text-center text-3xl mt-6 font-bold text-black mb-4">
              {language === 'en' ? 'Purchased order' : 'Đơn hàng đã mua'}
            </h2>
            {cart.length === 0 ? (
              <p className="text-center text-xl text-black">
                {language === 'en' ? 'You have not purchased any orders yet.' : 'Bạn chưa mua đơn hàng nào.'}
              </p>
            ) : (
              <>
                <ListGroup className="overflow-auto max-h-[400px]">
                  {isClient && cart.map(product => (
                    <ListGroup.Item key={product.id} className="mb-3 border-0">
                      <Card className="w-full d-flex flex-row align-items-center">
                        <Card.Img
                          variant="top"
                          src={product.imgSrc}
                          alt={product.title}
                          style={{ width: '50px', height: '50px', objectFit: 'cover', margin: '10px' }}
                        />
                        <Card.Body className="d-flex align-items-center w-100">
                          <div className="ms-3 flex-grow-1">
                            <Card.Title className="line-clamp-2">
                              {product.title}
                            </Card.Title>
                            <span className="bg-white text-black">
                              {language === 'en' ? 'Quantity' : 'Số lượng'}: {product.quantity}
                            </span>
                          </div>
                          <p className="text-danger font-bold mb-0 mr-7">
                            {product.price}
                          </p>
                        </Card.Body>
                      </Card>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Card className="p-2 mr-4 ml-4 mt-5">
                  <div className="d-flex justify-content-between font-bold" style={{ fontSize: '20px' }}>
                    <span>{language === 'en' ? 'Total order amount' : 'Tổng số tiền đơn hàng'}</span>
                    <span>{formatCurrency(calculateSubtotal() + shippingEstimate)} VND</span>
                  </div>
                </Card>
                <button
                  className="mt-4 rounded-md border bg-[#0033FF] hover:bg-[#0022CC] px-6 py-2 text-white outline-none"
                  style={{ fontSize: '20px' }}
                  onClick={handleButtonClick}
                >
                  {language === 'en' ? 'Return to the cart' : 'Quay về giỏ hàng'}
                </button>
              </>
            )}
          </div>
        </div>

        <div className="container mx-auto mt-14 flex flex-wrap justify-center rounded-lg bg-white px-5 py-10" style={{ height: 'auto', width: '900px' }}>
          <h2 className="text-center text-3xl font-bold mb-4 w-full text-black">
            {language === 'en' ? 'Scan QR Code for Payment' : 'Quét mã QR để thanh toán'}
          </h2>
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 flex mr-28 mt-6 flex-col justify-between w-full">
              <div className="mb-12">
                <div className="relative flex pb-12 w-full">
                  <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                  </div>
                  <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-black">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-black">
                      {language === 'en' ? 'STEP 1' : 'BƯỚC 1'}
                    </h2>
                    <p className="font-laonoto leading-relaxed text-black">
                      {language === 'en' ? 'Make a payment by scanning the QR CODE or transfer funds using the account number.' : 'Thực hiện thanh toán bằng cách quét mã QR hoặc chuyển khoản sử dụng số tài khoản.'}
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12 w-full">
                  <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                    <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                  </div>
                  <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-black">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-black">
                      {language === 'en' ? 'STEP 2' : 'BƯỚC 2'}
                    </h2>
                    <p className="font-laonoto leading-relaxed text-black">
                      {language === 'en' ? 'Notify us of your payment by uploading a receipt image or proof of payment.' : 'Thông báo cho chúng tôi về việc thanh toán của bạn bằng cách tải lên hình ảnh hóa đơn hoặc bằng chứng thanh toán.'}
                    </p>
                  </div>
                </div>
                <div className="relative flex pb-12 w-full">
                  <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-black">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-black">
                      {language === 'en' ? 'STEP 3' : 'BƯỚC 3'}
                    </h2>
                    <p className="font-laonoto leading-relaxed text-black">
                      {language === 'en' ? 'Once you complete the payment, please wait for our staff to verify. You can check the payment status on the Payments page.' : 'Khi bạn hoàn tất thanh toán, vui lòng chờ nhân viên của chúng tôi xác minh. Bạn có thể kiểm tra trạng thái thanh toán trên trang Thanh toán.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col items-center">
              <img
                className="mx-auto h-40 w-40 md:h-52 md:w-52 rounded-lg border p-2"
                src="./img/image.png"
                alt="QR Code for Payment"
              />
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-black">{language === 'en' ? 'Huỳnh Thị Tố Loan' : 'Huỳnh Thị Tố Loan'}</p>
                <p className="text-sm font-medium text-black">{language === 'en' ? 'Bank: Viettinbank' : 'Ngân hàng: Viettinbank'}</p>
                <p className="text-sm font-medium text-black">{language === 'en' ? 'Number account: 1008 7686 3333' : 'Số tài khoản: 1008 7686 3333'}</p>
              </div>

              <div className="mt-8 w-full flex flex-col items-center">
                <button
                  className="mt-4 rounded-md border bg-[#0033FF] hover:bg-[#0022CC] px-6 py-2 text-white outline-none"
                  style={{ fontSize: '20px' }}
                  onClick={handleSubmit}
                >
                  {language === 'en' ? 'Submit payment receipt' : 'Gửi hóa đơn thanh toán'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {paymentSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg h-auto w-full md:w-[900px]">
              <h2 className="text-3xl font-bold mb-4 text-center text-black">{language === 'en' ? 'Payment success!' : 'Thanh toán thành công!'}</h2>
              <p className="text-lg mb-4 text-center text-black">{language === 'en' ? 'Thank you for your payment. Your order has been processed.' : 'Cảm ơn bạn đã thanh toán. Đơn hàng của bạn đã được xử lý.'}</p>
              <div className="flex justify-center gap-4">
                <a href="/purchase" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  {language === 'en' ? 'Return to the store' : 'Quay lại cửa hàng'}
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PaymentInstructions;
