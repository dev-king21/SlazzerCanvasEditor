import React from 'react';
import FileUpload from '../../common/FileUpload';

export default {
	render(canvasRef, form, data, hideFlag) {

		const { getFieldDecorator } = form;
	
		if (!data) {
			return null;
		}

			// onChange: (selectedItem, changedValues, allValues) => {
			// const { editing } = this.state;
			// if (!editing) {
			// 	this.changeEditing(true);
			// }
			// const changedKey = Object.keys(changedValues)[0];
			// const changedValue = changedValues[changedKey];
			// if (allValues.workarea) {
			// 	this.canvasHandlers.onChangeWokarea(changedKey, changedValue, allValues.workarea);
			// 	return;
			// }
			// if (changedKey === 'width' || changedKey === 'height') {
			// 	this.canvasRef.handler.scaleToResize(allValues.width, allValues.height);
			// 	return;
			// }
			// if (changedKey === 'angle') {
			// 	// this.canvasRef.handler.rotate(allValues.angle);
			// 	return;
			// }
			// if (changedKey === 'locked') {
			// 	this.canvasRef.handler.setObject({
			// 		lockMovementX: changedValue,
			// 		lockMovementY: changedValue,
			// 		hasControls: !changedValue,
			// 		hoverCursor: changedValue ? 'pointer' : 'move',
			// 		editable: !changedValue,
			// 		locked: changedValue,
			// 	});
			// 	return;
			// }
			// if (changedKey === 'file' || changedKey === 'src' || changedKey === 'code') {
			// 	if (selectedItem.type === 'image') {
			// 		this.canvasRef.handler.setImageById(selectedItem.id, changedValue);
			// 	} else if (selectedItem.superType === 'element') {
			// 		this.canvasRef.handler.elementHandler.setById(selectedItem.id, changedValue);
			// 	}
			// 	return;
			// }
			// if (changedKey === 'link') {
			// 	const link = Object.assign({}, defaultOption.link, allValues.link);
			// 	this.canvasRef.handler.set(changedKey, link);
			// 	return;
			// }

		return (
					<>
						{getFieldDecorator('file', {
							rules: [
								{
									required: true,
									message: 'welcole',
								},
							],
							initialValue: data.file,
						})(
							 <FileUpload accept="image/*" hideFlag={hideFlag} 
								/> 
						)}
					</>
		);
	},
};
