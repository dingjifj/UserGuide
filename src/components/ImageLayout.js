import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
          // 获取原始 src
          const rawSrc = child.props?.src || "";
          
          // 关键修复：手动处理路径，确保加上 baseUrl
          // 如果 rawSrc 是 /img/xxx.PNG，它会变成 /UserGuide/img/xxx.PNG
          const finalSrc = useBaseUrl(rawSrc);

          return (
            <div key={index} style={{ textAlign: 'center', width: '100%' }}>
              <div style={{ display: 'inline-block' }}>
                <img 
                  src={finalSrc} 
                  alt={child.props?.alt || ""}
                  style={{ 
                    height: imgHeight,
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    borderRadius: '6px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    display: 'block',
                    ...child.props?.style // 保留传入的 style
                  }}
                />
              </div>
              
              {child.props?.alt && (
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