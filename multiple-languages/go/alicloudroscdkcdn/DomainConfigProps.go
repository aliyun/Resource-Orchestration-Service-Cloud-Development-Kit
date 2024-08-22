package alicloudroscdkcdn


// Properties for defining a `DomainConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
type DomainConfigProps struct {
	// Property domainNames: Your accelerated domain name, separated by commas in English.
	DomainNames interface{} `field:"required" json:"domainNames" yaml:"domainNames"`
	// Property functionList: Function list.
	//
	// This property is required.
	FunctionList interface{} `field:"optional" json:"functionList" yaml:"functionList"`
}

