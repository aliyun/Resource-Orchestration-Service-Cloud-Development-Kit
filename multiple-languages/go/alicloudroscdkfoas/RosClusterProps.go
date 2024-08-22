package alicloudroscdkfoas


// Properties for defining a `RosCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-cluster
type RosClusterProps struct {
	ClusterName interface{} `field:"required" json:"clusterName" yaml:"clusterName"`
	Description interface{} `field:"required" json:"description" yaml:"description"`
	OssBucket interface{} `field:"required" json:"ossBucket" yaml:"ossBucket"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	Order interface{} `field:"optional" json:"order" yaml:"order"`
	OrderId interface{} `field:"optional" json:"orderId" yaml:"orderId"`
}

