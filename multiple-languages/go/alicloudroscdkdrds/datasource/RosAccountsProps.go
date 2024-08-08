package datasource


// Properties for defining a `RosAccounts`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
type RosAccountsProps struct {
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

