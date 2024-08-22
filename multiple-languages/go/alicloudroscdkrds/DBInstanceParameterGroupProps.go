package alicloudroscdkrds


// Properties for defining a `DBInstanceParameterGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceparametergroup
type DBInstanceParameterGroupProps struct {
	// Property dbInstanceId: Database InstanceId to update properties.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property parameters: Parameters to update for selected database instance.
	Parameters interface{} `field:"required" json:"parameters" yaml:"parameters"`
	// Property forcerestart: whether restart database instance.
	Forcerestart interface{} `field:"optional" json:"forcerestart" yaml:"forcerestart"`
}

