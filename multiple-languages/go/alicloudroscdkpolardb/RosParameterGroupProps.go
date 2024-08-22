package alicloudroscdkpolardb


// Properties for defining a `RosParameterGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
type RosParameterGroupProps struct {
	DbType interface{} `field:"required" json:"dbType" yaml:"dbType"`
	DbVersion interface{} `field:"required" json:"dbVersion" yaml:"dbVersion"`
	ParameterGroupName interface{} `field:"required" json:"parameterGroupName" yaml:"parameterGroupName"`
	Parameters interface{} `field:"required" json:"parameters" yaml:"parameters"`
	ParameterGroupDesc interface{} `field:"optional" json:"parameterGroupDesc" yaml:"parameterGroupDesc"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

