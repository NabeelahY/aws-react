import { Storage } from 'aws-amplify';

const download = async (file: string, setUrl: any) => {
  try {
    let doc = await Storage.list(`${file}.txt`);
    console.log('doc', doc);
    if (doc) {
      Storage.get(`${file}.txt`)
        .then((data) => {
          setUrl(data);
        })
        .catch((err) => err.response);
    } else {
      console.log('else', doc);
    }
  } catch (error) {
    console.log('err', error);
  }
};

export default download;
