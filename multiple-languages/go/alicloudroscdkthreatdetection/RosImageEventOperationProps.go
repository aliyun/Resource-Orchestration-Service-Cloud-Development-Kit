package alicloudroscdkthreatdetection


// Properties for defining a `RosImageEventOperation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
type RosImageEventOperationProps struct {
	Conditions interface{} `field:"required" json:"conditions" yaml:"conditions"`
	EventType interface{} `field:"required" json:"eventType" yaml:"eventType"`
	OperationCode interface{} `field:"required" json:"operationCode" yaml:"operationCode"`
	EventKey interface{} `field:"optional" json:"eventKey" yaml:"eventKey"`
	EventName interface{} `field:"optional" json:"eventName" yaml:"eventName"`
	Note interface{} `field:"optional" json:"note" yaml:"note"`
	Scenarios interface{} `field:"optional" json:"scenarios" yaml:"scenarios"`
	Source interface{} `field:"optional" json:"source" yaml:"source"`
}

