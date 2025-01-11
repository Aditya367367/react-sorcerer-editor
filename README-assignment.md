# React Sorcerer Editor

This project is a take-home test for creating a text editor using React and Draft.js. The editor includes formatting features, content persistence, and functionality as specified in the assignment.

---

## Features

1. **Heading Formatting:**
   - Typing `#` at the beginning of a line and pressing space converts the line into a heading.
   - Example:
     ```
     # This is a heading
     ```

2. **Bold Formatting:**
   - Typing `**` at the beginning of a line and pressing space applies bold formatting to the text on that line.
   - Example:
     ```
     ** This is bold
     ```

3. **Underline Formatting:**
   - Typing `~~` at the beginning of a line and pressing space applies underline formatting to the text on that line.
   - Example:
     ```
     ~~ This is underlined
     ```

4. **Content Persistence:**
   - Clicking the "Save" button stores the editor's content in `localStorage`.
   - Reloading the page retrieves the saved content and restores it to the editor.

---

## Instructions to Run the Project Locally

### Prerequisites
Make sure you have the following installed:
- Node.js (v14 or later)
- npm or yarn

### Steps

1. **Clone the Repository:**
   ```bash
   git clone <ghttps://github.com/Aditya367367/react-sorcerer-editor.git>
   ```

2. **Navigate to the Project Folder:**
   ```bash
   cd project-folder
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Application:**
   ```bash
   npm start
   ```
   The application will start at `http://localhost:3000` in your browser.

---

## Deployment

The live application is deployed on CodeSandbox. You can access it here:
[React Sorcerer Editor](https://codesandbox.io/s/react-sorcerer-editor-xyz123)

---

## How It Works
- Start typing in the editor.
- Use the special prefixes (`#`, `**`, `~~`) for formatting.
- Click the "Save" button to persist content.
- Refresh the page to see the restored content.

---

## Notes
- Ensure your browser allows access to `localStorage` for proper functionality.
- Follow the project structure and naming conventions provided in the assignment.

---

## License
This project is solely for assessment purposes and should not be used for any other purpose without permission.

---

Feel free to reach out for any further clarifications or issues!
