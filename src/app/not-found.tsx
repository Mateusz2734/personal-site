import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='text-center'>
            <h1 className='text-8xl md:text-9xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500'>Oops!</h1>
            <h2 className='text-2xl font-semibold mb-4'>404 - PAGE NOT FOUND</h2>
            <p className='max-w-sm mb-4'>The page you are looking for might have been removed or is temporarily unavailable.</p>
            <Button className="font-bold" variant="default">
                <Link href="/">
                    GO TO HOMEPAGE
                </Link>
            </Button>
        </div>
    );
}