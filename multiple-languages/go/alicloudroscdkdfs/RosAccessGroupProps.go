package alicloudroscdkdfs


// Properties for defining a `RosAccessGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessgroup
type RosAccessGroupProps struct {
	AccessGroupName interface{} `field:"optional" json:"accessGroupName" yaml:"accessGroupName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
}

