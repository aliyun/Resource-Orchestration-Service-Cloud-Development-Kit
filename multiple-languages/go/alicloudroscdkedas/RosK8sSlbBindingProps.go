package alicloudroscdkedas


// Properties for defining a `RosK8sSlbBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sslbbinding
type RosK8sSlbBindingProps struct {
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	ServicePortInfos interface{} `field:"required" json:"servicePortInfos" yaml:"servicePortInfos"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	LoadBalancerId interface{} `field:"optional" json:"loadBalancerId" yaml:"loadBalancerId"`
	Scheduler interface{} `field:"optional" json:"scheduler" yaml:"scheduler"`
	Specification interface{} `field:"optional" json:"specification" yaml:"specification"`
}

