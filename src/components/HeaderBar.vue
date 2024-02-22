<template>
    <div>
        <el-menu  class="el-menu-demo" mode="horizontal" background-color="#725047" text-color="#fff" router
            active-text-color="#ffd04b">

            <el-menu-item index="/">
                <img class="lipologo" src="../assets/lipologo.png" alt="Lipo logo" />
            </el-menu-item>

            <div class="flex-grow" />
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="/about">About</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>item four</template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                    <el-menu-item index="2-4-2">item two</el-menu-item>
                    <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.el-menu-demo {
    padding: 0 30px;
    margin: 0;
    height: 70px;
}

.lipologo {
    width: 100px;
    border-radius: 10px;
    border: 1px solid #00000091;
}
</style>