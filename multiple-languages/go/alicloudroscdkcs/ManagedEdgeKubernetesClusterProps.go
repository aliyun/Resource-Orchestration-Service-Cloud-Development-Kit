package alicloudroscdkcs


// Properties for defining a `ManagedEdgeKubernetesCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managededgekubernetescluster
type ManagedEdgeKubernetesClusterProps struct {
	// Property name: The name of the cluster.
	//
	// The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property addons: The add-ons to be installed for the cluster.
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	// Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
	CloudMonitorFlags interface{} `field:"optional" json:"cloudMonitorFlags" yaml:"cloudMonitorFlags"`
	// Property clusterSpec: The edge managed cluster spec.
	//
	// Value:
	// ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
	// ack.standard: Standard hosting cluster.
	// Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	// Property containerCidr: The container network segment cannot conflict with the VPC network segment.
	//
	// When the system is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
	ContainerCidr interface{} `field:"optional" json:"containerCidr" yaml:"containerCidr"`
	// Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
	//
	// After deletion protection is enabled, the cluster cannot be deleted
	// in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
	// false: disables deletion protection for the cluster.
	// Default value: false.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS).
	//
	// This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
	EncryptionProviderKey interface{} `field:"optional" json:"encryptionProviderKey" yaml:"encryptionProviderKey"`
	// Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
	//
	// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
	EndpointPublicAccess interface{} `field:"optional" json:"endpointPublicAccess" yaml:"endpointPublicAccess"`
	// Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
	//
	// This parameter takes effect only if security_group_id is left empty.
	// Note You must specify an advanced security group for a cluster that has Terway installed.
	// true: creates an advanced security group.
	// false: does not create an advanced security group.
	// Default value: false.
	IsEnterpriseSecurityGroup interface{} `field:"optional" json:"isEnterpriseSecurityGroup" yaml:"isEnterpriseSecurityGroup"`
	// Property keyPair: Key pair name.
	//
	// Specify one of KeyPair or LoginPassword.
	KeyPair interface{} `field:"optional" json:"keyPair" yaml:"keyPair"`
	// Property kubernetesVersion: The version of the Kubernetes cluster.
	KubernetesVersion interface{} `field:"optional" json:"kubernetesVersion" yaml:"kubernetesVersion"`
	// Property loginPassword: SSH login password.
	//
	// Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
	LoginPassword interface{} `field:"optional" json:"loginPassword" yaml:"loginPassword"`
	// Property maintenanceWindow: Cluster maintenance window.
	MaintenanceWindow interface{} `field:"optional" json:"maintenanceWindow" yaml:"maintenanceWindow"`
	// Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
	//
	// This number is determined by the specified pod CIDR block.
	// This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
	NodeCidrMask interface{} `field:"optional" json:"nodeCidrMask" yaml:"nodeCidrMask"`
	// Property nodePools: The configurations of Node pools.
	NodePools interface{} `field:"optional" json:"nodePools" yaml:"nodePools"`
	// Property profile: Edge cluster ID.
	//
	// The default value is Edge.
	Profile interface{} `field:"optional" json:"profile" yaml:"profile"`
	// Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
	//
	// The default is iptables.
	ProxyMode interface{} `field:"optional" json:"proxyMode" yaml:"proxyMode"`
	// Property resourceGroupId: The ID of resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
	//
	// When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
	ServiceCidr interface{} `field:"optional" json:"serviceCidr" yaml:"serviceCidr"`
	// Property snatEntry: Whether to configure SNAT for the network.
	//
	// When a VPC can access the public network environment, set it to false.
	// When an existing VPC cannot access the public network environment:
	// When set to True, SNAT is configured and the public network environment can be accessed at this time.
	// If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
	// Default to true.
	SnatEntry interface{} `field:"optional" json:"snatEntry" yaml:"snatEntry"`
	// Property tags: Tag the cluster.
	Tags *[]*RosManagedEdgeKubernetesCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property timeoutMins: Cluster resource stack creation timeout, in minutes.
	//
	// The default value is 60.
	TimeoutMins interface{} `field:"optional" json:"timeoutMins" yaml:"timeoutMins"`
	// Property vpcId: VPC ID.
	//
	// If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0\/16.
	// VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchIds: The virtual switch ID of the worker node.
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
	// Property zoneIds: Zone ids of worker node virtual switches belongs to.
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

