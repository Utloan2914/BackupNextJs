'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useLanguage } from '@/context/languageContext';

interface Order {
  id: number;
  userEmail: string;
  date: string;
  products: { title: string, price: string, quantity: number, imgSrc: string }[];
  total: number;
}

const OrderHistory: React.FC = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  
  const formatCurrency = (amount: number): string => {
    const formattedAmount = amount.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
    return formattedAmount.replace(/,/g, '.') + ' VND';
  };

  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (!loggedInUserEmail) {
      router.push('/login');
    } else {
      setUserEmail(loggedInUserEmail);

      const storedOrders = localStorage.getItem('orderHistory');
      if (storedOrders) {
        const allOrders: Order[] = JSON.parse(storedOrders);
        const userOrders = allOrders.filter(order => order.userEmail === loggedInUserEmail);
        setOrders(userOrders);
      }
    }
  }, [router]);

  return (
    <div className="w-full p-6">
      <h2 className="text-center text-3xl font-bold mb-6">
        {language === 'en' ? 'Order History' : 'Lịch sử mua hàng'}
      </h2>
      {orders.length === 0 ? (
        <p className="text-center text-lg">
          {language === 'en' ? 'You have not placed any orders yet.' : 'Bạn chưa có đơn hàng nào.'}
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {orders.map(order => (
            <div key={order.id} className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-11/12 md:w-9/12 lg:w-3/4 xl:w-1/2">
              <Card.Body className="p-4">
                <Card.Title className="text-xl text-black font-bold mb-2">
                  {language === 'en' ? 'Order Date:' : 'Ngày đặt hàng:'} {order.date}
                </Card.Title>
                <Card.Text className="text-black mb-2">
                  {language === 'en' ? 'Total Amount:' : 'Tổng số tiền:'} {formatCurrency(order.total)}
                </Card.Text>

                <ListGroup className="list-group-flush">
                  {order.products.map((product, index) => (
                    <ListGroupItem key={index} className="d-flex align-items-center py-3 border-b">
                      <img src={product.imgSrc} alt={product.title} className="w-16 h-16 object-cover" />
                      <div className="ml-4 flex-1">
                        <h5 className="text-lg text-black font-semibold">{product.title}</h5>
                        <p className="text-sm text-black">{language === 'en' ? 'Quantity:' : 'Số lượng:'} {product.quantity}</p>
                      </div>
                      <p className="text-lg text-black font-bold ml-4">{formatCurrency(parseFloat(product.price))}</p>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Card.Body>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
