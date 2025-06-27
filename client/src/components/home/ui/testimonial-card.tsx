
export default function TestimonialCard() {
  return (
    <div className="max-w-sm w-full rounded-xl border border-gray-200 p-6 bg-white shadow-sm text-gray-800">
      <h3 className="text-base font-semibold mb-3">Heading about the review</h3>

      <p className="text-sm text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div>
          <div className="font-medium text-gray-700">Reviewer Name</div>
          <div>Company Position</div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
          className="w-14"
        />
      </div>
    </div>
  );
}
