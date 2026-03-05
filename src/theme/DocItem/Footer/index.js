import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';
import EditMetaRow from '@theme/EditMetaRow';
// 1. 引入 Giscus 组件
import Giscus from '@giscus/react'; 

export default function DocItemFooter() {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags} = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  return (
    <>
      {/* 原有的页脚逻辑：只有有内容时才渲染 footer 标签 */}
      {canDisplayFooter && (
        <footer
          className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
          {canDisplayTagsRow && (
            <div
              className={clsx(
                'row margin-top--sm',
                ThemeClassNames.docs.docFooterTagsRow,
              )}>
              <div className="col">
                <TagsListInline tags={tags} />
              </div>
            </div>
          )}
          {canDisplayEditMetaRow && (
            <EditMetaRow
              className={clsx(
                'margin-top--sm',
                ThemeClassNames.docs.docFooterEditMetaRow,
              )}
              editUrl={editUrl}
              lastUpdatedAt={lastUpdatedAt}
              lastUpdatedBy={lastUpdatedBy}
            />
          )}
        </footer>
      )}

      {/* 2. 在这里插入评论区，包裹在一个 div 里增加间距 */}
      <div style={{ marginTop: '3rem' }}>
        <Giscus
          repo="dingjifj/UserGuide"
          repoId="R_kgDORaDn2w"
          category="Announcements"
          categoryId="DIC_kwDORaDn284C3vIE"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="preferred_color_scheme"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </>
  );
}
