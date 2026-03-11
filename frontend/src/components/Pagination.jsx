function Pagination({page,totalPages,setPage}){

return(

<div className="flex gap-2 mt-4">

<button
disabled={page===1}
onClick={()=>setPage(page-1)}
>
Prev
</button>

<span>{page}/{totalPages}</span>

<button
disabled={page===totalPages}
onClick={()=>setPage(page+1)}
>
Next
</button>

</div>

)
}

export default Pagination