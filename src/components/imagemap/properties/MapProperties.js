import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Collapse } from 'antd';
import ImageProperty from './ImageProperty';

const { Panel } = Collapse;

class MapProperties extends Component {
	static propTypes = {
		canvasRef: PropTypes.any,
	};

	render() {
	
		const { canvasRef, form, hideFlag } = this.props;
		if (canvasRef) {
			return (
						<>	
					{ImageProperty.render(
						canvasRef,
						form,
						canvasRef.handler.workarea,
						hideFlag
					)}
					</>
			);
		}
		return null;
	}
}

export default Form.create({
	onValuesChange: (props, changedValues, allValues) => {
		const { onChange, selectedItem } = props;
		onChange(selectedItem, changedValues, { workarea: allValues });
	},
})(MapProperties);