import React, { Component } from 'react';
import { Badge, Button, Popconfirm, Menu } from 'antd';
import i18n from 'i18next';
import Scrollbar from '../common/Scrollbar';
import { Flex } from '../flex';
import SandBox from '../sandbox/SandBox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import '../../styles/index.less';

const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	},
	heading: {
	  fontSize: theme.typography.pxToRem(15),
	  fontWeight: theme.typography.fontWeightRegular,
	},
  }));

function OptionsBarContainer(props) {

	  const classes = useStyles();
	
	return(
		<div className="option-bar-container">
			<Scrollbar>
				<Accordion>
					<AccordionSummary
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
					<Typography className={classes.heading}>Accordion 1</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
							sit amet blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion>
					<AccordionSummary
					aria-controls="panel2a-content"
					id="panel2a-header"
					>
					<Typography className={classes.heading}>Accordion 2</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
							sit amet blandit leo lobortis eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Scrollbar>
		</div>
	)
}

export default OptionsBarContainer;
