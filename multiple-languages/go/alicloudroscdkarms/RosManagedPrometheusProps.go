package alicloudroscdkarms


// Properties for defining a `RosManagedPrometheus`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
type RosManagedPrometheusProps struct {
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	SecurityGroupId interface{} `field:"required" json:"securityGroupId" yaml:"securityGroupId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	ClusterName interface{} `field:"optional" json:"clusterName" yaml:"clusterName"`
	GrafanaInstanceId interface{} `field:"optional" json:"grafanaInstanceId" yaml:"grafanaInstanceId"`
}

