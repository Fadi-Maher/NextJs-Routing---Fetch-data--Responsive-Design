 
function NotFoundPage() {
  return (
    <div className="min-h-full px-4 py-4 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <div className="mt-5 container">
          <div className="flex mt-6">
            <p className="text-4xl font-extrabold text-blue-600 sm:text-5xl">
              Oops !
            </p>
            <div className="ml-6">
              <div className="pl-6 border-l border-gray-500">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Something went wrong!
                </h2>
                <p className="mt-1 text-lg text-gray-500 dark:text-white">
                  Please select a topic from the tag cloud above or go back home.
                </p>
                <p className="mt-1 text-lg text-gray-500 dark:text-white">
                  Go back home Button.
                </p>
              </div>
              <div className="flex mt-10 space-x-3 sm:pl-6">
                 <a
                  href="/"
                  className="inline-flex items-center px-6 py-4 text-lg font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Go back home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
