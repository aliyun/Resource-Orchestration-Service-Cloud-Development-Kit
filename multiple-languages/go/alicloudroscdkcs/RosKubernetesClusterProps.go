package alicloudroscdkcs


// Properties for defining a `RosKubernetesCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-kubernetescluster
type RosKubernetesClusterProps struct {
	MasterInstanceTypes interface{} `field:"required" json:"masterInstanceTypes" yaml:"masterInstanceTypes"`
	MasterVSwitchIds interface{} `field:"required" json:"masterVSwitchIds" yaml:"masterVSwitchIds"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	WorkerVSwitchIds interface{} `field:"required" json:"workerVSwitchIds" yaml:"workerVSwitchIds"`
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	CloudMonitorFlags interface{} `field:"optional" json:"cloudMonitorFlags" yaml:"cloudMonitorFlags"`
	ContainerCidr interface{} `field:"optional" json:"containerCidr" yaml:"containerCidr"`
	CpuPolicy interface{} `field:"optional" json:"cpuPolicy" yaml:"cpuPolicy"`
	DeleteOptions interface{} `field:"optional" json:"deleteOptions" yaml:"deleteOptions"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	DisableRollback interface{} `field:"optional" json:"disableRollback" yaml:"disableRollback"`
	EndpointPublicAccess interface{} `field:"optional" json:"endpointPublicAccess" yaml:"endpointPublicAccess"`
	FormatDisk interface{} `field:"optional" json:"formatDisk" yaml:"formatDisk"`
	IsEnterpriseSecurityGroup interface{} `field:"optional" json:"isEnterpriseSecurityGroup" yaml:"isEnterpriseSecurityGroup"`
	KeepInstanceName interface{} `field:"optional" json:"keepInstanceName" yaml:"keepInstanceName"`
	KeyPair interface{} `field:"optional" json:"keyPair" yaml:"keyPair"`
	KubernetesVersion interface{} `field:"optional" json:"kubernetesVersion" yaml:"kubernetesVersion"`
	LoadBalancerSpec interface{} `field:"optional" json:"loadBalancerSpec" yaml:"loadBalancerSpec"`
	LoginPassword interface{} `field:"optional" json:"loginPassword" yaml:"loginPassword"`
	MasterCount interface{} `field:"optional" json:"masterCount" yaml:"masterCount"`
	MasterDataDisk interface{} `field:"optional" json:"masterDataDisk" yaml:"masterDataDisk"`
	MasterDataDisks interface{} `field:"optional" json:"masterDataDisks" yaml:"masterDataDisks"`
	MasterSystemDiskCategory interface{} `field:"optional" json:"masterSystemDiskCategory" yaml:"masterSystemDiskCategory"`
	MasterSystemDiskPerformanceLevel interface{} `field:"optional" json:"masterSystemDiskPerformanceLevel" yaml:"masterSystemDiskPerformanceLevel"`
	MasterSystemDiskSize interface{} `field:"optional" json:"masterSystemDiskSize" yaml:"masterSystemDiskSize"`
	MasterSystemDiskSnapshotPolicyId interface{} `field:"optional" json:"masterSystemDiskSnapshotPolicyId" yaml:"masterSystemDiskSnapshotPolicyId"`
	MasterZoneIds interface{} `field:"optional" json:"masterZoneIds" yaml:"masterZoneIds"`
	NodeCidrMask interface{} `field:"optional" json:"nodeCidrMask" yaml:"nodeCidrMask"`
	NodeNameMode interface{} `field:"optional" json:"nodeNameMode" yaml:"nodeNameMode"`
	NodePools interface{} `field:"optional" json:"nodePools" yaml:"nodePools"`
	NodePortRange interface{} `field:"optional" json:"nodePortRange" yaml:"nodePortRange"`
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
	SshFlags interface{} `field:"optional" json:"sshFlags" yaml:"sshFlags"`
	Tags *[]*RosKubernetesCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	Taint interface{} `field:"optional" json:"taint" yaml:"taint"`
	TimeoutMins interface{} `field:"optional" json:"timeoutMins" yaml:"timeoutMins"`
	TimeZone interface{} `field:"optional" json:"timeZone" yaml:"timeZone"`
	UserCa interface{} `field:"optional" json:"userCa" yaml:"userCa"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	WorkerDataDisk interface{} `field:"optional" json:"workerDataDisk" yaml:"workerDataDisk"`
	WorkerDataDisks interface{} `field:"optional" json:"workerDataDisks" yaml:"workerDataDisks"`
	WorkerInstanceTypes interface{} `field:"optional" json:"workerInstanceTypes" yaml:"workerInstanceTypes"`
	WorkerSystemDiskCategory interface{} `field:"optional" json:"workerSystemDiskCategory" yaml:"workerSystemDiskCategory"`
	WorkerSystemDiskSize interface{} `field:"optional" json:"workerSystemDiskSize" yaml:"workerSystemDiskSize"`
	WorkerSystemDiskSnapshotPolicyId interface{} `field:"optional" json:"workerSystemDiskSnapshotPolicyId" yaml:"workerSystemDiskSnapshotPolicyId"`
	WorkerZoneIds interface{} `field:"optional" json:"workerZoneIds" yaml:"workerZoneIds"`
}

