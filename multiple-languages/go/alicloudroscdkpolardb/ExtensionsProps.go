package alicloudroscdkpolardb


// Properties for defining a `Extensions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-extensions
type ExtensionsProps struct {
	// Property accountName: The account name associated with the database.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property dbClusterId: The cluster ID.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property dbNames: The database name.
	DbNames interface{} `field:"required" json:"dbNames" yaml:"dbNames"`
	// Property extensions: The extensions to install.
	Extensions interface{} `field:"optional" json:"extensions" yaml:"extensions"`
	// Property resourceGroupId: The resource group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property sourceDbName: The source database name.
	SourceDbName interface{} `field:"optional" json:"sourceDbName" yaml:"sourceDbName"`
	// Property vpcId: The VPC ID of the access endpoint.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

