export default function Button({placeholderText, onClickFunction}) {
  return(
    <button 
      className="text-white bg-black w-4/5 p-2 rounded hover:bg-sky-800"
      onClick={onClickFunction}
    >
      {placeholderText}
    </button>
  )
}