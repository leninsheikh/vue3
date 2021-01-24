<template>
    <div class="vertical">
        <div>
            <input name="email" v-model="email" />
            <span>{{ emailError }}</span>
        </div>
        <div>
            <input name="password" v-model="password" type="password" />
            <span>{{ passwordError }}</span>
        </div>
        <button @click="handleValidateAll">Validate All</button>
    </div>
</template>

<script>
import {useField, useForm} from 'vee-validate';
import { object, string } from 'yup';
export default {
    name: "SimpleForm",
    setup() {
        // Define a validation schema
        const schema = object({
            email: string().required().email().label("Email"),
            password: string().required().min(8).email("Password"),
        });

        // Create a form context with the validation schema
        const { validate,  } = useForm({
            validationSchema: schema,
        });

        // No need to define rules for fields
        const { value: email, errorMessage: emailError } = useField('email');
        const { value: password, errorMessage: passwordError } = useField('password');

        const handleValidateAll = async () => {
            const res = await validate();
            console.log("SimpleForm: validate Result", res)
        }
        return {
            email,
            emailError,
            password,
            passwordError,
            handleValidateAll
        };
    },
};
</script>

<style scoped>

</style>
