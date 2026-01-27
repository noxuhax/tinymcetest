import tinymce from "tinymce";

import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/models/dom";

import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/table";

import "tinymce-premium/plugins/advcode";

import "./styles.css";

tinymce.init({
  selector: "#editor",
  license_key: "",
  height: 500,
  menubar: "file edit view insert format tools table help",
  plugins: ["advcode", "link", "lists", "table"],
  toolbar:
    "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | table | advcode",
});
