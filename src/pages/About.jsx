import { Users, Award, Globe, Heart } from "lucide-react"

const About = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Products Sold" },
    { number: "5", label: "Years Experience" },
    { number: "50+", label: "Cities Reached" },
  ]

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality First",
      description: "Kami berkomitmen untuk memberikan produk berkualitas tinggi dengan standar internasional.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Care",
      description: "Kepuasan pelanggan adalah prioritas utama kami dalam setiap layanan yang diberikan.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Innovation",
      description: "Terus berinovasi dalam desain dan teknologi untuk memberikan pengalaman terbaik.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Membangun komunitas yang solid dan saling mendukung dalam gaya hidup aktif.",
    },
  ]

  const team = [
    {
      name: "Siti Aisyah",
      position: "Founder & CEO",
      image: "/aisyah.jpeg?height=300&width=300",
      description: "Visioner di balik Sumtread dengan pengalaman 10+ tahun di industri fashion.",
    },
    {
      name: "Tara Aulya",
      position: "Head of Design",
      image: "/tara.jpeg?height=300&width=300",
      description: "Desainer berpengalaman yang menciptakan koleksi sepatu inovatif dan stylish.",
    },
    {
      name: "Muhamad Haekal Saleh",
      position: "Quality Manager",
      image: "/haikal.jpeg?height=300&width=300",
      description: "Memastikan setiap produk memenuhi standar kualitas tertinggi sebelum sampai ke pelanggan.",
    },
    {
      name: "Renjiro Alief Daniswara",
      position: "Quality Manager",
      image: "/jiro.jpeg?height=300&width=300",
      description: "Memastikan setiap produk memenuhi standar kualitas tertinggi sebelum sampai ke pelanggan.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Sumtread</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Perjalanan kami dimulai dari passion untuk menciptakan sepatu berkualitas tinggi yang menggabungkan
            kenyamanan, style, dan inovasi untuk setiap langkah Anda.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Sumtread lahir dari sebuah visi sederhana: menciptakan sepatu yang tidak hanya terlihat bagus, tetapi
                  juga memberikan kenyamanan maksimal untuk aktivitas sehari-hari. Didirikan pada tahun 2019, kami
                  memulai perjalanan dengan tim kecil yang memiliki passion besar terhadap kualitas dan inovasi.
                </p>
                <p>
                  Setiap produk Sumtread dirancang dengan teliti, menggunakan material premium dan teknologi terdepan.
                  Kami percaya bahwa sepatu yang baik dapat mengubah cara seseorang bergerak dan merasa percaya diri
                  dalam setiap langkahnya.
                </p>
                <p>
                  Hari ini, Sumtread telah melayani ribuan pelanggan di seluruh Indonesia, dan kami terus berkomitmen
                  untuk memberikan yang terbaik dalam setiap produk yang kami ciptakan.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/sepatu.jpg?height=500&width=600" alt="Sumtread Story" className="rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi dalam setiap keputusan dan inovasi yang kami lakukan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tim profesional yang berdedikasi untuk memberikan yang terbaik bagi Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            "Menciptakan sepatu berkualitas tinggi yang menginspirasi setiap orang untuk melangkah dengan percaya diri,
            nyaman, dan stylish dalam menjalani aktivitas sehari-hari, sambil terus berinovasi untuk memberikan
            pengalaman terbaik bagi pelanggan."
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
