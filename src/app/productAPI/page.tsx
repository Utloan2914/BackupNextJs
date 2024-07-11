'use client'
import React, { useState, useEffect, useRef } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from './page/page';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container } from 'reactstrap';
import Search from '@/app/search/page';
import ErrorSearch from '@/app/search/notfound/page';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

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
  const [noResults, setNoResults] = useState(false);

  const addTitleRef = useRef<HTMLInputElement>(null);
  const updateTitleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (showAddForm && addTitleRef.current) {
      addTitleRef.current.focus();
    }
  }, [showAddForm]);

  useEffect(() => {
    if (showUpdateForm && updateTitleRef.current) {
      updateTitleRef.current.focus();
    }
  }, [showUpdateForm]);

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
      const newProd = await createProduct(newProduct);
      setNewProduct({ title: '', description: '', image: '' });
      setProducts([newProd, ...products]);
      setCurrentPage(1);
      setShowAddForm(false);
      setSuccessMessage('Product added successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
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
      setTimeout(() => setSuccessMessage(''), 3000);
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
      setTimeout(() => setSuccessMessage(''), 3000);
      setConfirmDeleteId(null);
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

  const handleSearch = () => {
    const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredProducts.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setNoResults(false);
  };

  return (
    <Container fluid className="mx-auto mt-10 px-4 w-9/12 relative">
      <h2 className="text-center text-3xl font-bold mb-4">Product List</h2>
      <div className="flex justify-between items-center mb-4">
        {showAddForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="relative bg-white p-8 rounded shadow-lg w-1/3">
              <h4 className="text-lg text-black font-bold mb-4">Add Product</h4>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={newProduct.title}
                  onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  ref={addTitleRef}
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
                <button
                  className="border-3 border-gray-500 text-black bg-white hover:bg-gray-950 hover:text-black hover:border-2 hover:border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  onClick={handleCreate}
                >
                  Add Product
                </button>

                </div>
              </div>
            </div>
          </div>
        )}
        <Search searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} onSearch={handleSearch} onClear={handleClear} />
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
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
      {noResults ? (
        <ErrorSearch />
      ) : (
        <>
          {showUpdateForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
              <div className="relative bg-white p-8 rounded shadow-lg w-1/3">
                <h4 className="text-lg text-black font-bold mb-4">Update Product</h4>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="New Title"
                    value={updateProductData.title}
                    onChange={(e) => setUpdateProductData({ ...updateProductData, title: e.target.value })}
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={updateTitleRef}
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
                    <button
                      className="border-3 border-gray-500 text-black bg-white hover:bg-gray-950 hover:text-black hover:border-2 hover:border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                      onClick={handleUpdateFormCancel}
                    >
                      Cancel
                    </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={handleUpdate}
                >
                  Update Product
                </button>

                  </div>
                </div>
              </div>
            </div>
          )}
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr>
                <th className="border py-2 px-4">Image</th>
                <th className="border py-2 px-4">Title</th>
                <th className="border py-2 px-4">Description</th>
                <th className="border py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product.id}>
                  <td className="border py-2 px-4">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="object-cover" 
                      style={{ width: '300px', height: '200px', objectFit: 'cover' }} 
                    />
                  </td>
                  <td className="border py-2 px-4">{product.title}</td>
                  <td className="border py-2 px-4">{product.description}</td>
                  
                  <td className="border py-2 px-4">
                    <div className="flex justify-between gap-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => handleUpdateFormOpen(product)}
                    >
                      <EditIcon />
                    </button>

                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                      onClick={() => setConfirmDeleteId(product.id)}
                    >
                      <DeleteIcon />
                    </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(filteredProducts.length / productsPerPage)}
              page={currentPage}
              onChange={(event, value) => paginate(value)}
              color="primary"
              size="large"
            />
          </Stack>
        </>
      )}
      {error && (
        <div className="bg-red-200 text-red-800 border border-red-300 px-4 py-3 rounded relative mt-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {confirmDeleteId && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white p-8 rounded shadow-lg w-1/3">
            <h4 className="text-lg font-bold text-black mb-4">Confirm Delete</h4>
            <p className="text-black">Are you sure you want to delete this product?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button
               className="border-3 border-gray-500 text-black bg-white hover:bg-gray-950 hover:text-black hover:border-2 hover:border-gray-600 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={() => setConfirmDeleteId(null)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => handleDelete(confirmDeleteId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
