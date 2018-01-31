<template>
    <div class="wrapper">
        <div class="title">
            VS-UI 
            <span class="sub-title">be the best</span>
        </div>
        <div class="item">
            <span class="label">按钮小</span>
            <Button size="small" class="spacing">default</Button>
            <Button size="small" type="primary" class="spacing">primary</Button>
            <Button size="small" type="ghost" class="spacing">ghost</Button>
            <Button size="small" type="ghost" :disabled="true">disabled</Button>
        </div>
        <div class="item">
            <span class="label">按钮默认</span>
            <Button class="spacing">default</Button>
            <Button type="primary" class="spacing">primary</Button>
            <Button type="ghost" class="spacing">ghost</Button>
            <Button type="ghost" :disabled="true">disabled</Button>
        </div>
        <div class="item">
            <span class="label">按钮大</span>
            <Button size="large" class="spacing">default</Button>
            <Button size="large" type="primary" class="spacing">primary</Button>
            <Button size="large" type="ghost" class="spacing">ghost</Button>
            <Button size="large" type="ghost" :disabled="true">disabled</Button>
        </div>
        <div class="item">
            <span class="label">下拉菜单一</span>
            <Dropdown>
                <span>悬浮我触发</span>
                <DropdownMenu slot="list">
                    <DropdownItem>开心上课</DropdownItem>
                    <DropdownItem>轻松备课</DropdownItem>
                    <DropdownItem>班级管理</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div class="item">
            <span class="label">下拉菜单二</span>
            <Dropdown trigger="click">
                <span>点击我触发</span>
                <DropdownMenu trigger="click" slot="list">
                    <DropdownItem>开心上课</DropdownItem>
                    <DropdownItem>轻松备课</DropdownItem>
                    <DropdownItem>班级管理</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div class="item">
            <span class="label">多选单独</span>
            <Checkbox v-model="checkbox1">吃饭</Checkbox>
            <Checkbox v-model="checkbox2">睡觉</Checkbox>
            <Checkbox v-model="checkbox3">打豆豆</Checkbox>
        </div>
        <div class="item">
            <span class="label">多选组合</span>
            <CheckboxGroup v-model="hobby">   
                <Checkbox label="slepp">睡觉</Checkbox>
                <Checkbox label="hit">打豆豆</Checkbox>
                <Checkbox disabled label="eat">吃饭</Checkbox>
            </CheckboxGroup>
        </div>
        <div class="item">
            <span class="label">单选</span>
            <RadioGroup v-model="gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
                <Radio :disabled="true" label="no">禁用</Radio>
            </RadioGroup>
        </div>
        <div class="item">
            <span class="label">输入框</span>
            <Input 
                size="small" 
                placeholder="小号输入框" 
                style="width:160px;"
                class="spacing">
            </Input>
            <Input 
                placeholder="默认输入框" 
                style="width:160px;" 
                class="spacing">
            </Input>
            <Input 
                size="large" 
                placeholder="大号输入框" 
                style="width:160px;"
                class="spacing">
            </Input>
            <Input 
                :disabled="true"
                size="large" 
                placeholder="禁用输入框" 
                style="width:160px;">
            </Input>
        </div>
        <div class="item">
            <span class="label">日历选择器</span>
            <DatePicker 
                size="small" 
                type="date" 
                placeholder="请选择日期" 
                style="width: 220px" 
                class="spacing">
            </DatePicker>
            <DatePicker 
                type="date" 
                placeholder="请选择日期" 
                style="width: 220px" 
                class="spacing">
            </DatePicker>
            <DatePicker 
                size="large" 
                type="date" 
                placeholder="请选择日期" 
                style="width: 220px">
            </DatePicker>
        </div>
        <div class="item">
            <span class="label">对话框</span>
            <Button @click="modal = true">显示对话框</Button>
            <Modal
                v-model="modal"
                title="修改用户信息">
                <p>今天天气不错哦</p>
                <p>今天天气不错哦</p>
                <p>今天天气不错哦</p>
            </Modal>
        </div>
        <div class="item">
            <span class="label">确认框</span>
            <Button @click="confirm = true">显示确认框</Button>
            <Modal
                v-model="confirm"
                :confirm="true"
                title="确认要删除吗">
                <p>今天天气不错哦</p>
                <p>今天天气不错哦</p>
                <p>今天天气不错哦</p>
            </Modal>
        </div>
        <div class="item">
            <span class="label">js调确认框</span>
            <Button @click.native="showModal">显示确认框</Button>
        </div>
        <div class="item">
            <span class="label">消息框</span>
            <Button @click.native="$Message.info({content:'信息级别的消息',duration:20})" class="spacing">info</Button>
            <Button @click.native="$Message.success('成功级别的消息')" class="spacing">success</Button>
            <Button @click.native="$Message.warning('警告级别的消息')" class="spacing">warning</Button>
            <Button @click.native="$Message.error('错误级别的消息')">error</Button>
        </div>
        <div class="item">
            <span class="label">表单</span>
            <Form 
                ref="formCustom" 
                :model="form" 
                :rules="formRule" 
                :label-width="60" 
                style="width:340px;margin-left:110px;">
                <FormItem label="用户" prop="name">
                    <Input placeholder="请输入用户名" v-model="form.name"></Input>
                </FormItem>
                <FormItem label="邮箱" prop="email">
                    <Input placeholder="请输入邮箱" v-model="form.email"></Input>
                </FormItem>
            </Form>
        </div>
        <div class="item">
            <span class="label">分页</span>
            <Page   
                style="display:inline-block;vertical-align:middle;" 
                :total="40" 
                size="small">
            </Page>
        </div>
        <div class="item">
            <span class="label">选择器</span>
            <Select 
                size="small" 
                v-model="selectModel" 
                style="width:160px;"
                class="spacing">
                <Option 
                    v-for="item in selectOptions" 
                    :value="item.value" 
                    :key="item.value">
                    {{ item.label }}
                </Option>
            </Select>
            <Select 
                v-model="selectModel" 
                style="width:160px;"
                class="spacing">
                <Option 
                    v-for="item in selectOptions" 
                    :value="item.value" 
                    :key="item.value" 
                    :label="item.label">
                </Option>
            </Select>
            <Select 
                size="large" 
                v-model="selectModel" 
                style="width:160px;">
                <Option 
                    v-for="item in selectOptions" 
                    :value="item.value" 
                    :key="item.value">
                    {{ item.label }}
                </Option>
            </Select>
        </div>
        <div class="item">
            <span class="label">级联选择器</span>
            <Cascader 
                size="small" 
                :data="cascaderData" 
                v-model="cascaderModel" 
                style="display:inline-block;width:200px;"
                class="spacing">
            </Cascader>
            <Cascader 
                :data="cascaderData" 
                v-model="cascaderModel" 
                style="display:inline-block;width:200px;"
                class="spacing">
            </Cascader>
            <Cascader 
                size="large" 
                :data="cascaderData" 
                v-model="cascaderModel" 
                @on-change="cascaderChange" 
                style="display:inline-block;width:200px;">
            </Cascader>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {           
                // 多选
                checkbox1: true,
                checkbox2: false,
                checkbox3: false,
                // 
                hobby: ['eat'],
                // 单选
                gender: 'male',
                // 表单
                form: {
                    name: '',
                    password: '',
                },
                formRule: {
                    name: [
                        { required: true, message: '名字不能为空', trigger: 'blur' },
                        { min: 2, max: 10, message: '名字长度在 2 至 10 个字之间'}
                    ],
                    email: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '请输入正确格式', trigger: 'blur' }
                    ],
                },
                // 对话框
                modal: false,
                // 确认框
                confirm: false,
                // 选择器
                selectModel: '',
                selectOptions: [
                    {
                        value: 'eat',
                        label: '吃饭'
                    },
                    {
                        value: 'sleep',
                        label: '睡觉'
                    },
                    {
                        value: 'hit',
                        label: '打豆豆'
                    },
                ],
                // 级联选择器
                cascaderModel: [],
                cascaderData:[
                    {
                        value: 'frontend',
                        label: '前端',
                        children: [
                            {
                                value: 'tanfangxin',
                                label: '谭芳鑫'
                            },
                            {
                                value: 'wuzhiyong',
                                label: '吴智勇'
                            }
                        ]
                    },
                    {
                        value: 'backend',
                        label: '后端',
                        children: [
                            {
                                value: 'renning',
                                label: '任宁'
                            },
                            {
                                value: 'ganzhifeng',
                                label: '干志峰'
                            },
                            {
                                value: 'dutongtong',
                                label: '杜彤彤'
                            }
                        ]
                    }
                ],

            }
        },
        methods: {
            cascaderChange(value1, value2) {
                console.log(value1, value2)
            },

            showModal() {
                this.$Modal.warning({
                    title: '提示',
                    content: '登陆过期，请重新登录'
                })
            }
        }
    }
</script>

<style lang="less">
    @import "../src/styles/index.less";
    .spacing {
        margin-right: 8px;
    }
    .wrapper {
        padding: 30px 40px;
        font-size: 16px;
        width: 1000px;
        margin: 70px auto 200px;
        .title {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            height: 70px;
            line-height: 70px;
            padding-left: 50px;
            font-size: 38px;
            border-bottom: 1px solid #eee;
            color: #36a16f;
            background-color: #fff;
            z-index: 99;
            .sub-title {
                font-size: 16px;
                color: #333;
            }
        }
        .item {
            margin-bottom: 32px;
        }
        .label {
            display: inline-block;
            width: 100px;
            margin-right: 10px;
        }
    }
</style>