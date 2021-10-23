export default {
    computed: {
        _env() {
            return process.env.NODE_ENV === 'development';
        }
    },
}