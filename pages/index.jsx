/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Link from "next/link";
// import "../src/components/styles.module.css";
import dynamic from "next/dynamic";

const Browser = dynamic(() => import("../src/components/browser"), {
  ssr: false
});

// AFTER setting up theme-ui
export default ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%"
      }}
    >
      <h1 sx={{ fontSize: 4, my: 0 }}>{content.title}</h1>
      <Browser />
    </div>
  </div>
);

// simulate a CMS fetch
export function getStaticProps() {
  // get data from CMS
  //* Bc you're passing props.content here, deconstruct it in the function above
  return {
    props: {
      content: {
        title: "This is my really nice app"
      }
    }
  };
}

// BEFORE using theme-ui
// const Page = () => (
//   <div>
//     <h1>Home Index Page</h1>
//     <Link href='/notes'>
//       <a>Link to Note</a>
//     </Link>
//   </div>
// );

// export default Page;
