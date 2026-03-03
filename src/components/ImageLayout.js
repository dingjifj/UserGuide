import React from 'react';

export default function ImageLayout({ children, column = 1, width = "100%", imgHeight = "200px" }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  
  return (
    <div style={{
      width: width,
      backgroundColor: '#f0f5ff',
      borderRadius: '12px',
      padding: '30px 20px',
      margin: '20px auto',
      border: '1px solid #e6efff',
      boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.02)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${column}, 1fr)`,
        gap: '20px',
        alignItems: 'center',
        justifyItems: 'center',
      }}>
        {childrenArray.map((child, index) => {
          return (
            <div key={index} style={{ textAlign: 'center', width: '100%' }}>
              <div style={{ display: 'inline-block' }}>
                {React.cloneElement(child, {
                  style: { 
                    height: imgHeight,
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    borderRadius: '6px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    display: 'block',
                    ...child.props.style 
                  }
                })}
              </div>
              
              {child.props.alt && (
                <div style={{
                  marginTop: '12px',
                  fontSize: '13px',
                  color: '#667085',
                  fontWeight: '500'
                }}>
                  {child.props.alt}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}