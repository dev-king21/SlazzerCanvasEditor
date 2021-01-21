import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon } from 'antd';
import axios from 'axios';
import { v4 } from 'uuid';

const { Dragger } = Upload;

class FileUpload extends Component {
	static propTypes = {
		onChange: PropTypes.func,
		limit: PropTypes.number,
		accept: PropTypes.string,
	};

	static defaultProps = {
		limit: 5,
	};

	state = {
		fileList: this.props.value ? [this.props.value] : []
	};

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({
			fileList: nextProps.value ? [nextProps.value] : [],
		});
	}

	render() {
		const { accept, limit, hideFlag } = this.props;
		const { fileList } = this.state;
		const props = {
			accept,
			name: 'file',
			multiple: false,
			onChange: info => {
				
				// const isLimit = file.size / 1024 / 1024 < limit;
				// if (!isLimit) {
				// 	message.error(`Limited to ${limit}MB or less`);
				// 	return false;
				// }
				const { onChange } = this.props;

				const url = 'https://www.slazzer.com/api/v1/remove_image_background';
				const fData = new FormData();
				const uid = info.file.uid;
				fData.append('source_image_file', info.file);
				fData.append('output_image_format', 'base64')	
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
					console.log("getting data  : ",res)

					fetch(res.data.output_image_base64)
					.then(res => res.blob())
					.then(blob => {
						const nfile = new File([blob], "File name",{ type: "image/png" })
						nfile.uid = uid;
						onChange(nfile);
						hideFlag()
						console.log("nfile : ",nfile)
					})
					
				})
				.catch(errors => console.log(errors.data));

				// const url = 'https://www.slazzer.com/api/v1/remove_image_background';
				// const fData = new FormData();
				// const headers = {
				// 	headers: {
				// 		'Content-Type': 'multipart/form-data',
				// 		'API-KEY': '9fd6e94f3dd24659b7961cae090cdac6'
				// 	}
				// };
				// const uid = info.file.uid;
				// fData.append('source_image_file', info.file);
				// // fData.append('output_image_format', 'base64')
				// axios.post(url, fData, headers)
				// .then((res) => {
				// 	console.log("getting data ->", res)
				// 	const _option = {name: 'New Image', type: "image", src: res.data.output_image_url, id: v4()};
				
				// 	canvasRef.handler.add(_option, true);		
				// 	hideFlag();			
				// })
				// .catch(errors => console.log(errors));

			},
			
			onRemove: file => {
				this.setState(
					({ fileList }) => {
						const index = fileList.indexOf(file);
						const newFileList = fileList.slice();
						newFileList.splice(index, 1);
						return {
							fileList: newFileList,
						};
					},
					() => {
						const { onChange } = this.props;
						onChange(null);
					},
				);
			},

			beforeUpload: file => {
				
				return false
			},
		};
		return (
			<Dragger {...props}>
				<div className="dropImgBox">
					
					<div className="upload-box"><div className="upload-back-img"></div></div>
				</div>
			</Dragger>
		);
	}
}

export default FileUpload;

