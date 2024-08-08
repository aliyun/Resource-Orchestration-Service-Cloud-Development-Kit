package alicloudroscdkcen


// Properties for defining a `RosCenVbrHealthCheck`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenvbrhealthcheck
type RosCenVbrHealthCheckProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	HealthCheckTargetIp interface{} `field:"required" json:"healthCheckTargetIp" yaml:"healthCheckTargetIp"`
	VbrInstanceId interface{} `field:"required" json:"vbrInstanceId" yaml:"vbrInstanceId"`
	VbrInstanceRegionId interface{} `field:"required" json:"vbrInstanceRegionId" yaml:"vbrInstanceRegionId"`
	HealthCheckInterval interface{} `field:"optional" json:"healthCheckInterval" yaml:"healthCheckInterval"`
	HealthCheckSourceIp interface{} `field:"optional" json:"healthCheckSourceIp" yaml:"healthCheckSourceIp"`
	HealthyThreshold interface{} `field:"optional" json:"healthyThreshold" yaml:"healthyThreshold"`
	VbrInstanceOwnerId interface{} `field:"optional" json:"vbrInstanceOwnerId" yaml:"vbrInstanceOwnerId"`
}

