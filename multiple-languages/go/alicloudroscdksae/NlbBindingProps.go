package alicloudroscdksae


// Properties for defining a `NlbBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-nlbbinding
type NlbBindingProps struct {
	// Property appId: The ID of the SAE application.
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	// Property listeners: The listeners of the NLB.
	Listeners interface{} `field:"required" json:"listeners" yaml:"listeners"`
	// Property nlbId: The ID of the Network Load Balancer (NLB).
	NlbId interface{} `field:"required" json:"nlbId" yaml:"nlbId"`
}

