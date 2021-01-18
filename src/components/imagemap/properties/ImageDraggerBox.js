import { message, Upload } from 'antd';
import React from 'react';

const { Dragger } = Upload;

const props = {
	name: 'file',
	multiple: 'true',
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	onChange(info) {
		const { status } = info.file;
		if (status !== 'uploading') {
			console.log(info.file, info.fileList);
		}

		if (status === 'done') {
			message.success(`${info.file.name} file upload successfully.`)
		} else if (status === 'error') {
			message.error(`failed`);
		}
	}
	
}; 

export default function ImageDraggerBox() {
	return (
		<Dragger {...props}>
			<div className="upload-back-img"></div>
		</Dragger>
	)
}


// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Upload, message } from 'antd';

// const { Dragger } = Upload;

// class ImageDraggerBox extends Component {
// 	static propTypes = {
// 		onChange: PropTypes.func,
// 		limit: PropTypes.number,
// 		accept: PropTypes.string,
// 	};

// 	static defaultProps = {
// 		limit: 5,
// 	};

// 	state = {
// 		fileList: this.props.value ? [this.props.value] : [],
// 	};

// 	UNSAFE_componentWillReceiveProps(nextProps) {
// 		this.setState({
// 			fileList: nextProps.value ? [nextProps.value] : [],
// 		});
// 	}

// 	render() {
// 		const { accept, limit } = this.props;
// 		const { fileList } = this.state;
// 		const props = {
// 			accept,
// 			name: 'file',
// 			multiple: false,
// 			onChange: info => {
// 				const isLimit = info.file.size / 1024 / 1024 < limit;
// 				if (!isLimit) {
// 					message.error(`Limited to ${limit}MB or less`);
// 					return false;
// 				}
// 				const { onChange } = this.props;
// 				onChange(info.file);
// 			},
// 			onRemove: file => {
// 				this.setState(
// 					({ fileList }) => {
// 						const index = fileList.indexOf(file);
// 						const newFileList = fileList.slice();
// 						newFileList.splice(index, 1);
// 						return {
// 							fileList: newFileList,
// 						};
// 					},
// 					() => {
// 						const { onChange } = this.props;
// 						onChange(null);
// 					},
// 				);
// 			},
// 			beforeUpload: file => {
// 				const isLimit = file.size / 1024 / 1024 < limit;
// 				if (!isLimit) {
// 					return false;
// 				}
// 				this.setState({
// 					fileList: [file],
// 				});
// 				return false;
// 			},
// 			fileList,
// 		};
// 		return (
// 			<Dragger {...props}>
// 				<div className="upload-back-img"></div>
// 			</Dragger>
// 		);
// 	}
// }

// export default ImageDraggerBox;