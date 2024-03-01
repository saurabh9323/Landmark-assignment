const CheckCircle = () => {
  return (
    <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-green-400">
      <svg
        className="w-12 h-12 text-green-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
};

export default CheckCircle;
