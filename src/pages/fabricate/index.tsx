import { useState } from 'react';
import CoverPreview from './components/CoverPreview';
import type { CoverConfig } from '../../types/CoverConfig';

import styles from './style.module.css'

export default function FabricatePage() {
  const [config, setConfig] = useState<CoverConfig>({
    title: 'book-name',
    author: 'author-name',
    fontSize: 40,
    bgColor: '#000',
    aspectRatio: '6:9',
  });

  return (
    <>
      {/* TODO: 内容在页面内居中 */}
      <div className="p-3 w-screen h-screen flex">
        <div className="grid grid-cols-12 w-full h-full">
          <div className="col-start-3 col-span-8 pt-8 pb-16">
            <div className="grid grid-cols-8 gap-5">
              <div className={styles.entity}>
                {/* TODO: 这里放置 Select 和 Input，调用 setConfig，或者抽成组件 */}
                <input
                  value={config.title}
                  onChange={(e) => setConfig({ ...config, title: e.target.value })}
                />
              </div>

              <div className={styles.entity}>
                <CoverPreview config={config} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

