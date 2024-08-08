package alicloudroscdkdfs


// Properties for defining a `AccessGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
type AccessGroupProps struct {
	// Property accessGroupName: The Name of Access Group.
	//
	// The naming rules are as follows:
	// The value contains 6 to 100 characters.
	// Globally unique and cannot be an empty string.
	AccessGroupName interface{} `field:"optional" json:"accessGroupName" yaml:"accessGroupName"`
	// Property description: The description of the access_group.
	//
	// The value contains 0 to 100 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property networkType: The NetworkType of Access Group.
	//
	// Valid values: VPC.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
}

