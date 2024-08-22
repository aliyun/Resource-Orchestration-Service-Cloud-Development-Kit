package alicloudroscdknas


// Properties for defining a `RosMountTarget`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-mounttarget
type RosMountTargetProps struct {
	AccessGroupName interface{} `field:"required" json:"accessGroupName" yaml:"accessGroupName"`
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	NetworkType interface{} `field:"required" json:"networkType" yaml:"networkType"`
	EnableIpv6 interface{} `field:"optional" json:"enableIpv6" yaml:"enableIpv6"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

