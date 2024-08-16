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
    <div className="container mt-5 mb-5 w-auto">
      <h2 className="text-center text-3xl font-bold mb-4">
        {language === 'en' ? 'Order History' : 'Lịch sử mua hàng'}
      </h2>
      {orders.length === 0 ? (
        <p className="text-center">
          {language === 'en' ? 'You have not placed any orders yet.' : 'Bạn chưa có đơn hàng nào.'}
        </p>
      ) : (
        <ListGroup>
          {orders.map(order => (
            <ListGroupItem key={order.id}>
              <div>
                <Card.Body>
                  <Card.Title>
                    {language === 'en' ? 'Order Date:' : 'Ngày đặt hàng:'} {order.date}
                  </Card.Title>
                  <Card.Text>
                    {language === 'en' ? 'Total Amount:' : 'Tổng số tiền:'} {order.total} VND
                  </Card.Text>
                  <ListGroup className="mt-3">
                    {order.products.map((product, index) => (
                      <ListGroupItem key={index}>
                        <div className="d-flex align-items-center">
                          <img src={product.imgSrc} alt={product.title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                          <div className="ml-3 w-96">
                            <h5 className="mb-0">{product.title}</h5>
                            <p className="mb-0">{language === 'en' ? 'Quantity:' : 'Số lượng:'} {product.quantity}</p>
                          </div>
                          <p className="ml-28">{product.price}</p>
                        </div>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </Card.Body>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default OrderHistory;
