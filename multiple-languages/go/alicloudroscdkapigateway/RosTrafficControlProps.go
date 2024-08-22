package alicloudroscdkapigateway


// Properties for defining a `RosTrafficControl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrol
type RosTrafficControlProps struct {
	ApiDefault interface{} `field:"required" json:"apiDefault" yaml:"apiDefault"`
	TrafficControlName interface{} `field:"required" json:"trafficControlName" yaml:"trafficControlName"`
	TrafficControlUnit interface{} `field:"required" json:"trafficControlUnit" yaml:"trafficControlUnit"`
	AppDefault interface{} `field:"optional" json:"appDefault" yaml:"appDefault"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Special interface{} `field:"optional" json:"special" yaml:"special"`
	UserDefault interface{} `field:"optional" json:"userDefault" yaml:"userDefault"`
}

