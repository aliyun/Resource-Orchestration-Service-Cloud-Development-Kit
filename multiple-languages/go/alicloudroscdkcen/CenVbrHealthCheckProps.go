package alicloudroscdkcen


// Properties for defining a `CenVbrHealthCheck`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenvbrhealthcheck
type CenVbrHealthCheckProps struct {
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property healthCheckTargetIp: Specifies the destination IP address of the health check.
	//
	// The destination IP address is the IP address of the client-facing interface on the VBR instance.
	HealthCheckTargetIp interface{} `field:"required" json:"healthCheckTargetIp" yaml:"healthCheckTargetIp"`
	// Property vbrInstanceId: The ID of the VBR instance.
	VbrInstanceId interface{} `field:"required" json:"vbrInstanceId" yaml:"vbrInstanceId"`
	// Property vbrInstanceRegionId: The ID of the region where the VBR instance is deployed.
	//
	// You can call the DescribeRegionsoperation to query region IDs.
	VbrInstanceRegionId interface{} `field:"required" json:"vbrInstanceRegionId" yaml:"vbrInstanceRegionId"`
	// Property healthCheckInterval: Specifies the time interval at which probe packets are sent during the health check.
	//
	// Default value: 2. Valid values: 2 to 3.  Unit: second.
	HealthCheckInterval interface{} `field:"optional" json:"healthCheckInterval" yaml:"healthCheckInterval"`
	// Property healthCheckSourceIp: You can use either of the following methods to specify the source IP address of the health check.
	//
	// Automatic IP Address: The system automatically assigns an IP address within the CIDR block 100.96.0.0\/16 (recommended).  Custom IP Address: You can specify a source IP address that is available within the CIDR block 10.0.0.0\/8, 192.168.0.0\/16, or 172.16.0.0\/12. The specified source IP address must not overlap with the IP addresses of the Alibaba Cloud-facing and client-facing interfaces on the VBR instance, or the IP addresses of the instances with which the VBR instance needs to communicate in the CEN.
	HealthCheckSourceIp interface{} `field:"optional" json:"healthCheckSourceIp" yaml:"healthCheckSourceIp"`
	// Property healthyThreshold: Specifies the number of probe packets to be sent during the health check.
	//
	// Default value: 8. Valid values: 3 to 8.  Unit: packet.
	HealthyThreshold interface{} `field:"optional" json:"healthyThreshold" yaml:"healthyThreshold"`
	// Property vbrInstanceOwnerId: The User ID (UID) of the account to which the VBR instance belongs.
	VbrInstanceOwnerId interface{} `field:"optional" json:"vbrInstanceOwnerId" yaml:"vbrInstanceOwnerId"`
}

