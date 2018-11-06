import * as React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import Container from '../../components/Container';
import Post from '../../components/Post'


import * as postsDuck from '../../ducks/Posts'



interface INewsfeedProps {
    fetchPosts: () => void
    fetched: boolean
    loading: boolean
    data: postsDuck.IDataPosts
}


class Newsfeed extends React.Component<INewsfeedProps>{
    constructor(props: INewsfeedProps){
        super(props)
        const{fetchPosts,fetched} = props

        if(fetched){
            return
        }
        fetchPosts()
    }
    public render(){
        const { data } = this.props
        // tslint:disable-next-line:no-console
        console.log(this.props)
        return(
            <Container>
                {Object.keys(data).map( x => {
                    const post = data[x]
                    // tslint:disable-next-line:jsx-key
                    return <div key={x} style={{margin: '20px auto'}}>
                    <Post image={post.imageURL}/></div>
                })}
            </Container>
        )
    }
}

const mapStateToProps = (state: any) =>{
    const { Posts: {data, fetched, fetching}} = state
    const loading = fetching || fetched
    return{
        data,
        fetched,
        loading,
    }


    return state
}
const mapDispatchToProps = (dispatch:ThunkDispatch<any,any,any>) => bindActionCreators(postsDuck, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed)