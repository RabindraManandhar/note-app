import React from "react";

const NotesContext = React.createContext({
  currentNote: null,
  notes: [
    { id: 1, text: "Go school" },
    { id: 2, text: "Do project" },
    { id: 3, text: "Clean room" }
  ]
});

export default NotesContext;
