package datasource


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-account
type AccountProps struct {
	// Property accountName: The name of the GDB Account.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property dbInstanceId: The ID of the GDB Instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

