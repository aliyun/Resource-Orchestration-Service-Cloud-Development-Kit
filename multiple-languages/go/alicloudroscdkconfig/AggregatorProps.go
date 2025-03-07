package alicloudroscdkconfig


// Properties for defining a `Aggregator`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
type AggregatorProps struct {
	// Property aggregatorName: The name of aggregator.
	AggregatorName interface{} `field:"required" json:"aggregatorName" yaml:"aggregatorName"`
	// Property description: The description of aggregator.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.When the AggregatorType is FOLDER, this parameter can be empty,which means that all accounts in the resource folder will be added to the global account group.
	AggregatorAccounts interface{} `field:"optional" json:"aggregatorAccounts" yaml:"aggregatorAccounts"`
	// Property aggregatorType: Account group type.
	//
	// Value:
	// RD: Global account group.
	// CUSTOM: Custom account group (default value).
	// FOLDER: Folder account group. Must set FolderId if the AggregatorType is FOLDER. Please refer to ListAccounts for accessing FolderId.
	AggregatorType interface{} `field:"optional" json:"aggregatorType" yaml:"aggregatorType"`
	// Property folderId: The folder ID.
	FolderId interface{} `field:"optional" json:"folderId" yaml:"folderId"`
}

