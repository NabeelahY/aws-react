import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import { Progress, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import upload from '../utils/upload';
import download from '../utils/download';
import config from '../aws-exports';
import aws from '../config/aws';

import { Bottom } from './styles/imgUpload';

const ImgUpload = () => {
  const initialState = {
    loaded: 0,
    total: 0,
    percent: 0,
  };
  const [progress, setProgress] = useState(initialState);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const { loaded, total } = progress;
    let percentage = (loaded / total) * 100;
    setProgress((p) => ({
      ...p,
      percent: percentage,
    }));

    if (file) {
      download(file, setUrl);
    }
  }, [progress.loaded, file]);

  Amplify.configure({
    ...config,
    Storage: {
      AWSS3: aws,
    },
  });

  return (
    <Bottom>
      <h3>Get a .txt file of Image Text</h3>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          upload(e, setProgress, setFile);
        }}
      />
      {progress.percent > 1 && (
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={progress.percent}
          format={(percent) => `${Math.floor(percent)}%`}
          success={{ strokeColor: '#gdg09' }}
        />
      )}

      {url && (
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="small"
          href={url}
        >
          Download .txt file
        </Button>
      )}
    </Bottom>
  );
};

export default ImgUpload;
