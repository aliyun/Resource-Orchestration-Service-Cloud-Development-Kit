package alicloudroscdkapigateway


// Properties for defining a `TrafficControl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrol
type TrafficControlProps struct {
	// Property apiDefault: Default API traffic value.
	ApiDefault interface{} `field:"required" json:"apiDefault" yaml:"apiDefault"`
	// Property trafficControlName: The name of the throttling policy.
	//
	// The name must be 4 to 50 characters in length
	// and can contain letters, digits, and underscores (_). It cannot start with an
	// underscore.
	TrafficControlName interface{} `field:"required" json:"trafficControlName" yaml:"trafficControlName"`
	// Property trafficControlUnit: The unit to be used in the throttling policy.
	//
	// Valid values:
	// - SECOND
	// - MINUTE
	// - HOUR
	// - DAY.
	TrafficControlUnit interface{} `field:"required" json:"trafficControlUnit" yaml:"trafficControlUnit"`
	// Property appDefault: Default APP traffic value.
	AppDefault interface{} `field:"optional" json:"appDefault" yaml:"appDefault"`
	// Property description: Description of the traffic control, less than 180 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property special: Special traffic controls.
	Special interface{} `field:"optional" json:"special" yaml:"special"`
	// Property userDefault: Default user traffic value.
	UserDefault interface{} `field:"optional" json:"userDefault" yaml:"userDefault"`
}

