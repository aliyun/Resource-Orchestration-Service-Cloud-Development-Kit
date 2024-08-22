package datasource


// Properties for defining a `Cluster2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-cluster2
type Cluster2Props struct {
	// Property clusterIds: The list of emr cluster id.
	ClusterIds interface{} `field:"optional" json:"clusterIds" yaml:"clusterIds"`
	// Property clusterName: The name of cluster.
	ClusterName interface{} `field:"optional" json:"clusterName" yaml:"clusterName"`
	// Property clusterStates: The list of emr cluster state.
	ClusterStates interface{} `field:"optional" json:"clusterStates" yaml:"clusterStates"`
	// Property clusterType: The list of emr cluster type.
	ClusterType interface{} `field:"optional" json:"clusterType" yaml:"clusterType"`
	// Property paymentTypes: The payment type of emr cluster.
	PaymentTypes interface{} `field:"optional" json:"paymentTypes" yaml:"paymentTypes"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The resource group id of emr cluster.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags of emr cluster.
	Tags *[]*RosCluster2_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

