import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './(components)/component/footer/footer.jsx';
import ResponsiveMenu from './(components)/component/navbar/resMenu2.jsx';

const inter = Inter({ subsets: ['latin'] });
// import Link from 'next/link';
import Hydration from './hydration';
import Header from './header';

export const metadata = {
  title: 'Furniture Shop',
  description: 'Buy overseas furniture at best price',
};

// const headerStyling = `flex justify-between items-center text-blue-700 text-center sticky top-0 left-0 p-6 bg-white border-b 
// border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md-4xl sm:p-8`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
        crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <body className={`flex flex-col min-h-screen relative ${inter.className}`}>
        <Hydration/>
        <ResponsiveMenu/>
        {/* <Header/> */}
        <div className='flex-1'>{children}</div>
        <Footer/>
        <div id='portal'></div>
      </body>
    </html>
  )
}