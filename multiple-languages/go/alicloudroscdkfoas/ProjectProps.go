package alicloudroscdkfoas


// Properties for defining a `Project`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-project
type ProjectProps struct {
	// Property deployType: Cluster type: Exclusive cluster: cell Shared cluster: public.
	DeployType interface{} `field:"required" json:"deployType" yaml:"deployType"`
	// Property managerIds: Comma delimited account Id list of managers.
	ManagerIds interface{} `field:"required" json:"managerIds" yaml:"managerIds"`
	// Property name: Project name.
	//
	// It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property clusterId: Cluster ID.
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	// Property description: Project description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property orderId: Order Id of Shared cluster.
	OrderId interface{} `field:"optional" json:"orderId" yaml:"orderId"`
}

