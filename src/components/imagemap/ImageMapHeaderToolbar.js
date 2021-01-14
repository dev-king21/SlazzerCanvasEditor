import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

import { Flex } from '../flex';
import ImageMapList from './ImageMapList';
import { CommonButton } from '../common';
import Icon from '../icon/Icon';

class ImageMapHeaderToolbar extends Component {
	static propTypes = {
		canvasRef: PropTypes.any,
		selectedItem: PropTypes.object,
	};

	render() {
		const { canvasRef, selectedItem } = this.props;
		const isCropping = canvasRef ? canvasRef.handler?.interactionMode === 'crop' : false;
		return (
			<Flex className="rde-editor-header-toolbar-container" flex="1">
				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-alignment">
					<CommonButton
						className="rde-action-btn"
						shape="circle"
						icon="layers"
						tooltipTitle={i18n.t('action.canvas-list')}
					/>
				</Flex.Item>
				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-list">
					<CommonButton
						className="rde-action-btn"
						shape="circle"
						icon="screen-full"
						tooltipTitle={i18n.t('action.canvas-list')}
					/>
					<div className="rde-canvas-list">
						<ImageMapList canvasRef={canvasRef} selectedItem={selectedItem} />
					</div>
				</Flex.Item>
				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-alignment">
					<CommonButton
						className="rde-action-btn"
						shape="circle"
						disabled={isCropping}
						onClick={() => canvasRef.handler?.duplicate()}
						icon="copy"
						tooltipTitle={i18n.t('action.clone')}
					/>
				</Flex.Item>

				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-alignment">
					<CommonButton
						className="rde-action-btn"
						// disabled={isCropping || (canvasRef && !canvasRef.handler?.transactionHandler.undos.length)}
						onClick={() => canvasRef.handler?.transactionHandler.undo()}
					>
						<Icon name="corner-up-left"/>
				
					</CommonButton>
					<CommonButton
						className="rde-action-btn"
						style={{padding: 0}}
						// disabled={isCropping || (canvasRef && !canvasRef.handler?.transactionHandler.redos.length)}
						onClick={() => canvasRef.handler?.transactionHandler.redo()}
					>
				
						<Icon name="corner-up-right" />
					</CommonButton>
					{/* <CommonButton
						className="rde-action-btn"
						shape="circle"
						disabled={canvasRef ? !canvasRef.handler?.cropHandler.validType() : true}
						onClick={() => canvasRef.handler?.cropHandler.start()}
						icon="crop"
						tooltipTitle={i18n.t('action.crop')}
					/>
					<CommonButton
						className="rde-action-btn"
						shape="circle"
						disabled={canvasRef ? !canvasRef.handler?.cropHandler.cropRect : true}
						onClick={() => canvasRef.handler?.cropHandler.finish()}
						icon="check"
						tooltipTitle={i18n.t('action.crop-save')}
					/>
					<CommonButton
						className="rde-action-btn"
						shape="circle"
						disabled={canvasRef ? !canvasRef.handler?.cropHandler.cropRect : true}
						onClick={() => canvasRef.handler?.cropHandler.cancel()}
						icon="times"
						tooltipTitle={i18n.t('action.crop-cancel')}
					/> */}
				</Flex.Item>
				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-alignment">
					<CommonButton
						className="rde-action-btn"
						shape="circle"
						disabled={isCropping}
						onClick={() => canvasRef.handler?.duplicate()}
						icon="repeat"
						tooltipTitle={i18n.t('action.clone')}
					/>
				</Flex.Item>
			</Flex>
		);
	}
}

export default ImageMapHeaderToolbar;
