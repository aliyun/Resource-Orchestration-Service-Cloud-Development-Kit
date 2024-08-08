package alicloudroscdkcdn


// Properties for defining a `RosDomainConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
type RosDomainConfigProps struct {
	DomainNames interface{} `field:"required" json:"domainNames" yaml:"domainNames"`
	FunctionList interface{} `field:"optional" json:"functionList" yaml:"functionList"`
}

