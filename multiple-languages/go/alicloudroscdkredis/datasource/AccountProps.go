package datasource


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-account
type AccountProps struct {
	// Property accountName: The name of the account that you want to query.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property instanceId: The ID of the Redis instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

