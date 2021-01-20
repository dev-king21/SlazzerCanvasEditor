import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon } from 'antd';
import axios from 'axios';

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
		fileList: this.props.value ? [this.props.value] : [],
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
				const isLimit = info.file.size / 1024 / 1024 < limit;
				if (!isLimit) {
					message.error(`Limited to ${limit}MB or less`);
					return false;
				}
				const { onChange } = this.props;
				onChange(info.file);
				console.log("afterLoading :", info.file)
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
				console.log("BeforeLoading  :" , file)
				const url = 'https://www.slazzer.com/api/v1/remove_image_background';
				const fData = new FormData();
				fData.append('source_image_file', file);		
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
					hideFlag()
					this.setState({
						fileList: [file],
					});
				})
				.catch(errors => console.log(errors.data));;
			},
			fileList
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


// const url = 'https://www.slazzer.com/api/v1/remove_image_background';
// 		const fData = new FormData();
// 		fData.append('source_image_file', files[0]);		
// 		axios.post(
// 			url,
// 			fData,
// 			{
// 				headers: {
// 					'Content-Type': 'multipart/form-data',
// 					'API-KEY': '9fd6e94f3dd24659b7961cae090cdac6'
// 				}
// 			}
// 		)
// 		.then((res) => {
// 		})
// 		.catch(errors => console.log(errors.res.data));;