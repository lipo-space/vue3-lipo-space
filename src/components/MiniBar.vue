<template>
    <div>
        <el-menu :data="sidearr" active-text-color="#ffd04b" background-color="#d9bc9a" class="el-menu-vertical-demo"
            text-color="#fff" router>
            <template v-for="(item, index) in sidearr" :key="index">
                <el-menu-item :index="item.link">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon" />
                        </el-icon>
                        <span style="color: #a6785e;font-weight: bold;">&nbsp;❀</span>
                    </template>
                    <!-- <el-menu-item index="1-1">
                        <el-icon>
                            <location />
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <el-icon>
                            <location />
                        </el-icon>
                    </el-menu-item> -->
                </el-menu-item>
            </template>

        </el-menu>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';

const sidearr = ref([]);

onMounted(async () => {
    const service = await import('../axios');
    const res = await service.default.get('/api/sidebar/menu');

    sidearr.value = res.data.data;

})

</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
    padding-top: 10vh;
    height: 100vh;
    border: none;
}
</style>