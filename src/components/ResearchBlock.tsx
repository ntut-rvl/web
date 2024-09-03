import React, { ReactNode } from 'react';
import { useAnimateOnScroll } from '../Utils';

interface ResearchBlockProps {
    imageSrc: string;
    title: string;
    children: ReactNode;
    index: number;
}

const ResearchBlock: React.FC<ResearchBlockProps> = ({ imageSrc, title, children, index }) => {
    const onScrollEl = useAnimateOnScroll();
    const colClass = index % 2 === 0 ? 'col-md-6 order-md-first' : 'col-md-6';

    return (
        <div className="row mb-5">
            <div 
                className="col-10 rvl-block p-sm-5 p-4 rvl-animate mx-auto"
                ref={onScrollEl}
                data-animate-effect="fadeIn"
            >
                <div className="row">
                    <div className="col-md-6">
                        <img src={imageSrc} className="img-research rounded mb-3" alt={title} />
                    </div>
                    <div className={colClass}>
                        <p className="rvl-block-title mb-4">{title}</p>
                        <p style={{ textAlign: 'left' }}>
                            {children}
                        </p>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ResearchBlock;
