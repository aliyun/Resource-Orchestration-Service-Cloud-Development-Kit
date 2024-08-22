package alicloudroscdknas


// Properties for defining a `RosAccessRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessrule
type RosAccessRuleProps struct {
	AccessGroupName interface{} `field:"required" json:"accessGroupName" yaml:"accessGroupName"`
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
	Ipv6SourceCidrIp interface{} `field:"optional" json:"ipv6SourceCidrIp" yaml:"ipv6SourceCidrIp"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	RwAccessType interface{} `field:"optional" json:"rwAccessType" yaml:"rwAccessType"`
	SourceCidrIp interface{} `field:"optional" json:"sourceCidrIp" yaml:"sourceCidrIp"`
	UserAccessType interface{} `field:"optional" json:"userAccessType" yaml:"userAccessType"`
}

