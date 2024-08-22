package alicloudroscdkdfs


// Properties for defining a `RosMountPoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-mountpoint
type RosMountPointProps struct {
	AccessGroupId interface{} `field:"required" json:"accessGroupId" yaml:"accessGroupId"`
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	NetworkType interface{} `field:"required" json:"networkType" yaml:"networkType"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

