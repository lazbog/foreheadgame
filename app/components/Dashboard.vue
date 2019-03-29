<template>
    <Page actionBarHidden="true">
        <Label text="Dashboard" />
        <StackLayout>
            <Button text="New game" @tap="$goto('newGame')" />
            <Button text="Home" @tap="$goto('home')" />
            <Button text="acc" @tap="$goto('acc')" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {};
</script>

<style>
</style>