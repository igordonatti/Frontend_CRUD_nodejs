export default function Input({placeholderText, type, onChangeFunction}){
  return (
    <input 
      type={type} 
      placeholder={placeholderText} 
      className="focus:outline-none p-2 ring-2 ring-neutral-400 focus:ring-sky-800 rounded"
      onChange={onChangeFunction}
    />
  )
}