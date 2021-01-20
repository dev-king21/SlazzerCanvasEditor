import React, {useCallback, useState} from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Form } from 'antd';

function ImageDraggerBox(props) {

	const { hideFlag, canvasRef } = props
	console.log("canvasRef    : ", canvasRef);
	const [dragFlag, setDragFlag] = useState(false)

    const onDrop = (files) => {
	// POST to a test endpoint for demo purposes
		const url = 'https://www.slazzer.com/api/v1/remove_image_background';
		const fData = new FormData();
		fData.append('source_image_file', files[0]);		
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
			console.log(res);
			hideFlag();
			// const canvas = canvasRef.canvas;
			// console.log("workareaa:  ", canvasRef.handler.workarea)
			// const ctx = canvas.getContext('2d')
			// const img = new Image();
			// img.src = res.data.output_image_url;
			// img.onload = () => {
			// 	ctx.drawImage(img,0,0,canvas.width, canvas.height)
			// }
		})
		.catch(errors => console.log(errors.res.data));;
  	}

  return (
	<Dropzone onDrop={onDrop}>
		{({getRootProps, getInputProps, isDragActive}) => (
			<section>
				<Form.Item label={i18n.t('imagemap.image.image-load-type')} colon={false}>
					{getFieldDecorator('imageLoadType', {
						initialValue: imageLoadType,
					})(
						<Radio.Group size="small">
							<Radio.Button value="file">{i18n.t('imagemap.image.file-upload')}</Radio.Button>
							<Radio.Button value="src">{i18n.t('imagemap.image.image-url')}</Radio.Button>
						</Radio.Group>,
					)}
				</Form.Item>
			<div {...getRootProps()} className="dropImgBox">
				<input {...getInputProps()} />
					  <div className="upload-box"><div className={`${isDragActive ? 'upload-back-img-drag-active' : 'upload-back-img '}`}></div></div>
			</div>
			</section>
  		)}
	</Dropzone>
  )
}

export default Form.create({
	onValuesChange: (props, changedValues, allValues) => {
		const { onChange, selectedItem } = props;
		onChange(selectedItem, changedValues, { workarea: allValues });
	},
})(ImageDraggerBox);
