import { useState } from 'react';

/* const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // 창이 바로 다시 실행되는 것을 막음
        alert(email + '' + password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">이메일</label>
                <input id="email" type="text" onChange={handleEmail} />
            </div>
            <div>
                <label htmlFor="password">패스워드</label>
                <input id="password" type="password" value={password} onChange={handlePassword} />
            </div>
            <button type="submit">전송</button>
        </form>
    );
}; */

const LoginForm = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // 창이 바로 다시 실행되는 것을 막음
        alert(form.email + ' ' + form.password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">이메일</label>
                <input id="email" type="text" value={form.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">패스워드</label>
                <input id="password" type="password" value={form.password} onChange={handleChange} />
            </div>
            <button type="submit">전송</button>
        </form>
    );
};
export default LoginForm;