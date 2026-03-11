function SearchBar({value,onChange}){

return(

<input
placeholder="Search students..."
value={value}
onChange={e=>onChange(e.target.value)}
className="border p-3 rounded-lg mb-6 w-full"
/>

)

}

export default SearchBar