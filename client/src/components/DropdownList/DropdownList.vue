<template>
    <div class="dropdown_list">
        <div class="header" @click="active = !active">
            {{ selection || placeholder }}
            <img src="@/assets/svg/dropdown_arrow.svg" alt=" " class="arrow" :class="{ flip: active }">
        </div>
        <Transition name="dropdown">
            <div v-if="active" class="options">
                <div v-for="(option, index) in options" class="option" @click="selectItem(option)" :key="index">
                    {{ option.name }}
                </div>
            </div>
        </Transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            selection: undefined
        }
    },
    props: {
        options: {
            type: Array,
            default: []
        },
        placeholder: {
            type: String,
            default: 'Выберите элемент'
        }
    },
    methods: {
        selectItem(item) {
            this.selection = item.name;
            this.$emit('input', item);
            this.active = false;
        }
    },
    emits: ['input']
}
</script>

<style src="./DropdownList.scss" scoped></style>