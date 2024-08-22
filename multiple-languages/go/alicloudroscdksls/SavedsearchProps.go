package alicloudroscdksls


// Properties for defining a `Savedsearch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
type SavedsearchProps struct {
	// Property detail:.
	Detail interface{} `field:"required" json:"detail" yaml:"detail"`
	// Property project: Project name.
	Project interface{} `field:"required" json:"project" yaml:"project"`
}

