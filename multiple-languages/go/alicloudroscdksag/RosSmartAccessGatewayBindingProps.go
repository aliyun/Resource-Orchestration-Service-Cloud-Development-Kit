package alicloudroscdksag


// Properties for defining a `RosSmartAccessGatewayBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
type RosSmartAccessGatewayBindingProps struct {
	CcnId interface{} `field:"required" json:"ccnId" yaml:"ccnId"`
	SmartAgId interface{} `field:"required" json:"smartAgId" yaml:"smartAgId"`
}

