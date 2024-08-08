package alicloudroscdknas


// Properties for defining a `RosProtocolService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
type RosProtocolServiceProps struct {
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	ProtocolSpec interface{} `field:"required" json:"protocolSpec" yaml:"protocolSpec"`
	ProtocolType interface{} `field:"required" json:"protocolType" yaml:"protocolType"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Throughput interface{} `field:"optional" json:"throughput" yaml:"throughput"`
}

