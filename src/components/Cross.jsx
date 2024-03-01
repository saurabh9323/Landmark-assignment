const Cross = () => {
  return (
    <div className="flex items-center justify-center w-5 h-5 mt-1 rounded-full border-2 border-red-600">
      <svg
        className="w-full h-full text-red-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default Cross;
