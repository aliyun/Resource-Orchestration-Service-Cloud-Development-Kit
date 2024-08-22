package alicloudroscdkedas


// Properties for defining a `K8sSlbBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sslbbinding
type K8sSlbBindingProps struct {
	// Property appId: The ID of the application.
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	// Property clusterId: The ID of the cluster.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property servicePortInfos: The information about the ports.
	ServicePortInfos interface{} `field:"required" json:"servicePortInfos" yaml:"servicePortInfos"`
	// Property type: The type of the SLB instance.
	//
	// Valid values: internet and intranet.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property loadBalancerId: The ID of the load balancer instance.
	//
	// If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
	LoadBalancerId interface{} `field:"optional" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property scheduler: The scheduling algorithm.
	//
	// Valid values:
	// wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
	// rr: Requests are distributed to backend servers in sequence.
	// Default value: rr.
	Scheduler interface{} `field:"optional" json:"scheduler" yaml:"scheduler"`
	// Property specification: The specification of the load balancer instance.
	Specification interface{} `field:"optional" json:"specification" yaml:"specification"`
}

