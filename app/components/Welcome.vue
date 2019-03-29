<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="This is Home Component"></Label>
        </ActionBar>
        <StackLayout>
            <Button text="Dashboard" horizontalAlignment="center" @tap="$goto('dashboard')" />
        </StackLayout>
    </Page>
</template>

<script>
    export default { };
</script>

<style scoped>
    
</style>