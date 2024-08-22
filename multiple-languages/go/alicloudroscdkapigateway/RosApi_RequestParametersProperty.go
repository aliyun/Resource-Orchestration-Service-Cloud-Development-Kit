package alicloudroscdkapigateway


type RosApi_RequestParametersProperty struct {
	ApiParameterName interface{} `field:"required" json:"apiParameterName" yaml:"apiParameterName"`
	Location interface{} `field:"required" json:"location" yaml:"location"`
	ParameterType interface{} `field:"required" json:"parameterType" yaml:"parameterType"`
	Required interface{} `field:"required" json:"required" yaml:"required"`
	DefaultValue interface{} `field:"optional" json:"defaultValue" yaml:"defaultValue"`
	DemoValue interface{} `field:"optional" json:"demoValue" yaml:"demoValue"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DocOrder interface{} `field:"optional" json:"docOrder" yaml:"docOrder"`
	DocShow interface{} `field:"optional" json:"docShow" yaml:"docShow"`
	EnumValue interface{} `field:"optional" json:"enumValue" yaml:"enumValue"`
	JsonScheme interface{} `field:"optional" json:"jsonScheme" yaml:"jsonScheme"`
	MaxLength interface{} `field:"optional" json:"maxLength" yaml:"maxLength"`
	MaxValue interface{} `field:"optional" json:"maxValue" yaml:"maxValue"`
	MinLength interface{} `field:"optional" json:"minLength" yaml:"minLength"`
	MinValue interface{} `field:"optional" json:"minValue" yaml:"minValue"`
	RegularExpression interface{} `field:"optional" json:"regularExpression" yaml:"regularExpression"`
}

