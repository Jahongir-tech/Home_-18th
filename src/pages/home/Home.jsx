import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white">
      <div className="text-center p-8 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Foydalanuvchilarni Boshqarish Tizimiga Xush Kelibsiz!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Foydalanuvchilarni samarali boshqaring. Yangi foydalanuvchilarni
          qo'shing, yangilang va o'chiring – barchasi bir platformada!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/create-user"
            className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-100 transition-colors"
          >
            Boshlash
          </a>
          <a
            href="/users"
            className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-100 transition-colors"
          >
            Foydalanuvchilarni Ko'rish
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
