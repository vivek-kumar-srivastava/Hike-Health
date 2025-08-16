'use client';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <div
      className='absolute top-4 left-1/2 -translate-x-1/2 
                    w-[100%] lg:w-[70%] rounded-2xl z-30 
                    bg-white/10 backdrop-blur-md shadow-lg
                    fixed top-0 left-0 w-full z-50'
    >
      <nav className='flex items-center justify-center gap-6 px-6 py-3 text-white font-medium'>
        <Link
          href='/'
          className={`${pathName === '/' ? 'text-yellow-300' : 'hover:text-yellow-200'}`}
        >
          Home
        </Link>

        <SignedOut>
          <SignInButton className='hover:text-yellow-200' mode='modal'>
            Sign-In
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </div>
  );
};
