<template>
    <div class="button" @click="clickAction()" :class="{ active: active, loading: loading }">
        <template v-if="loading">
            <img class="img_loading" src="@/assets/gifs/loading.gif" alt="loading" rel="preload">
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        condition: {
            default: false
        },
        loading: {
            default: false
        }
    },
    computed: {
        active() {
            return !!this.condition && !this.loading;
        }
    },
    methods: {
        clickAction() {
            if (this.active) {
                this.$emit('action')
            }
        }
    },
    emits: ['action']
}
</script>

<style src="./Button.scss" scoped></style>