import React, { Component } from 'react';
import Icon from '../../../icon/Icon';
import { Flex } from '../../../flex';
import PropTypes from 'prop-types';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiButton from '@material-ui/core/Button';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiTypography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiNativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';

import MuiIconButton from '@material-ui/core/IconButton';
import { setConstantValue } from 'typescript';

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
      padding: '0 10px',
      '&$expanded': {
          minHeight: 30,
          color: 'white'
      },

    },
    content: {
        alignItems: 'center',
        margin: '8px 0',
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
        color: '#bbb',
        padding: '0 10px'
    },
  }))(MuiAccordionDetails);

//   const TextField = withStyles({

//   })(MuiTextField);

  const Typography = withStyles({
      root: {
          fontSize: '12px'
      },

      body1: {
          fontFamily: "'Poppins', 'sans-serif'"
      }
  })(MuiTypography);


  const Button = withStyles({
      root: {
        //   padding: '0'
      },

      label: {
          fontSize: '12px',
          fontFamily: "'Poppins','sans-serif'"
      },
      startIcon: {
          marginLeft: '0px',
          marginRight: '5px'
      }
  })(MuiButton);

  const IconButton = withStyles({
      root: {
          padding: '8px'
          
      },
      label: {
          color: '#a1a1a1',
          '&:hover': {
            color: 'white'
        }
      }
  })(MuiIconButton);

  const NativeSelect = withStyles({
      root: {
          color: '#bbb',
          fontSize: '12px',
          height: 'auto'
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
          alignItems: 'center',
          width: '100%',
          marginBottom: '8px'
      },
      iconMargin: {
          marginRight: '8px',
          fontSize: '18px'
      },
      inputOutline: {
          border: '1px solid #353535',
          lineHeight: '20px',
          width: '100%'
      },
      numberType: {
        marginRight: '10px'
      },
      rotationGroup: {
          display: 'flex',
          marginBottom: '5px'
      },
      rotateOption: {
          display: 'flex',
          flexDirection: 'column'
      },
      inputBox : {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
      },
      inputValue: {
          width: 24,
          margin: '0px 10px 0px 8px',
          color: '#a1a1a1',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center'
      },
      inputValBox: {
          display: 'flex',
          alignItems: 'center'
      },
      iconHover: {
        cursor: 'pointer',
        '&:hover': {
            color: 'white'
        },
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
          strengthValue: 20,
      });
      
    //   const [value, setValue] = React.useState();

	  const handleChange = (event) => {
		  const name = event.target.name;
		  setState({
			  ...state,
			  [name]: event.target.value,
          });
          
      };
      
    const handleStrengthSliderChange = (event, newValue) => {
        // setValue(newValue);
        setState({
            ...state,
            strengthValue: newValue
        })
        
    }

    // const handleBlur = () => {
    //     if (value < 0) {
    //       setValue(0);
    //     } else if (value > 100) {
    //       setValue(100);
    //     }
    //   };

    const plusStrengthVal = () => {
        setState({
            ...state,
            strengthValue: parseInt(state.strengthValue) + 1
        });
    };

    const minusStrengthVal = () => {
        setState({
            ...state,
            strengthValue: parseInt(state.strengthValue) - 1
        })
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
                            startIcon={<Icon name="check-circle" 
                            className="saveClass" />}
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
            <AccordionDetails className={classes.rotateOption}>
                <div className={classes.rotationGroup}>
                    <IconButton color="" aria-label="rotate left">
                        <Icon name="rotate-ccw" />
                    </IconButton>
                    <IconButton color="" aria-label="rotate right">
                        <Icon name="rotate-cw" />
                    </IconButton>
                    <IconButton color="" aria-label="rotate left">
                        <Icon name="icon-swap_horizontal_circle" />
                    </IconButton>
                    <IconButton color="" aria-label="rotate left">
                        <Icon name="icon-swap_vertical_circle" />
                    </IconButton>
                </div>
                <Typography>
                    <div className={classes.inputBox}>
                        <span>Strength</span> 
                        <div className={classes.inputValBox}>

                            <Icon name="plus" className={classes.iconHover} onClick={()=>plusStrengthVal()}/>
                            <Icon name="minus" className={classes.iconHover} onClick={()=>minusStrengthVal()}/>
                                <div style={{position: 'relative'}}>
                                    <Input
                                        id={'inputStrengthValue'}
                                    className={classes.inputValue}
                                    value={state.strengthValue}
                                    // margin="dense"
                                    // onBlur={handleBlur}
                                    inputProps={{
                                        step: 1,
                                        min: -90,
                                        max: 90,
                                        type: 'text',
                                        'aria-labelledby': 'input strength value',
                                    }}
                                />
                                <span style={{ position: 'absolute', top: '0px', right: '3px' }}>&#8728;</span>
                            </div>
                        </div>
                    </div>
                    
                </Typography>
                    <div style={{padding: '0 5px'}}>
                        <Slider
                            ValueLabelComponent={ValueLabelComponent}
                            value={state.strengthValue}
                            onChange={handleStrengthSliderChange}
                            aria-label="input strength value"
                            defaultValue={0}
                            step={1}
                            min={-90}
                            max={90}
                        />
                    </div>
            </AccordionDetails>
        </Accordion>
	</>
	)
}

export default EditOption;
