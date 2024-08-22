package alicloudroscdknas


// Properties for defining a `RosAccessGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
type RosAccessGroupProps struct {
	AccessGroupName interface{} `field:"required" json:"accessGroupName" yaml:"accessGroupName"`
	AccessGroupType interface{} `field:"required" json:"accessGroupType" yaml:"accessGroupType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
}

