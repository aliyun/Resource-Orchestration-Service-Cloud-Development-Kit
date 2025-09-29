package alicloudroscdkcs


// Properties for defining a `RosManagedKubernetesCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managedkubernetescluster
type RosManagedKubernetesClusterProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	CloudMonitorFlags interface{} `field:"optional" json:"cloudMonitorFlags" yaml:"cloudMonitorFlags"`
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	ContainerCidr interface{} `field:"optional" json:"containerCidr" yaml:"containerCidr"`
	ControlPlaneLogComponents interface{} `field:"optional" json:"controlPlaneLogComponents" yaml:"controlPlaneLogComponents"`
	ControlPlaneLogProject interface{} `field:"optional" json:"controlPlaneLogProject" yaml:"controlPlaneLogProject"`
	ControlPlaneLogTtl interface{} `field:"optional" json:"controlPlaneLogTtl" yaml:"controlPlaneLogTtl"`
	DeleteOptions interface{} `field:"optional" json:"deleteOptions" yaml:"deleteOptions"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	EncryptionProviderKey interface{} `field:"optional" json:"encryptionProviderKey" yaml:"encryptionProviderKey"`
	EndpointPublicAccess interface{} `field:"optional" json:"endpointPublicAccess" yaml:"endpointPublicAccess"`
	FormatDisk interface{} `field:"optional" json:"formatDisk" yaml:"formatDisk"`
	IsEnterpriseSecurityGroup interface{} `field:"optional" json:"isEnterpriseSecurityGroup" yaml:"isEnterpriseSecurityGroup"`
	KeepInstanceName interface{} `field:"optional" json:"keepInstanceName" yaml:"keepInstanceName"`
	KeyPair interface{} `field:"optional" json:"keyPair" yaml:"keyPair"`
	KubernetesVersion interface{} `field:"optional" json:"kubernetesVersion" yaml:"kubernetesVersion"`
	LoadBalancerSpec interface{} `field:"optional" json:"loadBalancerSpec" yaml:"loadBalancerSpec"`
	LoginPassword interface{} `field:"optional" json:"loginPassword" yaml:"loginPassword"`
	MaintenanceWindow interface{} `field:"optional" json:"maintenanceWindow" yaml:"maintenanceWindow"`
	NodeCidrMask interface{} `field:"optional" json:"nodeCidrMask" yaml:"nodeCidrMask"`
	NodeNameMode interface{} `field:"optional" json:"nodeNameMode" yaml:"nodeNameMode"`
	NodePools interface{} `field:"optional" json:"nodePools" yaml:"nodePools"`
	OsType interface{} `field:"optional" json:"osType" yaml:"osType"`
	Platform interface{} `field:"optional" json:"platform" yaml:"platform"`
	PodVswitchIds interface{} `field:"optional" json:"podVswitchIds" yaml:"podVswitchIds"`
	ProxyMode interface{} `field:"optional" json:"proxyMode" yaml:"proxyMode"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Runtime interface{} `field:"optional" json:"runtime" yaml:"runtime"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SecurityHardeningOs interface{} `field:"optional" json:"securityHardeningOs" yaml:"securityHardeningOs"`
	ServiceCidr interface{} `field:"optional" json:"serviceCidr" yaml:"serviceCidr"`
	SnatEntry interface{} `field:"optional" json:"snatEntry" yaml:"snatEntry"`
	SocEnabled interface{} `field:"optional" json:"socEnabled" yaml:"socEnabled"`
	Tags *[]*RosManagedKubernetesCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Taint interface{} `field:"optional" json:"taint" yaml:"taint"`
	TimeoutMins interface{} `field:"optional" json:"timeoutMins" yaml:"timeoutMins"`
	TimeZone interface{} `field:"optional" json:"timeZone" yaml:"timeZone"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

