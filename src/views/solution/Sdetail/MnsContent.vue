<template>
    <div id="app">
        <div class="p-width solution-item">
            <img class="solution-img" :src="data.img" :alt="data.title">
            <div class="solution-txt">
                <h2>{{data.title}}</h2>
                <p>{{data.content}}</p>
                <p class="stress">{{data.stress}}</p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: "MnsContent",
    props: {
        data: {
            type: Object
        }
    },
    data() {
        return {

        }
    },
    components: {
        
    }
}
</script>

<style scoped>
#app {
    background: #F3F3F3;
}

.solution-item {
    display: flex;
    padding: 56.25px 0;
}

.solution-img {
    width: 427.5px;
    height: 312.5px;
}

.solution-txt {
    width: calc(100% - 427.5px);
    padding: 0 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.solution-txt p {
    margin-top: 35px;
    font-size: 10px;
    color: #666666;
}

.solution-txt .stress {
    color: #3D7EC1;
}
</style>
