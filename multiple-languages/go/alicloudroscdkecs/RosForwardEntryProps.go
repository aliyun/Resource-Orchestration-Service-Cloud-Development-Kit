package alicloudroscdkecs


// Properties for defining a `RosForwardEntry`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-forwardentry
type RosForwardEntryProps struct {
	ExternalIp interface{} `field:"required" json:"externalIp" yaml:"externalIp"`
	ExternalPort interface{} `field:"required" json:"externalPort" yaml:"externalPort"`
	ForwardTableId interface{} `field:"required" json:"forwardTableId" yaml:"forwardTableId"`
	InternalIp interface{} `field:"required" json:"internalIp" yaml:"internalIp"`
	InternalPort interface{} `field:"required" json:"internalPort" yaml:"internalPort"`
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	ForwardEntryName interface{} `field:"optional" json:"forwardEntryName" yaml:"forwardEntryName"`
	PortBreak interface{} `field:"optional" json:"portBreak" yaml:"portBreak"`
}

