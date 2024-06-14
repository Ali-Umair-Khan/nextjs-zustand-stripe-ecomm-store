import Link from 'next/link';

export default function Success() {

    return(
        <div>
            <p>Done!</p>
            <Link href={'/'}>Go back</Link>
        </div>
    )
}