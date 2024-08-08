package alicloudroscdkacs


// Properties for defining a `RosCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-cluster
type RosClusterProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	EndpointPublicAccess interface{} `field:"optional" json:"endpointPublicAccess" yaml:"endpointPublicAccess"`
	IpStack interface{} `field:"optional" json:"ipStack" yaml:"ipStack"`
	KubernetesVersion interface{} `field:"optional" json:"kubernetesVersion" yaml:"kubernetesVersion"`
	LoadBalancerSpec interface{} `field:"optional" json:"loadBalancerSpec" yaml:"loadBalancerSpec"`
	LoggingType interface{} `field:"optional" json:"loggingType" yaml:"loggingType"`
	MaintenanceWindow interface{} `field:"optional" json:"maintenanceWindow" yaml:"maintenanceWindow"`
	PodVSwitchIds interface{} `field:"optional" json:"podVSwitchIds" yaml:"podVSwitchIds"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ServiceCidr interface{} `field:"optional" json:"serviceCidr" yaml:"serviceCidr"`
	ServiceDiscoveryTypes interface{} `field:"optional" json:"serviceDiscoveryTypes" yaml:"serviceDiscoveryTypes"`
	SlsProjectName interface{} `field:"optional" json:"slsProjectName" yaml:"slsProjectName"`
	SnatEntry interface{} `field:"optional" json:"snatEntry" yaml:"snatEntry"`
	Tags *[]*RosCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TimeZone interface{} `field:"optional" json:"timeZone" yaml:"timeZone"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

