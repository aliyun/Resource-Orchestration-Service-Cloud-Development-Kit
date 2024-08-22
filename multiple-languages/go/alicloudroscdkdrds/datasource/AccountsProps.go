package datasource


// Properties for defining a `Accounts`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
type AccountsProps struct {
	// Property instanceId: The ID of the PolarDB-X 1.0 instance.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

