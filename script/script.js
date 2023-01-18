const app = Vue.createApp({
    data(){
        return{
            emails :[]
        }
    },
    methods:{
        getEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                this.emails.push(response.data.response)
                
            })
        }
    }
    ,
    mounted(){
        for(let i = 0 ; i < 5 ; i++){
            this.getEmail()
        }
    }
})

app.mount('#root')