import React, { Component } from 'react';
import i18n from 'i18next';
import Scrollbar from '../common/Scrollbar';
import Icon from '../icon/Icon';
import { Flex } from '../flex';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import Button from '@material-ui/core/Button';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import '../../styles/index.less';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
	root: {
	  width: '100%',
	  fontFamily: "'Poppins','sans-serif'!important"
	},
	accordionBox: {
		background: 'transparent',
		color: '#bbb'
	},
	accordionExpand: {
		background: '#222222'
	},
	accordiondetailBox: {
		background: '#222222',
		borderRadius: '0 0 5px 5px'
	},
	heading: {
	  fontSize: theme.typography.pxToRem(15),
	  fontWeight: theme.typography.fontWeightRegular,
	},
	button: {
		margin: theme.spacing(1),
	  },
	iconbox: {
		marginRight: '5px'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	  },
	  selectEmpty: {
		marginTop: theme.spacing(2),
	  },

	  column2: {
		  display: 'flex',
		  justifyContent: 'center'
	  },
	  saveCancel: {
		  display: 'inline-flex',
		  flexDirection: 'flex-end',
		  alignment: 'center'
	  }
  }));


function ValueLabelComponent(props) {
	const { children, open, value } = props;

	return (
		<Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
		{children}
		</Tooltip>
	);
}

ValueLabelComponent.propTypes = {
	children: PropTypes.element.isRequired,
	open: PropTypes.bool.isRequired,
	value: PropTypes.number.isRequired,
  };

function OptionsBarContainer(props) {

	  const classes = useStyles();
	  const [state, setState] = React.useState({
		  age: '',
		  name: 'hai',
	  });

	  const handleChange = (event) => {
		  const name = event.target.name;
		  setState({
			  ...state,
			  [name]: event.target.value,
		  });
	  };
	
	return(
		<div className="option-bar-container">
			<Scrollbar>
			<div className={classes.root}>
				<Accordion className={classes.accordionBox}>
					<AccordionSummary
						aria-controls="panel1a-content"
						id="panel1a-header"
						className="accordionSummary"
					>
					<Typography className={classes.iconbox}><i className="icon-crop"></i></Typography>
					<Typography className={classes.heading}>Crop</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.accordiondetailBox}>
						<Typography className="naviselect-box">
							<NativeSelect
								value={state.age}
								onChange={handleChange}
								inputProps={{
									name: 'age',
									id: 'age-native-helper',
								}}
								className="naviselect-content"
								>
								<option value={0}>Original Size</option>
								<option value={10}>Square 1:1</option>
								<option value={20}>Pasport Photo 4:6</option>
								<option value={30}>Video thumb 16:9</option>
							</NativeSelect>
							<div className={classes.column2}>
								<TextField
									id="number"
									label="Width(Px)"
									value="900"
									type="number"
									InputLabelProps={{
										shrink: true,
										}}
									margin="normal"
								/>
								<TextField
									id="number"
									label="Height(Px)"
									value="600"
									type="number"
									InputLabelProps={{
										shrink: true,
										}}
									margin="normal"
								/>
							</div>
							<div className={classes.saveCancel}>
								<Button
									color="secondary"
									className={classes.button}
									startIcon={<Icon name="cancel1" />}
								>
									Cancel
								</Button>
								<Button
									color = "primary"
									className={classes.button}
									startIcon={<Icon name="check-circle" />}
								>
									Save
								</Button>
								
							</div>
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion>
					<AccordionSummary
						aria-controls="panel1a-content"
						id="panel1a-header"
						className="accordionSummary"
					>
					<Typography className={classes.iconbox}><i className="icon-rotate-cw"></i></Typography>
					<Typography className={classes.heading}>Rotate</Typography>
					</AccordionSummary>
					<AccordionDetails className={classes.accordiondetailBox}>
						<Typography className="">
							
						<Flex flex="1" flexDirection="row" style={{ }}>
							<IconButton color="primary" aria-label="rotate left">
								<Icon name="rotate-ccw" />
							</IconButton>
							<IconButton color="primary" aria-label="rotate right">
								<Icon name="rotate-cw" />
							</IconButton>
							<IconButton color="primary" aria-label="rotate left">
								<Icon name="icon-swap_horizontal_circle" />
							</IconButton>
							<IconButton color="primary" aria-label="rotate left">
								<Icon name="icon-swap_vertical_circle" />
							</IconButton>
						</Flex>
						
						<Typography gutterBottom>Strength</Typography>
							<Slider
								ValueLabelComponent={ValueLabelComponent}
								aria-label="custom thumb label"
								defaultValue={20}
							/>
						
						</Typography>
					</AccordionDetails>
				</Accordion>
				</div>
			</Scrollbar>
		</div>
	)
}

export default OptionsBarContainer;
