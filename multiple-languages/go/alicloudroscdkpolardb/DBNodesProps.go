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
	// Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.
	EndpointBindList interface{} `field:"optional" json:"endpointBindList" yaml:"endpointBindList"`
	// Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
	ImciSwitch interface{} `field:"optional" json:"imciSwitch" yaml:"imciSwitch"`
	// Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period).
	//
	// The format is YYYY-MM-DDThh:mm:ssZ (UTC).
	PlannedEndTime interface{} `field:"optional" json:"plannedEndTime" yaml:"plannedEndTime"`
	// Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period).
	//
	// The format is YYYY-MM-DDThh:mm:ssZ (UTC).
	PlannedStartTime interface{} `field:"optional" json:"plannedStartTime" yaml:"plannedStartTime"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

