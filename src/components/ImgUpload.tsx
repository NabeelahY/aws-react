import React, { useState, useEffect, useRef } from 'react';
import Amplify from 'aws-amplify';
import { Progress, Button } from 'antd';
import { DownloadOutlined, RedoOutlined } from '@ant-design/icons';

import upload from '../utils/upload';
import download from '../utils/download';
import config from '../aws-exports';
import aws from '../config/aws';

import { Bottom } from './styles/imgUpload';
interface state {
  loaded: number | undefined;
  total: number | undefined;
  percent: number | undefined;
}
const ImgUpload = () => {
  const initialState: state = {
    loaded: 0,
    total: 0,
    percent: 0,
  };
  const [progress, setProgress] = useState(initialState);
  const [file, setFile] = useState<null | string>(null);
  const [url, setUrl] = useState<null | string>(null);
  const fileUpload = useRef<any>();

  useEffect(() => {
    const { loaded, total } = progress;
    let percentage = (loaded! / total!) * 100;
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

  const reset = () => {
    setProgress(initialState);
    setFile(null);
    setUrl(null);
    if (fileUpload !== null) fileUpload.current.value = null;
  };

  return (
    <Bottom>
      <h3>
        Download a <code>.txt</code> file of Image Text
      </h3>
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={(e) => {
          upload(e, setProgress, setFile);
        }}
        ref={fileUpload}
      />
      {progress!.percent! > 1 && (
        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={progress.percent}
          format={(percent) => `${Math.floor(percent as number)}%` as string}
          success={{ strokeColor: '#gdg09' }}
        />
      )}

      {url && (
        <div className="success">
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="small"
            href={url}
          >
            Download .txt file
          </Button>

          <Button
            shape="round"
            icon={<RedoOutlined />}
            size="small"
            onClick={reset}
          >
            Reset
          </Button>
        </div>
      )}
    </Bottom>
  );
};

export default ImgUpload;
