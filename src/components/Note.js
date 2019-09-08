import React from "react";

export default function Note({ note }) {
  return (
    <div className="note">
      <p>{note.text}</p>
      <div class="btn-container">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    </div>
  );
}
