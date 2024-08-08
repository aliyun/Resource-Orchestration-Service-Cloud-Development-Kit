package datasource


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-account
type AccountProps struct {
	// Property drdsAccountName: The name of the account.
	DrdsAccountName interface{} `field:"required" json:"drdsAccountName" yaml:"drdsAccountName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

