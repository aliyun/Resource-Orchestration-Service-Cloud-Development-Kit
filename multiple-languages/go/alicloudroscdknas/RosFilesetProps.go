package alicloudroscdknas


// Properties for defining a `RosFileset`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
type RosFilesetProps struct {
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	FileSystemPath interface{} `field:"required" json:"fileSystemPath" yaml:"fileSystemPath"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

