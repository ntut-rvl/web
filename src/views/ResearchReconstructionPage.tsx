import { useAnimateOnScroll } from '../Utils';
import ResearchBlock from '../components/ResearchBlock';

import ProjArch from '../assets/images/research/proj-arch.jpg';
import ProjRiMix from '../assets/images/research/proj-ri-mix.jpg';
import ProjHo from '../assets/images/research/proj-ho.jpg';
import ProjSurgery from '../assets/images/research/proj-surgery.jpg';
import ProjDfm from '../assets/images/research/proj-dfm.jpg';
import ProjYu from '../assets/images/research/proj-yu.jpg';
import ProjLi from '../assets/images/research/proj-li.jpg';


const ResearchReconstructionPage: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    const thumbnails = [
        ProjArch,
        ProjRiMix,
        ProjHo,
        ProjSurgery,
        ProjDfm,
        ProjYu,
        ProjLi
    ];
    const titles = [
        "建築物之三維電腦模型重建",
        "利用多視角三維資訊套合輔助之立體視覺系統",
        "利用等高線進行物體三維重建",
        "實體三維模型重建於機器人輔助手術之應用",
        "利用單一模糊影像進行景物深度之量測",
        "以剪影資訊進行絞接式物體三維重建",
        "基於多視角影像之三維模型重建",
    ];
    const desc_list = [
        "本研究建立一套由單張或多張未校正影像進行建築物之三維模型重建系統，我們利用一般建築物所具有的平行及正交線條等人造結構等特性，搭配使用者互動式的影 像徵選取方式，進行建築物各個角落相對深度的計算，並藉由多重視角三維資訊的套合、物體幾何限制的平面趨近以及紋路貼圖等方式，重建出完整的建築物三維電腦模型。",
        "本研究提出以多視域三維資訊套合的方式，輔助立體視覺演算法之匹配點搜尋，進而達到物體三維模型重建時運算量的減少以及精確度的提升。我們並利用即時的影像序列擷取與套合結果的回授，大幅增加三維點資訊的數量及密度，再藉由計算幾何中資料 減量的方式來達成三維模型簡化的目的。",
        "本研究提出一個基於等高線投影的重建方式，藉由物體橫切面輪廓的影像曲線以及相機內外部參數的估測，進行相對三維資訊的計算。我們設計一套簡易且具有自我校正功能的視覺系統，可 使物體於影像擷取的過程中產生如快速成型模型中數層共面曲線的特徵資訊，並用於單一及多視域之三維模型重建。",
        "本研究提出以多視域三維資訊套合的方式，輔助立體視覺演算法之匹配點搜尋，進而達到物體三維模型重建時運算量的減少以及精確度的提升。我們並利用即時的影像序列擷取與套合結果的回授，大幅增加三維點資訊的數量及密度，再藉由計算幾何中資料 減量的方式來達成三維模型簡化的目的。",
        "本研究提出一種利用影像的失焦模糊與動態模糊，進行景物深度量測的新技術。我們提出了在此一情況下影像的幾何成像數學模型，並用於推導影像模糊參數與景物 距離的實際關係。相較於早期運用多張影像進行景物深度量測的技術，我們所提出的方式僅需利用單張模糊影像，其究實用價值在於移動目標物的自動對焦以及移動物體的環境三維量測。",
        "目前在三維電視的領域中，大都把研究的方向放在重建表演者的動作上，由於人的身體是由骨架所構成，所以有許多的研究將人體的動作簡化成絞接式物體的移動，用來簡化呈現的方式。本研究整合剪影 以及物體的移動資訊，在相機數量不足的情況下，整合時間軸上的剪影資訊，來改善絞接式物體的三維模型。",
        "本研究目的在於建構一套三維模型重建系統。其發展概念主要是在沒有校正相機的情況下，用一台相機對物體拍攝數十張多視角影像。採用影像的特徵點資訊，先從運動求得結構(Structure from Motion, SfM)的方法取得影像與影像間特徵點對應，進而自我校正得到相機參數及三維場景的稀疏點雲。再利用多視角立體視覺拍攝同一物體，取得其三維點雲和顏色資訊，將其姿態套合並建立網格，呈現出完整的三維模型。"
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
                        <h3 className="mb-4">Model Reconstruction</h3>
                    </div>
                </div>
                { blocks }
            </div>
        </section>
    );
};

export default ResearchReconstructionPage;
