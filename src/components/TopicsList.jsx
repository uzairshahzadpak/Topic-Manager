// import Link from "next/link"; 
// import { HiPencilAlt } from "react-icons/hi"; 
// import RemoveBtn from "./RemoveBtn";
 
 
// const getTopics = async () => { 
//   try { 
    
//     const res = await fetch("/api/topics", {
//   cache: "no-store",
// });
//     if (!res.ok) { 
//       throw new Error("Failed to fetch topics"); 
 
//     } 
//     return res.json(); 
 
//   } catch (err) { 
 
//     console.log("Error Loading topics", err); 
//     return { topics: [] }; 
 
//   } 
// } 
 
 
// export default async function TopicsList() { 
//   const { topics } = await getTopics(); 
 
//   return ( 
//     <> 
//       { 
//         topics.map((t) => ( 
//           <div key={t._id} className="flex justify-between gap-5 
//      p-4 border border-slate-300 my-3"> 
//             {/* 1 */} 
//             <div> 
//               <h1 className="font-bold text-2xl sm:text-3xl ">{t.title}</h1> 
//               <h3 className="text-lg sm:text-xl"> {t.description}</h3> 
//             </div> 
 
//             {/* 2 */} 
//             <div className="flex items-center gap-2 "> 

//               <RemoveBtn id={t._id}/>
 
 
//               <Link href={`/edit-topic/${t._id}`}> 
//                 <HiPencilAlt size={24} /> 
//               </Link>   
//             </div> 
 
//           </div> 
//         )) 
 
//       } 
 
 
 
 
//     </> 
//   ) 
// } 
 
   import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import connectionMongodb from "@/libs/mongodb";
import Topic from "@/model/topic";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
    await connectionMongodb();
    const topics = await Topic.find();
    return { topics: JSON.parse(JSON.stringify(topics)) };
  } catch (err) {
    console.log("Error Loading topics", err);
    return { topics: [] };
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="flex justify-between gap-5 p-4 border border-slate-300 my-3"
        >
          {/* Left side - Title & Description */}
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl">{t.title}</h1>
            <h3 className="text-lg sm:text-xl">{t.description}</h3>
          </div>

          {/* Right side - Edit & Delete buttons */}
          <div className="flex items-center gap-2">
            <RemoveBtn id={t._id}/>
            <Link href={`/edit-topic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}