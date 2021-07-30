import { useState } from 'react';
import { useS3Upload } from 'next-s3-upload';
import swal from 'sweetalert';
import { AnyCnameRecord } from 'dns';

export default function UploadTest() {
  let [imageUrl, setImageUrl] = useState("");
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const axios = require('axios');
  
    
  let handleFileChange = async (file:any) => {
    let { url } = await uploadToS3(file);
    setImageUrl(url);    
  };
    
  return (
    <div>
      <FileInput onChange={handleFileChange} />

      <button onClick={openFileDialog}>Upload file</button>
     

      {imageUrl && <img src={imageUrl} />}
    </div>
  );
}