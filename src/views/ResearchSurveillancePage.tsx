import { useAnimateOnScroll } from '../Utils';
import ResearchBlock from '../components/ResearchBlock';
import ProjN from '../assets/images/research/proj-n.jpg';
import ProjTsai from '../assets/images/research/proj-tsai.jpg';
import ProjBoyu from '../assets/images/research/proj-boyu.jpg';
import ProjChen from '../assets/images/research/proj-chen.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRobot } from '@fortawesome/free-solid-svg-icons';




const ResearchSurveillancePage: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();
    const thumbnails = [
        ProjN,
        ProjTsai,
        ProjBoyu,
        ProjChen
    ];
    const titles = [
        "全方位智慧型監控系統",
        "移動物體追蹤與速度量測",
        "基於影像之條碼掃描系統",
        "單攝影機三維動作擷取與擴增實境應用",

    ];
    const desc_list = [
        "本研究使用全方位影像系統以改善傳統上利用多架相機監控的缺點，發展基於運動歷史影像、彩色機率分布以及光流等移動物體之偵測及追蹤等演算法。我們成功地 結合了不同的影像分析及追蹤方法以達到全自動的偵測及追蹤等目的，並增加其追蹤結果的強健性，進而整合視覺系統的校正資訊進行跌落偵測等異常行為的分析。",
        "一般現有的追蹤方式大多利用視訊畫面進行二維的物體偵測及追蹤，本研究運用 CAM Shift 追蹤演算法，結合立體視覺的方式以達到物體三維追蹤的目的，並利用影像序列的時間資訊進行移動速度的估測。針對較快速的物體我們則採用歷史運動影像以及運 動區塊切割來找出待追蹤物體。",
        "本研究提出以視覺為基礎的條碼掃描方式，在不需要其他輔助光源的條件下來進行條碼辨識，此系統包含一架攝影機和處理控制及運算用的電腦。在對於在傳輸帶上 或是手持條碼物體，我們透過條碼掃描系統來追蹤並擷取可能的條碼影像區域，以進行後續的影像分析與條碼辨識。",
        "本研究中提出僅以單一攝影機擷取的環境作為輸入，且在使用者不需穿戴任何感測裝置的前提下，藉由比對實際剪影與虛擬人體的方式達成人體動作擷取的方法，過程中運用反覆疊代演算法來得到最好的結果，並加入人體在運動學上的限制及膚色偵測的資訊來預測及改善影像中發生自身遮蔽時易造成的誤判。最後將此系統融合到擴增實境(Augmented Reality)的應用上，以頭戴式顯示器(Head Mounted Display)作為媒介將虛擬物件融入到眼前景物中，並此系統讓使用者能與之互動。",
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
                        <FontAwesomeIcon icon={faRobot} className="rvl-icon fa-4x mb-3" />
                    </div>
                    <div className="col-12">
                        <h3 className="mb-4">Surveillance</h3>
                    </div>
                </div>
                { blocks }
            </div>
        </section>
    );
};

export default ResearchSurveillancePage;
