module.exports = {
  // Target must be serverless
  target: "serverless",
  images: {
    domains: [`${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`],
  },
};
