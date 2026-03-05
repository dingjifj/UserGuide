import React from 'react';

export default function ImageLayout({ children, column = 1, width = "100%", imgHeight = "400px" }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  
  return (
    /* 外层大背景板 */
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
          const caption = child.props?.alt || child.props?.title || "";

          return (
            <div key={index} style={{ textAlign: 'center', width: '100%' }}>
              <div style={{ display: 'inline-block', width: '100%', maxWidth: 'fit-content' }}>
                {React.cloneElement(child, {
                  // 针对视频和图片通用的样式注入
                  style: { 
                    height: imgHeight,
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    display: 'block',
                    backgroundColor: '#000', // 视频未加载时的背景色
                    ...child.props.style 
                  },
                  // 如果是视频，默认加上控制条
                  controls: child.type === 'video' ? true : child.props.controls,
                })}
              </div>
              
              {caption && (
                <div style={{ marginTop: '12px', fontSize: '13px', color: '#667085', fontWeight: '500' }}>
                  {caption}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}