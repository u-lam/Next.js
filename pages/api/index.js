// pages/api/data.js
// route => /api/data
import nc from "next-connect";

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send("Hello world");
  })
  .post((req, res) => {
    res.json({ hello: "world" });
  })
  .put(async (req, res) => {
    res.end("hello");
  });

export default handler;

//* THIS code below will return the same msg regardless of method.
// export default (req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify({ message: "hello" }));
// };
