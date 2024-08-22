package alicloudroscdkfnf


// Properties for defining a `Flow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-flow
type FlowProps struct {
	// Property definition: The definition of the created flow following the FDL syntax standard.
	Definition interface{} `field:"required" json:"definition" yaml:"definition"`
	// Property name: The name of the flow created.
	//
	// This name is unique under the account.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property description: Create a description of the flow.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property requestId: The specified Request ID for this request.
	//
	// If not specified, our system will help you generate a random one.
	RequestId interface{} `field:"optional" json:"requestId" yaml:"requestId"`
	// Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
	RoleArn interface{} `field:"optional" json:"roleArn" yaml:"roleArn"`
}

