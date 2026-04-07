package alicloudroscdkmse


// Properties for defining a `RosZnode`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-znode
type RosZnodeProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	Path interface{} `field:"required" json:"path" yaml:"path"`
	Data interface{} `field:"optional" json:"data" yaml:"data"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

