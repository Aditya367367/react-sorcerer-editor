import React, { useState, useEffect, useRef } from "react";
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";

const EditorComponent = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const editorRef = useRef(null);

  // Reset formatting before applying new formatting
  const resetFormatting = (currentState) => {
    let newState = currentState;

    // Clear block type
    const currentBlockType = RichUtils.getCurrentBlockType(currentState);
    if (currentBlockType !== "unstyled") {
      newState = RichUtils.toggleBlockType(newState, currentBlockType);
    }

    // Clear inline styles
    const inlineStyles = ["BOLD", "ITALIC", "UNDERLINE", "STRIKETHROUGH"];
    inlineStyles.forEach((style) => {
      if (newState.getCurrentInlineStyle().has(style)) {
        newState = RichUtils.toggleInlineStyle(newState, style);
      }
    });

    return newState;
  };

  // Handle text formatting based on user input
  const handleBeforeInput = (chars) => {
    const content = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    const block = content.getBlockForKey(selection.getStartKey());
    const blockText = block.getText();

    // Check if the space follows a shortcut like #, **, or ~~
    if (chars === " ") {
      if (blockText === "#") {
        setEditorState(RichUtils.toggleBlockType(resetFormatting(editorState), "header-one")); // Heading format
        return "handled";
      }
      if (blockText === "**") {
        setEditorState(RichUtils.toggleInlineStyle(resetFormatting(editorState), "BOLD")); // Bold format
        return "handled";
      }
      if (blockText === "~~") {
        setEditorState(RichUtils.toggleInlineStyle(resetFormatting(editorState), "STRIKETHROUGH")); // Strikethrough format
        return "handled";
      }
    }

    // Allow normal typing, including spaces
    return "not-handled";
  };

  // Save content to localStorage
  const saveContent = () => {
    const content = editorState.getCurrentContent();
    const rawContent = convertToRaw(content);
    localStorage.setItem("editorContent", JSON.stringify(rawContent)); // Store in localStorage
    alert("Content saved!");
  };

  // Load saved content when the component is mounted
  useEffect(() => {
    const savedData = localStorage.getItem("editorContent");
    if (savedData) {
      const content = convertFromRaw(JSON.parse(savedData));
      setEditorState(EditorState.createWithContent(content)); // Load saved content
    }
  }, []);

  // Focus the editor when the container is clicked
  const focusEditor = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "30px auto", maxWidth: "800px" }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
          minHeight: "300px",
          cursor: "text",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
        onClick={focusEditor} // Use focusEditor to focus the editor
      >
        <Editor
          ref={editorRef} // Attach the editor reference
          editorState={editorState}
          onChange={setEditorState} // Correctly update the editor state
          handleBeforeInput={handleBeforeInput} // Handle formatting commands
          placeholder="Start typing here..."
        />
      </div>

      <button
        onClick={saveContent}
        style={{
          marginTop: "20px",
          padding: "12px 30px",
          backgroundColor: "#007bff",
          color: "#fff",
          fontSize: "16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
        onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
      >
        Save Content
      </button>
    </div>
  );
};

export default EditorComponent;
