package alicloudroscdkfc3


// Properties for defining a `ConcurrencyConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
type ConcurrencyConfigProps struct {
	// Property functionName: Function name.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions.
	//
	// Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
	ReservedConcurrency interface{} `field:"required" json:"reservedConcurrency" yaml:"reservedConcurrency"`
}

