<template>
    <Page :class="background">
        <ActionBar class="action-bar">
            <Label text="hello world!" />
            <Button text="Start Accelerometer" @tap="startAccelerometer"
                :visibility="accelerometerValues.x ? 'collapsed' : 'visible'" />
        </ActionBar>
        <StackLayout :visibility="accelerometerValues.x ? 'visible' : 'collapsed'">
            <Label :text="'X: ' + accelerometerValues.x" />
            <Label :text="'Y: ' + accelerometerValues.y" />
            <Label :text="'Z: ' + accelerometerValues.z" />
        </StackLayout>
    </Page>
</template>

<script>
    const accelerometer = require("nativescript-accelerometer");
    let accelerometerListening = false;

    export default {
        methods: {
            startAccelerometer: function() {
                if (accelerometerListening) {
                    accelerometer.stopAccelerometerUpdates();
                }
                accelerometer.startAccelerometerUpdates(
                    data => {
                        accelerometerListening = true;
                        this.accelerometerValues = data;
                        this.accelerometerValues.x = this.accelerometerValues
                            .x.toFixed(
                                1
                            );
                        this.accelerometerValues.y = this.accelerometerValues
                            .y.toFixed(
                                1
                            );
                        this.accelerometerValues.z = this.accelerometerValues
                            .z.toFixed(
                                1
                            );
                        if (this.accelerometerValues.z >= 0.8) {
                            this.background = "background-blue";
                        } else if (this.accelerometerValues.z <= -0.8) {
                            this.background = "background-red";
                        }
                        else this.background = "background-white";
                    }, {
                        sensorDelay: "game"
                    }
                );
            }
        },

        data() {
            return {
                accelerometerValues: {
                    x: null,
                    y: null,
                    z: null
                },
                background: "background-white"
            };
        }
    };
</script>

<style>
    .background-white {
        background: white
    }

    .background-red {
        background: red
    }

    .background-blue {
        background: blue
    }
</style>