export default function SocialLoginButtons() {
  return (
    <div className="flex justify-around space-x-6 mb-7 sm:mb-5">
      <button className="p-2 rounded-full hover:bg-blue-100 transition cursor-pointer shadow-md sm:shadow-lg">
        <svg
          className="w-10 h-10 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 7.94 9.8v-6.93H7.1v-2.87h2.84V9.84c0-2.8 1.67-4.35 4.23-4.35 1.23 0 2.52.22 2.52.22v2.77h-1.42c-1.4 0-1.84.87-1.84 1.76v2.12h3.13l-.5 2.87h-2.63V21.8C18.56 20.87 22 16.84 22 12z" />
        </svg>
      </button>

      <button className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer shadow-md sm:shadow-lg">
        <svg
          className="w-10 h-10 text-black"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.384 2H21.8l-7.626 8.746L23.25 22h-7.632l-5.984-7.177L3.9 22H.48l8.22-9.42L.75 2h7.74l5.392 6.518L18.384 2zm-1.326 18.47h2.088L6.075 3.41H3.87l13.188 17.06z" />
        </svg>
      </button>

      <button className="p-2 rounded-full hover:bg-red-100 transition cursor-pointer shadow-md sm:shadow-lg">
        <svg className="w-10 h-10" viewBox="0 0 48 48">
          <path
            fill="#EA4335"
            d="M24 9.5c3.1 0 5.7 1.1 7.6 2.8l5.6-5.6C33.4 3.2 28.9 1.5 24 1.5 14.8 1.5 6.9 7.5 3.5 16.1l6.9 5.4C12 15.3 17.5 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.5 24c0-1.6-.1-2.8-.3-4H24v7.5h12.7c-.5 2.9-2.1 5.3-4.4 6.9l6.9 5.4c4-3.7 6.3-9.1 6.3-15.8z"
          />
          <path
            fill="#FBBC05"
            d="M10.4 28.4a14.8 14.8 0 0 1 0-8.8l-6.9-5.4a23.97 23.97 0 0 0 0 19.6l6.9-5.4z"
          />
          <path
            fill="#34A853"
            d="M24 46.5c6.5 0 12-2.1 16-5.7l-6.9-5.4c-2.1 1.4-4.9 2.3-9.1 2.3-6.5 0-12-4.4-14-10.3l-6.9 5.4c3.4 8.6 11.3 14.6 20.9 14.6z"
          />
        </svg>
      </button>
    </div>
  );
}
