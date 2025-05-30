"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, ShoppingBag } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [orderData, setOrderData] = useState({
    name: "",
    email: "",
    phone: "",
    shoe: "",
    size: "",
    note: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleOrderChange = (e) => {
    const { name, value } = e.target
    setOrderData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleOrderSubmit = (e) => {
    e.preventDefault()
    console.log("Order submitted:", orderData)
    alert("Pesanan Anda telah dikirim! Kami akan segera memprosesnya.")
    setOrderData({ name: "", email: "", phone: "", shoe: "", size: "", note: "" })
  }

  const contactInfo = [
    { icon: <MapPin className="w-6 h-6" />, title: "Address", details: ["Jl. Sudirman No. 123", "Palembang 10220", "Indonesia"] },
    { icon: <Phone className="w-6 h-6" />, title: "Phone", details: ["+62 21 1234 5678", "+62 812 3456 7890"] },
    { icon: <Mail className="w-6 h-6" />, title: "Email", details: ["info@sumtread.com", "support@sumtread.com"] },
    { icon: <Clock className="w-6 h-6" />, title: "Business Hours", details: ["Monday - Friday: 9:00 - 18:00", "Saturday: 9:00 - 15:00", "Sunday: Closed"] },
  ]

  const shoeList = ["Business Walker", "Classic Comfort", "Everyday Slip-On", "Junior Sprint", "Kids Adventure", "Little Explorer", "Rainbow Runner", "Smart Schooler", "Sport Elite", "Tiny Trekker", "Trail Master", "Urban Runner Pro"]
  const shoeSizes = ["38", "39", "40", "41", "42", "43", "44"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact & Order</h1>
          <p className="text-xl text-blue-100">Hubungi kami atau lakukan pemesanan langsung dari halaman ini.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Tim customer service kami siap membantu Anda dengan pertanyaan apapun tentang produk, pemesanan, atau layanan kami.
            </p>
          </div>
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-blue-600 mt-1">{info.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((d, i) => <p key={i} className="text-gray-600">{d}</p>)}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Nama lengkap"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Subjek"
                className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="Pesan Anda..." />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>

          {/* Order Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Produk</h2>
            <form onSubmit={handleOrderSubmit} className="space-y-6">
              <input type="text" name="name" value={orderData.name} onChange={handleOrderChange} required placeholder="Nama Lengkap"
                className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              <input type="email" name="email" value={orderData.email} onChange={handleOrderChange} required placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              <input type="tel" name="phone" value={orderData.phone} onChange={handleOrderChange} required placeholder="No HP"
                className="w-full border border-gray-300 rounded-lg px-4 py-2" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select name="shoe" value={orderData.shoe} onChange={handleOrderChange} required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2">
                  <option value="">-- Pilih Sepatu --</option>
                  {shoeList.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
                <select name="size" value={orderData.size} onChange={handleOrderChange} required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2">
                  <option value="">-- Pilih Ukuran --</option>
                  {shoeSizes.map((sz, i) => <option key={i} value={sz}>{sz}</option>)}
                </select>
              </div>

              <textarea name="note" value={orderData.note} onChange={handleOrderChange} rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="Catatan untuk produk (opsional)" />

              <button type="submit" className="w-full  bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2">
                <ShoppingBag className="w-5 h-5" />
                <span>Kirim Pesanan</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
