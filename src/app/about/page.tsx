import React from 'react';
import Image from 'next/image';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

export default function AboutPage() {
  return (
    <div className="mx-auto px-4 py-8" >
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]">
          {/* Main heading card - spans 3 columns */}
          <div className="card bg-base-100 shadow-xl md:col-span-3 hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h1 className="card-title text-4xl">About The Walk of Life</h1>
              <p>The Walk of Life is a simple, elegant healing tool designed to help individuals and communities understand the losses we have experienced, process grief, and connect with the chain of being that carries us.</p>
            </div>
          </div>

          {/* Mission card */}
          <div className="card bg-base-100 shadow-xl md:col-span-2 hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-3xl">Mission and Vision</h2>
              <p>Our mission is to provide a community-driven healing space where individuals can reconnect with their past, understand their present, and find hope for the future.</p>
            </div>
          </div>

          {/* Tools card - tall */}
          <div className="card bg-base-100 shadow-xl md:row-span-2 hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-3xl">Tools and Materials</h2>
              <ul className="list-disc pl-6">
                <li>A compass to determine direction</li>
                <li>Masking tape to mark the circle</li>
                <li>A candle (for symbolism)</li>
                <li>A bell (to signal transitions)</li>
                <li>Four sheets of paper cut in half</li>
                <li>A walking stick, talking stick, tin whistle, or flute</li>
              </ul>
            </div>
          </div>

          {/* Testimonial card */}
          <div className="card bg-base-100 shadow-xl md:col-span-2 hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-3xl">Testimonials</h2>
              <div className="carousel w-full">
                <div id="testimonial1" className="carousel-item w-full p-4">
                  <blockquote className="italic">
                    "The Walk of Life helped me reconnect with my family's past and understand the hardships they endured. It provided me with a sense of closure and connection that I never thought possible."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Founders card - spans 2 columns */}
          <div className="card bg-base-100 shadow-xl md:col-span-2 hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-3xl">Meet the Founders</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card bg-base-200">
                  <figure className="px-4 pt-4">
                    <div className="w-48 h-48 relative rounded-full overflow-hidden">
                      <Image src="/murray-kelly.jpg" alt="Murray Kelly" fill className="object-cover" />
                    </div>
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">Murray Kelly</h3>
                    <p>Co-founder of The Walk of Life</p>
                  </div>
                </div>
                <div className="card bg-base-200">
                  <figure className="px-4 pt-4">
                    <div className="w-48 h-48 relative rounded-full overflow-hidden">
                      <Image src="/phillip-campiou.jpg" alt="Phillip Campiou" fill className="object-cover" />
                    </div>
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">Phillip Campiou</h3>
                    <p>Co-founder of The Walk of Life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get Involved card */}
          <div className="card bg-primary text-primary-content hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-3xl">Get Involved</h2>
              <p>Join our regular Walk of Life workshops and become part of this beautiful journey.</p>

              <div className="card-actions justify-end">
                <SocialIcons />
                <button className="btn btn-secondary mt-8">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}