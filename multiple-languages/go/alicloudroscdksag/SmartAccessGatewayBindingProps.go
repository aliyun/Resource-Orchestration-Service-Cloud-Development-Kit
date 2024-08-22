package alicloudroscdksag


// Properties for defining a `SmartAccessGatewayBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
type SmartAccessGatewayBindingProps struct {
	// Property ccnId: The ID of the CCN instance to bind.
	CcnId interface{} `field:"required" json:"ccnId" yaml:"ccnId"`
	// Property smartAgId: The ID of the Smart Access Gateway instance.
	SmartAgId interface{} `field:"required" json:"smartAgId" yaml:"smartAgId"`
}

