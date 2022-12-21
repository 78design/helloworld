import React, { useEffect, useState } from 'react';
import { initializeWidget } from '@vikadata/widget-sdk';
import { Setting } from './setting';

export const HelloWorld: React.FC = () => {
  const [time, setTime] = useState<string>();
  useEffect(() => {
    const ref = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => { clearInterval(ref) }
  }, [])
  return (
    <div style={{ height: '100%', margin: '0 auto', }}>
      <div style={{ flexGrow: 1, width: '100%', height: '100%', overflow: 'auto', padding: 'auto 8px', backgroundColor: 'black' }}>
        <div style={{ display: 'inline-flex', flexGrow: 1, width: '100%', height: '100%', overflow: 'auto', padding: 'auto 8px', backgroundColor: 'black' }}>
          <div style={{ fontSize: '60px', backgroundColor: 'pink', color: 'white', textAlign: 'center', margin: 'auto' }}>
            <p style={{fontSize: '16px'}}>距离下班时间还有很多小时，努力改变世界吧</p>
            {time} 
            </div>
        </div>
      </div>
      <Setting />
    </div>
  );
};

initializeWidget(HelloWorld, process.env.WIDGET_PACKAGE_ID); 1

