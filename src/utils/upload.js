import { Storage } from 'aws-amplify';

const upload = (event, setProgress, setFile) => {
  const file = event.currentTarget.files[0];

  const type = file.type.split('/')[1];
  const fileName = new Date().getTime() + `.${type}`;
  console.log(fileName);

  Storage.put(fileName, file, {
    contentType: 'image/jpeg',
    contentEncoding: 'mimeType',

    progressCallback(progress) {
      setProgress((p) => ({
        ...p,
        loaded: progress.loaded,
        total: progress.total,
      }));
      console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
    },
  })
    .then((data) => {
      setFile(data.key.split('.')[0]);
    })
    .catch((err) => console.log(err.response));
};

export default upload;
