"use client";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Filter, Grid, List } from "lucide-react";

const Product = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "all");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("name");
  const products = [
    // DEWASA
    {
      id: 1,
      name: "Urban Runner Pro",
      category: "dewasa",
      price: 899000,
      image: "/dewasa3.jpg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
      description: "Sepatu lari premium dengan teknologi cushioning terdepan",
    },
    {
      id: 3,
      name: "Classic Comfort",
      category: "dewasa",
      price: 749000,
      image: "/dewasa6.jpg?height=300&width=300",
      rating: 4.7,
      reviews: 156,
      description: "Sepatu kasual dengan desain klasik dan nyaman",
    },
    {
      id: 4,
      name: "Sport Elite",
      category: "dewasa",
      price: 1299000,
      image: "/dewasa2.jpg?height=300&width=300",
      rating: 4.9,
      reviews: 203,
      description: "Sepatu olahraga profesional untuk performa maksimal",
    },
    {
      id: 6,
      name: "Business Walker",
      category: "dewasa",
      price: 999000,
      image: "/dewasa1.jpg?height=300&width=300",
      rating: 4.8,
      reviews: 145,
      description: "Sepatu formal untuk profesional modern",
    },
    {
      id: 7,
      name: "Trail Master",
      category: "dewasa",
      price: 849000,
      image: "/dewasa5.jpg?height=300&width=300",
      rating: 4.6,
      reviews: 99,
      description: "Sepatu hiking tangguh untuk medan berat",
    },
    {
      id: 8,
      name: "Everyday Slip-On",
      category: "dewasa",
      price: 599000,
      image: "/dewasa4.jpg?height=300&width=300",
      rating: 4.5,
      reviews: 88,
      description: "Sepatu slip-on yang praktis dan nyaman",
    },

    // ANAK
    {
      id: 2,
      name: "Kids Adventure",
      category: "anak",
      price: 459000,
      image: "/anak62.jpg?height=300&width=300",
      rating: 4.9,
      reviews: 89,
      description: "Sepatu petualangan untuk anak-anak yang aktif",
    },
    {
      id: 5,
      name: "Little Explorer",
      category: "anak",
      price: 389000,
      image: "/anak1.jpg?height=300&width=300",
      rating: 4.6,
      reviews: 67,
      description: "Sepatu sekolah yang nyaman untuk anak-anak",
    },
    {
      id: 9,
      name: "Junior Sprint",
      category: "anak",
      price: 419000,
      image: "/anak2.jpg?height=300&width=300",
      rating: 4.7,
      reviews: 73,
      description: "Sepatu lari ringan untuk anak-anak yang aktif",
    },
    {
      id: 10,
      name: "Tiny Trekker",
      category: "anak",
      price: 399000,
      image: "/anak5.jpg?height=300&width=300",
      rating: 4.5,
      reviews: 61,
      description: "Sepatu outdoor untuk petualangan kecil",
    },
    {
      id: 11,
      name: "Rainbow Runner",
      category: "anak",
      price: 449000,
      image: "/anak6.jpg?height=300&width=300",
      rating: 4.8,
      reviews: 82,
      description: "Sepatu penuh warna untuk anak yang ceria",
    },
    {
      id: 12,
      name: "Smart Schooler",
      category: "anak",
      price: 379000,
      image: "/anak61.jpg?height=300&width=300",
      rating: 4.6,
      reviews: 70,
      description: "Sepatu sekolah klasik dengan kenyamanan ekstra",
    },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-white">
            {selectedCategory === "dewasa"
              ? "Sepatu Dewasa"
              : selectedCategory === "anak"
              ? "Sepatu Anak-anak"
              : "All Products"}
          </h1>
          <p className="text-gray-200 mt-2">
            Temukan sepatu yang sempurna untuk gaya hidup Anda
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Kategori</h4>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "Semua Produk" },
                    { value: "dewasa", label: "Sepatu Dewasa" },
                    { value: "anak", label: "Sepatu Anak-anak" },
                  ].map((cat) => (
                    <label key={cat.value} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={cat.value}
                        checked={selectedCategory === cat.value}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2"
                      />
                      {cat.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h4 className="font-medium mb-3">Urutkan</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="name">Nama A-Z</option>
                  <option value="price-low">Harga Terendah</option>
                  <option value="price-high">Harga Tertinggi</option>
                  <option value="rating">Rating Tertinggi</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* View Controls */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Menampilkan {sortedProducts.length} produk
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Products */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <div
                    className={`${
                      viewMode === "list" ? "w-48 h-48" : "aspect-square"
                    } overflow-hidden`}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-3">{product.description}</p>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 mb-4">
                      {formatPrice(product.price)}
                    </p>
                    <div className="flex space-x-2">
                      <Link
                        to={`/product-detail/${product.id}`}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 px-4 rounded-lg text-center font-medium transition-colors"
                      >
                        Detail
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Tidak ada produk yang ditemukan
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
