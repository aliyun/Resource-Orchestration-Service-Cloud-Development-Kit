package datasource


// Properties for defining a `RosCluster2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-cluster2
type RosCluster2Props struct {
	ClusterIds interface{} `field:"optional" json:"clusterIds" yaml:"clusterIds"`
	ClusterName interface{} `field:"optional" json:"clusterName" yaml:"clusterName"`
	ClusterStates interface{} `field:"optional" json:"clusterStates" yaml:"clusterStates"`
	ClusterType interface{} `field:"optional" json:"clusterType" yaml:"clusterType"`
	PaymentTypes interface{} `field:"optional" json:"paymentTypes" yaml:"paymentTypes"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosCluster2_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

