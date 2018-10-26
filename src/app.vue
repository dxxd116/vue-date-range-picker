<template>
    <div id="demo">
    <div>
    <strong>Full form</strong>
    <vue-rangedate-picker :currentDateRange="dateRange"></vue-rangedate-picker>
    </div>
    <div style="height: 300px">
    <strong>Compact (mobile)</strong>
    <vue-rangedate-picker :currentDateRange="dateRange" compact="true"></vue-rangedate-picker>
    </div>
    </div>
</template>
<script>
    import VueRangeDatePicker from './RangedatePicker.vue'
    var n= new Date()
    var end = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 10)
    var dateRange={
    start: new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1),
    end: end
    }

function getNewDateRange(){
    var range={
        start: new Date(n.getFullYear(), n.getMonth(), n.getDate() + 10),
        end: new Date(n.getFullYear(), n.getMonth(), n.getDate() + 20),
    }
    return range
}

export default {
        
    data:function(){
        return{
            dateRange: dateRange
            
        }
    },
    components:{
        VueRangeDatePicker
    },
    mounted(){
        setTimeout(() => this.dateRange=getNewDateRange(),2000)
    }    
}
</script>
