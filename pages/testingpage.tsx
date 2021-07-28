import { useState } from 'react';
import { useS3Upload } from 'next-s3-upload';
import swal from 'sweetalert';
import { AnyCnameRecord } from 'dns';

export default function UploadTest() {
  let [imageUrl, setImageUrl] = useState("");
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  const axios = require('axios');
  const [formData, setFormData] = useState({});
  let handleFileChange = async (file:any) => {
    let { url } = await uploadToS3(file);
    setImageUrl(url);    
  };
  const updateInput = (e:any) => {
    setFormData({
      ...formData,
      [e.target.value]: e.target.value,
    });
  };
  const handleSubmit = (event:any) => {
    event.preventDefault();
    sendrqst();    
    setFormData({
      email: "",
      password: "",     
    });
    console.log(formData)
  };
  const sendrqst = () => {
    
    axios.get('http://account.dev.thepublishing.com/auth/health')
  .then(function (response:any) {
    // handle success
    console.log(response);
  })
  .catch(function (error:any) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    
  };

  return (
    <div>
      <FileInput onChange={handleFileChange} />

      <button onClick={openFileDialog}>Upload file</button>
      <button onClick={handleSubmit}>Check health</button>

      {imageUrl && <img src={imageUrl} />}
    </div>
  );
}