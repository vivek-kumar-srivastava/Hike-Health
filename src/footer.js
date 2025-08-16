import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-8 mt-20'>
      <div className='container mx-auto flex flex-col items-center justify-center space-y-4'>
        <h3 className='text-lg font-semibold'>Connect with me</h3>

        <Link
          href='https://www.linkedin.com/in/vivek-kumar-srivastava-1503b824a/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:scale-110 transition-transform'
        >
          <img
            src='https://icon2.cleanpng.com/lnd/20241121/rz/adf239092480ba98990b8b0e39507e.webp'
            alt='LinkedIn'
            width={40}
            height={40}
            className='rounded-md'
          />
        </Link>

        <p className='text-sm text-gray-400'>
          © {new Date().getFullYear()} Vivek Kumar Srivastava. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
