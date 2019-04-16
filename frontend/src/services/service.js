import axios from 'axios'
import { SERVER_URL } from '../common/config'

// 登录
export function requestLogin(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/action/login`,params)
}
// 注册
export function requestRegister(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/action/register`,params)
}
// 获取验证码
export function requestGetRegisterCode(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/msg/register`,params)
}

/**
 * 字典模块
 */
// 获取数据字典
export function requestGetDictList(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/dict/list`,params)
}

/**
 * 首页
 */
// 获取商店列表
export function requestShopList(){
    return axios.post(`${SERVER_URL}/zv-member/zv/home/shoplist`,{})
}
// 更新设置项
export function requestUpdateSetting(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/home/accountset`,params)
}
// 修改密码
export function requestUpdatePwd(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/action/changepwd`,params)
}
// 修改手机号码
export function requestUpdatePhone(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/action/changemobile`,params)
}
// 创建门店
export function requestaddShop(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/home/addshop`,params)
}
// 获取用户信息 
export function requestGetAccountInfo(){
    return axios.post(`${SERVER_URL}/zv-member/zv/home/accountinfo`,{})
}
// 上传图片
export function requestUploadImage(params){
    let config = {
        headers:{'Content-Type':false}
    };
    return axios.post(`/zv-member/zv/upload/oss`,params,config)
}

/**
 * 会员管理模块
 */
// 获取会员基础数据
export function requestGetMemberbaseData(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/member/data`,params)
}
// 获取会员列表
export function requestGetMemberList(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/member/list`,params)
}
// 删除会员 
export function requestDeleteMember(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/member/delete`,params)
}
// 会员开卡
export function requestCreateMemberCard(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/member/create`,params)
}
// 获取会员详细信息 
export function requestGetMemberDetail(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/member/detail`,params)
}
// 更新会员详细信息 
export function requestUpdateMemberDetail(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/member/update`,params)
}
// 获取会员卡等级
export function requestGetGradelist(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/card/gradelist`,params)
}
// 获取会员卡类型
export function requestGetTypelist(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/card/typelist`,params)
}
// 会员搜索
export function requestSearchMemberlist(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/member/search`,params)
}

/**
 * 充值模块
 * @param {*} params 
 */
// 会员充值
export function requestRecharge(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/order/recharge`,params)
} 
// 会员充值列表
export function requestGetSimplerecharge(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/order/simplerecharge`,params)
}
// 会员冲次
export function requestRechargetimes(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/order/rechargetimes`,params)
}
// 会员充次列表
export function requestGetSimplerechargetimes(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/order/simplerechargetimes`,params)
}


/**
 *   商品模块  
 *  */  
// 商品基础数据
export function requestGetProductData(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/goods/data`,params)
}
// 商品列表 
export function requestGetProductList(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/goods/goodslist`,params)
}
// 添加商品
export function requestAddProduct(params){
    return axios.post(`${SERVER_URL}/zv-member/zv/goods/add`,params)
}
// 添加商品大类
export function requestAddcategory(params) {
    return axios.post(`${SERVER_URL}/zv-member/zv/goods/addcategory`,params)
}
// 获取商品大类
export function requestGetGoodsmenu(params) {
    return axios.post(`${SERVER_URL}/zv-member/zv/goods/goodsmenu`,params)
}
// 删除商品或目录
export function requestDeleteGoods(params) {
    return axios.post(`${SERVER_URL}/zv-member/zv/goods/del`,params)
}
// 获取服务列表
export function requestGetServerlist(params) {
    return axios.post(`${SERVER_URL}/zv-member/zv/goods/serverlist`,params)
}

/**
 * 积分模块
 */
// 积分新增或删除
export function requestGetIntegralOperate(params) {
    return axios.post(`${SERVER_URL}/zv-member/zv/integral/operate`,params)
}
// 积分操作日志
export function requestGetIntegralList(params) {
    return axios.post(`${SERVER_URL}/zv-member/zv/integral/list`,params)
}

/**
 * 礼品模块
 */
// 查看礼品
export function requestGetGiftList(params) {
    return axios.post(`${SERVER_URL}/zv-member/zv/gift/list`,params)
}
// 新增礼品
export function requestAddGift(params) {
    return axios.post(`${SERVER_URL}/zv-member/zv/gift/add`,params)
}
// 更新礼品
export function requestUpdateGift(params) {
    return axios.post(`${SERVER_URL}/zv-member/zv/gift/update`,params)
}
// 删除礼品
export function requestDeleteGift(params) {
    return axios.post(`${SERVER_URL}/zv-member/zv/gift/del`,params)
}


/**
 * 库存管理，供应商管理
 */
// 供应商列表
export function requestGetWarehouseSupplierlist(params) {
    return axios.post(`${SERVER_URL}/zv-member/zv/warehouse/supplierlist`,params)
}
