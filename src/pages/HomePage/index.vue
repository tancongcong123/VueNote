<template>
    <div>
        <a-layout>
            <a-layout-header class="header">
                <div class="logo" style="background: #fff" />
                <a-menu v-model:selectedKeys="selectedKeys1" theme="dark" mode="horizontal"
                    :style="{ lineHeight: '64px' }">
                    <a-menu-item key="1">nav 1</a-menu-item>
                    <a-menu-item key="2">nav 2</a-menu-item>
                    <a-menu-item key="3">nav 3</a-menu-item>
                    <a-menu-item key="4">nav 4</a-menu-item>
                </a-menu>
            </a-layout-header>
            <a-layout>
                <a-layout-sider width="200" style="background: #fff">
                    <a-menu v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" mode="inline"
                        :style="{ height: '100%', borderRight: 0 }">
                        <a-sub-menu key="sub1">
                            <template #title>
                                <span>
                                    subnav 1
                                </span>
                            </template>
                            <a-menu-item key="1">option1</a-menu-item>
                            <a-menu-item key="2">option2</a-menu-item>
                            <a-menu-item key="3">option3</a-menu-item>
                            <a-menu-item key="4">option4</a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub2">
                            <template #title>
                                <span>
                                    subnav 2
                                </span>
                            </template>
                            <a-menu-item key="5">option5</a-menu-item>
                            <a-menu-item key="6">option6</a-menu-item>
                            <a-menu-item key="7">option7</a-menu-item>
                            <a-menu-item key="8">option8</a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub3">
                            <template #title>
                                <span>
                                    subnav 3
                                </span>
                            </template>
                            <a-menu-item key="9">option9</a-menu-item>
                            <a-menu-item key="10">option10</a-menu-item>
                            <a-menu-item key="11">option11</a-menu-item>
                            <a-menu-item key="12">option12</a-menu-item>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-sider>
                <a-layout style="padding: 0 24px 24px">
                    <a-breadcrumb style="margin: 16px 0">
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item>List</a-breadcrumb-item>
                        <a-breadcrumb-item>App</a-breadcrumb-item>
                    </a-breadcrumb>
                    <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                        <!-- 内容 -->
                        <a-collapse default-active-key="1" :bordered="false" expandIconPosition="right">
                            <template #expandIcon="props">
                                <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
                            </template>
                            <a-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
                                <span class="title-left">{{ text }}</span>
                            </a-collapse-panel>
                        </a-collapse>
                    </a-layout-content>
                </a-layout>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                selectedKeys1: ['2'],
                selectedKeys2: ['1'],
                collapsed: false,
                openKeys: ['sub1'],
                text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
                customStyle:'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden, text-align: left',
            }
        }
    }
</script>
<style lang="css">
    #components-layout-demo-top-side-2 .logo {
        float: left;
        width: 120px;
        height: 31px;
        margin: 16px 24px 16px 0;
        background: rgba(255, 255, 255, 0.3);
    }

    .ant-row-rtl #components-layout-demo-top-side-2 .logo {
        float: right;
        margin: 16px 0 16px 24px;
    }

    .site-layout-background {
        background: #fff;
    }

    .title-left{
        text-align: left;
    }
</style>