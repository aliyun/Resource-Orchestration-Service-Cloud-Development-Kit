package alicloudroscdkfoas


// Properties for defining a `Cluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-cluster
type ClusterProps struct {
	// Property clusterName: Cluster name.
	//
	// It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
	ClusterName interface{} `field:"required" json:"clusterName" yaml:"clusterName"`
	// Property description: Cluster description.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property ossBucket: Bucket name in your OSS.
	OssBucket interface{} `field:"required" json:"ossBucket" yaml:"ossBucket"`
	// Property vSwitchId: VSwitch ID.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property order: Order detail.
	//
	// Only one of property Order or OrderId can be specified.
	// Order is not suggested.
	// Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
	// The order can not be cancelled.
	Order interface{} `field:"optional" json:"order" yaml:"order"`
	// Property orderId: Order Id.
	//
	// Only one of property Order or OrderId can be specified.
	// OrderId is suggested.
	OrderId interface{} `field:"optional" json:"orderId" yaml:"orderId"`
}

