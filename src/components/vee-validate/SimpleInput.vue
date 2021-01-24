<template>
    <div class="vertical">
        <p>{{ errorMessageFN }}</p>
        <input placeholder="first_name" v-model="first_name" type="text" />


        <p>{{ errorMessageLN }}</p>
        <input placeholder="last_name" @change="handleChange"  type="text" />


        <p>{{ errorMessageEm }}</p>
        <input placeholder="email" v-model="email"  type="text" />
        <div><button @click="handleValidateClick">Manual Validate</button></div>


        <p>{{ errorMessageAG }}</p>
        <div>
            <input placeholder="age"   v-model="age"  type="text" />
        </div>
        <div><button @click="handleInputClick">Manual Validate</button></div>
    </div>
</template>

<script>
import {useField} from "vee-validate";
import { string } from 'yup'

export default {
    setup() {

        const {errorMessage: errorMessageFN, value: first_name} = useField('first_name', string().required().min(8));
        const {errorMessage: errorMessageLN, value: last_name, handleChange} = useField('last_name', string().min(4));
        const {errorMessage: errorMessageEm, value: email, validate} = useField('email', string().email().required());
        const {errorMessage: errorMessageAG, value: age, handleInput, validate: validateAG} = useField('age', string().required());



        /**
         * manually validating the field on clicking a button
         *
         * @returns {Promise<void>}
         */
        const handleValidateClick = async () => {
            const res = await validate();
            console.log('Validate Result', res);
        }

        /**
         * handleInput can change the value without triggering validation
         */
        const handleInputClick = () => {
            validateAG();
        }


        return {
            first_name,
            errorMessageFN,
            last_name,
            errorMessageLN,
            handleChange,
            errorMessageEm,
            email,
            handleValidateClick,
            errorMessageAG,
            age,
            handleInput,
            handleInputClick
        };
    }
}
</script>

<style>

</style>

