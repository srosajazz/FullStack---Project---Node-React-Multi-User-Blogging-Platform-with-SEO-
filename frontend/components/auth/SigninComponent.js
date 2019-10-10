import { useState } from 'react';
import { signin } from '../../actions/auth';
import Route from 'next/router';

const SigninComponent = () => {
    const [values, setValues] = useState({
        email: 'mary@gmail.com',
        password: '123456',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm } = values;

    const handleSubmit = e => {
        e.preventDefault();
        // console.table({ name, email, password, error, loading, message, showForm });
        setValues({ ...values, loading: true, error: false });
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
        // save user tokem to cookie
       // save user into to localstorage
      // authenticate user

            Route.push('/');
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    //add showError , showLoading - showMessage messages alert
    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');


    const signinForm = () => {

        return (
            <form onSubmit={handleSubmit}>

                {/* <div className="form-group">
                    <input value={name}
                           onChange={handleChange('name')}
                           type="text"
                           className="form-control"
                           placeholder="Type your name"/>
                </div> */}

                <div className="form-group">
                    <input
                        value= {email}
                        onChange= {handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password" className="form-control"
                        placeholder="Type your password"
                    />
                </div>
                <div>
                    <button className="btn btn-primary">Singin</button>
                </div>


            </form>
        );
    };


    return <React.Fragment>
    {showError()}
    {showMessage ()}
    {showLoading()}
    {showForm && signinForm()}
    </React.Fragment>;

};

export default SigninComponent;