import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import MapProperties from './properties/MapProperties';

class ImageMapConfigurations extends Component {
	static propTypes = {
		canvasRef: PropTypes.any,
		selectedItem: PropTypes.object,
		onChange: PropTypes.func,
		onChangeAnimations: PropTypes.func,
		onChangeStyles: PropTypes.func,
		onChangeDataSources: PropTypes.func,
		animations: PropTypes.array,
		styles: PropTypes.array,
		dataSources: PropTypes.array,
	};

	state = {
		activeKey: 'map',
	};

	handlers = {
		onChangeTab: activeKey => {
			this.setState({
				activeKey,
			});
		},
		onCollapse: () => {
			this.setState({
				collapse: !this.state.collapse,
			});
		},
	};

	render() {
		const {
			onChange,
			selectedItem,
			canvasRef,
			animations,
			styles,
			dataSources,
			onChangeAnimations,
			onChangeStyles,
			onChangeDataSources,
			hideFlag
		} = this.props;
	
		const { collapse, activeKey } = this.state;
		const { onChangeTab, onCollapse } = this.handlers;
		const className = classnames('rde-drag-drop-image');
		
		return (
			<div className={className}>

				<MapProperties onChange={onChange} canvasRef={canvasRef} hideFlag={hideFlag} />
				
			</div>
		);
	}
}

export default ImageMapConfigurations;
