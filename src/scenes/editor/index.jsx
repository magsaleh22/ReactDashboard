import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React, { version } from "react";
import Sidebar from "./components/Sidebar";
import EditorComp from "./components/EditorComp";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";
import "react-mde/lib/styles/css/react-mde-all.css";

const Editor = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function deleteNote(event, noteId) {
    event.stopPropagation();

    setNotes((prevNotes) => {
      const newNotes = [...prevNotes];
      const idx = getCurrentNoteIndex(noteId);
      newNotes.splice(idx, 1);
      return newNotes;
    });
  }

  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function arrayMove(arr, fromIndex) {
    if (fromIndex !== 0) {
      // if the index is 0, don't arrange anything
      let element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr = [element, ...arr];
    }

    return arr;
  }

  function getCurrentNoteIndex(nodeID) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === nodeID) {
        return i;
      }
    }
  }

  function updateNote(text) {
    // once we enter here send a signal to the position of the note msaleh
    // after editing, just rearrange

    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );

    // rearrange msaleh method
    setNotes((prevNotes) => {
      const dataToSort = [...prevNotes]; // useState works only with new array, do not mutate the original list
      return arrayMove(dataToSort, getCurrentNoteIndex(currentNoteId), 0);
    });
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <Box m="20px">
      <Header
        title="Markdown Editor"
        subtitle="write your markdown text and preview it into HTML"
      />
            <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR  flex="row shrink width"*/}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Mardown Editor</Typography>
      <main>
        {notes.length > 0 ? (
          <Split sizes={[30, 70]} direction="horizontal" className="split">
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              delNote={deleteNote}
            />
            {currentNoteId && notes.length > 0 && (
              <EditorComp currentNote={findCurrentNote()} updateNote={updateNote} />
            )}
          </Split>
        ) : (
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button className="first-note" onClick={createNewNote}>
              Create one now
            </button>
          </div>
        )}
      </main>
      </Box>
      </Box>
    </Box>
  );
};

export default Editor;
