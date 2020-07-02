import React, { useRef, useState } from 'react';
import { Predictions } from 'aws-amplify';
import { Button, Spin } from 'antd';
import { CopyOutlined, LoadingOutlined } from '@ant-design/icons';
import { Top } from './styles/extractText';

const ExtractText = () => {
  const [res, setRes] = useState('');
  const [show, setShow] = useState(false);
  const [copySuccess, setCopySuccess] = useState('Copy');
  const textAreaRef = useRef(null);
  const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;

  const identify = async (event) => {
    setRes('Loading');
    const {
      target: { files },
    } = event;

    const file = files[0];
    const data = await Predictions.identify({
      text: { source: { file }, format: 'PLAIN' },
    });
    console.log(data);

    setRes(data.text.fullText);
    setShow(true);
  };

  const copy = () => {
    textAreaRef.current.select();
    document.execCommand('copy');
    setCopySuccess('Copied!');
  };
  return (
    <Top>
      <h3>Convert to Text</h3>
      <div className="upload">
        <div className="imgUpload">
          <input type="file" onChange={identify} id="uploadimg" />
          <label htmlFor="uploadimg">Upload a png or jpg image here</label>
        </div>
        <div
          className="display"
          style={{
            backgroundColor: show ? '#dedede' : '#fff',
          }}
        >
          {res !== 'Loading' ? (
            <>
              <textarea
                value={res}
                readOnly
                ref={textAreaRef}
                style={{
                  backgroundColor: show ? '#dedede' : '#fff',
                }}
              />
              {show && (
                <Button
                  size="small"
                  type="link"
                  shape="round"
                  icon={<CopyOutlined />}
                  onClick={copy}
                >
                  {copySuccess}
                </Button>
              )}
            </>
          ) : (
            <Spin tip="Extracting..." indicator={antIcon} />
          )}
        </div>
      </div>
    </Top>
  );
};

export default ExtractText;
