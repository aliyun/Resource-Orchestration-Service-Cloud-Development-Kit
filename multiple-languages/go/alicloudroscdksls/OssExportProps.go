package alicloudroscdksls


// Properties for defining a `OssExport`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
type OssExportProps struct {
	// Property configuration: The configuration of the export job.
	Configuration interface{} `field:"required" json:"configuration" yaml:"configuration"`
	// Property displayName: The display name of the export job.
	//
	// It must be 4 to 100 characters in length.
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property exportName: The name of the export job.
	//
	// This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
	ExportName interface{} `field:"required" json:"exportName" yaml:"exportName"`
	// Property projectName: The project name of SLS.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property description: The description of the export job.
	//
	// It could be 0 to 256 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

