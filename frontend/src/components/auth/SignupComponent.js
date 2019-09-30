import { useState } from 'react';

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: 'Sergio',
    email: 'sergio@gmail.com',
    password: '123456',
    error: '',
    loading: false,
    message: '',
    showForm: true,
  });

  const { name, email, password, error, loading, message, showForm } = values;

  const handleSubmit = e => {
    e.preventDefault();
    console.table({ name, email, password, error, loading, message, showForm });
  };

  const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group">
            <input
              value={name}
              onChange={handleChange('name')}
              type="text"
              className="form-control"
              placeholder="Type your name"
            />
          </div>
          {/* email */}
          <div className="form-group">
            <input
              value={email}
              onChange={handleChange('email')}
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          {/* password */}
          <div className="form-group">
            <input
              value={password}
              onChange={handleChange('password')}
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button className="btn btn-primary">Signup</button>
        </div>
      </form>
    );
  };
  return <>{signupForm()}</>;
};

export default SignupComponent;
