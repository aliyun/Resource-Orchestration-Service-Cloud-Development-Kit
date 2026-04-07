package alicloudroscdkcdn


// Properties for defining a `StagingConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-stagingconfig
type StagingConfigProps struct {
	// Property domainName: The domain name of the CDN.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property functions: The functions of the staging config.
	Functions interface{} `field:"required" json:"functions" yaml:"functions"`
}

