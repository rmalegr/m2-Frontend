import React from 'react';
import { useState } from 'react';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }

  return errors;
}

export default function Form() {
  // const [userName, setUsername] = useState(''); // --> valor inicial de username y la
  // // funcion modificadora;
  // const [password, setPassword] = useState('');
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputchange = function (e) {
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    setInput({
      ...input,
      [e.target.name]: e.target.value, //PROPIEDADES DINAMICAS
    });
  };

  return (
    <>
      <h2>Formulario de Contacto</h2>
      <form /*onSubmit={handleSubmit}*/ className="mt-4 ">
        <div className="row">
          <div className="col-xs-12 ">
            <label htmlFor="username">Username:</label>
            <input
              className={errors.username && 'danger'}
              type="text"
              name="username"
              value={input.username}
              onChange={handleInputchange}
            />
            {errors.username && <p className="danger">{errors.username}</p>}
            <div className="col-xs-12 col-sm-6 mt-3">
              <label htmlFor="Password">Password:</label>
              <input
                className={errors.password && 'danger'}
                type="password"
                name="password"
                value={input.password}
                onChange={handleInputchange}
              />
              {errors.password && <p className="danger">{errors.password}</p>}
            </div>

            <div>
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
