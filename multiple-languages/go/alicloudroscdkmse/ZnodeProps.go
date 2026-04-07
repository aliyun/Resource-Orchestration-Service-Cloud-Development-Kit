package alicloudroscdkmse


// Properties for defining a `Znode`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-znode
type ZnodeProps struct {
	// Property clusterId: The ID of the cluster.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property path: The path of the znode.
	Path interface{} `field:"required" json:"path" yaml:"path"`
	// Property data: The data of the znode.
	Data interface{} `field:"optional" json:"data" yaml:"data"`
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property type: The type of the znode.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

