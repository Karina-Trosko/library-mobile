import axios from 'axios';

export const bookApi = {
    getBooks: (handler, resultMaker = (r) => { return r.data }) => {
        // axios.get('https://github.com/axios/axios', )
        //     .then(res => {
        //         console.log('res: ', res);
        //         handler(resultMaker(res));
        //     })
        return JSON.parse(`[{"here":false,"literatureType":{"books":[],"name":"Fiction","id":1},"yearOfPublishing":2017,"author":{"firstName":"Jack","books":[],"id":4,"secondName":"London"},"genre":{"b
        ooks":[],"name":"Fantasy","id":1},"onlyInReadingRoom":false,"publishingHouse":"ACT","numbOfPages":256,"id":12,"title":"Love of life"},{"here":false,"literatureType":{"books":
        [],"name":"Fiction","id":1},"yearOfPublishing":2014,"author":{"firstName":"Jack","books":[],"id":4,"secondName":"London"},"genre":{"books":[],"name":"Realism","id":10},"onlyI
        nReadingRoom":false,"publishingHouse":"Azbyka","numbOfPages":357,"id":13,"title":"Son of the wolf"},{"here":true,"literatureType":{"books":[],"name":"Fiction","id":1},"yearOf
        Publishing":2007,"author":{"firstName":"Jack","books":[],"id":4,"secondName":"London"},"genre":{"books":[],"name":"Realism","id":10},"onlyInReadingRoom":false,"publishingHous
        e":"Xmo","numbOfPages":150,"id":15,"title":"The Scarlet Plague "},{"here":false,"literatureType":{"books":[],"name":"Fiction","id":1},"yearOfPublishing":1999,"author":{"first
        Name":"Joanne","books":[],"id":7,"secondName":"Rowling"},"genre":{"books":[],"name":"Fantasy","id":1},"publishingHouse":"POSMEN","numbOfPages":526,"id":16,"title":"Harry Pott
        er"},{"here":true,"literatureType":{"books":[],"name":"Fiction","id":1},"yearOfPublishing":2014,"author":{"firstName":"Oscar","books":[],"id":5,"secondName":"Wilde"},"genre":
        {"books":[],"name":"Mystic","id":2},"publishingHouse":"Azbyka","numbOfPages":253,"id":17,"title":"The picture of Dorian Gray"},{"here":true,"literatureType":{"books":[],"name
        ":"Fiction","id":1},"yearOfPublishing":2013,"author":{"firstName":"Brandon","books":[],"id":6,"secondName":"Sanderson"},"genre":{"books":[],"name":"Fantasy","id":1},"publishi
        ngHouse":"ClubSemeinogoDosyga","numbOfPages":1113,"id":18,"title":"The way of kings"},{"here":true,"literatureType":{"books":[],"name":"Reference","id":5},"yearOfPublishing":
        1888,"author":{"firstName":"Brandon","books":[],"id":6,"secondName":"Sanderson"},"genre":{"books":[],"name":"Fairytale","id":4},"onlyInReadingRoom":true,"publishingHouse":"sd
        fghjkl","numbOfPages":344,"id":21,"title":"sdfghjkl"}]
        `);
    },
    
};

export const userApi = {
    signUp: (data) => {
        axios.post('/api/users/signUp', { ...data }).then(r => {
            console.log(r);
            if (r.data.login) { actions.setupAuthUser({ ...r.data }); }
            else {window.alert(r.data)}
        });
    },
    signIn: (data) => {
        axios.post('/api/users/signIn', { ...data }).then(r => {
            console.log(r);
            if (r.data.login) { actions.setupAuthUser({ ...r.data }); }
            else {window.alert(r.data)}
        });
    },
};