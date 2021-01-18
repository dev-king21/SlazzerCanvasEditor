import React, { Component } from 'react';
import Scrollbar from '../common/Scrollbar';
import Icon from '../icon/Icon';
import { Flex } from '../flex';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import Button from '@material-ui/core/Button';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import '../../styles/index.less';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  fontFamily: "'Poppins','sans-serif'!important"
	},
	
	heading: {
	  fontSize: theme.typography.pxToRem(15),
	  fontWeight: theme.typography.fontWeightRegular,
	},
	button: {
		margin: theme.spacing(1),
	  },
  }));


function OptionsBarContainer(props) {

	  const classes = useStyles();
	  const [state, setState] = React.useState({
		  age: '',
		  name: 'hai',
	  });

	return(
		<div className="option-bar-container">
			<Scrollbar>
			<div className={classes.root}>

			</div>
			</Scrollbar>
		</div>
	)
}

export default OptionsBarContainer;
