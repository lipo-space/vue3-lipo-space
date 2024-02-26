<template>
    <div>
        <el-menu :data="sidearr" active-text-color="#725047" background-color="#da9e6a" class="el-menu-vertical-demo"
            text-color="#fff" router >
            <template v-for="(item, index) in sidearr" :key="index">
                <el-menu-item :index="item.link">
                    <template #title>
                        <el-icon :name="item.icon">
                            <component :is="item.icon" />
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </template>
                </el-menu-item>
            </template>

        </el-menu>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sidearr = ref([]);

onMounted(async () => {
    const service = await import('../axios');
    const res = await service.default.get('/api/sidebar/menu');

    sidearr.value = res.data.data;
    // console.log(sidearr.value)
});


</script>


<style lang="scss" scoped>
.el-menu-vertical-demo {
    padding-top: 10vh;
    padding-right: 0;
    border-right: 0;
    height: 100vh;
}
</style>