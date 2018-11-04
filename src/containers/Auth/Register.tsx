import * as React from 'react'


import Card from '../../components/Card'
import Center from '../../components/Center'
import Container from '../../components/Container'
import RegisterForm from '../../components/RegisterForm'
import Title from '../../components/Title'

import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { ILogin ,register as RegisterThunk, } from '../../ducks/Users'



interface IRegisterProps{
    register: (a: ILogin) => void
}
class Register extends React.Component<IRegisterProps>{
    public render(){
        const {register} = this.props
        return (
            <Container center={true}>
                <Card>
                    <Center>
                        <Title>Registro</Title>
                    </Center>
                    <RegisterForm onSubmit={register}/>
                    </Card>
            </Container>
        )
    }
}

const mapStateToProps = (state: any) => state

const mapDispatchToProps = (dispatch: ThunkDispatch<any,any,any>) => ({
    register: (payload: any) => dispatch(RegisterThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)