import * as React from 'react'
import Container from '../../components/Container';
import Post from '../../components/Post'
export default class Newsfeed extends React.Component{
    public render(){
        return(
            <Container>
            <div style={{margin: '0 auto'}}>
                <Post image={'http://placekitten.com/300/200'}/>
                <Post image={'http://placekitten.com/300/200'}/>
            </div>
            </Container>
        )
    }
}