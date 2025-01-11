"use client"

import React, {useState, useEffect} from 'react';
import styles from './Carousel.module.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const Carousel = ({children, interval = 7500}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
        }, interval);

        return () => clearInterval(timer);
    }, [isPaused, currentIndex, children, interval]);

    return (
        <div className={`${styles.carousel} flex items-start`} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {React.Children.map(children, (child, index) => {
                return (
                    <div key={index} className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                         style={{
                             position: index === currentIndex ? 'relative' : 'absolute',
                             visibility: index === currentIndex ? 'visible' : 'hidden',
                             transition: 'opacity 0.5s ease-in-out',
                             zIndex: index === currentIndex ? 1 : 0,
                             opacity: index === currentIndex ? 1 : 0
                         }}>
                        {child}
                    </div>
                )
            })}
        </div>
    );
};
