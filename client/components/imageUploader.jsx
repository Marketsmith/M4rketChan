import React, { useState } from 'react';
import {Cloudinary} from "@cloudinary/url-gen";
import { CLOUDINARY_CONSTS } from '../constants/actionTypes';

const { cloud_name, upload_preset } = CLOUDINARY_CONSTS;



const imageUploader = props => {
  const [image, setImage] = useState('');

  const { url, setUrl } = props;

  
  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", upload_preset)
    data.append("cloud_name", cloud_name)
    fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
      method:"post",
      body: data,
      // headers: {
      //   'content-type': 'application/json'
      // }
      })
      .then(resp => resp.json())
      .then(data => {
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA')
        console.log(data);
        console.log(data.url);
        setUrl(data.url);
      })
      // .then(data => {
      //   fetch('/upload', {

      //   })
      // })
      .catch(err => console.log(err))
  }

  // https://www.youtube.com/watch?v=dQw4w9WgXcQ


  return (
    <div>
      <div>
        <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
        <button onClick={uploadImage} type='button'>Upload</button>
      </div>
      <div>
        <img src={url}/>
      </div>
    </div>
  )

};

export default imageUploader;



  // const image = cloudinary.createUploadWidget({
  //   cloudName: CLOUDINARY_CONSTS.cloud_name,
  //   uploadPreset: CLOUDINARY_CONSTS.upload_preset}, (error, result) => {
  //     if (!error && result && result.event === "success") {
  //       console.log('Done! Here is the image info: ', result.info);
  //     }
  //   }
  // )





  // return (
  //   <>
  //   <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript">
  //   </script>
  //   <h1>To Upload Image on mongoDB</h1>
  //     <hr />
  //     <div>
  //       <form action="/upload" method="POST" >
  //         <div>
  //           <label htmlFor="name">Image Title</label>
  //           <input
  //             type="text"
  //             id="name"
  //             placeholder="Name"
  //             name="title"
  //             required
  //           />
  //         </div>
  //         <div>
  //           <label htmlFor="desc">Image Description</label>
  //           <textarea
  //             id="desc"
  //             name="desc"
  //             rows="2"
  //             placeholder="Description"
  //             required
  //           >
  //           </textarea>
  //         </div>
  //         <div>
  //           <label htmlFor="image">Upload Image</label>
  //           <input type="file" id="image" name="image" required />
  //         </div>
  //         <div>
  //           <button type="submit">Submit</button>
  //         </div>
  //       </form>
  //     </div>
  //   </>
  // );


  //   const myWidget = cloudinary.createUploadWidget(
  //   {
  //     cloudName: cloud_name,
  //     uploadPreset: upload_preset,
  //     cropping: true,
  //     multiple: false,
  //     context: {alt: "user_uploaded"},
  //     clientAllowedFormats: ["images"],
  //     maxImageWidth: 2000,
  //   },
  //   (error, result) => {
  //     if (!error && result && result.event === "success") {
  //       console.log("Done! Here is the image info: ", result.info);
  //       document
  //         .getElementById("uploadedimage")
  //         .setAttribute("src", result.info.secure_url);
  //     }
  //   }
  // );

  // return (
  //   <>
  //     <h3>Upload Widget Example</h3>

  //     <button onClick={() => {
  //         cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  //         { public_id: "olympic_flag" },
  //         function(error, result) {console.log(result); });
  //     }}
  //       id="upload_widget"
  //       className="cloudinary-button">
  //         Upload files
  //     </button>

  //     <img
  //       id="uploadedimage"
  //       src="">
  //     </img>


  //   </>
  // );

