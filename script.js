const app = Vue.createApp({
    data() {
        return {
            titleValue: "Hello from space!",
            spaceSrc: "img/space.jpg",
            spaceAlt: "Photo of a galaxy"
        }
    },
})

app.mount("#app");