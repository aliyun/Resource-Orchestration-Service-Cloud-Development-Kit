package alicloudroscdksls


// Properties for defining a `RosEtlV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etlv2
type RosEtlV2Props struct {
	Configuration interface{} `field:"required" json:"configuration" yaml:"configuration"`
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Project interface{} `field:"required" json:"project" yaml:"project"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

