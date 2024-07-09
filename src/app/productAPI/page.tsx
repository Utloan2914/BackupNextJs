'use client'
import React, { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from './page/page';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from 'reactstrap';
import Search from '@/app/search/page';

export default function Product() {
  const [products, setProducts] = useState<any[]>([]);
  const [newProduct, setNewProduct] = useState({ title: '', description: '', image: '' });
  const [updateProductData, setUpdateProductData] = useState({ id: '', title: '', description: '', image: '' });
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setError('');
    } catch (err) {
      setError('Error fetching products');
    }
  };

  const handleCreate = async () => {
    try {
      await createProduct(newProduct);
      setNewProduct({ title: '', description: '', image: '' });
      fetchProducts();
      setShowAddForm(false);
      setSuccessMessage('Product added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000); // Xóa thông báo sau 3 giây
      setError('');
    } catch (err) {
      setError('Error creating product');
    }
  };

  const handleUpdate = async () => {
    try {
      const { id, title, description, image } = updateProductData;
      await updateProduct(id, { title, description, image });
      setUpdateProductData({ id: '', title: '', description: '', image: '' });
      fetchProducts();
      setShowUpdateForm(false);
      setSuccessMessage('Product updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000); // Xóa thông báo sau 3 giây
      setError('');
    } catch (err) {
      setError('Error updating product');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      fetchProducts();
      setError('');
      setSuccessMessage('Product deleted successfully!');
      setTimeout(() => setSuccessMessage(''), 3000); // Xóa thông báo sau 3 giây
      setConfirmDeleteId(null); // Đóng form xác nhận xóa sau khi xóa thành công
    } catch (err) {
      setError('Error deleting product');
    }
  };

  const handleUpdateFormOpen = (product: any) => {
    setUpdateProductData({
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.image,
    });
    setShowUpdateForm(true);
  };

  const handleUpdateFormCancel = () => {
    setUpdateProductData({ id: '', title: '', description: '', image: '' });
    setShowUpdateForm(false);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <Container fluid className="mx-auto mt-10 px-4 w-9/12 relative">
      <h2 className="text-center text-3xl font-bold mb-4">Product List</h2>
      <div className="flex justify-between items-center mb-4">
        <Search searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setShowAddForm(true)}
        >
          Add Product
        </button>
      </div>
      {successMessage && (
        <div className="bg-green-200 text-green-800 border border-green-300 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
      {showAddForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white p-8 rounded shadow-lg w-1/3">
            <h4 className="text-lg font-bold mb-4">Add New Product</h4>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Title"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Description"
                value={newProduct.description}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <div className="flex justify-end gap-4">
                <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={() => setShowAddForm(false)}>Cancel</button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  onClick={handleCreate}>Add Product</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showUpdateForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white p-8 rounded shadow-lg w-1/3">
            <h4 className="text-lg font-bold mb-4">Update Product</h4>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="New Title"
                value={updateProductData.title}
                onChange={(e) => setUpdateProductData({ ...updateProductData, title: e.target.value })}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="New Description"
                value={updateProductData.description}
                onChange={(e) => setUpdateProductData({ ...updateProductData, description: e.target.value })}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="New Image URL"
                value={updateProductData.image}
                onChange={(e) => setUpdateProductData({ ...updateProductData, image: e.target.value })}
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-4">
                <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={handleUpdateFormCancel}>Cancel</button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={handleUpdate}>Update Product</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {confirmDeleteId && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white p-8 rounded shadow-lg w-1/3">
            <h4 className="text-lg font-bold mb-4">Confirm Delete</h4>
            <p className="mb-4">Are you sure you want to delete this product?</p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={() => setConfirmDeleteId(null)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => {
                  handleDelete(confirmDeleteId);
                  setConfirmDeleteId(null);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <ul className="divide-y divide-gray-300">
        {currentProducts.map((product) => (
          <li key={product.id} className="flex items-center justify-between p-4">
            <img src={product.image} alt={product.title} className="w-32 h-32 object-cover rounded" />
            <div className="flex-1 ml-4">
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className={updateProductData.id === product.id ? "hidden" : "flex gap-2"}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleUpdateFormOpen(product)}>Update</button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => setConfirmDeleteId(product.id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Stack spacing={2} style={{ marginTop: '20px' }}>
        <Pagination count={Math.ceil(filteredProducts.length / productsPerPage)} color="primary" onChange={(event, page) => paginate(page)} />
      </Stack>
    </Container>
  );
}
