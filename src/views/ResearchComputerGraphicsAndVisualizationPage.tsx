import { useAnimateOnScroll } from '../Utils';
import ResearchBlock from '../components/ResearchBlock';
import ProjMbs from '../assets/images/research/proj-mbs.jpg';
import ProjDof from '../assets/images/research/proj-dof.jpg';
import Hdri12 from '../assets/images/research/hdri.12.png';
import ProjXiao from '../assets/images/research/proj-xiao.jpg';
import ProjHsieh from '../assets/images/research/proj-hsieh.jpg';
import ProjHuang_1 from '../assets/images/research/proj-huang_1.jpg';
import ProjGu from '../assets/images/research/proj-gu.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons';

const ResearchComputerGraphicsAndVisualizationPage: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    const thumbnails = [
        ProjMbs,
        ProjDof,
        Hdri12,
        ProjXiao,
        ProjHsieh,
        ProjHuang_1,
        ProjGu
    ];
    const titles = [
        "基於實際成像模型之動態模糊合成",
        "基於實際相機模型之影像景深模擬",
        "立體顯影之高動態範圍影像合成",
        "非均值取樣之三維模型表示法",
        "基於立體視覺影像之高寬比調整",
        "以顯著主體偵測之影片高寬比調整技術",
        "三維模型之新視角影像合成",
    ];
    const desc_list = [
        "一般電腦圖學或是虛擬實境中的影像呈現，多採用簡單的幾何成像模型進行影像的合成。本研究提出一種基於真實相機的成像模型，並考慮感測元件之非線性強度響 應的影像合成技術。對於由物體與相機快速相對移動所產生的動態模糊，本研究所提出的方法可應用於空間不變或可變性的情況，並合成出較一般所採用的線性模型更為真實的影像。",
        "本研究以分層的深度資訊為基礎，利用高斯濾波器的平滑特性原理，使影像呈現模糊的感覺以產生景深效果。有別於其他產生景深效果的 研究方法，我們提出了以實際相機參數為基礎的方式，讓景深的效果更逼近於實際擷取之影像。本研究運用簡潔的校正方式，求取「從相機鏡頭到物體間的距離」與 「影像的模糊程度」這兩者之間的關係，並藉由上述的關係進行適當的模糊模擬，讓模擬產生的景深影像更具真實性。",
        "本研究以兩架攝影機同時拍攝的方式，擷取並合成具立體顯影之高動態範圍影像。我們利用兩張影像的特徵點對應來推算相機反應函數，透過對應點搜 尋演算法進行兩張影像之套合，並以合成之高動態範圍影像對進行景物深度的重建，達成具立體顯影且易於合成新視角影像之目的。",
        "本篇論文提出三維景物的三維座標資訊與其所相對應的彩色紋理取樣資訊皆是用極座標系統加以取樣並表示。並且提出以距離為依據的非均值取樣策略，針對複雜的三維景物做取樣並以分層式資料圖表示法加以儲存。上述方法亦能夠局部性地增加三維模型結構上的精細程度。另外，這些經過重新取樣而獲得的三維點雲模型接著會用來進行自由視角的影像合成，其結果將可以因為上述以非均值取樣策略所取得地不同精細程度的三維點雲資訊，在合成影像上得以呈現出適合於畫面解析度之影像。",
        "本研究主要在展示立體視覺如何有效地改善接縫切削的結果，我們使用兩架攝影機來擷取影片，藉由分析影像的視差、深度、視覺顯著、梯度資訊、時域上的連續性等資訊，建立影像上視覺注重程度的能量圖，以此資訊作為接縫切削的輸入，在不影響主體下，以達到調整影像及影片大小的效果。",
        "本實驗主要展示在顯著主體不可形變的情況下如何有效地改善背景上接縫切削的結果，我們利用一架深度攝影機幫助取得場景的相對深度。使用此深度攝影機來擷取影片，藉由分析影像的深度、視覺顯著、梯度資訊、顯著體主，建立影像上視覺注重程度的能量圖，以此資訊作為接縫切削的輸入，以達到調整影像及影片大小的效果。",
        "本研究在於建構一套以提升影像合成品質為目的的系統。首先利用以多視角剪影重建技術建構出可見外殼作為初始三維模型。以新視角相機所擷取到的三維點分為兩類：外輪廓點與非輪廓點。兩者皆以最小化能量方程式的概念反覆移動，直到能量達到平衡收斂為止。再運用影像一致性的能量，並以表面平滑度的能量與影像輪廓的能量作為輔助，防止落入局部最小值。最後利用相鄰於新視角相機的來源相機進行像素混合，輸出較為精確之新視角影像。",

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
                        {/* <i className="rvl-icon fas fa-4x fa-search mb-3"></i> */}
                        <FontAwesomeIcon icon={faSearch} className="rvl-icon fa-4x mb-3" />
                    </div>
                    <div className="col-12">
                        <h3 className="mb-4">Computer Graphics And Visualization</h3>
                    </div>
                </div>
                { blocks }
            </div>
        </section>
    );
};

export default ResearchComputerGraphicsAndVisualizationPage;
