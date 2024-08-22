package alicloudroscdksls


// Properties for defining a `RosEtl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
type RosEtlProps struct {
	Configuration interface{} `field:"required" json:"configuration" yaml:"configuration"`
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	Schedule interface{} `field:"required" json:"schedule" yaml:"schedule"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

