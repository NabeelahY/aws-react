import React from 'react';
import Amplify, { Storage } from 'aws-amplify';
import config from '../aws-exports';
import aws from '../config/aws';

const ImgUpload = () => {
  Amplify.configure({
    ...config,
    Storage: {
      AWSS3: aws,
    },
  });
  const upload = (event) => {
    const file = event.currentTarget.files[0];

    const type = file.type.split('/')[1];
    const fileName = new Date().getTime() + `.${type}`;
    console.log(fileName);

    Storage.put(fileName, file, {
      contentType: 'image/jpeg',
      contentEncoding: 'mimeType',
    })
      .then((data) => console.log(data))
      .catch((err) => console.log(err.response));
  };

  return (
    <div>
      <h3>Upload Image</h3>
      <input type="file" accept="image/*" onChange={upload} />
    </div>
  );
};

export default ImgUpload;
