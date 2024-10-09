import { useAnimateOnScroll } from '../Utils';
import ResearchBlock from '../components/ResearchBlock';
import ProjBlur from '../assets/images/research/proj-blur.jpg';
import ProjPlate from '../assets/images/research/proj-plate.jpg';
import ProjWei from '../assets/images/research/proj-wei.jpg';
import ProjCeoKen from '../assets/images/research/proj-ceo-ken.jpg';
import ProjCeoLdws from '../assets/images/research/proj-ceo-ldws.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCar } from '@fortawesome/free-solid-svg-icons';

const ResearchIntelligenceTransportationSystemPage: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    const thumbnails = [
        ProjBlur,
        ProjPlate,
        ProjWei,
        ProjCeoKen,
        ProjCeoLdws
    ];
    const titles = [
        "基於影像動態模糊進行車輛速度之偵測",
        "動態車輛之車牌辨識",
        "巷道監控之移動物體辨識與追蹤",
        "行車記錄器媒體播放與網路定位系統",
        "車道偏移及前車碰撞警示系統",

    ];
    const desc_list = [
        "此研究主要發展一視覺為基礎之速度偵測系統，利用動態模糊影像來進行車輛速度偵測的新技術，並與執行交通上超速違規所常見的雷達、雷射測速裝置相比較。影像 所包含的動態模糊參數是由單一張影像所估算得知，然後利用它們來計算在影像中車輛行駛的速度。此一方式具有相當之精確性並具備產品商業化的潛力。",
        "本系統主要是利用攝影機擷取一連串連續的影像，從這些影像中可以得到車輛在行進間不同位置與不同角度變化的畫面， 所以動態系統得到比較多的影像資訊，可以 利用時間上前後影像的關係，對同一台車做一次以上的辨識來增加成功機率，此類動態系統的處理環境，盡可能不被人為所限制。因此，更適合應用在真實環境中。",
        "本研究利用影像處理的技巧，提出一套偵測、追蹤、分類巷道中的行人與車輛，並記錄分類的結果之交通監控系統。透過此系統可得知某時間內巷道中的物體流量及種類，進 而達到監控與流量分析的目的。我們所建構的系統利用多種影像處理的技術，將影像中移動物體的形狀取出，接著再以樣板對應的方式來追蹤物體，最後分別以物體的長寬比及走路節奏來達成物體辨識的目的。",
        "近年來行車記錄器已成為車用電子一個熱門之商品，市場上相關產品多為單純錄製影像記錄器。本計畫開發整合型多媒體播放器，輔以播放行車記錄器所錄製資訊(影像、GPS、G-Sensor)。此外，該播放器亦可透過GPRS網路擷取GPS定位資訊完成遠端定位與監控功能，並提供完善的圖形介面便於使用者操作。",
        "在日常生活中有很多種的代步工具，其中車輛是很方便且舉足輕重的交通工具之一，車用安全在學術領域上進行許多相關研究，例如：智慧型車輛等；而近年來行車的安全受到強烈的關注，如何能避免駕駛者發生意外，在各個方面也有許多的研究被提出。本研究目的在於提出準確，並且即時偵測出行駛的車道和前車的距離，並實做出車道偏移偵測，與前車過近危險警告的系統，以升駕駛者行車安全。",
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
                        <FontAwesomeIcon icon={faCar} className="rvl-icon fa-4x mb-3" />
                    </div>
                    <div className="col-12">
                        <h3 className="mb-4">Intelligence Transportation System</h3>
                    </div>
                </div>
                { blocks }
            </div>
        </section>
    );
};

export default ResearchIntelligenceTransportationSystemPage;
