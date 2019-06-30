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
            sleep: function() {
                return new Promise(resolve => setTimeout(resolve, ms));
            },
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
                            var currentState = 0;
                        if (this.accelerometerValues.z >= 0.8) {
                            // var startState = Date.now();
                            // console.log("1 %s", startState);
                            // console.log("2 %s", currentState)
                            // while (currentState - startState <= 100) {
                            //     console.log("3 %s", startState);
                            //     console.log("4 %s", currentState)
                            //     currentState = Date.now()
                            //     console.log("5 %s", currentState)
                            //     this.background = "background-white";
                            // }
                            this.background = "background-blue";                            
                        } else if (this.accelerometerValues.z <= -0.8) {
                            this.background = "background-red";
                        }
                        else this.background = "background-white";
                    }, {
                        sensorDelay: "normal"
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