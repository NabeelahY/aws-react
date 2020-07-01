import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import { Progress, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import upload from '../utils/upload';
import download from '../utils/download';
import config from '../aws-exports';
import aws from '../config/aws';

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
    <div>
      <h3>Upload Image</h3>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          upload(e, setProgress, setFile);
        }}
      />
      <Progress
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={progress.percent}
        success={{ strokeColor: '#gdg09' }}
      />

      {url && (
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="small"
          href={url}
        >
          Download
        </Button>
      )}
    </div>
  );
};

export default ImgUpload;
