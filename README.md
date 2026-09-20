# Unit Converter

A clean, browser-based converter that translates a single input value across metric and imperial units — length, volume, and mass — all at once, with built-in input validation.

## Features

- **Three conversions at once** — enter one value and instantly see length, volume, and mass results side by side
- **Bidirectional results** — each category shows the conversion both ways (e.g. meters → feet *and* feet → meters)
- **Input validation** — catches empty submissions and zero values with clear, contextual warning messages
- **Rounded output** — results formatted to three decimal places for readability

## Conversions Supported

| Category | Units |
|---|---|
| Length | Meters ↔ Feet |
| Volume | Liters ↔ Gallons |
| Mass | Kilograms ↔ Pounds |

## Tech Stack

`HTML` · `CSS` · `JavaScript`

## Key Concepts Demonstrated

- Conditional logic and input validation with guard clauses and early returns
- Template literals for dynamic string construction
- Number formatting with `.toFixed()`
- Conditional UI rendering by toggling element visibility based on state
- DOM manipulation and event handling with `addEventListener`
- Separation of concerns — validation, conversion, and display logic split into dedicated functions

## Run Locally

```bash
git clone https://github.com/Abdullah326dev/unit-converter.git
cd unit-converter
```

Open `index.html` in your browser — no build tools or dependencies required.
