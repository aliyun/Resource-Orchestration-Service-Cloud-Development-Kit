package alicloudroscdkfc3


// Properties for defining a `RosAsyncInvokeConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig
type RosAsyncInvokeConfigProps struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	AsyncTask interface{} `field:"optional" json:"asyncTask" yaml:"asyncTask"`
	DestinationConfig interface{} `field:"optional" json:"destinationConfig" yaml:"destinationConfig"`
	MaxAsyncEventAgeInSeconds interface{} `field:"optional" json:"maxAsyncEventAgeInSeconds" yaml:"maxAsyncEventAgeInSeconds"`
	MaxAsyncRetryAttempts interface{} `field:"optional" json:"maxAsyncRetryAttempts" yaml:"maxAsyncRetryAttempts"`
}

