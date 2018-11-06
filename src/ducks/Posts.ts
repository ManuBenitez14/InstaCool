import { firestore } from 'firebase';
import { AnyAction, Dispatch  } from 'redux'
import { IServices } from '../services';

const START = 'posts/fetch-start'
const SUCCESS = 'posts/fetch-success'
const ERROR = 'posts/fetch-error'


export interface IDataPosts{
    [key: string]:{
        comment: string
        userId: string
        createdAt: firestore.Timestamp
        imageURL: string
    }
} 
const fetchStart = () => ({
    type: START,
})

const fetchSuccess = (payload: IDataPosts) => ({
    payload,
    type: SUCCESS,
})

const fetchError = (error: Error) => ({
    error,
    type: ERROR,
})

const initialState ={
    data: {},
    fetched: false,
    fetching: false,
}

export default function reducer (state = initialState, action: AnyAction) {
    switch (action.type) {
        case START:
            return{
            ...state,
            fetching: true,
            }
        case SUCCESS:
            return{
            ...state,
            data: action.payload,
            fetched:true,
            fetching: false,
            }
        case ERROR:
            return {
                ...state,
                error: action.error,
                fetching: false,
            }
            default:
                return state
    }
    return state
}

export const fetchPosts = () =>
    async (dispatch: Dispatch, getState: () => any, { db, storage }: IServices) => {
        dispatch(fetchStart())
        try {
            const snaps = await db.collection('posts').get()
            const posts = {}
            snaps.forEach(x =>  posts[x.id] = x.data())
            const imgIds = await Promise.all(Object.keys(posts)
            .map(async x => {
                const ref = storage.ref(`posts/${x}.jpg`)
                const url = await ref.getDownloadURL()
                return [x, url]
            }))
            const keydImages = {}
            imgIds.forEach( x => keydImages[x[0]] = x[1])

            Object.keys(posts).forEach(x => posts[x]={
                ...posts[x],
                imageURL:keydImages[x],
            })
            dispatch(fetchSuccess(posts))
            
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e)
            dispatch(fetchError(e))
        }
}