export default function() {
    return {
        data() {
            return {
                loading: false,
                data: null
            }
        },
        methods: {
            async fetchData(callback, obj, successText, errorText, isChangeLoading = true) {
                isChangeLoading && (this.loading = true);
                this.data = await callback(obj);
                if(this.data.status = 'success') {
                    // this.handleSuccess();
                    successText && this.$message.success(successText);
                }else {
                    // this.handleError();
                    // console.log(this.data.msg);
                    errorText && this.$message.error(errorText);
                }
                isChangeLoading && (this.loading = false);
                return this.data.status === 'success';
            },
        },
    }
}