<template>
    <div>
        <p>{{ name }}</p>
        <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="doAction">
            <validation-provider name="name" v-bind:rules="rules" v-slot="{ errors }">
                <input type="text" v-model="name" />
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </validation-provider>
            <validation-provider name="password" rules="required" v-slot="{ errors }">
                <input type="password" v-model="password" />
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </validation-provider>
            <button type="submit" :disabled="invalid">go</button>
        </form>
        </ValidationObserver>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            name: "",
            password: "",
            names: [  ]
        }
    },
    mounted: function() {
        axios
            .get("/namespaces")
            .then(response => (this.names = response.data))
            .catch(error => console.log(error))
    },
    computed: {
        rules() {
            return  {
                required: true,
                min: 2,
                max: 8,
                notContains: this.names
            }
        }
    },
    methods: {
        doAction() {
            console.log("hoge" + this.name);
        }
    }
}
</script>