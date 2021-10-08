const axios = require('axios')

// const ip = "https://recscan-api.herokuapp.com"
const ip = "http://localhost:3000"
// const ip = "http://192.168.1.13:3000"

function getNews() {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${ ip }/api/v1/articles`,
            headers: { 
                Authorization: localStorage.getItem('userId')
            }
        })
        .then((res) => {
            if (res.status === 200) {
                resolve(res)
            }

            reject()
        })
        .catch((err) => reject(err))
    })
}

function getWasteType(barcode) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${ ip }/api/v1/items/${ barcode }`,
            headers: { 
                Authorization: localStorage.getItem('userId')
            }
        })
        .then((res) => {
            if (res.status === 200) {
                resolve(res)
            }

            reject()
        })
        .catch((err) => reject(err))
    })
}

function getRanking() {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `${ ip }/api/v1/users/ranking`,
        })
        .then((res) => {
            if (res.status === 200) {
                resolve(res)
            }

            reject()
        })
        .catch((err) => reject(err))
    })
}

function userRegister(name) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: `${ ip }/api/v1/users`,
            data: {
                name
            }
        })
        .then((res) => {
            if (res.status === 201) {
                resolve(res)
            }

            reject()
        })
        .catch((err) => reject(err))
    })
}

function userLogout() {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: `${ ip }/api/v1/users/logout`,
            headers: { 
                Authorization: localStorage.getItem('userId')
            }
        })
        .then((res) => {
            if (res.status === 200) {
                resolve(res)
            }

            reject()
        })
        .catch((err) => reject(err))
    })
}

export { getNews, getWasteType, userRegister, getRanking, userLogout }