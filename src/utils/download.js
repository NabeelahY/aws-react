import { Storage } from 'aws-amplify';

const download = (file, setUrl) => {
  console.log(file);
  Storage.get(`${file}.txt`)
    .then((data) => {
      setUrl(data);
      console.log(data);
    })
    .catch((err) => console.log(err.response));
};

export default download;
