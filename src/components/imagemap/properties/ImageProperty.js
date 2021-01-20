import React from 'react';
import FileUpload from '../../common/FileUpload';

export default {
	render(canvasRef, form, data, hideFlag) {

		const { getFieldDecorator } = form;
	
		if (!data) {
			return null;
		}

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
