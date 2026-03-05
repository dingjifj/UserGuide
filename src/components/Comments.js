import React from 'react';
import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <Giscus
      data-repo="dingjifj/UserGuide"
        data-repo-id="R_kgDORaDn2w"
        data-category="Announcements"
        data-category-id="DIC_kwDORaDn284C3vIE"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
    />
  );
}