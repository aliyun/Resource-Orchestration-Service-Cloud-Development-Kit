package alicloudroscdkfc


// Properties for defining a `ProvisionConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
type ProvisionConfigProps struct {
	// Property functionName: Function name.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property qualifier: Service's alias.
	//
	// Example : "LATEST".
	Qualifier interface{} `field:"required" json:"qualifier" yaml:"qualifier"`
	// Property serviceName: Service name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property target: Number of provision.
	Target interface{} `field:"required" json:"target" yaml:"target"`
}

