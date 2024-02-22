<template>
    <div>
        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
            text-color="#fff" @open="handleOpen" @close="handleClose">

            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                </template>
                <el-menu-item index="1-1">
                    <el-icon>
                        <location />
                    </el-icon>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <el-icon>
                        <location />
                    </el-icon>
                </el-menu-item>

            </el-sub-menu>

            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <Menu />
                    </el-icon>
                </template>
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>
                    <el-icon>
                        <document />
                    </el-icon>
                </template>
            </el-sub-menu>

            <el-sub-menu index="4">
                <template #title>
                    <el-icon>
                        <setting />
                    </el-icon>
                </template>
            </el-sub-menu>

        </el-menu>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
    padding-top: 6vh;
    height: 100vh;
}
</style>