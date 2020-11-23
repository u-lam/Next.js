/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//* THIS IS ALL CLIENT SIDE ROUTING

//* AFTER setting up theme-ui
export default ({ note }) => {
  // const router = useRouter();
  // once you inject {note}, you no longer need the query below
  // const { id } = router.query;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {note.title} </h1>
    </div>
  );
};

//* getServerSideProps will get the data upon every request (not at build time)
//* Great for dynamic things, provides you with params
//* will only run on the server so will not show on the front end
export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data }
    };
  }
}

//* BEFORE setting up theme-ui
// export default () => {
//   const router = useRouter();
//   // id that's deconstructed here is the same [id] in the file name
//   // query is an object with a bunch of parameters, and id is one of them
//   const { id } = router.query;

//   return (
//     <div>
//       <button onClick={e => router.push("/")}>Go Home</button>
//       {/* <button onClick={e => router.push('/user/[id]', `/user/${id}`)}>
//         Dashboard
//       </button> */}
//       <h1>Note: {id}</h1>
//       <Link href='/notes'>
//         <a>Notes</a>
//       </Link>
//     </div>
//   );
// };
