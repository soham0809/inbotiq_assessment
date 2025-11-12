import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome
          </h1>
          <p className="text-gray-600 mb-8">
            Role-based authentication system
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/login" 
            className="w-full btn-primary block text-center"
          >
            Login
          </Link>
          
          <Link 
            href="/signup" 
            className="w-full btn-secondary block text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
