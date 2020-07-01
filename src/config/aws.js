const AWSconfig = {
  bucket: process.env.REACT_APP_Bucket,
  region: 'us-east-1',
  accessKeyId: process.env.REACT_APP_AWSAccessKeyId,
  secretAccessKey: process.env.REACT_APP_AWSSecretKey,
};

export default AWSconfig;
