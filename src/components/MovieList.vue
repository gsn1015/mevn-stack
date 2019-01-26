<template>
    <div class="movieList">
        <h2>电影列表页</h2>       
        <b-table striped hover :items="movieList" :fields="fields">
        </b-table>
    </div>
</template>
<script>
import axios from 'axios'
import movieApi from '../api/movie';
export default {
    data() {
        return {
            movieList: [],
            fields: {
                title: { label: '名称', sortable: true, 'class': 'text-center' },
                director: { label: '导演'},
                poster: { label: '演员', 'class': 'text-center' }
            },
        }
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.getMovieList();
        },
        getMovieList() {           
            movieApi.getMovieList().then((res)=> {
                this.movieList = res;
            })
        },
    }
}
</script>

