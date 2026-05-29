// Alpine imports
import "./style.css";
import Alpine from "alpinejs";

// FilePond imports
import { defineFilePond } from "filepond";
import { locale } from "filepond/locales/en-gb.js";

// Defines the <file-pond> custom element
defineFilePond({
  locale,
});

// Alpine go time
window.Alpine = Alpine;

Alpine.start();
