import { Editor } from "@tinymce/tinymce-react";

import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/models/dom";

import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/table";

import advcodeUrl from "tinymce-premium/plugins/advcode/plugin.min.js?url";
import licenseKeyManagerUrl from "tinymce-premium/plugins/licensekeymanager/plugin.min.js?url";

const editorInit = {
  license_key: "",
  height: 500,
  menubar: "file edit view insert format tools table help",
  external_plugins: {
    advcode: advcodeUrl,
    licensekeymanager: licenseKeyManagerUrl,
  },
  plugins: ["licensekeymanager", "advcode", "link", "lists", "table"],
  toolbar:
    "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | table | advcode",
};

const initialContent = `
  <h2>Welcome!</h2>
  <p>Open the Advanced Code editor from the toolbar to inspect HTML.</p>
`;

export default function App() {
  return (
    <>
      <header>
        <h1>TinyMCE + AdvCode (Premium)</h1>
        <p>Demo editor with the Advanced Code plugin enabled.</p>
      </header>
      <main>
        <Editor initialValue={initialContent} init={editorInit} />
      </main>
    </>
  );
}
