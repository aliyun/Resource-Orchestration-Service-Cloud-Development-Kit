package alicloudroscdknas


// Properties for defining a `AccessGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
type AccessGroupProps struct {
	// Property accessGroupName: The name of the permission group.
	//
	// Limits:
	// *   The name must be 3 to 64 characters in length.
	// *   The name must start with a letter and can contain letters, digits,
	// underscores (_), and hyphens (-).
	// *   The name must be different from the name of the default permission group.
	// The default permission group for virtual private clouds (VPCs) is named
	// DEFAULT_VPC_GROUP_NAME.
	AccessGroupName interface{} `field:"required" json:"accessGroupName" yaml:"accessGroupName"`
	// Property accessGroupType: Permission group type, including the Vpc and Classic types.
	AccessGroupType interface{} `field:"required" json:"accessGroupType" yaml:"accessGroupType"`
	// Property description: The description of the permission group.
	//
	// Limits:
	// *   By default, the description of a permission group is the same as the name of
	// the permission group. The description must be 2 to 128 characters in length.
	// *   The name must start with a letter and cannot start with `http:\/\/` or
	// `https:\/\/`.
	// *   The description can contain digits, colons (:), underscores (_), and hyphens
	// (-).
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property fileSystemType: File system type.
	//
	// Values: standard (default), extreme.
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
}

