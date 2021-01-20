import React, {useCallback, useState} from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios';

export default function ImageDraggerBox(props){

		const onDrop = (files) => {
			// POST to a test endpoint for demo purposes
				const url = 'https://www.slazzer.com/api/v1/remove_image_background';
				const fData = new FormData();
				fData.append('source_image_file', files[0]);
				const onChange = (newFileList) => {
					setFileList(newFileList)
				}		
				axios.post(
					url,
					fData,
					{
						headers: {
							'Content-Type': 'multipart/form-data',
							'API-KEY': '9fd6e94f3dd24659b7961cae090cdac6'
						}
					}
				)
				.then((res) => {
				
				})
				.catch(errors => console.log(errors.data));;
			  }

			  return (
				<Dropzone onDrop={onDrop}>
					{({getRootProps, getInputProps, isDragActive}) => (
						<section>
							
						<div {...getRootProps()} className="dropImgBox">
							<input {...getInputProps()} />
								  <div className="upload-box"><div className={`${isDragActive ? 'upload-back-img-drag-active' : 'upload-back-img '}`}></div></div>
						</div>
						</section>
					  )}
				</Dropzone>
			  )
}