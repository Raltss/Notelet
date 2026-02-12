import React from "react";
import Card from "./Card";
import { notes } from "../userNotes";
import { Pencil } from "lucide-react";

function createCard(arr) {
  return <Card title={arr.title} content={arr.content} />;
}

function Note() {
  return (
    <div>
      <div className="flex flex-wrap min-h-screen justify-center align-center">
        {notes.map(createCard)}
      </div>
      <button className="fixed bottom-0 right-0 m-10 rounded-full p-5 btn btn-primary w-18 h-18">
        {" "}
        <Pencil />{" "}
      </button>
    </div>
  );
}

export default Note;
