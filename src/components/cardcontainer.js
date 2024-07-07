import React from "react";
import '../css/details.css'
function CardContainer({image,title}) {

  return (
    <div style={{
      width: 'calc(95% - 20px)', 
      maxWidth: '380px', 
      padding: '5px', 
      border: '1px groove #17A2B8',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
      backgroundColor: '#ffffff', 
      textAlign: 'center', 
      transition: 'transform 0.3s ease-in-out',
      marginLeft: '5%',
      cursor: 'pointer',
      
    }}>
      <img src={image} style={{
        width: '100%',
        borderRadius: '8px 8px 0 0', 
        objectFit: 'cover' 
      }} className="clickable" alt={title} />
      <div style={{ padding: '10px' }}>
        <h5 style={{
          margin: '1',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          color: '#333333' 
        }}>{title}</h5>
      </div>
    </div>
  );
}

export default CardContainer;
