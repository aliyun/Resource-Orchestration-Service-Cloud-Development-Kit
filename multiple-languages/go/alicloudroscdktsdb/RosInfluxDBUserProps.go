package alicloudroscdktsdb


// Properties for defining a `RosInfluxDBUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbuser
type RosInfluxDBUserProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Password interface{} `field:"required" json:"password" yaml:"password"`
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
	UserType interface{} `field:"required" json:"userType" yaml:"userType"`
	DatabasePermissions interface{} `field:"optional" json:"databasePermissions" yaml:"databasePermissions"`
}

