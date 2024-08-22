package datasource


// Properties for defining a `RosAccounts`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
type RosAccountsProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	AccountName interface{} `field:"optional" json:"accountName" yaml:"accountName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

