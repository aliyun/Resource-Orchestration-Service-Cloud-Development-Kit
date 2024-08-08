package alicloudroscdkapigateway


// Properties for defining a `RosTrafficControlBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
type RosTrafficControlBindingProps struct {
	ApiIds interface{} `field:"required" json:"apiIds" yaml:"apiIds"`
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	StageName interface{} `field:"required" json:"stageName" yaml:"stageName"`
	TrafficControlId interface{} `field:"required" json:"trafficControlId" yaml:"trafficControlId"`
}

