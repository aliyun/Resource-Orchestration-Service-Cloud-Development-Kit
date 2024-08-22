package alicloudroscdkapigateway


type RosApi_RequestConfigProperty struct {
	RequestHttpMethod interface{} `field:"required" json:"requestHttpMethod" yaml:"requestHttpMethod"`
	RequestMode interface{} `field:"required" json:"requestMode" yaml:"requestMode"`
	RequestPath interface{} `field:"required" json:"requestPath" yaml:"requestPath"`
	RequestProtocol interface{} `field:"required" json:"requestProtocol" yaml:"requestProtocol"`
	BodyFormat interface{} `field:"optional" json:"bodyFormat" yaml:"bodyFormat"`
	PostBodyDescription interface{} `field:"optional" json:"postBodyDescription" yaml:"postBodyDescription"`
}

