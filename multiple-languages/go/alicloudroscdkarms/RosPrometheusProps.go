package alicloudroscdkarms


// Properties for defining a `RosPrometheus`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
type RosPrometheusProps struct {
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	GrafanaInstanceId interface{} `field:"required" json:"grafanaInstanceId" yaml:"grafanaInstanceId"`
	PrometheusName interface{} `field:"required" json:"prometheusName" yaml:"prometheusName"`
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SubClustersJson interface{} `field:"optional" json:"subClustersJson" yaml:"subClustersJson"`
	Tags *[]*RosPrometheus_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

