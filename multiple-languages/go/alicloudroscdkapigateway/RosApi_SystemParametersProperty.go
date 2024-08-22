package alicloudroscdkapigateway


type RosApi_SystemParametersProperty struct {
	Location interface{} `field:"required" json:"location" yaml:"location"`
	ParameterName interface{} `field:"required" json:"parameterName" yaml:"parameterName"`
	ServiceParameterName interface{} `field:"required" json:"serviceParameterName" yaml:"serviceParameterName"`
	DemoValue interface{} `field:"optional" json:"demoValue" yaml:"demoValue"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

