import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

import { Flex } from '../flex';
import ImageMapList from './ImageMapList';
import { CommonButton } from '../common';
import Icon from '../icon/Icon';
import '../../libs/fontawesome-5.2.0/css/all.css';

class ImageMapHeaderToolbar extends Component {
	static propTypes = {
		canvasRef: PropTypes.any,
		selectedItem: PropTypes.object,
	};

	render() {
		const { canvasRef, selectedItem } = this.props;
		const isCropping = canvasRef ? canvasRef.handler?.interactionMode === 'crop' : false;
		console.log("canvas rotate : ", canvasRef.handler)
		return (
			<Flex className="rde-editor-header-toolbar-container" flex="1">
				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-alignment">
					<CommonButton
						className="rde-action-btn"
						shape="circle"
						disabled={isCropping}
						onClick={() => {
								canvasRef.handler.zoomHandler.zoomOut();
							}}
						icon="minus-outline"
						tooltipTitle={i18n.t('action.zoom-out')}
					/>
					<CommonButton
						className="rde-action-btn m-footer-2"
						shape="circle"
						disabled={isCropping}
						// onClick={() => canvasRef.handler?.duplicate()}
						onClick={() => canvasRef.handler.rotate(90)}
						tooltipTitle={i18n.t('action.clone')}>
						<span className="zoomValue">100%</span>
						{/* <span className="font-awesome"><Icon name="angle-up"/></span> */}
					</CommonButton>
					
					<CommonButton
						className="rde-action-btn m-right-2"
						shape="circle"
						disabled={isCropping}
						onClick={() => {
								canvasRef.handler.zoomHandler.zoomIn();
							}}
						icon="plus-circle"
						tooltipTitle={i18n.t('action.zoom-in')}
					/>
				</Flex.Item>
				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-alignment">
					<CommonButton
						className="rde-action-btn m-footer-2"
						shape="circle"
						icon="layers"
						tooltipTitle={i18n.t('action.layers')}
					/>
				</Flex.Item>
				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-list">
					<CommonButton
						className="rde-action-btn m-footer-2"
						shape="circle"
						icon="screen-full"
						tooltipTitle={i18n.t('action.fullscreen')}
					/>
					<div className="rde-canvas-list">
						<ImageMapList canvasRef={canvasRef} selectedItem={selectedItem} />
					</div>
				</Flex.Item>
				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-alignment">
					<CommonButton
						className="rde-action-btn m-footer-2"
						shape="circle"
						disabled={isCropping}
						onClick={() => {
								canvasRef.handler.zoomHandler.zoomToFit();
							}}
						icon="copy"
						tooltipTitle={i18n.t('action.fit-to-screen')}
					/>
				</Flex.Item>

				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-alignment">
					<CommonButton
						className="rde-action-btn m-left-2"
						style={{padding: '5px'}}
						disabled={isCropping || (canvasRef && !canvasRef.handler?.transactionHandler.undos.length)}
						onClick={() => canvasRef.handler?.transactionHandler.undo()}
						tooltipTitle={i18n.t('action.undo')}
					>
						<Icon name="corner-up-left"/>
				
					</CommonButton>
					<CommonButton
						className="rde-action-btn m-right-2"
						style={{padding: '5px'}}
						disabled={isCropping || (canvasRef && !canvasRef.handler?.transactionHandler.redos.length)}
						onClick={() => canvasRef.handler?.transactionHandler.redo()}
						tooltipTitle={i18n.t('action.redo')}
					>
						<Icon name="corner-up-right" />
					</CommonButton>
					
				</Flex.Item>
				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-alignment">
					<CommonButton
						className="rde-action-btn m-footer-2"
						shape="circle"
						disabled={isCropping}
						onClick={() => canvasRef.handler?.duplicate()}
						icon="repeat"
						tooltipTitle={i18n.t('action.reset')}
					/>
				</Flex.Item>
			</Flex>
		);
	}
}

export default ImageMapHeaderToolbar;
