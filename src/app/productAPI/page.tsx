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
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';



export default function Product() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
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
  const router = useRouter();
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
      setFilteredProducts(data);
      setError('');
    } catch (err) {
      setError('Error fetching products');
    }
  };

  
  const handleCreate = async () => {
    try {
      const newProd = await createProduct(newProduct);
      setProducts([newProd, ...products]);
      setFilteredProducts([newProd, ...products]);
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

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setNoResults(filtered.length === 0);
  };

  const handleClear = () => {
    setSearchTerm('');
    fetchProducts();
    setNoResults(false);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const closeAddForm = () => {
    setShowAddForm(false);
    setNewProduct({ title: '', description: '', image: '' }); // Reset state on close
  };

  return (
    <Container fluid className="mx-auto  px-4 relative" style= {{marginTop:'160px', marginBottom:'50px'}}>
      <h2 className="text-center text-3xl font-bold mb-4">Product List</h2>
      <div className="flex justify-between items-center mb-4">
        {showAddForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="relative bg-white p-8 rounded shadow-lg w-90">
              <button
                className="absolute top-2 right-2 text-black hover:text-gray-600 focus:outline-none"
                onClick={closeAddForm}
              >
                <CloseIcon />
              </button>
              <h4 className=" text-black font-bold mb-4 text-xl">Add pet</h4>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={newProduct.title}
                  onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                  className="text-xl p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ref={addTitleRef}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  className="text-xl p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="text-xl p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {newProduct.image && (
                  <div className="flex justify-center mt-4">
                    <img
                      src={newProduct.image}
                      alt="Preview"
                      style={{ margin: '10px', width: '200px', height: '200px', maxWidth: 'none' }}
                      className="h-auto"
                    />
                  </div>
                )}
                <div className="flex justify-center gap-4">
                  <button
                    className="bg-blue-500 text-xl  hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:bg-blue-500"
                    onClick={handleCreate}
                  >
                    Add pet
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <Search searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} onSearch={handleSearch} onClear={handleClear} />
        <button
          className="bg-blue-500 text-xl hover:bg-blue-600 text-white font-bold px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setShowAddForm(true)}
        >
          Add pet
        </button>
      </div>
      {successMessage && (
        <div className="bg-blue-500 text-xl hover:bg-blue-600 text-black px-4 py-3 rounded relative mb-4" role="alert">
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
              <div className="relative bg-white p-8 rounded shadow-lg w-90">
                <button
                  className="absolute top-2 right-2 text-black hover:text-gray-600 focus:outline-none"
                  onClick={handleUpdateFormCancel}
                >
                  <CloseIcon />
                </button>
                <h4 className="text-xl  text-black font-bold mb-4">Update pet information</h4>
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Title"
                    value={updateProductData.title}
                    onChange={(e) => setUpdateProductData({ ...updateProductData, title: e.target.value })}
                    className="text-xl p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={updateTitleRef}
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    value={updateProductData.description}
                    onChange={(e) => setUpdateProductData({ ...updateProductData, description: e.target.value })}
                    className="text-xl p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setUpdateProductData({ ...updateProductData, image: reader.result as string });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="text-xl p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {updateProductData.image && (
                    <img
                      src={updateProductData.image}
                      alt="Preview"
                      className="mx-auto w-40 h-40 object-contain mt-4"
                      style={{ maxWidth: 'none' }}
                    />
                  )}
                  <div className="flex justify-center gap-4">
                    <button
                      className="text-xl bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:bg-blue-500"
                      onClick={handleUpdate}
                    >
                      Update pet 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full  text-black bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 text-xl px-4 border-b">Image</th>
                  <th className="py-2 text-xl px-4 border-b">Name pet</th>
                  <th className="py-2 text-xl px-4 border-b">Description</th>
                  <th className="py-2 text-xl px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="py-2 px-4 border-b">
                      {product.image && <img 
                        src={product.image} 
                        alt={product.title} 
                        style={{ margin: '10px', width: '100px', height: '80px', maxWidth: 'none' }} 
                        className="object-cover rounded"
                      />}
                    </td>
                    <td className="py-2 text-xl px-4 border-b">{product.title}</td>
                    <td className="py-2 text-xl px-4 border-b">{product.description}</td>
                    <td className="py-2 text-xl px-4 border-b">
                      <div className="flex space-x-2">
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
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
                      {confirmDeleteId === product.id && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                          <div className="relative bg-white p-8 rounded shadow-lg w-90">
                            <button
                              className="absolute top-2 right-2 text-black hover:text-gray-600 focus:outline-none"
                              onClick={() => setConfirmDeleteId(null)}
                            >
                              <CloseIcon />
                            </button>
                            <h4 className="text-lg text-black font-bold mb-4">Confirm Delete</h4>
                            <p className="mb-4  text-black text-xl">Are you sure you want to delete this product?</p>
                            <div className="flex justify-center gap-4">
                              <button
                                className="text-xl bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                onClick={() => handleDelete(product.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(filteredProducts.length / productsPerPage)}
                page={currentPage}
                onChange={(e, page) => paginate(page)}
                color="primary"
              
              />
            </Stack>
          </div>
        </>
      )}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </Container>
  );
}