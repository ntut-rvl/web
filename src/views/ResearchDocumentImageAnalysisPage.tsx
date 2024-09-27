import { useAnimateOnScroll } from '../Utils';
import ResearchBlock from '../components/ResearchBlock';

import ProjShred from '../assets/images/research/proj-shred.bmp';
import ProjHuangNanChi from '../assets/images/research/proj-huang-nan-chi.jpg';


const ResearchDocumentImageAnalysisPage: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    const thumbnails = [
        ProjShred,
        ProjHuangNanChi
    ];
    const titles = [
        "碎紙重建",
        "具快速學習之文字辨識技術",
    ];
    const desc_list = [
        "本研究的目的是製作一個可將經過碎紙機處理後的碎紙條進行重建的系統。有別於拼圖碎塊重建，碎紙條在重建上缺乏可利用的邊緣形狀資訊，且文件內容以文字為主，白紙黑字，缺乏足夠的顏色資訊。 目前對於碎紙條的重建研究還很少，但其應用卻越來越重要，例如法庭證物的還原。本論文呈現一個碎紙重建的系統，以影像為輸入資料，截取文件特徵，利用特徵資訊進行重建演算法，最後使用圖論具結構性的程序，排序出一組系統認定的最佳解。 紙條與紙條間相關度計算演算法有兩個，第一個是利用編碼簡化表示紙條文字列的分佈資訊，以編碼的差異性，計算紙條間的相關度；第二個是將紙條內容視為一種紋理，正確的排列順序所合成的紋理應該是分佈均勻的，以此現象為依據，計算紙條間的相關度。",
        "在影像中的文字資訊是解讀影像內容之重要線索，此應用有助於人類面對爆炸成長的多媒體內容能夠迅速地擷取重要資訊而加以進行檢索、整理、編排。本研究目的在於開發一套對多類型非正常標準環境下的字元快速訓練和辨識的系統，利用一個有效的字元分類方法將所有訓練樣本分散成多個數量平均且高分辨性的子集合做為使訓練時間成指數趨勢縮短的策略，並針對多種特殊情形個別提出相應的處理演算法以符合多種特殊的實際應用目的。"
    ];

    let blocks = [];
    for (let i = 0; i < titles.length; i++) {
        blocks.push(
            <ResearchBlock
                imageSrc={thumbnails[i]}
                title={titles[i]}
                index={i}
                key={i}
            >
                {desc_list[i]}
            </ResearchBlock>
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
                        <i className="rvl-icon fas fa-4x fa-eye mb-3"></i>
                    </div>
                    <div className="col-12">
                        <h3 className="mb-4">Document Image Analysis</h3>
                    </div>
                </div>
                { blocks }
            </div>
        </section>
    );
};

export default ResearchDocumentImageAnalysisPage;
