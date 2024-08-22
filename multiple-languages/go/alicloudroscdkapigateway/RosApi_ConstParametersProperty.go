package alicloudroscdkapigateway


type RosApi_ConstParametersProperty struct {
	ConstValue interface{} `field:"required" json:"constValue" yaml:"constValue"`
	Location interface{} `field:"required" json:"location" yaml:"location"`
	ServiceParameterName interface{} `field:"required" json:"serviceParameterName" yaml:"serviceParameterName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

