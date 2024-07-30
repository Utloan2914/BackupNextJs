// // 'use client';
// // import React, { useState, useEffect } from 'react';
// // import { useRouter, useSearchParams } from 'next/navigation';
// // import { Container, TextField, MenuItem, Button } from '@mui/material';

// // const ServicePage: React.FC = () => {
// //   const router = useRouter();
// //   const searchParams = useSearchParams();
  
// //   const [selectedService, setSelectedService] = useState<string>('');
// //   const [isServiceSelected, setIsServiceSelected] = useState<boolean>(false);
// //   const [formData, setFormData] = useState({
// //     ownerName: '',
// //     address: '',
// //     phoneNumber: '',
// //     date: '',
// //     time: '',
// //     duration: ''
// //   });
// //   const [selectedProduct, setSelectedProduct] = useState<{
// //     id: string;
// //     title: string;
// //     description: string;
// //     image: string;
// //   }>({
// //     id: '',
// //     title: '',
// //     description: '',
// //     image: ''
// //   });

// //   useEffect(() => {
// //     const id = searchParams.get('id');
// //     const title = searchParams.get('title');
// //     const description = searchParams.get('description');
    
// //     if (id && title && description) {
// //       setSelectedProduct({
// //         id,
// //         title,
// //         description,
// //         image: '' // You can add image URL if available
// //       });
// //       setIsServiceSelected(true); // Automatically set service as selected
// //     }
// //   }, [searchParams]);

// //   const handleServiceSelection = (service: 'hotel' | 'spa' | 'other') => {
// //     setSelectedService(service);
// //     setIsServiceSelected(true);

// //     // Set product details based on service selection
// //     switch (service) {
// //       case 'hotel':
// //         setSelectedProduct({
// //           id: '1', // Replace with actual product ID
// //           title: 'Dịch vụ trông nom',
// //           description: 'Mô tả dịch vụ trông nom',
// //           image: '/path/to/hotel-image.jpg' // Replace with actual image URL
// //         });
// //         break;
// //       case 'spa':
// //         setSelectedProduct({
// //           id: '2', // Replace with actual product ID
// //           title: 'Dịch vụ spa - grooming',
// //           description: 'Mô tả dịch vụ spa',
// //           image: '/path/to/spa-image.jpg' // Replace with actual image URL
// //         });
// //         break;
// //       case 'other':
// //         setSelectedProduct({
// //           id: '3', // Replace with actual product ID
// //           title: 'Dịch vụ khác',
// //           description: 'Mô tả dịch vụ khác',
// //           image: '/path/to/other-image.jpg' // Replace with actual image URL
// //         });
// //         break;
// //       default:
// //         setSelectedProduct({
// //           id: '',
// //           title: '',
// //           description: '',
// //           image: ''
// //         });
// //         break;
// //     }
// //   };

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value
// //     }));
// //   };

// //   const handlePayment = () => {
// //     // Validation
// //     if (selectedService === 'hotel' && Object.values(formData).some(value => value === '')) {
// //       alert('Vui lòng điền đầy đủ thông tin');
// //       return;
// //     }

// //     alert(`Proceed to payment for ${selectedProduct.title}`);
// //     // Điều hướng đến trang thanh toán với dịch vụ đã chọn và dữ liệu form
// //     router.push(`/payment?service=${selectedService}`);
// //   };

