import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="flex flex-col justify-between w-px-500 h-px-500 relative m-auto ">
      <p className="mb-5 text-3xl text-center">
        Let&apos;s Play Enqoqelesh(Riddle)
      </p>
      <input
        className="w-full h-px-30 my-3 py-2 rounded text-black text-center text-xl focus:outline-none"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <button
        className="font-bold py-2 px-4 rounded bg-blue-700 text-white hover:bg-blue-500"
        onClick={handleClick}
      >
        Start
      </button>
    </div>
  );
}
