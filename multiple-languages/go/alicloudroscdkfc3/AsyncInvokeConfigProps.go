package alicloudroscdkfc3


// Properties for defining a `AsyncInvokeConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig
type AsyncInvokeConfigProps struct {
	// Property functionName: Function name.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property asyncTask: Whether to enable asynchronous tasks (optional).
	AsyncTask interface{} `field:"optional" json:"asyncTask" yaml:"asyncTask"`
	// Property destinationConfig: Configuration structure of asynchronous invocation target (optional).
	DestinationConfig interface{} `field:"optional" json:"destinationConfig" yaml:"destinationConfig"`
	// Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
	MaxAsyncEventAgeInSeconds interface{} `field:"optional" json:"maxAsyncEventAgeInSeconds" yaml:"maxAsyncEventAgeInSeconds"`
	// Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional.
	//
	// Value range [0,8]. When not configured, the default number of retries is 3.
	MaxAsyncRetryAttempts interface{} `field:"optional" json:"maxAsyncRetryAttempts" yaml:"maxAsyncRetryAttempts"`
}

