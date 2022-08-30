<template>
  <div>
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <img src="https://www.nicepng.com/png/detail/245-2458089_loginbutton-login-button-logo-png.png" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Bem Vindo</div>
        <span class="text-600 font-medium line-height-3">Não tem uma conta?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Criar Conta</a>
    </div>

    <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Senha</label>
        <InputText id="password1" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                <label for="rememberme1">Salvar Senha?</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Esqueçeu a Senha?</a>
        </div>

        <Button label="Logar" icon="pi pi-user" class="w-full"></Button>
    </div>
</div>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<!-- Abaixo pode ser adicionado o CSS -->
<style scoped>

</style>
