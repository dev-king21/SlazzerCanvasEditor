import React, { Component } from 'react';
import Scrollbar from '../../common/Scrollbar';
import EditOption from './components/EditOption';
import BgImageOption from './components/BgImageOption';
import { makeStyles } from '@material-ui/core/styles';

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

export default function OptionsContainer(props) {

    const {imageProcessingOption, closeOption} = props

    const classes = useStyles();
    console.log(closeOption)
    return (
        <div className="option-bar-container">
			<Scrollbar>
                <div className={classes.root}>
                    {(imageProcessingOption === 'Edit') && <EditOption />}
                    {(imageProcessingOption === 'Bg Image') && <BgImageOption />}
                </div>
                
			</Scrollbar>
            <span className="targetClose" onClick={() => closeOption()}><i className="icon-circle-with-cross" /></span>
		</div>
    )
}

// export default OptionsContainer;