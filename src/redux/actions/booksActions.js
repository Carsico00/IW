import {
    FETCHING_BOOKS_SUCCESS,
    FETCHING_BOOKS_REQUEST,
    FETCHING_BOOKS_FAILURE,
} from './types';
import { URL } from '../../constants/Config.js'
import { Alert } from 'react-native';

export const fetchingRetosRequest = () => ({type: FETCHING_BOOKS_REQUEST});

export const fetchingRetosSuccess = (result) => ({ type: FETCHING_BOOKS_SUCCESS, payload: result.data});

export const fetchingRetosFailure = (error) => ({ type: FETCHING_BOOKS_FAILURE, payload: error });


//listar Retos
export const fetchRetos = () => {
    return async ( dispatch, getState ) => {
        const token = await AsyncStorage.getItem('accessToken')
        const language = await getLanguage();

        const { isFetching } = getState().retos.retos;
        if( isFetching ){
            return;
        }
        console.log('token',token)

        dispatch(fetchingRetosRequest())

        return new Promise(
            function (resolve, reject) {
                fetch(URL[language]+'/wp-json/SI2API/v1/retos', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'x-si2-token': token,
                        'x-si2-lang': language,
                    }
                })
                    .then((res) => res.json() )
                    .then((json) => {
                        if(json.code === 'success'){
                            resolve(json)
                        }else{
                            reject(json)
                        }
                    })
                    .catch((error) => {
                        Bugsnag.notify("ERROR. Peticion: /sobrebh , error: " + error)
                        Alert.alert( getState().config.language.alert.networkError, error.toString(), [], {cancelable:true});
                        console.error(error)
                    })
            }
        ).then(result => {
            dispatch(fetchingRetosSuccess(result))
        })
            .catch(error => dispatch(fetchingRetosFailure(error)))
    }
}

export const setReto = (retoID,faseID) => {

    return {
        type: SET_RETO,
        payload: { retoID: retoID, faseID: faseID },

    };
}
export const actionRetoRequest = () => ({type: ACTION_RETO_REQUEST});

export const actionRetoSuccess = (result) => ({ type: ACTION_RETO_SUCCESS, payload: result.data});

export const actionRetoFailure = (error) => ({ type: ACTION_RETO_FAILURE, payload: error });


export const actionReto = (challenge = '', action = '' , data = null, phase = null  ) => {

    return async ( dispatch, getState ) => {
        const token = await AsyncStorage.getItem('accessToken')
        const language = await getLanguage();


        const body= {
            action,
            data,
            phase,
            challenge

        };
        dispatch(actionRetoRequest());

        return new Promise(
            function (resolve, reject) {
                fetch(URL[language]+'/wp-json/SI2API/v1/reto', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'x-si2-token': token,
                        'x-si2-lang': language,
                    },
                    body: JSON.stringify(body),
                })
                    .then((res) => res.json() )
                    .then((json) => {
                        if(json.code === 'success'){
                            resolve(json)
                        }else{
                            reject(json)
                        }
                    })
                    .catch((error) => {
                        Bugsnag.notify("ERROR. Peticion: /sobrebh , error: " + error)
                        Alert.alert( getState().config.language.alert.networkError, error.toString(), [], {cancelable:true});
                        console.error(error)
                    })
            }
        ).then(result => {
            dispatch(actionRetoSuccess(result))
        })
            .catch(error => dispatch(actionRetoFailure(error)))
    }


}
