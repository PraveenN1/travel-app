"use client"
import React, { useRef, useState, MouseEvent } from 'react';
import styles from '../app/horizontalscroll.module.css';
import Image from 'next/image';

const HorizontalScroll: React.FC = () => {
    const scrollWrapperRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (scrollWrapperRef.current) {
            setIsDown(true);
            setStartX(e.pageX - scrollWrapperRef.current.offsetLeft);
            setScrollLeft(scrollWrapperRef.current.scrollLeft);
            scrollWrapperRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseLeave = () => {
        setIsDown(false);
        if (scrollWrapperRef.current) {
          scrollWrapperRef.current.style.cursor = 'grab';
      }
    };

    const handleMouseUp = () => {
        setIsDown(false);
        if (scrollWrapperRef.current) {
          scrollWrapperRef.current.style.cursor = 'grab';
      }
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDown) return;
        e.preventDefault();
        if (scrollWrapperRef.current) {
            const x = e.pageX - scrollWrapperRef.current.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            scrollWrapperRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const scrollLeftClick = () => {
        if (scrollWrapperRef.current) {
            scrollWrapperRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRightClick = () => {
        if (scrollWrapperRef.current) {
            scrollWrapperRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.scrollContainer}>
            <div
                className={styles.scrollWrapper}
                ref={scrollWrapperRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className={styles.card}>
                  <Image
                    src="/img-1.png"
                    alt="cardimg"
                    width={800}
                    height={800}
                    className='rounded-3xl'
                  />
                </div>
                <div className={styles.card}>
                  <Image
                    src="/img-2.png"
                    alt="cardimg"
                    width={800}
                    height={800}
                    className='rounded-3xl'
                  />
                </div>
                <div className={styles.card}>
                  <Image
                    src="/img-3.png"
                    alt="cardimg"
                    width={800}
                    height={800}
                    className='rounded-3xl'
                  />
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
