import React from 'react';
// 必须导入这个 Hook 来处理路径
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
          const caption = child.props?.alt || "";
          
          // --- 新增：自动补全 baseUrl 的逻辑 ---
          const rawSrc = child.props?.src || "";
          // 如果路径是以 / 开头的字符串，就用 useBaseUrl 包装它
          const finalSrc = (typeof rawSrc === 'string' && rawSrc.startsWith('/')) 
            ? useBaseUrl(rawSrc) 
            : rawSrc;

          return (
            <div key={index} style={{ textAlign: 'center', width: '100%' }}>
              <div style={{ display: 'inline-block' }}>
                {React.cloneElement(child, {
                  // 强制覆盖 src 为处理后的路径
                  src: finalSrc,
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
              
              {caption && (
                <div style={{
                  marginTop: '12px',
                  fontSize: '13px',
                  color: '#667085',
                  fontWeight: '500'
                }}>
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