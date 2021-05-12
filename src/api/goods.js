import axios from './index.js'

/**
 * 获取商品列表
 * @param {Object} obj 请求参数
 */
 export async function getGoodsList(obj) {
    const res = await axios.get("/products/all", {
       params: obj
    });
    return res.data;
}

/**
* 修改商品
* @param {Object} obj 请求参数
*/
export async function editGoods(obj) {
   const res = await axios.put("/products/edit", obj);
   return res.data;
}

/**
* 删除商品
* @param {Object} obj 请求参数
*/
export async function deleteGoods(id) {
   const res = await axios.delete("/products/" + id);
   return res.data;
}

/**
* 新增商品
* @param {Object} obj 请求参数
*/
export async function addGoods(obj) {
   const res = await axios.post("/products/add", obj);
   return res.data;
}


/**
* 上传图片
* @param {Object} obj 请求参数
*/
export async function uploadImg(obj) {
   const res = await axios.post("/upload/images", obj);
   console.log(res);
   return res.data;
}

/**
* 获取商品类目
* @param {Object} obj 请求参数
*/
export async function getGoodsCategory(obj) {
   const res = await axios.get("/category/all", {
      params: obj
   });
   return res.data;
}

/**
* 编辑商品类目
* @param {Object} obj 请求参数
*/
export async function editGoodsCategory(obj) {
   const res = await axios.put("/category/edit", obj);
   return res.data;
}

/**
* 添加商品类目
* @param {Object} obj 请求参数
*/
export async function addGoodsCategory(obj) {
   const res = await axios.post("/category/add", obj);
   return res.data;
}

/**
* 删除商品类目
* @param {Object} obj 请求参数
*/
export async function deleteGoodsCategory(id) {
   const res = await axios.delete("/category/" + id);
   return res.data;
}
