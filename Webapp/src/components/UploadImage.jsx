import React from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components';

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
        <Container>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag a pup profile pic here 📷</p>
            <em>(Only *.jpeg and *.png images will be accepted)</em>
          </div>
        </Container>
      );
    }
export default UploadImage

//CSS
const Container = styled.div`
  border: 1px solid #8A5D4D;
  background-color: #FFF2E8;
  padding:10px;
`