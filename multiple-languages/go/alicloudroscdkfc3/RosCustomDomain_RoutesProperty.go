package alicloudroscdkfc3


type RosCustomDomain_RoutesProperty struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	Path interface{} `field:"required" json:"path" yaml:"path"`
	Qualifier interface{} `field:"required" json:"qualifier" yaml:"qualifier"`
	Methods interface{} `field:"optional" json:"methods" yaml:"methods"`
	RewriteConfig interface{} `field:"optional" json:"rewriteConfig" yaml:"rewriteConfig"`
}

