package datasource


// Properties for defining a `Instances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instances
type InstancesProps struct {
	// Property instanceId: API Gateway Instance ID.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property language: Language Type.
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