// //   return (
// //     <Container style={{ marginTop: '130px', paddingTop: '20px' }}>
// //       <div className="flex flex-col items-center">
// //         <div className="max-w-xl mx-auto shadow-md p-5 bg-white">
// //           {!isServiceSelected ? (
// //             <>
// //               <div className="text-center text-2xl text-black font-bold mb-4">Chọn dịch vụ đăng ký</div>
// //               <div className="flex justify-center space-x-4">
// //                 <button
// //                   className={`p-4 rounded ${
// //                     selectedService === 'hotel' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
// //                   } hover:bg-orange-400`}
// //                   onClick={() => handleServiceSelection('hotel')}
// //                 >
// //                   Dịch vụ trông nom
// //                 </button>
// //                 <button
// //                   className={`p-4 rounded ${
// //                     selectedService === 'spa' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
// //                   } hover:bg-orange-400`}
// //                   onClick={() => handleServiceSelection('spa')}
// //                 >
// //                   Dịch vụ spa - grooming
// //                 </button>
// //                 <button
// //                   className={`p-4 rounded ${
// //                     selectedService === 'other' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'
// //                   } hover:bg-orange-400`}
// //                   onClick={() => handleServiceSelection('other')}
// //                 >
// //                   Dịch vụ khác
// //                 </button>
// //               </div>
// //             </>
// //           ) : (
// //             <>
// //               <div className="text-center text-2xl text-black font-bold mb-4">Thông tin dịch vụ</div>
// //               <form noValidate autoComplete="off">
// //                 <TextField
// //                   label="ID pet"
// //                   variant="outlined"
// //                   fullWidth
// //                   margin="normal"
// //                   value={selectedProduct.id}
// //                   InputProps={{
// //                     readOnly: true,
// //                   }}
// //                 />
// //                 <TextField
// //                   label="Tên pet"
// //                   variant="outlined"
// //                   fullWidth
// //                   margin="normal"
// //                   value={selectedProduct.title}
// //                   InputProps={{
// //                     readOnly: true,
// //                   }}
// //                 />
// //                 <TextField
// //                   label="Mô tả"
// //                   variant="outlined"
// //                   fullWidth
// //                   margin="normal"
// //                   value={selectedProduct.description}
// //                   InputProps={{
// //                     readOnly: true,
// //                   }}
// //                 />
// //                 <TextField
// //                   label="Tên người chủ"
// //                   variant="outlined"
// //                   fullWidth
// //                   margin="normal"
// //                   name="ownerName"
// //                   value={formData.ownerName}
// //                   onChange={handleInputChange}
// //                   required
// //                 />
// //                 <TextField
// //                   label="Địa chỉ"
// //                   variant="outlined"
// //                   fullWidth
// //                   margin="normal"
// //                   name="address"
// //                   value={formData.address}
// //                   onChange={handleInputChange}
// //                   required
// //                 />
// //                 <TextField
// //                   label="Số điện thoại"
// //                   variant="outlined"
// //                   fullWidth
// //                   margin="normal"
// //                   name="phoneNumber"
// //                   value={formData.phoneNumber}
// //                   onChange={handleInputChange}
// //                   required
// //                 />
// //                 <TextField
// //                   label="Chọn ngày"
// //                   type="date"
// //                   variant="outlined"
// //                   fullWidth
// //                   margin="normal"
// //                   name="date"
// //                   value={formData.date}
// //                   onChange={handleInputChange}
// //                   required
// //                   InputLabelProps={{
// //                     shrink: true,
// //                   }}
// //                 />
// //                 <TextField
// //                   label="Chọn giờ"
// //                   type="time"
// //                   variant="outlined"
// //                   fullWidth
// //                   margin="normal"
// //                   name="time"
// //                   value={formData.time}
// //                   onChange={handleInputChange}
// //                   required
// //                   InputLabelProps={{
// //                     shrink: true,
// //                   }}
// //                 />
// //                 <TextField
// //                   select
// //                   label="Chọn số giờ trông nom"
// //                   variant="outlined"
// //                   fullWidth
// //                   margin="normal"
// //                   name="duration"
// //                   value={formData.duration}
// //                   onChange={handleInputChange}
// //                   required
// //                 >
// //                   <MenuItem value="3 hours">3 tiếng</MenuItem>
// //                   <MenuItem value="4 hours">4 tiếng</MenuItem>
// //                   <MenuItem value="1 day">1 ngày</MenuItem>
// //                   <MenuItem value="2 days">2 ngày</MenuItem>
// //                 </TextField>
// //                 <div className="text-center mt-4">
// //                   <button
// //                     className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
// //                     onClick={() => setIsServiceSelected(false)}
// //                   >
// //                     Chọn lại dịch vụ
// //                   </button>
// //                   <button
// //                     className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
// //                     onClick={handlePayment}
// //                   >
// //                     Thanh toán
// //                   </button>
// //                 </div>
// //               </form>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default ServicePage;

// 'use client';
// import React, { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { Container, TextField, MenuItem, Button, Checkbox, FormControl, FormGroup, FormControlLabel } from '@mui/material';

