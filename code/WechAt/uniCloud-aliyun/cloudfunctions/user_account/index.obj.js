// 开发文档: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
module.exports = {
	add(title, content) {
			title = title.trim()
			content = content.trim()
			if(!title || !content) {
				return {
					errCode: 'INVALID_TODO',
					errMsg: 'TODO标题或内容不可为空'
				}
			}
			// ...其他逻辑
			return {
				errCode: 0,
				errMsg: '创建成功'
			}
		}
}
