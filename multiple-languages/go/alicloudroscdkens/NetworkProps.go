package alicloudroscdkens


// Properties for defining a `Network`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-network
type NetworkProps struct {
	// Property cidrBlock: The CIDR block of the network.
	//
	// You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
	// 10.0.0.0\/8 (default)
	// 172.16.0.0\/12
	// 192.168.0.0\/16
	CidrBlock interface{} `field:"required" json:"cidrBlock" yaml:"cidrBlock"`
	// Property ensRegionId: The ID of the edge node.
	EnsRegionId interface{} `field:"required" json:"ensRegionId" yaml:"ensRegionId"`
	// Property description: The description of the network.
	//
	// The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property networkName: The name of the network.
	//
	// The name must meet the following requirements:
	// The name must be 2 to 128 characters in length.
	// The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
	// The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
	NetworkName interface{} `field:"optional" json:"networkName" yaml:"networkName"`
}