// const ServicePage: React.FC = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [selectedService, setSelectedService] = useState<string>('');
//   const [isServiceSelected, setIsServiceSelected] = useState<boolean>(false);
//   const [formData, setFormData] = useState({
//     ownerName: '',
//     address: '',
//     phoneNumber: '',
//     date: '',
//     time: '',
//     duration: ''
//   });
//   const [selectedProduct, setSelectedProduct] = useState<{
//     id: string;
//     title: string;
//     description: string;
//     image: string;
//   }>({
//     id: '',
//     title: '',
//     description: '',
//     image: ''
//   });
//   const [spaServices, setSpaServices] = useState<{ [key: string]: boolean }>({
//     "NHỔ LÔNG – VỆ SINH TAI": false,
//     "TẮM VỆ SINH (VẮT TUYẾN HÔI)": false,
//     "SẤY CHẢI BỤNG LÔNG": false,
//     "CHẢI LÔNG CHẾT": false,
//     "XỊT NƯỚC HOA": false,
//     "XỊT DƯỠNG LÔNG": false,
//     "CẠO CHÂN – BỤNG – HẬU MÔN": false,
//     "CẮT MÓNG MÀI MÓNG": false,
//     "CẠO LÔNG TOÀN THÂN": false,
//     "CẮT TỈA TẠO KIỂU": false
//   });

//   useEffect(() => {
//     // Lấy dữ liệu từ URL
//     const id = searchParams.get('id');
//     const title = searchParams.get('title');
//     const description = searchParams.get('description');

//     if (id && title && description) {
//       setSelectedProduct({
//         id,
//         title: decodeURIComponent(title), // Giải mã URL nếu cần
//         description: decodeURIComponent(description), // Giải mã URL nếu cần
//         image: '' // Thêm URL hình ảnh nếu có
//       });
//       setIsServiceSelected(true);
//     }
//   }, [searchParams]);

//   const handleServiceSelection = (service: 'hotel' | 'spa' | 'other') => {
//     setSelectedService(service);
//     setIsServiceSelected(true);

//     // Cập nhật sản phẩm dựa trên dịch vụ đã chọn
//     switch (service) {
//       case 'hotel':
//         setSelectedProduct({
//           id: '1',
//           title: 'Dịch vụ trông nom',
//           description: 'Mô tả dịch vụ trông nom',
//           image: '/path/to/hotel-image.jpg'
//         });
//         break;
//       case 'spa':
//         setSelectedProduct({
//           id: '2',
//           title: 'Dịch vụ spa - grooming',
//           description: 'Mô tả dịch vụ spa',
//           image: '/path/to/spa-image.jpg'
//         });
//         break;
//       case 'other':
//         setSelectedProduct({
//           id: '3',
//           title: 'Dịch vụ khác',
//           description: 'Mô tả dịch vụ khác',
//           image: '/path/to/other-image.jpg'
//         });
//         break;
//       default:
//         setSelectedProduct({
//           id: '',
//           title: '',
//           description: '',
//           image: ''
//         });
//         break;
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSpaServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = e.target;
//     setSpaServices(prevState => ({
//       ...prevState,
//       [name]: checked
//     }));
//   };

//   const handlePayment = () => {
//     // Kiểm tra điều kiện cho dịch vụ 'hotel'
//     if (selectedService === 'hotel' && Object.values(formData).some(value => value === '')) {
//       alert('Vui lòng điền đầy đủ thông tin');
//       return;
//     }

//     alert(`Proceed to payment for ${selectedProduct.title}`);
//     router.push(`/payment?service=${selectedService}`);
//   };

//   return (
//     <Container style={{ marginTop: '130px', paddingTop: '20px' }}>
//       <div>
//         <div className="flex justify-center space-x-4 mb-4">
//           <Button
//             variant="contained"
//             onClick={() => handleServiceSelection('hotel')}
//           >
//             Dịch vụ trông nom
//           </Button>
//           <Button
//             variant="contained"
//             onClick={() => handleServiceSelection('spa')}
//           >
//             Dịch vụ spa - grooming
//           </Button>
//           <Button
//             variant="contained"
//             onClick={() => handleServiceSelection('other')}
//           >
//             Dịch vụ khác
//           </Button>
//         </div>

//         {selectedService === 'hotel' && (
//           <form>
//             <TextField
//               label="ID pet"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={selectedProduct.id}
//               InputProps={{ readOnly: true }}
//             />
//             <TextField
//               label="Tên pet"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={selectedProduct.title}
//               InputProps={{ readOnly: true }}
//             />
//             <TextField
//               label="Mô tả"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value={selectedProduct.description}
//               InputProps={{ readOnly: true }}
//             />
//             <TextField
//               label="Tên người chủ"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="ownerName"
//               value={formData.ownerName}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               label="Địa chỉ"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               label="Số điện thoại"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               label="Chọn ngày"
//               type="date"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="date"
//               value={formData.date}
//               onChange={handleInputChange}
//               required
//               InputLabelProps={{ shrink: true }}
//             />
//             <TextField
//               label="Chọn giờ"
//               type="time"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="time"
//               value={formData.time}
//               onChange={handleInputChange}
//               required
//               InputLabelProps={{ shrink: true }}
//             />
//             <TextField
//               select
//               label="Chọn số giờ trông nom"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="duration"
//               value={formData.duration}
//               onChange={handleInputChange}
//               required
//             >
//               <MenuItem value="3 hours">3 tiếng</MenuItem>
//               <MenuItem value="4 hours">4 tiếng</MenuItem>
//               <MenuItem value="1 day">1 ngày</MenuItem>
//               <MenuItem value="2 days">2 ngày</MenuItem>
//             </TextField>
//             <div className="flex justify-center mt-4">
//               <Button variant="contained" color="secondary" onClick={handlePayment}>
//                 Thanh toán
//               </Button>
//             </div>
//           </form>
//         )}

