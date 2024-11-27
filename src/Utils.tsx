import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export interface Member {
    name: string;
    eng_name: string;
    avatar: string | null;
    degree: string;
    email: string;
    company: string,
    grad: string,
    is_graduated: boolean,
}

export interface PastMember {
    id: number;
    name: string;
    eng_name: string;
    grad: number;
    degree: string;
    statue: string | null;
    thesis: string | null;
}

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const useAnimateOnScroll = () => {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            if (!el.classList.contains('rvl-animated')) {
              el.classList.add('item-animate');
              setTimeout(() => {
                let effect = el.dataset.animateEffect || 'fadeInUp';
                el.classList.add(effect, 'rvl-animated');
                el.classList.remove('item-animate');
              }, Array.from(elementsRef.current).indexOf(el) * 50);
            }
          }
        });
      },
      { threshold: 0.05 } // 相當於 offset: '95%' 
    );

    elementsRef.current.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (element: HTMLElement | null) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  };
};

export const useScrollEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;
      const navbar = document.querySelector('.rvl_navbar');
      const sd = document.querySelector('.js-scroll-wrap');

      if (navbar) {
        if (st > 150) {
          if (!navbar.classList.contains('scrolled')) {
            navbar.classList.add('scrolled');
          }
        } else {
          if (navbar.classList.contains('scrolled')) {
            navbar.classList.remove('scrolled', 'sleep');
          }
        }

        if (st > 350) {
          if (!navbar.classList.contains('awake')) {
            navbar.classList.add('awake');
          }

          if (sd) {
            sd.classList.add('sleep');
          }
        } else {
          if (navbar.classList.contains('awake')) {
            navbar.classList.remove('awake');
            navbar.classList.add('sleep');
          }
          if (sd) {
            sd.classList.remove('sleep');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export async function loadJson<T>(filePath: string): Promise<T> {
    try {
        const response = await fetch(filePath, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
        }

        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading JSON file:', error);
        throw error;
    }
};
