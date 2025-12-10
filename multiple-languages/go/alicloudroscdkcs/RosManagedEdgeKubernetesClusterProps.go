package alicloudroscdkcs


// Properties for defining a `RosManagedEdgeKubernetesCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managededgekubernetescluster
type RosManagedEdgeKubernetesClusterProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	CloudMonitorFlags interface{} `field:"optional" json:"cloudMonitorFlags" yaml:"cloudMonitorFlags"`
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	ContainerCidr interface{} `field:"optional" json:"containerCidr" yaml:"containerCidr"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	EncryptionProviderKey interface{} `field:"optional" json:"encryptionProviderKey" yaml:"encryptionProviderKey"`
	EndpointPublicAccess interface{} `field:"optional" json:"endpointPublicAccess" yaml:"endpointPublicAccess"`
	IpStack interface{} `field:"optional" json:"ipStack" yaml:"ipStack"`
	IsEnterpriseSecurityGroup interface{} `field:"optional" json:"isEnterpriseSecurityGroup" yaml:"isEnterpriseSecurityGroup"`
	KeyPair interface{} `field:"optional" json:"keyPair" yaml:"keyPair"`
	KubernetesVersion interface{} `field:"optional" json:"kubernetesVersion" yaml:"kubernetesVersion"`
	LoginPassword interface{} `field:"optional" json:"loginPassword" yaml:"loginPassword"`
	MaintenanceWindow interface{} `field:"optional" json:"maintenanceWindow" yaml:"maintenanceWindow"`
	NodeCidrMask interface{} `field:"optional" json:"nodeCidrMask" yaml:"nodeCidrMask"`
	NodePools interface{} `field:"optional" json:"nodePools" yaml:"nodePools"`
	Profile interface{} `field:"optional" json:"profile" yaml:"profile"`
	ProxyMode interface{} `field:"optional" json:"proxyMode" yaml:"proxyMode"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RrsaConfig interface{} `field:"optional" json:"rrsaConfig" yaml:"rrsaConfig"`
	ServiceCidr interface{} `field:"optional" json:"serviceCidr" yaml:"serviceCidr"`
	SnatEntry interface{} `field:"optional" json:"snatEntry" yaml:"snatEntry"`
	Tags *[]*RosManagedEdgeKubernetesCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TimeoutMins interface{} `field:"optional" json:"timeoutMins" yaml:"timeoutMins"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

