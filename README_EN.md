🇫🇷 [French version available here](README.md)

# Note Converter

## Description

This web application allows users to convert musical notes selected via an HTML form.  
The conversion is performed server-side using a PHP script (`convert.php`) that receives the selected note and returns the corresponding conversion.

The user interface includes:

- A form with a dropdown list of musical notes (do, ré, mi, fa, sol, la, si)  
- A display area for the conversion result  
- A JavaScript script (`script.js`) that interacts dynamically with the PHP backend (via AJAX or other methods)

---

## Project Contents

- `index.html`: HTML page containing the note selection form  
- `convert.php`: PHP script that processes the selected note and returns the conversion  
- `style.css`: stylesheet for presentation (optional)  
- `script.js`: JavaScript script to handle form submission and display the response without reloading the page

---

## How It Works

1. The user selects a note from the dropdown list.  
2. The form sends the selected note to `convert.php` (via AJAX if `script.js` is configured accordingly).  
3. The PHP script processes the note and returns the conversion (e.g., frequency, solfège notation, equivalent Anglo-Saxon notation, etc.).  
4. The result is dynamically displayed on the webpage in the `#resultat` area.

---

## Installation and Usage

1. Copy the files to an environment with a PHP server (e.g., Apache, XAMPP, WAMP).  
2. Open the `index.html` page in a browser.  
3. Select a note from the dropdown menu to see its conversion displayed.

---

## Technologies Used

- HTML5  
- CSS3  
- PHP (backend)  
- JavaScript (for dynamic interaction)

---

## Author

Vanessa PAGANOTTO

---

## License

This project is licensed under the MIT License.
