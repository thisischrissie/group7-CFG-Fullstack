import React from 'react'
import {useDropzone} from 'react-dropzone'
import '../styles/UploadImage.css'

function UploadImage(){
    const {
        getRootProps,
        getInputProps
    } = useDropzone({ 
        maxFiles:1,
        accept: {
            'image/jpeg': [],
            'image/png': []
        }
    });


    
      return (
        <section className="container">
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag a pup profile pic here 📷</p>
            <em>(Only *.jpeg and *.png images will be accepted)</em>
          </div>
        </section>
      );
    }
export default UploadImage