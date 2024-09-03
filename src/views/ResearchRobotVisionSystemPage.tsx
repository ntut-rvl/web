import { useAnimateOnScroll } from '../Utils';
import ResearchBlock from '../components/ResearchBlock';
import ProjFrank from '../assets/images/research/proj-frank.jpg';
import ProjMidFrank from '../assets/images/research/robot.jpg';
import ProjSlam1 from '../assets/images/research/localization_1.jpg';
import ProjDual from '../assets/images/research/proj-dual.jpg';
import ProjHopis from '../assets/images/research/hopis.jpg';
import ProjTu from '../assets/images/research/proj-tu.jpg';
import ProjChung from '../assets/images/research/proj-chung.jpg';
import ProjKao from '../assets/images/research/proj-kao.png';
import ProjWen from '../assets/images/research/proj-wen.jpg';
import ProjZhou from '../assets/images/research/proj-zhou.jpg';
import ProjYuMengShiun from '../assets/images/research/proj-yu-meng-shiun.jpg';


const ResearchRobotVisionSystemPage: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    const thumbnails = [
        ProjFrank,
        ProjMidFrank,
        ProjSlam1,
        ProjDual,
        ProjHopis,
        ProjTu,
        ProjChung,
        ProjKao,
        ProjWen,
        ProjZhou,
        ProjYuMengShiun
    ];
    const titles = [
        "小型足球機器人之視覺系統",
        "中型足球機器人之視覺系統",
        "以視覺為基礎之移動自主定位系統",
        "利用移動與固定全景影像之視覺定位",
        "混合針孔相機與全方位反射鏡之視覺式定位系統",
        "基於人臉及手勢之人機介面",
        "以全向鏡及垂直線特徵進行定位",
        "機器人自主定位及路徑規劃",
        "基於影像及深度資訊之自主定位技術",
        "機器人自主導航及辨識系統",
        "結合全景與PTZ攝影機之機器人視覺監控系統",
    ];
    const desc_list = [
        "本研究的目的在於開發小型足球機器人所需的視覺系統，其基本需求包括了高品質的影像來源，穩定而且迅速的處理程序，以及記憶體的有效管理。整個辨識和追蹤目標的過程皆採用 HSV 彩色座標，實際的測試結果驗證了我們所開發的視覺系統能夠穩定且準確地辨識出機器足球員，並且達到每秒處理 30 張影像的效率。",
        "本系統主要是利用中型足球機器人比賽場地及區分顏色，計算機器人所需的資料，包含即時敵人位置、即時足球位置、即時球門位置，以及機器人在足球場地座標，最後將資料傳送至 2440 嵌入式系統，並藉以控制機器人馬達，我們所開發的足球機器人視覺系統，再比賽中能夠穩定的執行，並且可以將橘色足球踢進指定的球門。",
        "本研究提出一套以影像視覺為基礎的移動平台自主定位系統。在對於環境沒有任何假設的前提下，藉由處理 連續未經過影像校正的影像對，擷取出特徵點並計算系統 的位置和方向資訊。此外，我們發展強健的特徵點追蹤演算法，從同一架相機在不同時間裡去追蹤其相同的特徵點，並在同時間裡去找尋不同相機彼此的特徵對應點，透過整合移動估測演算法來獲得自主定位資訊。",
        "由於全方位攝影機具有極大的視野，近年來在電腦視覺的研究及應用上已逐漸受到重視。本研究使用兩架全方位攝影機和標的物來進行機器人的自我定位，不同於一 般使用標的物的自我定位方式，我們所使用的標的物不必經過特殊的事先設定，也不需事先計算其所在的位置，僅需知道他們在空間中的絕對長度。而在自主行動機器人的定位過程中，我們亦可以得到標的物兩端點的座標。",
        "本研究利用兩種不同結構的攝影機作為機器人移動估測之感測器，全方位反射鏡與針孔模型相機各一架，分別對兩相機校正後取得相機參數。然後藉由SIFT特徵點的對應找出兩相機中的匹配特徵點，利用兩時間上對特徵點的對應，估計機器人本身的移動。 在這兩種不同相機的結合下，可以同時擁有兩相機的優點，針孔相機的清晰度與全方位反射鏡的廣角性。",
        "本研究提出利用單一攝影機進行人臉偵測與手勢辨識的人機介面系統，有別於一般的人機溝通方式，我們同時結合頭部傾斜角度與手勢的資訊來對所針對的硬體下指 令。在臉部的偵測上首先定位出雙眼與嘴唇位置，並利用五官重心與頭部區域重心之間的關係推測出頭部角度。在手勢辨識方面則自動分割出手勢區域與正規手勢旋 轉角度。使用者不需特意將手勢放在固定的位置或擺出正向的手勢，系統可自動抓取並正規化成可供辨識的手勢。",
        "本研究是採用單一架全方位視覺系統，利用中央反射折射鏡的幾何投影特性，提出一個全新的特徵點，協助機器人自主導航定位。透過全方位視覺系統的校正，取得 投影座標模型，可找到空間垂直且交於地面的特徵點，並求得此特徵點與全向鏡中心的實際距離。發展適合此特徵點的匹配演算法，因為這些特徵點大多屬於不變的，是屬於這空間結構中的的一部份。 藉由移動估測演算法，來獲得前後影像中所移動的相對方向與距離，建構出行走路徑與空間特徵點的地圖。",
        "本研究本提出一個智慧型機器人自我定位與路徑規劃結合的方法，我們使用了全方位視覺系統、紅外線感測器及進行感測環境標的物之特徵，實現機器人自主定位與 探勘的研究。運用全方位視覺的廣大環場視野，智慧型機器人可藉此獲得周遭環境的特徵資訊，偵測與擷取出環境標的物特徵資訊，且機器人能結合紅外線感測器避 開障礙物與自動探勘環境定位資訊，並運用所學習之定位資訊，設計與規劃出最短安全路徑來到達使用者事先指定的地點。",
        "本研究提出三種技術來進行機器人定位。第一，我們辨識相機擷取到的影像中特殊的標示物，然後計算偵測到的標示物之相對位置來進行機器人定位；第二，我們使用全方位視覺系統的幾何特性，搜尋影像在空間中的垂直線與地面的交點，計算兩個不同位置下這些交點的位移進行自主定位；第三，我們結合深度及彩色影像，然後擷取彩色影像的特徵對應到深度影像上的資訊，計算出相鄰兩個時間點之下的點雲的位移，進而得知機器人的位移。",
        "在研究中，我們提出一個適用於自主式移動機器人的導航系統，其目的在於使機器人具有在真實環境中進行路徑規劃及定位的能力，並能夠在過程中辨識出特定物件，以標示於已知的地圖上。在路徑規劃上，首先以基於疊代鄰近點演算法，將已知地圖與雷射測距儀套合來取得機器人的定位資訊，接著在機器人移動過程中我們以位能場的觀念避開障礙物。為了規劃路徑，我們就機器人的所在位置建出可視圖，再利用戴克斯特拉演算法求出最短路徑。而在物件辨識方面，我們使用基於外表的物件特徵，整合形狀、顏色與特徵空間來辨識物件。於實驗結果中，我們分別展示機器人如何在虛擬與實際環境導航，並辨識出我們有興趣的物件，標示於地圖上。",
        "本論文提出結合全景與PTZ攝影機之視覺監控系統，並且適用於移動式機器人平台上，全景攝影機的視野廣闊可達360度，能夠觀察機器人周遭的環境，而PTZ攝影機能夠自由轉動，依使用者需求觀察感興趣部分，這樣的視覺系統不但視野廣闊又能夠觀察物體特徵，除此之外，視覺系統是建構在移動機器人上，當物體在環境中移動，機器人能夠偵測出移動物體並且跟蹤物體移動，還能掌握環境中每一個角落。"
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
                        <h3 className="mb-4">Robot Vision System</h3>
                    </div>
                </div>
                { blocks }
            </div>
        </section>
    );
};

export default ResearchRobotVisionSystemPage;
