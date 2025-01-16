import Image from 'next/image'
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Welcome to ToaruZone
      </h1>
      <p className="text-lg text-gray-700">
        Your one-stop platform to find jobs and manage your schedule.
      </p>
      <a
        href="/calendar"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
      >
        Go to Calendar
      </a>
    </div>
  )
}
