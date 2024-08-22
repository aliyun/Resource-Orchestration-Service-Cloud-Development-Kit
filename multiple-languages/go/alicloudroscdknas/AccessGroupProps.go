package alicloudroscdknas


// Properties for defining a `AccessGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
type AccessGroupProps struct {
	// Property accessGroupName: Permission group name.
	AccessGroupName interface{} `field:"required" json:"accessGroupName" yaml:"accessGroupName"`
	// Property accessGroupType: Permission group type, including the Vpc and Classic types.
	AccessGroupType interface{} `field:"required" json:"accessGroupType" yaml:"accessGroupType"`
	// Property description: Permission group description.
	//
	// It is the same as the permission group name by default.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property fileSystemType: File system type.
	//
	// Values: standard (default), extreme.
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
}

