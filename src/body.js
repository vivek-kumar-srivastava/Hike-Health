import Footer from '@/footer';
import Image from 'next/image';
import Link from 'next/link';
import CircularGallery from './app/circular-gallery';

export const Body = () => {
  const proj = 'Hike Health';

  return (
    <>
      {/* Hero Section */}
      <div className='relative mt-6 mx-10 lg:mx-40 rounded-3xl overflow-hidden shadow-lg h-[700px]'>
        {/* Background image */}
        <Image
          src='/mainbg.webp'
          alt='Background'
          fill
          className='object-cover rounded-3xl'
          priority
        />
        <div className='absolute inset-0 bg-black/40 rounded-3xl' />

        {/* Foreground content */}
        <div className='relative z-10 flex flex-col items-center text-center py-28 px-6'>
          <h1 className='text-5xl lg:text-7xl font-bold text-white drop-shadow-lg'>
            Welcome to <span className='text-green-400'>{proj}</span>
          </h1>
          <Image
            src='/22.png'
            alt='Logo'
            height={350}
            width={350}
            className='mt-10 animate-growOnLoad'
          />
          <h2 className='text-3xl lg:text-5xl text-green-200 font-medium mt-6'>Free Your Soul ✈️</h2>
        </div>
      </div>

      {/* Packages Section */}
      <section className='mx-10 lg:mx-40 mt-16 mb-20'>
        <h2 className='text-center text-4xl font-bold text-indigo-800 mb-12'>
          Exclusive Packages 🏝️
        </h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          <Link
            href='https://www.trekupindia.com/har-ki-dun-trek'
            className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 overflow-hidden'
          >
            <div className='w-full h-56'>
              <img
                className='w-full h-full object-cover'
                src='https://cvsqtgaxsa.cloudimg.io/https://images.prismic.io/indiahike/c7e7a137-be09-47dc-94f1-ffe502fcf081_Har+Ki+Dun_HKD_Ruinsara+Tal+-+Subhrajyoti+Das+-+Valley+of+Gods.jpg?&q=50&org_if_sml=1'
                alt='Har Ki Doon Trek'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900'>Har Ki Doon Trek</h3>
              <p className='text-indigo-600 font-bold mt-2'>₹ 9,499 / 7D/6N</p>
              <p className='text-gray-500 text-sm mt-1'>Uttarakhand</p>
            </div>
          </Link>

          <Link
            href='https://www.trekupindia.com/hampta-pass-trek'
            className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 overflow-hidden'
          >
            <div className='w-full h-56'>
              <img
                className='w-full h-full object-cover'
                src='https://www.himalayanhikers.in/wp-content/uploads/2024/08/hampta-pass-2.jpg'
                alt='Hampta Pass Trek'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900'>Hampta Pass Trek</h3>
              <p className='text-indigo-600 font-bold mt-2'>₹ 6,350 - 5D/4N</p>
              <p className='text-gray-500 text-sm mt-1'>Himachal Pradesh</p>
            </div>
          </Link>

          <Link
            href='https://www.trekupindia.com/valley-of-flowers-trek'
            className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 overflow-hidden'
          >
            <div className='w-full h-56'>
              <img
                className='w-full h-full object-cover'
                src='https://www.trekupindia.com/wp-content/uploads/2024/05/uttrakhand-valley-of-flowers-trek.webp'
                alt='Valley Of Flowers Trek'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900'>Valley Of Flowers Trek</h3>
              <p className='text-indigo-600 font-bold mt-2'>₹ 8,250 - 6D/5N</p>
              <p className='text-gray-500 text-sm mt-1'>Chamoli, Uttarakhand</p>
            </div>
          </Link>

          <Link
            href='https://www.trekupindia.com/kedarkantha-trek'
            className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 overflow-hidden'
          >
            <div className='w-full h-56'>
              <img
                className='w-full h-full object-cover'
                src='https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1695730492/bbj/gbaf0ppp9gybaqaumgz4.jpg'
                alt='Kedarkantha Trek'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900'>Kedarkantha Trek</h3>
              <p className='text-indigo-600 font-bold mt-2'>₹ 4,999 - 5D/4N</p>
              <p className='text-gray-500 text-sm mt-1'>Uttarakhand</p>
            </div>
          </Link>

          <Link
            href='https://www.trekupindia.com/kashmir-great-lakes-trek'
            className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 overflow-hidden'
          >
            <div className='w-full h-56'>
              <img
                className='w-full h-full object-cover'
                src='https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Overview_of_the_Kashmir_Great_Lakes_Trek_b7aa439cad.webp'
                alt='kashmir great lakes trek'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900'>Kashmir Great Lakes Trek</h3>
              <p className='text-indigo-600 font-bold mt-2'>₹ 17,450 - 8D/7N</p>
              <p className='text-gray-500 text-sm mt-1'>Jammu & Kashmir</p>
            </div>
          </Link>

          <Link
            href='https://www.trekupindia.com/chandrabhaga-glaciers-trek'
            className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 overflow-hidden'
          >
            <div className='w-full h-56'>
              <img
                className='w-full h-full object-cover'
                src='https://images.prismic.io/indiahike/d32b4e81-390f-48b4-a0da-6e0b254d3e8e_Pangarchulla_PC_Satyen+Dasgupta_trailwithtrekkers_winter_snow_routes_.jpg?auto=compress,format'
                alt='Chandrabhaga Glaciers Trek'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900'>Chandrabhaga Glaciers Trek</h3>
              <p className='text-indigo-600 font-bold mt-2'>₹ 18,950 - 6D/5N</p>
              <p className='text-gray-500 text-sm mt-1'>Himachal Pradesh</p>
            </div>
          </Link>

          {/* Duplicate this card for more packages */}
        </div>
      </section>

      {/* Circular Gallery Section */}
      <section className='relative mb-20 z-10 mx-10 lg:mx-40 mt-16 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 rounded-3xl p-10 shadow-lg'>
        <h2 className='text-center text-4xl font-bold text-white'>
          Make Your Trip Look Like These 🌍
        </h2>
        <div className='h-[600px]'>
          <CircularGallery bend={3} textColor='#ffffff' borderRadius={0.05} />
        </div>
      </section>
      <Footer />
    </>
  );
};
