package alicloudroscdkcore


type RosParameterType string

const (
	RosParameterType_STRING RosParameterType = "STRING"
	RosParameterType_NUMBER RosParameterType = "NUMBER"
	RosParameterType_JSON RosParameterType = "JSON"
	RosParameterType_BOOLEAN RosParameterType = "BOOLEAN"
	RosParameterType_COMMA_DELIMITED_LIST RosParameterType = "COMMA_DELIMITED_LIST"
	RosParameterType_OOS_PARAMETER RosParameterType = "OOS_PARAMETER"
	RosParameterType_OOS_SECRET_PARAMETER RosParameterType = "OOS_SECRET_PARAMETER"
)

