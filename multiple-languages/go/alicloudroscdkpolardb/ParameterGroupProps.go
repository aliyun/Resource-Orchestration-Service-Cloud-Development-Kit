package alicloudroscdkpolardb


// Properties for defining a `ParameterGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-parametergroup
type ParameterGroupProps struct {
	// Property dbType: The type of the database engine.
	DbType interface{} `field:"required" json:"dbType" yaml:"dbType"`
	// Property dbVersion: The version of the database engine.
	DbVersion interface{} `field:"required" json:"dbVersion" yaml:"dbVersion"`
	// Property parameterGroupName: The name of the parameter template.
	ParameterGroupName interface{} `field:"required" json:"parameterGroupName" yaml:"parameterGroupName"`
	// Property parameters: The list of the parameters.
	Parameters interface{} `field:"required" json:"parameters" yaml:"parameters"`
	// Property parameterGroupDesc: The description of the parameter template.
	ParameterGroupDesc interface{} `field:"optional" json:"parameterGroupDesc" yaml:"parameterGroupDesc"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

