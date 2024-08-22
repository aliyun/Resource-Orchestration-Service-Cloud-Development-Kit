package alicloudroscdkfc


type RosCustomDomain_RoutesProperty struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	Path interface{} `field:"required" json:"path" yaml:"path"`
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
}

