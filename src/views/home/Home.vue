<template>
    <div>
        <Banner :index="toIndex"/>
        <Solution @move="solutionMove"></Solution>
        <AboutUs/>
        <ClassicCase/>
    </div>
</template>
<script>
import Banner from './Banner'
import Solution from './Solution'
import AboutUs from './AboutUs'
import ClassicCase from './ClassicCase'
export default {
    name: 'Home',
    data: function(){
        return {
            toIndex: 0
        }
    },
    components: {
        Banner,
        Solution,
        AboutUs,
        ClassicCase
    },
    methods: {
        solutionMove(index){
            if(index>0){
                index--;
            }
            this.toIndex = index;
        }
    }
}
</script>
<style scoped>

</style>