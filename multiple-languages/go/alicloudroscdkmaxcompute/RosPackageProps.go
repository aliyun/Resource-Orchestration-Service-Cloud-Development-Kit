package alicloudroscdkmaxcompute


// Properties for defining a `RosPackage`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
type RosPackageProps struct {
	PackageName interface{} `field:"required" json:"packageName" yaml:"packageName"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	Acl interface{} `field:"optional" json:"acl" yaml:"acl"`
}

