package alicloudroscdkapigateway


type RosApi_ServiceConfigProperty struct {
	ContentTypeCatagory interface{} `field:"optional" json:"contentTypeCatagory" yaml:"contentTypeCatagory"`
	ContentTypeValue interface{} `field:"optional" json:"contentTypeValue" yaml:"contentTypeValue"`
	FunctionComputeConfig interface{} `field:"optional" json:"functionComputeConfig" yaml:"functionComputeConfig"`
	Mock interface{} `field:"optional" json:"mock" yaml:"mock"`
	MockHeaders interface{} `field:"optional" json:"mockHeaders" yaml:"mockHeaders"`
	MockResult interface{} `field:"optional" json:"mockResult" yaml:"mockResult"`
	MockStatusCode interface{} `field:"optional" json:"mockStatusCode" yaml:"mockStatusCode"`
	ServiceAddress interface{} `field:"optional" json:"serviceAddress" yaml:"serviceAddress"`
	ServiceHttpMethod interface{} `field:"optional" json:"serviceHttpMethod" yaml:"serviceHttpMethod"`
	ServicePath interface{} `field:"optional" json:"servicePath" yaml:"servicePath"`
	ServiceProtocol interface{} `field:"optional" json:"serviceProtocol" yaml:"serviceProtocol"`
	ServiceTimeOut interface{} `field:"optional" json:"serviceTimeOut" yaml:"serviceTimeOut"`
	ServiceVpcEnable interface{} `field:"optional" json:"serviceVpcEnable" yaml:"serviceVpcEnable"`
	VpcConfig interface{} `field:"optional" json:"vpcConfig" yaml:"vpcConfig"`
}

