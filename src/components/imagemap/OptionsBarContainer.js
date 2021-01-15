import React, { Component } from 'react';
import { Badge, Button, Popconfirm, Menu } from 'antd';
import i18n from 'i18next';
import Scrollbar from '../common/Scrollbar';
import { Flex } from '../flex';
import SandBox from '../sandbox/SandBox';

import '../../styles/index.less';
import CommonButton from '../common/CommonButton';

function OptionsBarContainer(props) {
	
	return(
		<div className="option-bar-container">
			<div style={{paddingBottom: '15px'}}></div>
			<Scrollbar>
				<Flex flex="1" style={{ overflowY: 'hidden' }}>
					<ul>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
						<li>
							<img src="images/templates/youtube.jpg"></img>
						</li>
					</ul>
				</Flex>
			</Scrollbar>
		</div>
	)
}

export default OptionsBarContainer;
