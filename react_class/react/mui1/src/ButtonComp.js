import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonComp() {
    const divStyle = { margin: 5, padding: 5, border: '1px solid teal' }
    return (
        <>
            <div style={divStyle}>
                <Stack spacing={2} direction="row">
                <Button variant="text" onClick={
                    () => {alert('버튼1 클릭')}}>Text</Button>
                <Button variant="contained" onClick={
                    () => {alert('버튼2 클릭')}}>Contained</Button>
                <Button variant="outlined"onClick={
                    () => {alert('버튼3 클릭')}}>Outlined</Button>
                </Stack>
            </div>
        </>
    );
}

