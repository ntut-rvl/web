import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { useAnimateOnScroll } from '../Utils';

// 定義資料集結構
interface DatasetItem {
    name: string;
    size: string;
    url: string;
}

const UAVTaipeiPage: React.FC = () => {
    const onScrollEl = useAnimateOnScroll();

    // 資料集清單
    const datasets: DatasetItem[] = [
        { name: "Daan Park 100K", size: "10.92 GB", url: "http://vision.ee.ccu.edu.tw/dataset/UAV_Taipei/Daan_park_100k.zip" },
        { name: "Daan Park", size: "3.87 GB", url: "http://vision.ee.ccu.edu.tw/dataset/UAV_Taipei/Daan_park.zip" },
        { name: "NTU Playground 1M", size: "34.12 GB", url: "http://vision.ee.ccu.edu.tw/dataset/UAV_Taipei/NTU_playground_1M.zip" },
        { name: "NTU Playground 100K", size: "10.86 GB", url: "http://vision.ee.ccu.edu.tw/dataset/UAV_Taipei/NTU_playground_100k.zip" },
        { name: "NTU Playground Cross Season 100K", size: "11.8 GB", url: "http://vision.ee.ccu.edu.tw/dataset/UAV_Taipei/NTU_playground_Cross_Season_100k.zip" },
        { name: "NTU Playground", size: "3.38 GB", url: "http://vision.ee.ccu.edu.tw/dataset/UAV_Taipei/NTU_playground.zip" },
        { name: "Pohsun Dataset v1", size: "15.88 GB", url: "http://vision.ee.ccu.edu.tw/dataset/UAV_Taipei/pohsun_datasets_v1.zip" },
        { name: "Satellites Dataset", size: "150.2 MB", url: "http://vision.ee.ccu.edu.tw/dataset/UAV_Taipei/satellites.zip" },
        { name: "Taichung Station 100K", size: "15.16 GB", url: "http://vision.ee.ccu.edu.tw/dataset/UAV_Taipei/Taichung_station_100k.zip" },
        { name: "Taipei Gallery 1M", size: "29.88 GB", url: "http://vision.ee.ccu.edu.tw/dataset/UAV_Taipei/taipei_gallery_1M.zip" },
        { name: "UCLA Cross Season 100K", size: "64.65 GB", url: "http://vision.ee.ccu.edu.tw/dataset/UAV_Taipei/UCLA_Cross_Season_100k_archive.zip" },
    ];

    return (
        <>
            <Helmet>
                <title>UAV Taipei 資料集 | 機器人視覺實驗室</title>
                <meta name="description" content="UAV Taipei 用於無人機戶外視覺定位資料集，來自台灣台北地區包含無人機以及衛星影像。" />
            </Helmet>
            
            <section className="rvl-section rvl-bg-gray rvl-slant rvl-slant-white">
                <div className="container">
                    <div 
                        ref={onScrollEl} 
                        className="row rvl-animate mb-4 text-center" 
                        data-animate-effect="fadeIn"
                    >
                        <div className="col-12">
                            <FontAwesomeIcon icon={faDatabase} className="rvl-icon fa-4x mb-3" />
                        </div>
                        <div className="col-12">
                            <h3 className="mb-4">UAV Taipei</h3>
                            <p>Click the dataset name to download. If the download does not start, please copy and paste the link into your browser.</p>
                        </div>
                    </div>

                    <div className="list-group">
                        {datasets.map((item, index) => (
                            <a 
                                key={index}
                                href={item.url} 
                                className="list-group-item list-group-item-action"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <b>{item.name}</b> ({item.size})
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default UAVTaipeiPage;
