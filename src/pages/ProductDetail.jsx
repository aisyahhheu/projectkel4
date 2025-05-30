import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Star, Truck, Shield, RotateCcw, ArrowLeft } from "lucide-react"

const products = [
  // Dewasa
  {
    id: 1,
    name: "Urban Runner Pro",
    category: "dewasa",
    price: 899000,
    image: "/dewasa1.jpg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    description: "Sepatu lari premium dengan teknologi cushioning terdepan",
  },
  {
    id: 3,
    name: "Classic Comfort",
    category: "dewasa",
    price: 749000,
    image: "/dewasa2.jpg?height=300&width=300",
    rating: 4.7,
    reviews: 156,
    description: "Sepatu kasual dengan desain klasik dan nyaman",
  },
  {
    id: 4,
    name: "Sport Elite",
    category: "dewasa",
    price: 1299000,
    image: "/dewasa3.jpg?height=300&width=300",
    rating: 4.9,
    reviews: 203,
    description: "Sepatu olahraga profesional untuk performa maksimal",
  },
  {
    id: 6,
    name: "Business Walker",
    category: "dewasa",
    price: 999000,
    image: "/dewasa4.jpg?height=300&width=300",
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
    image: "/dewasa6.jpg?height=300&width=300",
    rating: 4.5,
    reviews: 88,
    description: "Sepatu slip-on yang praktis dan nyaman",
  },

  // Anak
  {
    id: 2,
    name: "Kids Adventure",
    category: "anak",
    price: 459000,
    image: "/anak1.jpg?height=300&width=300",
    rating: 4.9,
    reviews: 89,
    description: "Sepatu petualangan untuk anak-anak yang aktif",
  },
  {
    id: 5,
    name: "Little Explorer",
    category: "anak",
    price: 389000,
    image: "/anak2.jpg?height=300&width=300",
    rating: 4.6,
    reviews: 67,
    description: "Sepatu sekolah yang nyaman untuk anak-anak",
  },
  {
    id: 9,
    name: "Junior Sprint",
    category: "anak",
    price: 419000,
    image: "/anak3.jpg?height=300&width=300",
    rating: 4.7,
    reviews: 73,
    description: "Sepatu lari ringan untuk anak-anak yang aktif",
  },
  {
    id: 10,
    name: "Tiny Trekker",
    category: "anak",
    price: 399000,
    image: "/anak4.jpg?height=300&width=300",
    rating: 4.5,
    reviews: 61,
    description: "Sepatu outdoor untuk petualangan kecil",
  },
  {
    id: 11,
    name: "Rainbow Runner",
    category: "anak",
    price: 449000,
    image: "/anak5.jpg?height=300&width=300",
    rating: 4.8,
    reviews: 82,
    description: "Sepatu penuh warna untuk anak yang ceria",
  },
  {
    id: 12,
    name: "Smart Schooler",
    category: "anak",
    price: 379000,
    image: "/anak6.jpg?height=300&width=300",
    rating: 4.6,
    reviews: 70,
    description: "Sepatu sekolah klasik dengan kenyamanan ekstra",
  },
]

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === Number(id))

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price)
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <p className="text-xl font-semibold mb-4">Produk tidak ditemukan.</p>
        <Link to="/product" className="text-blue-600 hover:underline">
          Kembali ke Produk
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <Link
          to="/product"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Produk
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 aspect-square overflow-hidden rounded-lg border border-gray-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
            </div>

            <p className="text-xl font-semibold text-blue-600">{formatPrice(product.price)}</p>

            <p className="text-gray-700">{product.description}</p>

            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-sm text-gray-600">Untuk pembelian &gt; 500k</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Garansi 1 Tahun</p>
                    <p className="text-sm text-gray-600">Kualitas terjamin</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Easy Return</p>
                    <p className="text-sm text-gray-600">30 hari return</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
