package alicloudroscdkrds


// Properties for defining a `RosConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-connection
type RosConnectionProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	Port interface{} `field:"required" json:"port" yaml:"port"`
	BabelfishPort interface{} `field:"optional" json:"babelfishPort" yaml:"babelfishPort"`
	ConnectionStringPrefix interface{} `field:"optional" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	GeneralGroupName interface{} `field:"optional" json:"generalGroupName" yaml:"generalGroupName"`
}

