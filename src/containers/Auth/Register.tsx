import * as React from 'react'


import Card from '../../components/Card'
import Center from '../../components/Center'
import Container from '../../components/Container'
import RegisterForm from '../../components/RegisterForm'
import Title from '../../components/Title'


export default class Register extends React.Component{
    public render(){
        return (
            <Container center={true}>
                <Card>
                    <Center>
                        <Title>Registro</Title>
                    </Center>
                    <RegisterForm/>
                    </Card>
            </Container>
        )
    }
}