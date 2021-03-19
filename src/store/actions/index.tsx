import {EXAMPLE} from '../constants'

type IExample = {
    type:string;
    payload:any
}

export const setExample = (inView: IExample) => {
    return {
        type : EXAMPLE,
        payload : inView
    }
}


