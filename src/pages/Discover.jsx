// import { Error,Loader,SongCard } from "../components";
import { genres } from "../assets/constants";
const Discover = () => {

 return (
<div className=" flex flex-col ">
 <div className=" w-full flex justify-between  items-center sm:flex-row flex-col mt-4 mb-10">
    <h1 className="text-3xl font-bold text-white text-left">Discover</h1>
 <select
 onChange={() => {}}
 value=''
 className=" bg-black text-gray-200 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
 > 
{
    genres.map((genre) => (<option key={genre?.value} value={genre?.value}>{genre.title}</option>))
}

 </select>
 </div>
</div>)};

export default Discover;
