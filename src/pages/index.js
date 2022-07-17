import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
         <>
		 <h2>By Snehal Pancholi</h2>
                            <Link href="/login">
                                <a className="text-sm text-gray-700 underline">
                                    Login
                                </a>
                            </Link>

                            <Link href="/register">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    Register
                                </a>
                            </Link>
                        </>
    )
}
