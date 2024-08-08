package alicloudroscdkgpdb


// Properties for defining a `RosInstancePublicConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-instancepublicconnection
type RosInstancePublicConnectionProps struct {
	ConnectionStringPrefix interface{} `field:"required" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	Port interface{} `field:"required" json:"port" yaml:"port"`
}

