import { Storage } from 'aws-amplify';

const download = (file, setUrl) => {
  Storage.get(`${file}.txt`)
    .then((data) => {
      setUrl(data);
    })
    .catch((err) => err.response);
};

export default download;
