package alicloudroscdkrds


// Properties for defining a `RosDBInstanceParameterGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceparametergroup
type RosDBInstanceParameterGroupProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	Parameters interface{} `field:"required" json:"parameters" yaml:"parameters"`
	Forcerestart interface{} `field:"optional" json:"forcerestart" yaml:"forcerestart"`
}

