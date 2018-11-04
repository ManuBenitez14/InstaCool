import * as React from 'react'

import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Center from '../../components/Center'
import Container from '../../components/Container'
import Input from '../../components/Input'
import Title from '../../components/Title'


export default class Login extends React.Component{
    public render(){
        return (
            <Container center={true}>
                <Card>
                    <Center>
                        <Title>Iniciar Sesión</Title>
                    </Center>
                <   Input placeholder="Correo" label='Correo'/>
                <   Input placeholder="Contraseña" label='Contraseña' />
                <   Button block={true}>Enviar</Button>
                    <Center>
                        <Link to='/register'>Ir al registro</Link>
                    </Center>
                </Card>
            </Container>
        )
    }
}