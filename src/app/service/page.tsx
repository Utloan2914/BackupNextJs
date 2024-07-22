'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, TextField, MenuItem, Button } from '@mui/material';

const ServicePage: React.FC = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string>('');
  const [isServiceSelected, setIsServiceSelected] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    ownerName: '',
    address: '',
    phoneNumber: '',
    date: '',
    time: '',
    duration: ''
  });
  const [selectedProduct, setSelectedProduct] = useState({
    id: '',
    title: '',
    image: ''
  });

  const handleServiceSelection = (service: 'hotel' | 'spa' | 'other') => {
    setSelectedService(service);
    setIsServiceSelected(true);

    // Set product details based on service selection
    switch (service) {
      case 'hotel':
        setSelectedProduct({
          id: '1', // Replace with actual product ID
          title: 'Dịch vụ trông nom',
          image: '/path/to/hotel-image.jpg' // Replace with actual image URL
        });
        break;
      case 'spa':
        setSelectedProduct({
          id: '2', // Replace with actual product ID
          title: 'Dịch vụ spa - grooming',
          image: '/path/to/spa-image.jpg' // Replace with actual image URL
        });
        break;
      case 'other':
        setSelectedProduct({
          id: '3', // Replace with actual product ID
          title: 'Dịch vụ khác',
          image: '/path/to/other-image.jpg' // Replace with actual image URL
        });
        break;
      default:
        setSelectedProduct({
          id: '',
          title: '',
          image: ''
        });
        break;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePayment = () => {
    // Validation
    if (selectedService === 'hotel' && Object.values(formData).some(value => value === '')) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    alert(`Proceed to payment for ${selectedService}`);
    // Điều hướng đến trang thanh toán với dịch vụ đã chọn và dữ liệu form
    router.push(`/payment?service=${selectedService}`);
  };

  return (
    <Container style={{ marginTop: '130px', paddingTop: '20px' }}>
      <div className="flex flex-col items-center">
        <div className="max-w-xl mx-auto shadow-md p-5 bg-white">
          {!isServiceSelected ? (
            <>
              <div className="text-center text-2xl text-black font-bold mb-4">Chọn dịch vụ đăng ký</div>
              <div className="flex justify-center space-x-4">
                <button
                  className={`p-4 rounded ${
                    selectedService === 'hotel' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
                  } hover:bg-orange-400`}
                  onClick={() => handleServiceSelection('hotel')}
                >
                  Dịch vụ trông nom
                </button>
                <button
                  className={`p-4 rounded ${
                    selectedService === 'spa' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
                  } hover:bg-orange-400`}
                  onClick={() => handleServiceSelection('spa')}
                >
                  Dịch vụ spa - grooming
                </button>
                <button
                  className={`p-4 rounded ${
                    selectedService === 'other' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
                  } hover:bg-orange-400`}
                  onClick={() => handleServiceSelection('other')}
                >
                  Dịch vụ khác
                </button>
              </div>
            </>
          ) : (
            <>
              {selectedService === 'hotel' ? (
                <>
                  <div className="text-center text-2xl text-black font-bold mb-4">Thông tin dịch vụ trông nom</div>
                  <form noValidate autoComplete="off">
                    <TextField
                      label="Tên người chủ"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      required
                    />
                    <TextField
                      label="Địa chỉ"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                    <TextField
                      label="Số điện thoại"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <TextField
                      label="Chọn ngày"
                      type="date"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      label="Chọn giờ"
                      type="time"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      select
                      label="Chọn số giờ trông nom"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      required
                    >
                      <MenuItem value="3 hours">3 tiếng</MenuItem>
                      <MenuItem value="4 hours">4 tiếng</MenuItem>
                      <MenuItem value="1 day">1 ngày</MenuItem>
                      <MenuItem value="2 days">2 ngày</MenuItem>
                    </TextField>
                    <div className="text-center mt-4">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
                        onClick={() => setIsServiceSelected(false)}
                      >
                        Chọn lại dịch vụ
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        onClick={handlePayment}
                      >
                        Thanh toán
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="text-center text-2xl text-black font-bold mb-4">Xác nhận dịch vụ</div>
                  <p className="text-center mb-4">Bạn đã chọn: <strong>{selectedProduct.title}</strong></p>
                  <div className="text-center mb-4">
                    <img src={selectedProduct.image} alt={selectedProduct.title} className="mx-auto max-w-full h-auto" />
                  </div>
                  <p className="text-center mb-4">Vui lòng kiểm tra thông tin dịch vụ trước khi thanh toán.</p>
                  <div className="text-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
                      onClick={() => setIsServiceSelected(false)}
                    >
                      Chọn lại dịch vụ
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      onClick={handlePayment}
                    >
                      Thanh toán
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ServicePage;
