package datasource


// Properties for defining a `RosAccounts`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-accounts
type RosAccountsProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	AccountType interface{} `field:"optional" json:"accountType" yaml:"accountType"`
	PolarDbxAccountName interface{} `field:"optional" json:"polarDbxAccountName" yaml:"polarDbxAccountName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

