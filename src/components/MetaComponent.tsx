import React from 'react';
import { Helmet } from 'react-helmet-async'

interface MetaComponentProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const MetaComponent: React.FC<MetaComponentProps> = ({
  title = '機器人視覺實驗室 - Robot Vision Lab',
  description = '「機器人視覺實驗室」隸屬於國立中正大學電機工程研究所，歡迎具電機、資訊相關背景的同學加入我們的研究行列。',
  url = 'http://vision.ee.ccu.edu.tw',
  image = 'http://vision.ee.ccu.edu.tw/img/rvl_logo.png',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="msapplication-TileColor" content="#2D89EF" />
      <meta name="msapplication-config" content="img/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#FFFFFF" />
    </Helmet>
  );
};

export default MetaComponent;

