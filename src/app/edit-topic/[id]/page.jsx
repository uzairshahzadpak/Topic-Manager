// import EditeTopicForm from "@/components/EditTopicForm";
//  const getTopicById = async (id) =>{
//   try{
//     import EditeTopicForm from "@/components/EditTopicForm";

// const getTopicById = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/topics ${id}`,{
//       cache: "no-store"
//     })
//     if (!res.ok) {
//       throw new Error("Failed to fetch topic");
//     }

//     return await res.json();

//   } catch (error) {
//     console.log("GET TOPIC ERROR:", error);
//     return { topic: null };
//   }
// };

// export default async function EditTopic({ params }) {
//   const { id } = await params;

//   const data = await getTopicById(id);

//   if (!data || !data.topic) {
//     return <div>Topic not found</div>;
//   }

//   const { title, description } = data.topic;

//   return (
//     <EditeTopicForm
//       id={id}
//       title={title}
//       description={description}
//     />
//   );
// }
   
//     if(!res.ok){
//       throw new Error("Failed to fetch topic");

//     }
//     return res.json();


//   }catch(error){
//     return { topic: null };


//   }
//  }
// export default async function EditTopic({ params }) {
//   const { id } = await params;
//   const {topic} = await getTopicById(id);
//   const {title, description

// } = topic;

//   return (
//     <EditeTopicForm id={id} title={title} description={description

// }/>
//   );
// }


import EditeTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/topics/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();

  } catch (error) {
    console.log("GET TOPIC ERROR:", error);
    return { topic: null };
  }
};

export default async function EditTopic({ params }) {
  const { id } = await params;

  const { topic } = await getTopicById(id);

  if (!topic) {
    return <div>Topic not found</div>;
  }

  const { title, description } = topic;

  return (
    <EditeTopicForm
      id={id}
      title={title}
      description={description}
    />
  );
}

