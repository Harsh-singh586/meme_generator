import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = {
    img_src: 'https://i.imgflip.com/1g8my4.jpg',
    'img_id': '87743020',
}

const imageUpdate = createSlice({
    name: 'image_update',
    initialState,
    reducers: {
        change: (state, action) => {
            console.log(action.payload)
            state.img_src = action.payload.url
            state.img_id = action.payload.id
        },
    }

})

const pageScroll = createSlice({
    name: 'page_scroll',
    initialState: { 'current_page': 1 },
    reducers: {
        scroll: (state, action) => {
            state.current_page = action.payload
        }

    }
})

const inputData = createSlice({
    name: 'Input_data',
    initialState: { first_txt: 'First Text', sec_txt: 'Second Text' },
    reducers: {
        changeFirstText: (state, action) => {
            state.first_txt = action.payload
        },
        changeSecText: (state, action) => {
            state.sec_txt = action.payload
        }
    }
})

const editedMeme = createSlice({
    name: 'edited_data',
    initialState: { editedMemeUrl: '' },
    reducers: {
        changeEditedMeme: (state, action) => {
            state.editedMemeUrl = action.payload
        },
    }
})



export const { change } = imageUpdate.actions
export const { scroll } = pageScroll.actions
export const { changeFirstText, changeSecText } = inputData.actions
export const { changeEditedMeme } = editedMeme.actions

console.log(Object.keys(imageUpdate.actions))

const store = configureStore({
    reducer: {
        image: imageUpdate.reducer,
        scroll: pageScroll.reducer,
        inputdata: inputData.reducer,
        meme: editedMeme.reducer
    }
})


export default store;

