package alicloudroscdkslb


// Properties for defining a `AccessLogsAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesslogsaddition
type AccessLogsAdditionProps struct {
	// Property loadBalancerId: The load balancer id.Only SLB Layer 7 load balancing (HTTP\/HTTPS listening) supports the access log function.Prerequisites1. A SLB instance has been created. For details, see Creating and Managing CLB Instances.2. A virtual server group has been created. Backend servers have been added to the server group.3. HTTP or HTTPS listening has been configured for CLB. 4. You have enabled the log service. For details, see Activating the Log Service.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property logProject: The log project name.
	LogProject interface{} `field:"required" json:"logProject" yaml:"logProject"`
	// Property logStore: The log store name.
	LogStore interface{} `field:"required" json:"logStore" yaml:"logStore"`
}

