package alicloudroscdknas


// Properties for defining a `MountTarget`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-mounttarget
type MountTargetProps struct {
	// Property accessGroupName: Permission group name.
	//
	// Default to DEFAULT_VPC_GROUP_NAME.
	AccessGroupName interface{} `field:"required" json:"accessGroupName" yaml:"accessGroupName"`
	// Property fileSystemId: File system ID.
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	// Property networkType: Network type, including Vpc and Classic networks.
	NetworkType interface{} `field:"required" json:"networkType" yaml:"networkType"`
	// Property enableIpv6: Whether to create an IPv6 mount point.Value: true: create false (default): do not create Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
	EnableIpv6 interface{} `field:"optional" json:"enableIpv6" yaml:"enableIpv6"`
	// Property securityGroupId: Security group Id.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property status: Status, including Active and Inactive.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property vpcId: VPC network ID.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: VSwitch ID.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

