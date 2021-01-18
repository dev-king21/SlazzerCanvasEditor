import React, { Component } from 'react';
import { Button, Menu, Dropdown } from 'antd';
import { Flex } from '../flex';
import Icon from '../icon/Icon';

class ImageMapTitle extends Component {
	render() {
		const { title, content, action, children } = this.props;
		const screenJson = [
			"Select custom Size",
			"Facebook 1080 x 1080px",
			"Facebook 1200 x 628px",
			"Facebook 1640 x 856px",
			"Facebook 1702 x 630px",
			"Facebook 1200 x 1200px",
			"Facebook 360 x 360px",
			"Facebook 1080 x 1920px",
			"YouTube 2560 x 1440px",
			"YouTube 800 x 800px",
			"YouTube 300 x 250px",
			"YouTube 300 x 60px",
			"YouTube 480 x 70px",
			"YouTube 1280 x 720px",
			"Instagram 420 x 654px",
			"Instagram 1080 x 566px",
			"Instagram 1080 x 1350px",
			"Instagram 360 x 360px",
			"Pinterest 1000 x 1500px",
			"Pinterest 1000 x 1000px",
			"LinkedIn 1536 x 768px",
			"LinkedIn 1584 x 396px",
			"LinkedIn 1400 x 800px",
			"LinkedIn 400 x 400px",
			"LinkedIn 1200 x 627px",
			"Twitter 1500 x 500px",
			"Twitter 800 x 320px",
			"Twitter 1024 x 512px"
		]

		const menu = (
			
			<Menu>
				{screenJson.map(key=>(
					<Menu.Item
						onClick={() => {
							this.canvasRef.handler.toActiveSelection();
						}}
						>
							{/* {i18n.t('action.object-ungroup')} */}
							{key}
					</Menu.Item>
				))}
			</Menu>
		)

		return (
			children || (
				<Flex className="rde-content-layout-title" alignItems="center" flexWrap="wrap">
					<Flex.Item flex="0 1 auto">
						<Flex
							className="rde-content-layout-title-title"
							justifyContent="flex-start"
							alignItems="center"
						>
							{title instanceof String ? <h3>	{title}</h3> : title}
						</Flex>
					</Flex.Item>
					
					<Flex.Item flex="auto">
						<Flex className="rde-content-layout-title-content" alignItems="center">
							{content}
							
						</Flex>
					</Flex.Item>

					<Flex.Item className="screenmode-box">
						<Flex className="screenmode" alignItems="center">
							<span>popular format</span>
							<div className="resolution-box">
								<Dropdown overlay={menu} trigger={['click']} >
									<a className="ant-dropdown-link resolution-dropdown" onClick={e => e.preventDefault()}>
										Facebook 1080 x 1080px
									</a>
									{/* <Icon name="angle-up" /> */}
								</Dropdown>
							</div>

						</Flex>
					</Flex.Item>

					<Flex.Item flex="auto">
						<Flex className="title-right-box" justifyContent="flex-end" alignItems="center">
							{/* {action} */}
							<Button className="btn-changeAPI">
								<span>Change API Key</span>
							</Button>

							<Button className="btn-upload">
								<i className="icon-upload"></i>
								<span>Upload Image</span>
							</Button>
						</Flex>
					</Flex.Item>
				</Flex>
			)
		);
	}
}

export default ImageMapTitle;
