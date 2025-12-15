# 📝 Form Validation App

## 📌 Overview

The **Form Validation App** is a simple JavaScript web application that validates user input in a form. It provides real-time feedback when the user leaves an input field empty, ensuring that essential fields like name and email are not left blank.

This project helps practice **DOM manipulation**, **event handling**, and **form validation** in JavaScript.

---

## 🧩 Features

* Validates name and email fields
* Displays error message in red if the field is empty
* Clears error message once the user enters valid input
* Real-time validation using the `blur` event

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

---

## ⚙️ How It Works

1. User fills out the form.
2. When the user moves out of an input field (`blur` event), the input is checked.
3. If the input is empty, an error message is displayed in red.
4. If the input is valid (not empty), the error message is cleared.

---

## 📂 Project Structure

```
form-validation-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required*";
        nameErrMsg.style.color = "red";
    } else {
        nameErrMsg.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "Required*";
        emailErrMsg.style.color = "red";
    } else {
        emailErrMsg.textContent = "";
    }
});
```

---

## 📚 Concepts Covered

* Event handling (`blur` event)
* DOM element selection and manipulation
* Dynamic error message display
* Basic form validation

---

## 🚀 Future Improvements

* Add validation for email format using regex
* Add validation for other fields like phone number
* Display all error messages in a single summary section
* Highlight invalid input fields with a border color
* Prevent form submission if validation fails

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript DOM manipulation**, **event handling**, and **form validation skills**.

---

⭐ If you find this project useful, feel free to star the repository!
