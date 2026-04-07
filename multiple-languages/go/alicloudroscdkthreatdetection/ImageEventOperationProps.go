package alicloudroscdkthreatdetection


// Properties for defining a `ImageEventOperation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
type ImageEventOperationProps struct {
	// Property conditions: The rule conditions.
	//
	// Specify a value in the JSON format. You can specify the following keys:
	// *   **condition**: the matching condition.
	// *   **type**: the matching type.
	// *   **value**: the matching value.
	Conditions interface{} `field:"required" json:"conditions" yaml:"conditions"`
	// Property eventType: Image Event Type.
	EventType interface{} `field:"required" json:"eventType" yaml:"eventType"`
	// Property operationCode: Event Operation Code.
	OperationCode interface{} `field:"required" json:"operationCode" yaml:"operationCode"`
	// Property eventKey: The keyword of the alert item.
	EventKey interface{} `field:"optional" json:"eventKey" yaml:"eventKey"`
	// Property eventName: The name of the alert item.
	EventName interface{} `field:"optional" json:"eventName" yaml:"eventName"`
	// Property note: The remarks that you want to add.
	Note interface{} `field:"optional" json:"note" yaml:"note"`
	// Property scenarios: The application scope of the rule.
	//
	// The value is in the JSON format. Valid values of keys:
	// type
	// value
	// Example: {"type": "repo", "value": "test-aaa\/shenzhen-repo-01"}.
	Scenarios interface{} `field:"optional" json:"scenarios" yaml:"scenarios"`
	// Property source: The source of the whitelist.
	//
	// Valid values:
	// *   **default**: image.
	// *   **agentless**: agentless detection.
	Source interface{} `field:"optional" json:"source" yaml:"source"`
}

