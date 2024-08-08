package alicloudroscdksls


// Properties for defining a `RosServiceLog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
type RosServiceLogProps struct {
	LogStorageLocation interface{} `field:"required" json:"logStorageLocation" yaml:"logStorageLocation"`
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	ServiceLogTypes interface{} `field:"required" json:"serviceLogTypes" yaml:"serviceLogTypes"`
}

