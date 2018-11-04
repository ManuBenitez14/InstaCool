import * as React from 'react'
import Footer from '../components/Footer'


const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px 15px',
    paddingBotton:'100px',
}

interface IPostProps{
    image: string
}
export default class Post extends React.Component<IPostProps>{
    public render(){
        const {image} = this.props
        return(
            <div style={style}>
                <img src={image} />
                <Footer/>
            </div>
        )

    }
}