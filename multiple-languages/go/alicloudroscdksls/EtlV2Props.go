package alicloudroscdksls


// Properties for defining a `EtlV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etlv2
type EtlV2Props struct {
	// Property configuration: The configuration of the etl job.
	Configuration interface{} `field:"required" json:"configuration" yaml:"configuration"`
	// Property displayName: The display name of the etl job.
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property name: The name of the etl job.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property project: The name of the project.
	Project interface{} `field:"required" json:"project" yaml:"project"`
	// Property description: The description of the etl job.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

