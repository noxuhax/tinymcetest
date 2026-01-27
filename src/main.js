import tinymce from "tinymce";

import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/models/dom";

import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/table";

import "tinymce-premium/plugins/advcode";
import "tinymce-premium/plugins/licensekeymanager";

import "./styles.css";

const premiumPluginBase = new URL(
  "tinymce-premium/plugins/",
  import.meta.url,
).href;

tinymce.init({
  selector: "#editor",
  license_key: "",
  height: 500,
  menubar: "file edit view insert format tools table help",
  external_plugins: {
    advcode: `${premiumPluginBase}advcode/plugin.min.js`,
    licensekeymanager: `${premiumPluginBase}licensekeymanager/plugin.min.js`,
  },
  plugins: ["licensekeymanager", "advcode", "link", "lists", "table"],
  toolbar:
    "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | table | advcode",
});
