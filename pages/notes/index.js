/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Link from "next/link";

//* AFTER setting up theme-ui
// *AFTER setting up getServerSideProps, remove const notes and inject {notes} into the function
export default ({ notes }) => {
  // const notes = new Array(15)
  //   .fill(1)
  //   .map((e, i) => ({ id: i, title: `This is my note ${i}` }));
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {notes.map(note => (
          <div sx={{ width: "33%", p: 2 }}>
            <Link key={note.id} href='/notes/[id]' as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

//* getServerSideProps will get the data upon every request (not at build time)
//* Great for dynamic things, provides you with params
//* will only run on the server so will not show on the front end

export async function getServerSideProps() {
  // should put baseURL in .env file
  const res = await fetch(`${process.env.API_URL}/api/note/`);
  // data will come back as a data {}, and you can deconstruct it so it's not data.data
  const { data } = await res.json();
  // console.slog(data);
  return {
    props: { notes: data }
  };
}

//* BEFORE setting up theme-ui
// export default () => {
//   const notes = new Array(15)
//     .fill(1)
//     .map((e, i) => ({ id: i, title: `Note: ${i}` }));

//   return (
//     <div>
//       <h1>Notes</h1>

//       {notes.map(note => (
//         <div>
//           {/* only need 'as' if you're using dynamic routes. If you already know the route, don't need to use 'as'. */}
//           <Link key={note.id} href='/notes/[id]' as={`/notes/${note.id}`}>
//             <a>
//               <b>{note.title}</b>
//             </a>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };
