import axios from 'axios';

const hostName = 'http://10.0.2.2:8080';

const getBooksUrl = `${hostName}/api/books`;
const getBookUrl = `${hostName}/api/book`;
const chooseBookUrl = `${hostName}/api/book/choose`;

const signInUrl = `${hostName}/api/login`;
const signUpUrl = `${hostName}/api/registration`;

const getRequestsUrl = `${hostName}/api/requests`;
const deleteRequestUrl = `${hostName}/api/request/delete`;
const sendRequestUrl = `${hostName}/api/reques/send`;

export const bookApi = {
    getBooks: (handler, resultMaker = (r) => { return r.data }) => {
        axios.get(getBooksUrl, )
            .then(res => {
                console.log('res: ', res);
                if(res){
                    handler ? handler(resultMaker(res)) : res;
                }
            })
        // return JSON.parse(`[{"here":false,"literatureType":{"books":[],"name":"Fiction","id":1},"yearOfPublishing":2017,"author":{"firstName":"Jack","books":[],"id":4,"secondName":"London"},"genre":{"b
        // ooks":[],"name":"Fantasy","id":1},"onlyInReadingRoom":false,"publishingHouse":"ACT","numbOfPages":256,"id":12,"title":"Love of life"},{"here":false,"literatureType":{"books":
        // [],"name":"Fiction","id":1},"yearOfPublishing":2014,"author":{"firstName":"Jack","books":[],"id":4,"secondName":"London"},"genre":{"books":[],"name":"Realism","id":10},"onlyI
        // nReadingRoom":false,"publishingHouse":"Azbyka","numbOfPages":357,"id":13,"title":"Son of the wolf"},{"here":true,"literatureType":{"books":[],"name":"Fiction","id":1},"yearOf
        // Publishing":2007,"author":{"firstName":"Jack","books":[],"id":4,"secondName":"London"},"genre":{"books":[],"name":"Realism","id":10},"onlyInReadingRoom":false,"publishingHous
        // e":"Xmo","numbOfPages":150,"id":15,"title":"The Scarlet Plague "},{"here":false,"literatureType":{"books":[],"name":"Fiction","id":1},"yearOfPublishing":1999,"author":{"first
        // Name":"Joanne","books":[],"id":7,"secondName":"Rowling"},"genre":{"books":[],"name":"Fantasy","id":1},"publishingHouse":"POSMEN","numbOfPages":526,"id":16,"title":"Harry Pott
        // er"},{"here":true,"literatureType":{"books":[],"name":"Fiction","id":1},"yearOfPublishing":2014,"author":{"firstName":"Oscar","books":[],"id":5,"secondName":"Wilde"},"genre":
        // {"books":[],"name":"Mystic","id":2},"publishingHouse":"Azbyka","numbOfPages":253,"id":17,"title":"The picture of Dorian Gray"},{"here":true,"literatureType":{"books":[],"name
        // ":"Fiction","id":1},"yearOfPublishing":2013,"author":{"firstName":"Brandon","books":[],"id":6,"secondName":"Sanderson"},"genre":{"books":[],"name":"Fantasy","id":1},"publishi
        // ngHouse":"ClubSemeinogoDosyga","numbOfPages":1113,"id":18,"title":"The way of kings"},{"here":true,"literatureType":{"books":[],"name":"Reference","id":5},"yearOfPublishing":
        // 1888,"author":{"firstName":"Brandon","books":[],"id":6,"secondName":"Sanderson"},"genre":{"books":[],"name":"Fairytale","id":4},"onlyInReadingRoom":true,"publishingHouse":"sd
        // fghjkl","numbOfPages":344,"id":21,"title":"sdfghjkl"}]
        // `);
    },
    // /api/book/{id} get 
    // /api/book/choose/{id}/{username} post
    getBook: (id, handler, resultMaker = (r) => { return r.data }) => {
        axios.get(`${getBookUrl}/${id}`).then(
            res => {
                console.log('getBookUrl: ', res);
                if(res){
                    handler ? handler(resultMaker(res)) : res;
                }
            }
        );
    },
    chooseBook: (id, username, handler, resultMaker = (r) => { return r.data }) => {
        axios.post(`${chooseBookUrl}/${id}/${username}`).then(
            res => {
                console.log('chooseBookUrl: ', res);
                if(res){
                    handler ? handler(resultMaker(res)) : res;
                }
            }
        );
    },
    
};

export const userApi = {
    signUp: (data, handler) => {
        axios.post(signUpUrl, { ...data }).then(r => {
            console.log('r: ', r);
            handler(r.data);
        });
    },
    signIn: (data, handler) => {
        axios.post(signInUrl, { ...data }).then(r => {
            console.log('r: ', r);
            handler(r.data);
        });
    },
    getRequests: (userId, handler, resultMaker = (r) => { return r.data }) => {
        axios.get(`${getRequestsUrl}/${userId}`, )
            .then(res => {
                console.log('res: ', res);
                if(res){
                    handler ? handler(resultMaker(res)) : res;
                }
            })
    },
    deleteRequest: (requestId, userId, handler, resultMaker = (r) => { return r.data }) => {
        axios.post(`${deleteRequestUrl}/${requestId}/${userId}`, )
            .then(res => {
                console.log('res: ', res);
                if(res){
                    handler ? handler(resultMaker(res)) : res;
                }
            })
    },
    sendRequest: (requestId, userId, handler, resultMaker = (r) => { return r.data }) => {
        axios.post(`${sendRequestUrl}/${requestId}/${userId}`, )
        .then(res => {
            console.log('res: ', res);
            if(res){
                handler ? handler(resultMaker(res)) : res;
            }
        })
    },
    // /api/requests/{id}
    // /api/request/delete/{id}/{userId}
    // /api/request/send/{id}/{userId}

};