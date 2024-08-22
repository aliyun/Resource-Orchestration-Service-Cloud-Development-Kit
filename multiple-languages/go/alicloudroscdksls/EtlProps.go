package alicloudroscdksls


// Properties for defining a `Etl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
type EtlProps struct {
	// Property configuration: The configuration of ETL task.
	Configuration interface{} `field:"required" json:"configuration" yaml:"configuration"`
	// Property displayName: ETL display name.
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property name: ETL name.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property projectName: Project name.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property schedule: Task scheduling strategy.
	Schedule interface{} `field:"required" json:"schedule" yaml:"schedule"`
	// Property description: ETL description message.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

