package alicloudroscdkcdn


// Properties for defining a `DomainConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
type DomainConfigProps struct {
	// Property domainNames: The domain names to configure for acceleration.
	//
	// Separate multiple domain names
	// with a comma (,). Note the following limits:
	// - You can specify up to 20 domain names.
	// - The number of domain names multiplied by the number of features cannot exceed
	// 50.
	DomainNames interface{} `field:"required" json:"domainNames" yaml:"domainNames"`
	// Property functionList: Function list.
	//
	// This property is required.
	FunctionList interface{} `field:"optional" json:"functionList" yaml:"functionList"`
}

