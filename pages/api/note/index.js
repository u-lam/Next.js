import nc from "next-connect";
import notes from "../../../src/data/data";

const handler = nc()
  // CREATING A NOTE
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now()
    };
    notes.push(note);
    res.json({ data: note });
  })
  // GET ALL NOTES
  .get((req, res) => {
    res.json({ data: notes });
  });

export default handler;
