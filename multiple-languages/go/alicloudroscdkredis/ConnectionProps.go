package alicloudroscdkredis


// Properties for defining a `Connection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-connection
type ConnectionProps struct {
	// Property connectionStringPrefix: The prefix of the public endpoint.
	//
	// The prefix must be 8 to 64 characters in length,
	// and can contain lowercase letters and digits.
	// It must start with a lowercase letter.
	ConnectionStringPrefix interface{} `field:"required" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	// Property connectionType: Allowed values: - Public: Public address.
	//
	// - Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.
	ConnectionType interface{} `field:"required" json:"connectionType" yaml:"connectionType"`
	// Property instanceId: Instance ID (globally unique).
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property port: The service port number of the ApsaraDB for Redis instance.
	//
	// Valid values: 1024 to 65535.
	Port interface{} `field:"required" json:"port" yaml:"port"`
}

