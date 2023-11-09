import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password")
     })
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography component="h1" variant="h5">로그인</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField margin='normal' required fullWidth id="email" label="이메일"
                        name='email' autoComplete='email' autoFocus /> 
                    <TextField margin='normal' required fullWidth id="password" label="비밀번호"
                        name='password' type='password' autoComplete='current-password' /> 
                    <FormControlLabel 
                        control={<Checkbox value="remember" color='primary' />}
                        label='암호 저장하기' />
                    <Button type='submit' fullWidth variant='contained'
                        sx={{ mt: 3, mb: 2 }}>로그인</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/findpasswd" variant='body2'>
                                암호를 잃어버리셨나요?
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Link href="/register" variant='body2'>
                            {"계정이 없으신가요? 회원가입"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    )
}