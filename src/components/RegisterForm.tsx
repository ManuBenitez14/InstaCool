import * as React from 'react'
import { Link } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import Button from './Button'
import Center from './Center'
import Input from './Input'

class RegisterForm extends React.Component<InjectedFormProps> {
  public render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          label="Correo"
          placeholder="Correo"
          component={Input}
        />
        <Field
          name="password"
          type="password"
          label="Contraseña"
          placeholder="Contraseña"
          component={Input}
        />
        <Button block={true}>Enviar</Button>
        <Center>
          <Link to="/">Iniciar Sesión</Link>
        </Center>
      </form>
    )
  }
}

export default reduxForm({
  form: 'register',
})(RegisterForm)