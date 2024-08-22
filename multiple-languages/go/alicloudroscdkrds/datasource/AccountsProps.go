package datasource


// Properties for defining a `Accounts`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
type AccountsProps struct {
	// Property dbInstanceId: The ID of the RDS instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property accountName: The name of the RDS account.
	AccountName interface{} `field:"optional" json:"accountName" yaml:"accountName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

