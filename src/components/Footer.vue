<template>
    <div class="footer">
            <span>  {{date}} </span>
    </div>
</template>
<script>
import moment from 'moment';

export default {
    data(){
        return {
            date: moment().format("YYYY")
        }
    }
}
</script>
<style scoped>
#app, .footer:after {
    font-size: 10px;
    height: 100px;
}
</style>
