package alicloudroscdkcs


// Properties for defining a `RosASKCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-askcluster
type RosASKClusterProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	EndpointPublicAccess interface{} `field:"optional" json:"endpointPublicAccess" yaml:"endpointPublicAccess"`
	KubernetesVersion interface{} `field:"optional" json:"kubernetesVersion" yaml:"kubernetesVersion"`
	PrivateZone interface{} `field:"optional" json:"privateZone" yaml:"privateZone"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	ServiceCidr interface{} `field:"optional" json:"serviceCidr" yaml:"serviceCidr"`
	ServiceDiscoveryTypes interface{} `field:"optional" json:"serviceDiscoveryTypes" yaml:"serviceDiscoveryTypes"`
	SnatEntry interface{} `field:"optional" json:"snatEntry" yaml:"snatEntry"`
	Tags *[]*RosASKCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TimeZone interface{} `field:"optional" json:"timeZone" yaml:"timeZone"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

