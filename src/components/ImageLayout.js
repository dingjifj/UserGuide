{childrenArray.map((child, index) => {
  const rawSrc = child.props?.src || "";
  
  // 如果 src 已经是经过 import 处理的路径（通常包含 /assets/），则直接使用
  // 如果还是普通的 /img/ 路径，才需要处理
  const finalSrc = (typeof rawSrc === 'string' && rawSrc.includes('/assets/')) 
    ? rawSrc 
    : rawSrc; 

  return (
    <div key={index} style={{ textAlign: 'center', width: '100%' }}>
      <div style={{ display: 'inline-block' }}>
        {React.cloneElement(child, {
          src: finalSrc, // 使用我们确定的路径
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
      ...
    </div>
  );
})}