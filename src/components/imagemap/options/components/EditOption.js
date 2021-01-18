import React, { Component } from 'react';
import Icon from '../../../icon/Icon';
import { Flex } from '../../../flex';
import PropTypes from 'prop-types';
import MuiAccordion from '@material-ui/core/Accordion';
import Button from '@material-ui/core/Button';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiTypography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiNativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

import IconButton from '@material-ui/core/IconButton';

const Accordion = withStyles({
    root: {
      border: 'none',
      boxShadow: 'none',
      fontFamily: "'Poppins','sans-serif'!important",
      background: 'transparent',
      color: '#bbb',
      fontSize: '12px',
      transition: 'all 0.5s ease',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
        background: '#222222'
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      marginBottom: -1,
      minHeight: 30,
      '&$expanded': {
          minHeight: 30
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
        background: '#222222',
        borderRadius: '0 0 5px 5px',
        color: '#bbb'
    },
  }))(MuiAccordionDetails);

  const Typography = withStyles({
      root: {
          fontSize: '12px'
      }
  })(MuiTypography);

  const NativeSelect = withStyles({
      root: {
          color: '#bbb',
          fontSize: '12px',

      },
      select: {
          lineHeight: '15px',
          paddingLeft: '8px'
      },
      icon: {
          color: '#bbb'
      }
  })(MuiNativeSelect)

const useStyles = makeStyles((theme) => ({

	  column2: {
		  display: 'flex',
		  justifyContent: 'center'
	  },
	  saveCancel: {
		  display: 'inline-flex',
		  justifyContent: 'flex-end',
		  alignItems: 'center'
      },
      iconMargin: {
          marginRight: '8px'
      },
      inputOutline: {
          border: '1px solid #353535',
          lineHeight: '20px',
          width: '100%'
      },
      numberType: {
        marginRight: '10px'
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

function EditOption() {

	  const classes = useStyles();
	  const [state, setState] = React.useState({
		  age: '',
		  name: '',
	  });

	  const handleChange = (event) => {
		  const name = event.target.name;
		  setState({
			  ...state,
			  [name]: event.target.value,
		  });
	  };
	
	return(
        <>
        <Accordion>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordionSummary"
            >
            <Typography className={classes.iconMargin}><i className="icon-crop"></i></Typography>
            <Typography>Crop</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography className="naviselect-box">
                    <NativeSelect
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-native-helper',
                        }}
                        className={classes.inputOutline}
                        >
                        <option value={0}>Original Size</option>
                        <option value={10}>Square 1:1</option>
                        <option value={20}>Pasport Photo 4:6</option>
                        <option value={30}>Video thumb 16:9</option>
                    </NativeSelect>
                    <Flex flex="1" flexDirection="row" alignment="center">
                        <TextField
                            id="sizeValue"
                            label="Width(Px)"
                            value="900"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                                }}
                            margin="normal"
                            className={classes.numberType}
                        />
                        <TextField
                            id="sizeValue"
                            label="Height(Px)"
                            value="600"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                                }}
                            margin="normal"
                        />
                    </Flex>
                    <div className={classes.saveCancel}>
                        <Button
                            color="secondary"
                            startIcon={<Icon name="cancel1" />}
                        >
                            Cancel
                        </Button>
                        <Button
                            color = "primary"
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
            <Typography className={classes.iconMargin}><i className="icon-rotate-cw"></i></Typography>
            <Typography>Rotate</Typography>
            </AccordionSummary>
            <AccordionDetails>
                    
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
            </AccordionDetails>
        </Accordion>
	</>
	)
}

export default EditOption;
