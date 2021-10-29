import React from 'react';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Divider from '@mui/material/Divider';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


const Board = props => {
    const [firstTabsValue, setFirstTabsValue] = React.useState('UAH');
    const [secondTabsValue, setSecondTabsValue] = React.useState('USD');
    const [buttonsColor, setButtonsColor] = React.useState('');
    const [amount, setAmount] = React.useState('');
    window.amount = amount;


    const handleChange1 = (event, newValue) => {
        setFirstTabsValue(newValue);
    };

    const handleChange2 = (event, newValue) => {
        setSecondTabsValue(newValue);
    };

    const changeCurrency = () => {
        if (buttonsColor === '') {
            setButtonsColor('goldenrod');
            setTimeout(() => {
                setButtonsColor('');
            }, 500)
        } else {
            setButtonsColor('');
        }
        props.changeCurrency(firstTabsValue, secondTabsValue, amount);
    }

    const handleAmount = (prop) => (event) => {
        setAmount(event.target.value);
    };

    return (
        <Container maxWidth="md" sx={{marginTop: '20px'}}  >
            <Grid container columns='12' justifyContent='center'>
                <Grid item xs='6' > 
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Tabs
                        value={firstTabsValue}
                        onChange={handleChange1}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                        >
                            <Tab value="UAH" label="UAH" />
                            <Tab value="USD" label="Dollar" />
                            <Tab value="EUR" label="Euro" />
                        </Tabs> 
                    </Box>
                    <Divider variant="middle" sx={{marginTop: '15px', marginBottom: '15px'}} />
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Tabs
                        value={secondTabsValue}
                        onChange={handleChange2}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                        >
                            <Tab value="UAH" label="UAH" />
                            <Tab value="USD" label="Dollar" />
                            <Tab value="EUR" label="Euro" />
                        </Tabs> 
                    </Box>
                    <Box sx={{marginTop: '20px'}}>
                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={amount}
                            onChange={handleAmount('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                        <IconButton  onClick={changeCurrency} >
                            <AttachMoneyIcon sx={{color: buttonsColor}} />
                        </IconButton>
                        <Typography sx={{marginTop: '10px'}} variant='h6'>
                            {props.result} 
                        </Typography>
                        <IconButton>
                            <ContentCopyIcon />
                        </IconButton>
                    </Box>
                </Grid>  
            </Grid>           
        </Container>
    );
}

export default Board;