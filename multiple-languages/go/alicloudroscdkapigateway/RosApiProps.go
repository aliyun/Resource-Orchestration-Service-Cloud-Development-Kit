package alicloudroscdkapigateway


// Properties for defining a `RosApi`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-api
type RosApiProps struct {
	ApiName interface{} `field:"required" json:"apiName" yaml:"apiName"`
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	RequestConfig interface{} `field:"required" json:"requestConfig" yaml:"requestConfig"`
	ResultSample interface{} `field:"required" json:"resultSample" yaml:"resultSample"`
	ResultType interface{} `field:"required" json:"resultType" yaml:"resultType"`
	ServiceConfig interface{} `field:"required" json:"serviceConfig" yaml:"serviceConfig"`
	Visibility interface{} `field:"required" json:"visibility" yaml:"visibility"`
	AllowSignatureMethod interface{} `field:"optional" json:"allowSignatureMethod" yaml:"allowSignatureMethod"`
	AppCodeAuthType interface{} `field:"optional" json:"appCodeAuthType" yaml:"appCodeAuthType"`
	AuthType interface{} `field:"optional" json:"authType" yaml:"authType"`
	ConstParameters interface{} `field:"optional" json:"constParameters" yaml:"constParameters"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DisableInternet interface{} `field:"optional" json:"disableInternet" yaml:"disableInternet"`
	ErrorCodeSamples interface{} `field:"optional" json:"errorCodeSamples" yaml:"errorCodeSamples"`
	FailResultSample interface{} `field:"optional" json:"failResultSample" yaml:"failResultSample"`
	ForceNonceCheck interface{} `field:"optional" json:"forceNonceCheck" yaml:"forceNonceCheck"`
	OpenIdConnectConfig interface{} `field:"optional" json:"openIdConnectConfig" yaml:"openIdConnectConfig"`
	RequestParameters interface{} `field:"optional" json:"requestParameters" yaml:"requestParameters"`
	ResultBodyModel interface{} `field:"optional" json:"resultBodyModel" yaml:"resultBodyModel"`
	ResultDescriptions interface{} `field:"optional" json:"resultDescriptions" yaml:"resultDescriptions"`
	ServiceParameters interface{} `field:"optional" json:"serviceParameters" yaml:"serviceParameters"`
	ServiceParametersMap interface{} `field:"optional" json:"serviceParametersMap" yaml:"serviceParametersMap"`
	SystemParameters interface{} `field:"optional" json:"systemParameters" yaml:"systemParameters"`
	Tags *[]*RosApi_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	WebSocketApiType interface{} `field:"optional" json:"webSocketApiType" yaml:"webSocketApiType"`
}

