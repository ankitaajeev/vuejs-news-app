import axios from "axios";

export const getTopNews = ({ commit }) => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d8eef8df96c84cbcae4fedecd769629b')
    .then(response => {
        commit('SET_TOPNEWS', response.data)
    })
}

export const getCategoryNews = ({ commit }, categoryname) => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category='+categoryname+'&apiKey=d8eef8df96c84cbcae4fedecd769629b')
    .then(response => {
        commit('SET_CATEGORYNEWS', response.data)
    })
}