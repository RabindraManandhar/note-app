import React, { useContext, useReducer } from "react";
import Notescontext from "./context";
import notesReducer from "./reducer";
import Nav from "./components/Nav";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import EditNote from "./components/EditNote";

function App() {
  const initialState = useContext(Notescontext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  console.log(state);
  return (
    <Notescontext.Provider value={{ state, dispatch }}>
      <Nav />
      {state.currentNote === null ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
    </Notescontext.Provider>
  );
}

export default App;
