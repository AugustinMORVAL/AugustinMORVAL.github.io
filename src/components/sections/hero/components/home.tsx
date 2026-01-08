import { useEffect, useRef, useState, memo } from 'react';
import Spline from '@splinetool/react-spline';
import styles from './home.module.scss';

const MIN_WIDTH = 768;

function Home({ onLoad, onError }: { onLoad?: () => void; onError?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const check = () => setMounted(window.innerWidth >= MIN_WIDTH);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div ref={containerRef} className={styles.splineContainer}>
      <div
        className={styles.splineWrapper}
        style={{ display: mounted && visible ? 'block' : 'none' }}
      >
        {mounted && visible && (
          <Spline
            scene="https://prod.spline.design/sxVGCAMjjbDfLuWj/scene.splinecode"
            onLoad={onLoad}
            onError={onError}
          />
        )}
      </div>
    </div>
  );
}

export default memo(Home);
