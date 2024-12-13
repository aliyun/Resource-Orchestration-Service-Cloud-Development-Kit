package datasource


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-account
type AccountProps struct {
	// Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property polarDbxAccountName: The username of the account that you want to query.
	//
	// If you want to query information about a specific account, you must specify this parameter.
	PolarDbxAccountName interface{} `field:"required" json:"polarDbxAccountName" yaml:"polarDbxAccountName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

