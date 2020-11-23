import nc from "next-connect";
import notes from "../../../src/data/data";

// have to parseInt id bc it is a string in the db
const getNote = id => notes.find(n => n.id === parseInt(id));

//*Note: we are using query and not the params

const handler = nc()
  // GET the ID of the NOTE
  .get((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.statusCode(404);
      res.end();
      return;
    }

    res.json({ data: note });
  })
  // EDIT A NOTE
  .patch((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    const i = notes.findIndex(n => n.id === parseInt(req.query.id));
    const updated = { ...note, ...req.body };

    notes[i] = updated;
    res.json({ data: updated });
  })
  // DELETEING A NOTE
  .delete((req, res) => {
    const note = getNote(req.query.id);

    if (!note) {
      res.status(404);
      res.end();
      return;
    }

    const i = notes.findIndex(n => n.id === parseInt(req.query.id));
    notes.splice(i, 1);

    res.json({ data: req.query.id });
  });

export default handler;
