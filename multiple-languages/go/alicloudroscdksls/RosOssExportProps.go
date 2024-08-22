package alicloudroscdksls


// Properties for defining a `RosOssExport`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
type RosOssExportProps struct {
	Configuration interface{} `field:"required" json:"configuration" yaml:"configuration"`
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	ExportName interface{} `field:"required" json:"exportName" yaml:"exportName"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

