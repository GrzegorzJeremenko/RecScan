const axios = require('axios')

const ip = "https://recscan-api.herokuapp.com"

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
            },
            validateStatus: false
        })
        .then((res) => {
            if (res.status === 200) {
                resolve(res)
            } else if (res.status === 404) {
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

function addItem(name, barcode, type) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: `${ ip }/api/v1/items/`,
            data: {
                name,
                barcode,
                type
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

export { getNews, getWasteType, userRegister, getRanking, userLogout, addItem }