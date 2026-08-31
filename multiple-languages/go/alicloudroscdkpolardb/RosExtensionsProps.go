package alicloudroscdkpolardb


// Properties for defining a `RosExtensions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-extensions
type RosExtensionsProps struct {
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	DbNames interface{} `field:"required" json:"dbNames" yaml:"dbNames"`
	Extensions interface{} `field:"optional" json:"extensions" yaml:"extensions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SourceDbName interface{} `field:"optional" json:"sourceDbName" yaml:"sourceDbName"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