//         {selectedService === 'spa' && (
//           <form>
//             <div className="mb-4">
//               <h3>Chọn dịch vụ spa</h3>
//               <FormControl component="fieldset">
//                 <FormGroup>
//                   {Object.keys(spaServices).map(service => (
//                     <FormControlLabel
//                       key={service}
//                       control={
//                         <Checkbox
//                           checked={spaServices[service]}
//                           onChange={handleSpaServiceChange}
//                           name={service}
//                         />
//                       }
//                       label={service}
//                     />
//                   ))}
//                 </FormGroup>
//               </FormControl>
//             </div>
//             <TextField
//               label="Tên người chủ"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="ownerName"
//               value={formData.ownerName}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               label="Địa chỉ"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               label="Số điện thoại"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               label="Chọn ngày"
//               type="date"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="date"
//               value={formData.date}
//               onChange={handleInputChange}
//               required
//               InputLabelProps={{ shrink: true }}
//             />
//             <TextField
//               label="Chọn giờ"
//               type="time"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="time"
//               value={formData.time}
//               onChange={handleInputChange}
//               required
//               InputLabelProps={{ shrink: true }}
//             />
//             <TextField
//               select
//               label="Chọn số giờ spa"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               name="duration"
//               value={formData.duration}
//               onChange={handleInputChange}
//               required
//             >
//               <MenuItem value="1 hour">1 giờ</MenuItem>
//               <MenuItem value="2 hours">2 giờ</MenuItem>
//               <MenuItem value="3 hours">3 giờ</MenuItem>
//             </TextField>
//             <div className="flex justify-center mt-4">
//               <Button variant="contained" color="secondary" onClick={handlePayment}>
//                 Thanh toán
//               </Button>
//             </div>
//           </form>
//         )}

//         {selectedService === 'other' && (
//           <div className="flex justify-center mt-4">
//             <p>Chức năng này đang được phát triển.</p>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default ServicePage;
"use client"
import React, { useState } from 'react';

const ServicePage = () => {
  const [quantity, setQuantity] = useState(1);
  
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDelete = () => {
    // Xử lý xóa sản phẩm khỏi giỏ hàng
    console.log('Xóa sản phẩm');
  };

  return (
    <div className="flex items-center border-b py-4">
      <input type="checkbox" className="mr-4" />
      <img 
        src="https://cdn.example.com/image-placeholder.jpg" 
        alt="Dép Đức Quai Ngang Siêu Nhẹ, Êm Chân, Họa Tiết Gấu" 
        className="w-20 h-20 object-cover mr-4" 
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">
              Dép Đức Quai Ngang Siêu Nhẹ, Êm Chân, Họa Tiết Gấu
            </h2>
            <p className="text-sm text-red-600">Đổi ý miễn phí 15 ngày</p>
          </div>
          <div className="text-right">
            <p className="line-through text-gray-400">69.000₫</p>
            <p className="text-red-600 text-lg font-bold">45.000₫</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-gray-600">
            <span>Phân Loại Hàng:</span> Gấu Đen, 36-37
          </div>
          <div className="flex items-center">
            <button 
              onClick={handleDecrease} 
              className="px-2 py-1 border"
            >-</button>
            <input 
              type="text" 
              value={quantity} 
              readOnly 
              className="w-12 text-center border-t border-b"
            />
            <button 
              onClick={handleIncrease} 
              className="px-2 py-1 border"
            >+</button>
          </div>
          <div className="text-red-600 font-bold">₫{45_000 * quantity}</div>
          <button 
            onClick={handleDelete} 
            className="text-red-600 ml-4"
          >Xóa</button>
        </div>
        <div className="text-right mt-2">
          <a href="#" className="text-red-600">Tìm sản phẩm tương tự</a>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
