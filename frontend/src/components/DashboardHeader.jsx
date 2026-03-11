import { Cog6ToothIcon, UserCircleIcon } from "@heroicons/react/24/outline"

function DashboardHeader(){

return(

<div className="glass-card flex justify-between items-center p-4 mb-6 text-white">

<div className="flex items-center gap-3">

<h2 className="text-xl font-bold">
<span className="opacity-70">
Student Management System
</span>
</h2>



</div>

<div className="flex gap-4">

<Cog6ToothIcon className="w-6"/>
<UserCircleIcon className="w-7"/>

</div>

</div>

)

}

export default DashboardHeader