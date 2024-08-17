import React from "react";
import "../css/details.css"; // Ensure the path is correct

function CardComponent({ title, bodyParts, selectedPart, onSelect }) {
  return (
    <div className="dropdown-container">
      <div className="styled-select-title">{title}</div>
      <select
        className="styled-select"
        value={selectedPart} // Set the selected value
        onChange={(e) => onSelect(e.target.value)} // Update the selected value on change
      >
        <option value="" disabled>Select an option</option>
        {bodyParts.map((part, index) => (
          <option key={index} value={part.toLowerCase()}>
            {part}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CardComponent;
