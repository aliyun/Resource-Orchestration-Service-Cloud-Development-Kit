package alicloudroscdkcs


// Properties for defining a `RosManagedEdgeKubernetesCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managededgekubernetescluster
type RosManagedEdgeKubernetesClusterProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	NumOfNodes interface{} `field:"required" json:"numOfNodes" yaml:"numOfNodes"`
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	CloudMonitorFlags interface{} `field:"optional" json:"cloudMonitorFlags" yaml:"cloudMonitorFlags"`
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	ContainerCidr interface{} `field:"optional" json:"containerCidr" yaml:"containerCidr"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	DisableRollback interface{} `field:"optional" json:"disableRollback" yaml:"disableRollback"`
	EndpointPublicAccess interface{} `field:"optional" json:"endpointPublicAccess" yaml:"endpointPublicAccess"`
	IsEnterpriseSecurityGroup interface{} `field:"optional" json:"isEnterpriseSecurityGroup" yaml:"isEnterpriseSecurityGroup"`
	KeyPair interface{} `field:"optional" json:"keyPair" yaml:"keyPair"`
	LoginPassword interface{} `field:"optional" json:"loginPassword" yaml:"loginPassword"`
	NodeCidrMask interface{} `field:"optional" json:"nodeCidrMask" yaml:"nodeCidrMask"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	Profile interface{} `field:"optional" json:"profile" yaml:"profile"`
	ProxyMode interface{} `field:"optional" json:"proxyMode" yaml:"proxyMode"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ServiceCidr interface{} `field:"optional" json:"serviceCidr" yaml:"serviceCidr"`
	SnatEntry interface{} `field:"optional" json:"snatEntry" yaml:"snatEntry"`
	Tags *[]*RosManagedEdgeKubernetesCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TimeoutMins interface{} `field:"optional" json:"timeoutMins" yaml:"timeoutMins"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
	WorkerDataDisk interface{} `field:"optional" json:"workerDataDisk" yaml:"workerDataDisk"`
	WorkerDataDiskCategory interface{} `field:"optional" json:"workerDataDiskCategory" yaml:"workerDataDiskCategory"`
	WorkerDataDisks interface{} `field:"optional" json:"workerDataDisks" yaml:"workerDataDisks"`
	WorkerDataDiskSize interface{} `field:"optional" json:"workerDataDiskSize" yaml:"workerDataDiskSize"`
	WorkerInstanceTypes interface{} `field:"optional" json:"workerInstanceTypes" yaml:"workerInstanceTypes"`
	WorkerSystemDiskCategory interface{} `field:"optional" json:"workerSystemDiskCategory" yaml:"workerSystemDiskCategory"`
	WorkerSystemDiskSize interface{} `field:"optional" json:"workerSystemDiskSize" yaml:"workerSystemDiskSize"`
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

