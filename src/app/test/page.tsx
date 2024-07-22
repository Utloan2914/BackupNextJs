import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff0e9]">
      <Head>
        <title>Petto</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap');
          
          .header {
            background-color: #f5f0e1;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          .nav a {
            color: #333;
            margin: 0 10px;
            font-family: 'Open Sans', sans-serif;
          }

          .nav a:hover {
            color: #000;
          }

          .phone {
            background-color: #ff6347;
            color: #fff;
            padding: 10px 20px;
            border-radius: 5px;
            font-family: 'Open Sans', sans-serif;
          }

          .hero-title {
            color: #233e8b;
            font-size: 4rem;
            text-align: center;
            font-weight: bold;
            line-height: 1.2;
            font-family: 'Raleway', sans-serif;
          }

          .hero-subtitle {
            color: #2b2b2b;
            text-align: center;
            margin-top: 20px;
            font-size: 1rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            font-family: 'Open Sans', sans-serif;
          }

          .hero-image {
            display: block;
            margin: 40px auto;
          }

          .product-card {
            background-color: #ffeb3b;
            padding: 20px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
          }

          .product-card p {
            margin: 5px 0;
            font-family: 'Open Sans', sans-serif;
          }

          .product-card button {
            background-color: #fff;
            color: #000;
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 10px;
            font-family: 'Open Sans', sans-serif;
          }

          .services {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 40px;
            text-align: center;
          }

          .service-item {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            font-family: 'Open Sans', sans-serif;
          }

          .service-item h2 {
            margin-top: 2px;
            font-size: 1.25rem;
            font-weight: bold;
          }

          .testimonial {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            margin-top: 40px;
            font-family: 'Open Sans', sans-serif;
          }

          .testimonial img {
            border-radius: 50%;
            width: 60px;
            height: 60px;
          }

          .testimonial-content {
            margin-left: 20px;
          }

          .testimonial-content p {
            margin: 5px 0;
          }

          .rating {
            display: flex;
            align-items: center;
            margin-top: 10px;
          }

          .rating span {
            color: #ffd700;
          }

          .gray-star {
            color: #d3d3d3;
          }
        `}</style>
      </Head>
      <header className="header py-4 flex justify-between items-center px-8">
        <div className="text-2xl font-bold flex items-center">
          Petto <span className="ml-2">🦴</span>
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </nav>
        <div className="phone">(480) 555-0103</div>
      </header>
      <main className="relative flex flex-col items-center py-16">
        <h1 className="hero-title">GROOMING AND SUPPLIES AT THE BEST RATES</h1>
        <p className="hero-subtitle">
          Little pets for a big heart. Fulfill all your pets needs. The final stop for your pets. The happy store for pets. A natural treat for your pets. The pets’ daycare.
        </p>
        <img src="/hero-image.png" alt="Pet Image" className="hero-image" width="600" height="600" />
        <div className="product-card">
          <div>
            <p className="font-bold">SEANIOT | 5KG</p>
            <p>Adult chicken and egg. Egg. Chicken 3 kg Dry Adult Dog Food</p>
            <button>Buy Now</button>
          </div>
        </div>
      </main>
      <div className="container mx-auto py-8">
        <div className="services md:grid md:grid-cols-3 md:gap-10">
          <div className="service-item">
            <div className="text-4xl">🐾</div>
            <h2>Grooming</h2>
          </div>
          <div className="service-item">
            <div className="text-4xl">🛁</div>
            <h2>Hygiene Care</h2>
          </div>
          <div className="service-item">
            <div className="text-4xl">🏕️</div>
            <h2>Training Camp</h2>
          </div>
        </div>
      </div>
      <div className="bg-[#fbf1e8] py-8">
        <div className="container mx-auto">
          <div className="testimonial">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
            <div className="testimonial-content">
              <p className="font-bold">ANN SMITH</p>
              <p>New York</p>
              <p>
                I highly recommend Petto! My two dogs received the care and attention they needed. Theyre really trustworthy.
              </p>
              <div className="rating">
                {[...Array(4)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="gray-star">★</span>
                <p className="ml-2">4.7/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
