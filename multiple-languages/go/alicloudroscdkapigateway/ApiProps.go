package alicloudroscdkapigateway


// Properties for defining a `Api`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-api
type ApiProps struct {
	// Property apiName: The name of the API.It must be 4 to 128 characters in length, and can contain letters, digits, underscores (_), dashes (-), spaces and dots (.), It must start with a letter.
	ApiName interface{} `field:"required" json:"apiName" yaml:"apiName"`
	// Property groupId: The id of the Group.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property requestConfig: The configuration of the request.
	RequestConfig interface{} `field:"required" json:"requestConfig" yaml:"requestConfig"`
	// Property resultSample: The sample of the result.
	ResultSample interface{} `field:"required" json:"resultSample" yaml:"resultSample"`
	// Property resultType: The format of service's response, "JSON", "TEXT", "BINARY", "XML", "HTML" or "PASSTHROUGH".
	//
	// Default is "JSON".
	ResultType interface{} `field:"required" json:"resultType" yaml:"resultType"`
	// Property serviceConfig: The configuration of the service.
	ServiceConfig interface{} `field:"required" json:"serviceConfig" yaml:"serviceConfig"`
	// Property visibility: Whether to make the API public.
	//
	// "PUBLIC" or "PRIVATE".
	Visibility interface{} `field:"required" json:"visibility" yaml:"visibility"`
	// Property allowSignatureMethod: If the AuthType is APP authentication, you need to pass this value to specify the signature algorithm.
	//
	// If you do not specify this parameter, the default value HmacSHA256 is used. Valid values:
	// HmacSHA256
	// HmacSHA1,HmacSHA256.
	AllowSignatureMethod interface{} `field:"optional" json:"allowSignatureMethod" yaml:"allowSignatureMethod"`
	// Property appCodeAuthType: When AuthType is APP authentication, the optional values are as follows: If not passed, the default value is DEFAULT: DEFAULT: Default (set by group).
	//
	// DISABLE: Not allowed
	// HEADER: Allow AppCode header authentication
	// HEADER_QUERY: Allow AppCode header and query authentication.
	AppCodeAuthType interface{} `field:"optional" json:"appCodeAuthType" yaml:"appCodeAuthType"`
	// Property authType: Type of authorization of the API .
	//
	// "APP","ANONYMOUS", or "APPOPENID".
	AuthType interface{} `field:"optional" json:"authType" yaml:"authType"`
	// Property constParameters: The const parameters.
	ConstParameters interface{} `field:"optional" json:"constParameters" yaml:"constParameters"`
	// Property description: Description of the API, less than 180 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property disableInternet: Set DisableInternet to true, only support intranet to call API.
	//
	// Set DisableInternet to false, then the call is not restricted.
	DisableInternet interface{} `field:"optional" json:"disableInternet" yaml:"disableInternet"`
	// Property errorCodeSamples: The Error Code samples.
	ErrorCodeSamples interface{} `field:"optional" json:"errorCodeSamples" yaml:"errorCodeSamples"`
	// Property failResultSample: The sample of the fail result.
	FailResultSample interface{} `field:"optional" json:"failResultSample" yaml:"failResultSample"`
	// Property forceNonceCheck: Set ForceNonceCheck to true, compulsorily check X-Ca-Nonce when requesting,  this is the unique identifier of the request, generally using UUID to identify.
	//
	// The API gateway will verify the validity of this parameter after receiving this parameter.
	// The same value can only be used once within 15 minutes. It can effectively prevent API replay attacks.
	// Set ForceNonceCheck to false, then no check.
	ForceNonceCheck interface{} `field:"optional" json:"forceNonceCheck" yaml:"forceNonceCheck"`
	// Property openIdConnectConfig: The configuration of the open id.
	OpenIdConnectConfig interface{} `field:"optional" json:"openIdConnectConfig" yaml:"openIdConnectConfig"`
	// Property requestParameters: The request parameters.
	RequestParameters interface{} `field:"optional" json:"requestParameters" yaml:"requestParameters"`
	// Property resultBodyModel: The return result of the API.
	ResultBodyModel interface{} `field:"optional" json:"resultBodyModel" yaml:"resultBodyModel"`
	// Property resultDescriptions: The return description of the API.
	ResultDescriptions interface{} `field:"optional" json:"resultDescriptions" yaml:"resultDescriptions"`
	// Property serviceParameters: The service parameters.
	ServiceParameters interface{} `field:"optional" json:"serviceParameters" yaml:"serviceParameters"`
	// Property serviceParametersMap: The mapping relation between (request parameters\const parameters\system parameters) and service parameters.
	ServiceParametersMap interface{} `field:"optional" json:"serviceParametersMap" yaml:"serviceParametersMap"`
	// Property systemParameters: The system parameters.
	SystemParameters interface{} `field:"optional" json:"systemParameters" yaml:"systemParameters"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosApi_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property webSocketApiType: The type of the two-way communication API.
	//
	// COMMON: common API
	// REGISTER: registered API
	// UNREGISTER: unregistered API
	// NOTIFY: downstream notification API.
	WebSocketApiType interface{} `field:"optional" json:"webSocketApiType" yaml:"webSocketApiType"`
}

