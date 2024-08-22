package alicloudroscdknas


// Properties for defining a `RosProtocolMountTarget`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
type RosProtocolMountTargetProps struct {
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	ProtocolServiceId interface{} `field:"required" json:"protocolServiceId" yaml:"protocolServiceId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	AccessGroupName interface{} `field:"optional" json:"accessGroupName" yaml:"accessGroupName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	FsetId interface{} `field:"optional" json:"fsetId" yaml:"fsetId"`
	Path interface{} `field:"optional" json:"path" yaml:"path"`
}

