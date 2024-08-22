package alicloudroscdkapigateway


// Properties for defining a `TrafficControlBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
type TrafficControlBindingProps struct {
	// Property apiIds: APIs to bind with the traffic control.
	ApiIds interface{} `field:"required" json:"apiIds" yaml:"apiIds"`
	// Property groupId: The id of group.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property stageName: Bind traffic in this stage.
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
	// Property trafficControlId: The id of traffic control.
	TrafficControlId interface{} `field:"required" json:"trafficControlId" yaml:"trafficControlId"`
}

