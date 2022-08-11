module.exports = {
	/**
	 * @description 获取当前时间戳, 精确到秒
	 */
	getCurrTimestamp: function(){
		return Date.parse(new Date())/1000;
	},
	
	/**
	 * 格式化时间 例：20180604
	 */
	getIntDate: function(date) {
	  date = new Date(date)
	  let day = date.getDate()
	  let month = date.getMonth() + 1
	  let year = date.getFullYear()
	  if (day < 10) {
	    day = '0' + day
	  }
	  if (month < 10) {
	    month = '0' + month
	  }
	  return year.toString() + month.toString() + day.toString()
	},
	
	getNowFormatDate: function() {
		var date = new Date();
		var seperator1 = "-";
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var strDate = date.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		var currentdate = year + seperator1 + month + seperator1 + strDate;
		return currentdate;
	},
	
	/**
	 * @description 计算图片显示高度
	 * @param {number} width 图片宽度
	 * @param {number} height 图片高度
	 * @param {number} windowWidth 屏幕宽度
	 */
	computeImgSize: function(width, height, windowWidth) {
		let viewWidth;
		let viewHeight;
		let baseLength; // 基础长度
		let otherWidth = 160; // 其他部分宽度
		let ratio = width / height; // 宽高比
		if (Math.abs(ratio - 1) < 0.15 || ratio == 1) { // 趋向正方形
			baseLength = (windowWidth - otherWidth) * 0.432;
			if (width > height) {
				viewWidth = baseLength;
				viewHeight = baseLength * ratio;
			} else {
				viewHeight = baseLength;
				viewWidth = baseLength / ratio;
			}
		} else if (ratio > 1.15) { // 横向
			baseLength = (windowWidth - otherWidth) * 0.52;
			if (ratio > 3) {
				viewWidth = baseLength;
				viewHeight = baseLength * 0.40;
			} else {
				viewWidth = baseLength;
				viewHeight = baseLength / ratio;
			}
		} else { // 竖向
			baseLength = (windowWidth - otherWidth) * 0.52;
			if (ratio < 0.3) {
				viewHeight = baseLength;
				viewWidth = baseLength * 0.432;
			} else {
				viewHeight = baseLength;
				viewWidth = baseLength * ratio;
			}
		}
		return {
			viewWidth: viewWidth,
			viewHeight: viewHeight
		};
	},
}
