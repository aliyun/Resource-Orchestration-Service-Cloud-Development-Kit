package alicloudroscdkpolardb


// Properties for defining a `DBNodes`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
type DBNodesProps struct {
	// Property amount: Number of nodes to be added to cluster.
	Amount interface{} `field:"required" json:"amount" yaml:"amount"`
	// Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property dbNodeType: Node type.
	//
	// Ranges: RO|STANDBY|DLNode.
	DbNodeType interface{} `field:"optional" json:"dbNodeType" yaml:"dbNodeType"`
	// Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
	ImciSwitch interface{} `field:"optional" json:"imciSwitch" yaml:"imciSwitch"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

