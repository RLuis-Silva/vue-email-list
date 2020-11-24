/**
 * Generare 10 email e stamparle a schermo utilizzando Vue, Axios e il seguente API endpoint
 * boolean: https://flynn.boolean.careers/exercises/api/random/mail
 * 
 * NON facciamo 10 chiamate Axios all' API ma cerchiamo di trovare un modo più pratico e comodo!
 * 
 */

// console.log("JS OK!");

const app = new Vue({
    
    el: "#app",
    data: {
        emails: []   // array di email
    },

    //cosè create()?
    created(){
        this.genEmail();
    },
    methods: {
        /**
         * genera 10 emails random
         */

        
        genEmail(){
            const self = this;
            
            for( let i = 0; i < 10; i++){
                /**
                 * chiamata all' API per indirizzo email random
                 */
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                       .then(function(result){
                           // caso di successo
                           console.log(result.data);
                           
                           // self.emails;
                           self.emails.push(result.data.response);
                       })
                       .catch(function (errore){
                           // caso di errore
                           console.log("errore", errore);
                       });
                   
                       // stessa cosa sopra ma con array function
   
                       // .then(result =>{
                       //     // caso di successo
                       //     console.log(result.data);
         
                       //     this.emails.push(result.data.response);
                       // })
                       // .catch(error =>{
                       //     // caso di errore
                       //     console.log("errore", error);
                       // });
                   
            }
        }
         
    }
});