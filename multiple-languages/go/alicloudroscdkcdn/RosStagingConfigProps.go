package alicloudroscdkcdn


// Properties for defining a `RosStagingConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-stagingconfig
type RosStagingConfigProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	Functions interface{} `field:"required" json:"functions" yaml:"functions"`
}

