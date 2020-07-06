import { Storage } from 'aws-amplify';
import React from 'react';

const upload = (
  event: React.ChangeEvent<HTMLInputElement>,
  setProgress: any,
  setFile: any
) => {
  if (event.currentTarget.files === null) {
    return;
  }
  const file: File = event.currentTarget.files[0];

  const type = file.type.split('/')[1];
  const fileName = new Date().getTime() + `.${type}`;

  Storage.put(fileName, file, {
    contentType: 'image/jpeg',
    contentEncoding: 'mimeType',

    progressCallback(progress: any) {
      setProgress((p: any) => ({
        ...p,
        loaded: progress.loaded,
        total: progress.total,
      }));
    },
  })
    .then((data: any) => {
      setFile(data.key.split('.')[0]);
    })
    .catch((err) => err.response);
};

export default upload;
