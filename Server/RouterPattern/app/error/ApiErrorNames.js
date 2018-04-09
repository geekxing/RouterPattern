var ApiErrorNames = {};

ApiErrorNames.UNKOWN_ERROR = "unknown_error";
ApiErrorNames.USER_NOT_EXIST = "userNotExist";

const errorMap = new Map();

errorMap.set(ApiErrorNames.UNKOWN_ERROR, {
	code: -1,
	messgae: '未知错误'
});

errorMap.set(ApiErrorNames.USER_NOT_EXIST, {
	code: 101,
	messgae: '用户不存在'
});

ApiErrorNames.getErrorInfo = (error_name) => {
	
	var error_info;
	if (error_name) {
		error_info = errorMap.get(error_name);
	}
	if (!error_info) {
		error_name = UNKOWN_ERROR;
		error_info = errorMap.get(error_name);
	}
	return error_info;
}


module.exports = ApiErrorNames;