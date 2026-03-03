import React from 'react';

// 新增参数 imgHeight，默认 200px
export default function ImageLayout({ children, column = 1, width = "100%", imgHeight = "200px" }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  
  return (
    /* 1. 外层大背景板 */
    <div style={{
      width: width,
      backgroundColor: '#f0f5ff', // 飞书浅蓝
      borderRadius: '12px',
      padding: '30px 20px',
      margin: '20px auto',
      border: '1px solid #e6efff',
      boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.02)',
    }}>
      
      {/* 2. 内层 Grid 容器 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${column}, 1fr)`,
        gap: '20px',
        alignItems: 'center',
        justifyItems: 'center',
      }}>
        {childrenArray.map((child, index) => {
          const caption = child.props?.alt || "";

          return (
            <div key={index} style={{ textAlign: 'center', width: '100%' }}>
              <div style={{ display: 'inline-block' }}>
                {React.cloneElement(child, {
                  style: { 
                    // === 核心：控制大小一致的关键 ===
                    height: imgHeight,        // 统一所有图片的高度
                    width: 'auto',            // 宽度自动，防止拉伸变形
                    maxWidth: '100%',         // 防止超出格子
                    objectFit: 'contain',     // 确保图片完整显示在设定范围内
                    // ===========================
                    borderRadius: '6px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)', // 提升立体感
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