# GPU Value Comparator

A vanilla JavaScript web application that helps PC builders compare the value proposition of two graphics cards. It calculates the **Price-per-Frame (PPF)** and provides a percentage breakdown of performance vs. cost differences.

![Image of the GPU Comparator](/img/screenshot-2026-04-29_19-48-28.png|width:600)

## 🚀 Key Features

- **Price-per-Frame Calculation**: Automatically determines the cost of a single frame for each GPU.

- **Head-to-Head Comparison**: Dynamically compares two GPUs to show percentage differences in both speed and price.

- **Dynamic UI Updates**: Uses Object-Oriented principles to update the DOM without page refreshes.

- **Modern Tooltips**: Implements the Popover API for a better user experience on supported browsers.

- **Input Validation**: Custom alert system to handle missing form data.

## 🛠️ Technical Highlights

- **Object-Oriented Programming (OOP)**: Utilizes JavaScript classes (`Gpu`, `UI`, `Store`) to separate concerns and manage application state.

- **DOM Manipulation**: Heavy use of template literals and `document.querySelector` for a reactive user interface.

- **Logic & Math**: Implements percentage difference formulas to provide actionable consumer data.

- **ES6+ Methods**: Uses modern array methods like `toSpliced` for immutable state management within the `Store` class.

## 📁 Project Structure

- `Gpu` Class: Handles the data structure for hardware specifications.

- `UI` Class: Manages all visual updates, alerts, and field clearing.

- `Store` Class: Handles the logic for maintaining the two GPUs being compared.

## 🖥️ How to Run

1. Clone the repository.

2. Open `index.html` in any modern web browser.

3. Enter the Name, FPS (from benchmarks), and Cost for two different GPUs to see the comparison.

## 💡 Why this project?

I built this to solve the "Is it worth the extra money?" question when looking at hardware benchmarks. It demonstrates my ability to handle user input, perform mathematical operations in JS, and manage a clean, class-based code architecture.
