<template>
    <v-container>
        <!-- For Desktop -->
        <v-row justify="center" align="center" class="hidden-sm-and-down" >
            <v-col md="6" cols="3">
                <div v-if="days > 0">
                    <p class="devfest-font mb-0" style="font-size:500%;color:#0005DF;">{{ days | twoDigits }}</p>
                    <p class="google-font mt-0">{{ days > 1 ? 'Days' : 'Day' }}</p>
                </div>
            </v-col>
            <v-col md="6" cols="3">
                <div>
                    <p class="devfest-font mb-0" style="font-size:500%;color:#0005DF;">{{ hours | twoDigits }}</p>
                    <p class="text">{{ hours > 1 ? 'Hours' : 'Hour' }}</p>
                </div>
            </v-col>
            
            <v-col md="6" cols="3">
                <div>
                    <p class="devfest-font mb-0" style="font-size:500%;color:#0005DF;">{{ minutes | twoDigits }}</p>
                    <p class="text">{{ minutes > 1 ? 'Minutes' : 'Minute' }}</p>
                </div>
            </v-col>
            <v-col md="6" cols="3">
                <div>
                    <p class="devfest-font mb-0" style="font-size:500%;color:#0005DF;">{{ seconds | twoDigits }}</p>
                    <p class="text">{{ seconds > 1 ? 'Seconds' : 'Second' }}</p>
                </div>
            </v-col>
        </v-row>
        
        <!-- For Mobile -->
        <v-row justify="center" align="center" class="hidden-md-and-up">
            <v-col md="6" cols="3">
                <div v-if="days > 0">
                    <p class="devfest-font mb-0" style="font-size:250%;color:#0005DF;">{{ days | twoDigits }}</p>
                    <p class="google-font mt-0">{{ days > 1 ? 'Days' : 'Day' }}</p>
                </div>
            </v-col>
            <v-col md="6" cols="3">
                <div>
                    <p class="devfest-font mb-0" style="font-size:250%;color:#0005DF;">{{ hours | twoDigits }}</p>
                    <p class="text">{{ hours > 1 ? 'Hours' : 'Hour' }}</p>
                </div>
            </v-col>
            
            <v-col md="6" cols="3">
                <div>
                    <p class="devfest-font mb-0" style="font-size:250%;color:#0005DF;">{{ minutes | twoDigits }}</p>
                    <p class="text">{{ minutes > 1 ? 'Minutes' : 'Minute' }}</p>
                </div>
            </v-col>
            <v-col md="6" cols="3">
                <div>
                    <p class="devfest-font mb-0" style="font-size:250%;color:#0005DF;">{{ seconds | twoDigits }}</p>
                    <p class="text">{{ seconds > 1 ? 'Seconds' : 'Second' }}</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
let interval = null;
export default {
    name: 'vuejsCountDown',
    props: {
        deadline: {
            type: String
        },
        end: {
            type: String
        },
        stop: {
            type: Boolean
        }
    },
    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            date: null,
            diff: 0
        }
    },
    created() {
        if (!this.deadline && !this.end) {
            throw new Error("Missing props 'deadline' or 'end'");
        }
        let endTime = this.deadline ? this.deadline : this.end;
        this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);
        if (!this.date) {
            throw new Error("Invalid props value, correct the 'deadline' or 'end'");
        }
        interval = setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        }, 1000);
    },
    computed: {
        seconds() {
            return Math.trunc(this.diff) % 60
        },
        minutes() {
            return Math.trunc(this.diff / 60) % 60
        },
        hours() {
            return Math.trunc(this.diff / 60 / 60) % 24
        },
        days() {
            return Math.trunc(this.diff / 60 / 60 / 24)
        }
    },
    watch: {
        now(value) {
            this.diff = this.date - this.now;
            if(this.diff <= 0 || this.stop){
                this.diff = 0;
                // Remove interval
                clearInterval(interval);
            }
        }
    },
    filters: {
        twoDigits(value) {
            if ( value.toString().length <= 1 ) {
                return '0'+value.toString()
            }
            return value.toString()
        }
    },
    destroyed() {
        clearInterval(interval);
    }
}
</script>