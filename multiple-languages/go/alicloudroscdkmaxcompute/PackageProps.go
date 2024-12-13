package alicloudroscdkmaxcompute


// Properties for defining a `Package`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
type PackageProps struct {
	// Property packageName: The name of the project package.
	PackageName interface{} `field:"required" json:"packageName" yaml:"packageName"`
	// Property projectName: The name of the MaxCompute project.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property acl: The access-control list (ACL).
	Acl interface{} `field:"optional" json:"acl" yaml:"acl"`
}

