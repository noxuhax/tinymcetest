import tinymce from "tinymce";

import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/models/dom";

import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/table";

import advcodeUrl from "tinymce-premium/plugins/advcode/plugin.min.js?url";
import licenseKeyManagerUrl from "tinymce-premium/plugins/licensekeymanager/plugin.min.js?url";

import "./styles.css";

tinymce.init({
  selector: "#editor",
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
});
