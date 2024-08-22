package alicloudroscdkdfs


// Properties for defining a `MountPoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-mountpoint
type MountPointProps struct {
	// Property accessGroupId: The ID of the Access Group.
	AccessGroupId interface{} `field:"required" json:"accessGroupId" yaml:"accessGroupId"`
	// Property fileSystemId: The ID of the File System.
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	// Property networkType: The network type of the Mount Point.
	//
	// Valid values: VPC.
	NetworkType interface{} `field:"required" json:"networkType" yaml:"networkType"`
	// Property vpcId: The vpc id.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The vswitch id.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property description: The description of the Mount Point.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property status: The status of the Mount Point.
	//
	// Valid values: Active, Inactive.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

