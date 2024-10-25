import { useAnimateOnScroll } from '../Utils';
import CourseBlock from '../components/CourseBlock';

const CourseDifferentialEquations: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    const titles = [
        "CH01",
        "CH02",
        "CH04",
        "CH06",
        "CH07",
        "CH08",
        "CH09",
        "CH11",
        "CH12",
        "CH14",
    ];
    const link_list = [
        "differential_equations/CH01.pdf",
        "differential_equations/CH02.pdf",
        "differential_equations/CH04.pdf",
        "differential_equations/CH06.pdf",
        "differential_equations/CH07.pdf",
        "differential_equations/CH08.pdf",
        "differential_equations/CH09.pdf",
        "differential_equations/CH11.pdf",
        "differential_equations/CH12.pdf",
        "differential_equations/CH14.pdf",
    ];

    let blocks = [];
    for (let i = 0; i < titles.length; i++) {
        blocks.push(
            <CourseBlock
                fileLink={link_list[i]}
                title={titles[i]}
                key={i}
            >
            </CourseBlock>
        )
    }

    return (
        <section className="rvl-section rvl-bg-gray rvl-slant rvl-slant-white text-center">
            <div className="container">
                <div
                    ref={onScrollEl}
                    className="row rvl-animate mb-4 text-center"
                    data-animate-effect="fadeIn"
                >
                    <div className="col-12">
                        <h3 className="mb-4">Differential Equations</h3>
                    </div>
                </div>
                <div className="row">
                    { blocks }
                </div>
            </div>
        </section>
    );
};

export default CourseDifferentialEquations;
