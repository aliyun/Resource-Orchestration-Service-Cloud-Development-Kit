package alicloudroscdkcs


// Properties for defining a `RosManagedKubernetesCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managedkubernetescluster
type RosManagedKubernetesClusterProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	CloudMonitorFlags interface{} `field:"optional" json:"cloudMonitorFlags" yaml:"cloudMonitorFlags"`
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	ContainerCidr interface{} `field:"optional" json:"containerCidr" yaml:"containerCidr"`
	DeleteOptions interface{} `field:"optional" json:"deleteOptions" yaml:"deleteOptions"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	DisableRollback interface{} `field:"optional" json:"disableRollback" yaml:"disableRollback"`
	EncryptionProviderKey interface{} `field:"optional" json:"encryptionProviderKey" yaml:"encryptionProviderKey"`
	EndpointPublicAccess interface{} `field:"optional" json:"endpointPublicAccess" yaml:"endpointPublicAccess"`
	FormatDisk interface{} `field:"optional" json:"formatDisk" yaml:"formatDisk"`
	IsEnterpriseSecurityGroup interface{} `field:"optional" json:"isEnterpriseSecurityGroup" yaml:"isEnterpriseSecurityGroup"`
	KeepInstanceName interface{} `field:"optional" json:"keepInstanceName" yaml:"keepInstanceName"`
	KeyPair interface{} `field:"optional" json:"keyPair" yaml:"keyPair"`
	KubernetesVersion interface{} `field:"optional" json:"kubernetesVersion" yaml:"kubernetesVersion"`
	LoadBalancerSpec interface{} `field:"optional" json:"loadBalancerSpec" yaml:"loadBalancerSpec"`
	LoginPassword interface{} `field:"optional" json:"loginPassword" yaml:"loginPassword"`
	NodeCidrMask interface{} `field:"optional" json:"nodeCidrMask" yaml:"nodeCidrMask"`
	NodeNameMode interface{} `field:"optional" json:"nodeNameMode" yaml:"nodeNameMode"`
	NodePools interface{} `field:"optional" json:"nodePools" yaml:"nodePools"`
	NumOfNodes interface{} `field:"optional" json:"numOfNodes" yaml:"numOfNodes"`
	OsType interface{} `field:"optional" json:"osType" yaml:"osType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
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
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	WorkerDataDisk interface{} `field:"optional" json:"workerDataDisk" yaml:"workerDataDisk"`
	WorkerDataDisks interface{} `field:"optional" json:"workerDataDisks" yaml:"workerDataDisks"`
	WorkerInstanceTypes interface{} `field:"optional" json:"workerInstanceTypes" yaml:"workerInstanceTypes"`
	WorkerSystemDiskCategory interface{} `field:"optional" json:"workerSystemDiskCategory" yaml:"workerSystemDiskCategory"`
	WorkerSystemDiskPerformanceLevel interface{} `field:"optional" json:"workerSystemDiskPerformanceLevel" yaml:"workerSystemDiskPerformanceLevel"`
	WorkerSystemDiskSize interface{} `field:"optional" json:"workerSystemDiskSize" yaml:"workerSystemDiskSize"`
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

