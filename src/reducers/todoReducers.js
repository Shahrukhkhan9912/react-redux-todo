const InitialData = {
    list: []
}

const todoReducers = (state=InitialData, action) =>{
    switch (action.type) {
        case "ADD_TODO" :

        const {id, data} = action.payload;

        return{
            ...state,
            list:[
                ...state.list,
                {
                    id: id,
                    data: data
                }
            ]
        }

        case "REMOVE_TODO" :

        const newList = state.list.filter((elem)=> elem.id !== action.id )

        return{
            ...state,
            list: newList          
        }

        default: return state;
    }
}

export default todoReducers;