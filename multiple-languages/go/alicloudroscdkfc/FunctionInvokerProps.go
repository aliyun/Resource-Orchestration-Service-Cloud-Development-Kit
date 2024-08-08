package alicloudroscdkfc


// Properties for defining a `FunctionInvoker`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-functioninvoker
type FunctionInvokerProps struct {
	// Property functionName: Function name.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property serviceName: Service name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property async: Invocation type, Sync or Async.
	//
	// Defaults to Sync.
	Async interface{} `field:"optional" json:"async" yaml:"async"`
	// Property checkError: Whether check error for function invocation result.
	//
	// If set true and function invocation result has error, the resource creation will be regard as failed.
	// Default is false.
	CheckError interface{} `field:"optional" json:"checkError" yaml:"checkError"`
	// Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property.
	Event interface{} `field:"optional" json:"event" yaml:"event"`
	// Property executeVersion: If the property is not specified for creation and update, the function will not be invoked.
	//
	// The change of the property leads to the invoke of the function.
	ExecuteVersion interface{} `field:"optional" json:"executeVersion" yaml:"executeVersion"`
	// Property qualifier: service version, can be versionId or aliasName.
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
	// Property serviceRegionId: Which region service belongs to.
	ServiceRegionId interface{} `field:"optional" json:"serviceRegionId" yaml:"serviceRegionId"`
}

