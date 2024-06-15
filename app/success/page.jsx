import Link from 'next/link';

export default function Success() {

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
          <p className="text-3xl mb-6">Done!</p>
          <Link href="/">
            <a className="text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">
              Go back
            </a>
          </Link>
        </div>
      );
}