import React, { useContext, useReducer } from "react";
import Notescontext from "./context";
import notesReducer from "./reducer";
import Nav from "./components/Nav";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

function App() {
  const initialState = useContext(Notescontext);
  const [state, dispatch] = useReducer(notesReducer, initialState);

  return (
    <Notescontext.Provider value={{ state, dispatch }}>
      <Nav />
      <AddNote />
      <NoteList />
    </Notescontext.Provider>
  );
}

export default App;
