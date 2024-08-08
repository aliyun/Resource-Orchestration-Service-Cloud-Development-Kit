package alicloudroscdkredis


// Properties for defining a `RosConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-connection
type RosConnectionProps struct {
	ConnectionStringPrefix interface{} `field:"required" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	ConnectionType interface{} `field:"required" json:"connectionType" yaml:"connectionType"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Port interface{} `field:"required" json:"port" yaml:"port"`
}

