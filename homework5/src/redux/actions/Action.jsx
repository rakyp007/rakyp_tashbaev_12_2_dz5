import types from "../../types"

export const massageTrue = (text) => {
    return{
        type: types.MASSAGE_TRUE,
        payload: text
    }
}
export const massageFalse = (data) => {
    return{
        type: types.MASSAGE_FALSE,
        payload: data
    }
}



export const createuserAction = (data) => {


    return async function (dispatch) {
const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data })
  };


        const response = await fetch('https://jsonplaceholder.typicode.com/user5s')

       if(response.status === 404) {
        dispatch(massageTrue({text:"no sozdana", button: "danger"}))
       }
       
       else {
        dispatch(massageTrue({text:"yes sozdana", button: "seccess"}))
       }if (data.name === '') {
        console.log('NAME: пустое')
        dispatch(massageTrue({text: 'ИМЯ: поле пустое', button: 'danger'}))
    } if (data.lastName === '') {
        console.log('LASTNAME: пустое')
        dispatch(massageTrue({text: 'ФАМИЛИЯ: поле пустое', button: 'danger'}))
    } if (data.age === 0) {
        console.log('AGE: пустое')
        dispatch(massageTrue({text: 'ВОЗРАСТ: поле пустое', button: 'danger'}))
    } if (data.email === '') {
        console.log('Email: пустое')
        dispatch(massageTrue({text: 'EMAIL: поле пустое', button: 'danger'}))
    } if (data.name, data.lastName, data.age, data.email === ''){
        console.log('заполните поля')
        dispatch(massageTrue({text: 'заполните поля', button: 'danger'}))
    }

    }


}