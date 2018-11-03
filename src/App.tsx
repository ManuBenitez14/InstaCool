import './App.css';

import * as React from 'react';

import Button from './components/Button'
import Card from './components/Card'
import Center from './components/Center'
import Container from './components/Container'
import Input from './components/Input'
import Link from './components/Link'
import Title from './components/Title'


class App extends React.Component {
  public render() {
    return (
      <Container>
        <Card>
          <Title>Iniciar Sesión</Title>
          <Input placeholder="Correo" label='Correo'/>
          <Input placeholder="Contraseña" label='Contraseña' />
          <Button block={true}>Enviar</Button>
          <Center>
            <Link>Ir al registro</Link>
          </Center>
        </Card>
      </Container>
    );
  }
}

export default App;
