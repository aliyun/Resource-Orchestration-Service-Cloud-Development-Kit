package datasource


// Properties for defining a `RosAccounts`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts
type RosAccountsProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	AccountName interface{} `field:"optional" json:"accountName" yaml:"accountName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

