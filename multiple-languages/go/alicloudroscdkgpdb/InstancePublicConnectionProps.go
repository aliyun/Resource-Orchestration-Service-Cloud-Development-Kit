package alicloudroscdkgpdb


// Properties for defining a `InstancePublicConnection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-instancepublicconnection
type InstancePublicConnectionProps struct {
	// Property connectionStringPrefix: The endpoint that is used to connect to the specified database.
	ConnectionStringPrefix interface{} `field:"required" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	// Property dbInstanceId: The ID of the instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property port: The port number of the instance.
	Port interface{} `field:"required" json:"port" yaml:"port"`
}

