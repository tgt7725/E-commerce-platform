import { getGoodsCategory } from "@/api/goods.js";
export default function () {
    return {
        async created() {
            this.categories = await getGoodsCategory()
                .then((res) => res.data.data);
        },
        data() {
            return {
                categories: [],
                tags: ["包邮", "最快次日达", "限时秒杀", "满69-10", "24小时发货"],
                ruleForm: {
                    title: "",
                    desc: "",
                    category: "",
                    c_items: [],
                    tags: [],
                    price: 0,
                    price_off: null,
                    unit: "g",
                    status: 1,
                    images: [],
                    inventory: 0,
                    sale: 0,
                    _id: "",
                },
                rules: {
                    title: [
                        {
                            required: true,
                            message: "商品名称不能为空",
                            trigger: "blur",
                        },
                    ],
                    price: [
                        {
                            required: true,
                            message: "商品价格不能为空",
                            trigger: "blur",
                        },
                    ],
                    tags: [
                        {
                            required: true,
                            message: "商品标签不能为空",
                            trigger: "blur",
                        },
                    ],
                    inventory: [
                        {
                            required: true,
                            message: "库存量不能为空",
                            trigger: "blur",
                        },
                    ],
                    category: [
                        {
                            required: true,
                            message: "商品类目不能为空",
                            trigger: "blur",
                        },
                    ],
                    status: [
                        {
                            required: true,
                            message: "请选择上架状态",
                            trigger: "blur",
                        },
                    ],
                    unit: [
                        {
                            required: true,
                            message: "计量单位不能为空",
                            trigger: "blur",
                        },
                    ],
                    images: [
                        { required: true, message: "商品图片不能为空", trigger: 'blur' }
                    ],
                },
            }
        },
    }
}