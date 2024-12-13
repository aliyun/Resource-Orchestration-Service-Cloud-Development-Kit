package alicloudroscdkapig


// Properties for defining a `Operation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-operation
type OperationProps struct {
	// Property httpApiId: The HTTP API ID to which the interface belongs.
	HttpApiId interface{} `field:"required" json:"httpApiId" yaml:"httpApiId"`
	// Property method: The method of http protocol.
	Method interface{} `field:"required" json:"method" yaml:"method"`
	// Property operationName: The name of the operation.
	OperationName interface{} `field:"required" json:"operationName" yaml:"operationName"`
	// Property path: The interface path of the operation.
	Path interface{} `field:"required" json:"path" yaml:"path"`
	// Property description: The description of the operation.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property mock: Mock configuration.
	Mock interface{} `field:"optional" json:"mock" yaml:"mock"`
}

