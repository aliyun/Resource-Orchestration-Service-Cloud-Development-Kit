package alicloudroscdkadblake


// Properties for defining a `RosAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-account
type RosAccountProps struct {
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	AccountType interface{} `field:"required" json:"accountType" yaml:"accountType"`
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	AccountDescription interface{} `field:"optional" json:"accountDescription" yaml:"accountDescription"`
	RamUser interface{} `field:"optional" json:"ramUser" yaml:"ramUser"`
}

