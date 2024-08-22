package alicloudroscdkcs


// Properties for defining a `KubernetesCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-kubernetescluster
type KubernetesClusterProps struct {
	// Property masterInstanceTypes: Master node ECS specification type code.
	//
	// For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
	// List size must be 3, Instance Type can be repeated.
	MasterInstanceTypes interface{} `field:"required" json:"masterInstanceTypes" yaml:"masterInstanceTypes"`
	// Property masterVSwitchIds: Master node switch ID.
	//
	// To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
	MasterVSwitchIds interface{} `field:"required" json:"masterVSwitchIds" yaml:"masterVSwitchIds"`
	// Property name: The name of the cluster.
	//
	// The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property vpcId: VPC ID.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property workerVSwitchIds: The virtual switch ID of the worker node.
	WorkerVSwitchIds interface{} `field:"required" json:"workerVSwitchIds" yaml:"workerVSwitchIds"`
	// Property addons: A combination of addon plugins for Kubernetes clusters.
	//
	// Network plug-in: including Flannel and Terway network plug-ins
	// Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
	// Ingress: The installation of the Ingress component is enabled by default.
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	// Property autoRenew: Whether the cluster automatically renews.
	//
	// It takes effect when the value of ChargeType is PrePaid. The optional values are:
	// true: automatic renewal
	// false: do not renew automatically
	// Default to true.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property chargeType: cluster payment type.
	//
	// The optional values are:
	// PrePaid: prepaid
	// PostPaid: Pay as you go
	// Default to PostPaid.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
	CloudMonitorFlags interface{} `field:"optional" json:"cloudMonitorFlags" yaml:"cloudMonitorFlags"`
	// Property containerCidr: The container network segment cannot conflict with the VPC network segment.
	//
	// When the sytem is selected to automatically create a VPC, the network segment 172.16.0.0\/16 is used by default.
	ContainerCidr interface{} `field:"optional" json:"containerCidr" yaml:"containerCidr"`
	// Property cpuPolicy: CPU policy.
	//
	// The cluster version is 1.12.6 and above supports both static and none strategies.
	CpuPolicy interface{} `field:"optional" json:"cpuPolicy" yaml:"cpuPolicy"`
	// Property deleteOptions: Delete options, only work for deleting resource.
	DeleteOptions interface{} `field:"optional" json:"deleteOptions" yaml:"deleteOptions"`
	// Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
	//
	// After deletion protection is enabled, the cluster cannot be deleted
	// in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
	// false: disables deletion protection for the cluster.
	// Default value: false.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.
	//
	// If rollback fails, resources produced during the creation process will be released. False is not recommended.
	DisableRollback interface{} `field:"optional" json:"disableRollback" yaml:"disableRollback"`
	// Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
	//
	// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
	EndpointPublicAccess interface{} `field:"optional" json:"endpointPublicAccess" yaml:"endpointPublicAccess"`
	// Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.
	//
	// Valid values:
	// true: stores the data of containers and images on a data disk.
	// The original data on the disk will be overwritten.
	// Back up data before you mount the disk.
	// false: does not store the data of containers and images on a data disk.
	// Default value: false.
	// How to mount a data disk:
	// If the ECS instances have data disks mounted and the file system of the last
	// data disk is not initialized, the system automatically formats the data disk to ext4.
	// Then, the system mounts the data disk to \/var\/lib\/docker and \/var\/lib\/kubelet.
	// The system does not create or mount a new data disk if no data disk has been
	// mounted to the ECS instances.
	FormatDisk interface{} `field:"optional" json:"formatDisk" yaml:"formatDisk"`
	// Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
	//
	// This parameter takes effect only if security_group_id is left empty.
	// Note You must specify an advanced security group for a cluster that has Terway installed.
	// true: creates an advanced security group.
	// false: does not create an advanced security group.
	// Default value: false.
	IsEnterpriseSecurityGroup interface{} `field:"optional" json:"isEnterpriseSecurityGroup" yaml:"isEnterpriseSecurityGroup"`
	// Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
	//
	// true: retains the names.
	// false: does not retain the names. The new names are assigned by the system.
	// Default value: true.
	KeepInstanceName interface{} `field:"optional" json:"keepInstanceName" yaml:"keepInstanceName"`
	// Property keyPair: Key pair name.
	//
	// Specify one of KeyPair or LoginPassword.
	KeyPair interface{} `field:"optional" json:"keyPair" yaml:"keyPair"`
	// Property kubernetesVersion: The version of the Kubernetes cluster.
	KubernetesVersion interface{} `field:"optional" json:"kubernetesVersion" yaml:"kubernetesVersion"`
	// Property loadBalancerSpec: The specification of the Server Load Balancer instance.
	//
	// Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
	LoadBalancerSpec interface{} `field:"optional" json:"loadBalancerSpec" yaml:"loadBalancerSpec"`
	// Property loginPassword: SSH login password.
	//
	// Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
	LoginPassword interface{} `field:"optional" json:"loginPassword" yaml:"loginPassword"`
	// Property masterCount: Number of master instances.
	//
	// The value can be 3 or 5. The default value is 3.
	MasterCount interface{} `field:"optional" json:"masterCount" yaml:"masterCount"`
	// Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.
	MasterDataDisk interface{} `field:"optional" json:"masterDataDisk" yaml:"masterDataDisk"`
	// Property masterDataDisks: Master data disk type, size and other configuration combinations.
	//
	// This parameter is valid only when the master node data disk is mounted.
	MasterDataDisks interface{} `field:"optional" json:"masterDataDisks" yaml:"masterDataDisks"`
	// Property masterSystemDiskCategory: Master disk system disk type.
	//
	// The value includes:
	// cloud_efficiency: efficient cloud disk
	// cloud_ssd: SSD cloud disk
	// cloud_essd: ESSD cloud diskDefault to cloud_ssd.
	MasterSystemDiskCategory interface{} `field:"optional" json:"masterSystemDiskCategory" yaml:"masterSystemDiskCategory"`
	// Property masterSystemDiskPerformanceLevel: The performance level of the enhanced SSD used as the Master node.
	//
	// Valid values: PL0|PL1|PL2|PL3.
	MasterSystemDiskPerformanceLevel interface{} `field:"optional" json:"masterSystemDiskPerformanceLevel" yaml:"masterSystemDiskPerformanceLevel"`
	// Property masterSystemDiskSize: Master disk system disk size in GiB.
	//
	// Default to 120.
	MasterSystemDiskSize interface{} `field:"optional" json:"masterSystemDiskSize" yaml:"masterSystemDiskSize"`
	// Property masterSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the master node.
	MasterSystemDiskSnapshotPolicyId interface{} `field:"optional" json:"masterSystemDiskSnapshotPolicyId" yaml:"masterSystemDiskSnapshotPolicyId"`
	// Property masterZoneIds: Zone ids of master node virtual switches belongs to.
	MasterZoneIds interface{} `field:"optional" json:"masterZoneIds" yaml:"masterZoneIds"`
	// Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
	//
	// This number is determined by the specified pod CIDR block.
	// This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
	NodeCidrMask interface{} `field:"optional" json:"nodeCidrMask" yaml:"nodeCidrMask"`
	// Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix.
	//
	// The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
	// - The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.
	// - The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.
	NodeNameMode interface{} `field:"optional" json:"nodeNameMode" yaml:"nodeNameMode"`
	// Property nodePools: The configurations of Node pools.
	NodePools interface{} `field:"optional" json:"nodePools" yaml:"nodePools"`
	// Property nodePortRange: Node service port.
	//
	// The value range is [30000, 65535].
	// Default to 30000-65535.
	NodePortRange interface{} `field:"optional" json:"nodePortRange" yaml:"nodePortRange"`
	// Property numOfNodes: Number of worker nodes.
	//
	// The range is [0,300].
	// Default to 3.
	NumOfNodes interface{} `field:"optional" json:"numOfNodes" yaml:"numOfNodes"`
	// Property osType: The type of operating system.
	//
	// Valid values:
	// Windows
	// Linux
	// Default value: Linux.
	OsType interface{} `field:"optional" json:"osType" yaml:"osType"`
	// Property period: The duration of the annual subscription and monthly subscription.
	//
	// It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
	// When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
	// When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
	// When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
	// Default to 1.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: When you specify PrePaid, you need to specify the period.
	//
	// The options are:
	// Week: Time is measured in weeks
	// Month: time in months
	// Year: time in years
	// Default to Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property platform: The release version of the operating system.
	//
	// Valid values:
	// CentOS
	// AliyunLinux
	// QbootAliyunLinux
	// Qboot
	// Windows
	// WindowsCore
	// Default value: CentOS.
	Platform interface{} `field:"optional" json:"platform" yaml:"platform"`
	// Property podVswitchIds: The list of pod vSwitches.
	//
	// For each vSwitch that is allocated to nodes,
	//   you must specify at least one pod vSwitch in the same zone.
	//   The pod vSwitches cannot be the same as the node vSwitches.
	//   We recommend that you set the mask length of the CIDR block to a value no
	// greater than 19 for the pod vSwitches.
	// The pod_vswitch_ids parameter is required when the Terway network
	// plug-in is selected for the cluster.
	PodVswitchIds interface{} `field:"optional" json:"podVswitchIds" yaml:"podVswitchIds"`
	// Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
	//
	// The default is iptables.
	ProxyMode interface{} `field:"optional" json:"proxyMode" yaml:"proxyMode"`
	// Property resourceGroupId: The ID of resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property runtime: The container runtime of the cluster.
	//
	// The default runtime is Docker.
	Runtime interface{} `field:"optional" json:"runtime" yaml:"runtime"`
	// Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityHardeningOs: Alibaba Cloud OS security hardening.
	//
	// Value:
	// true: enables security hardening OS.
	// false: disables security hardening OS.
	// Default value: false.
	SecurityHardeningOs interface{} `field:"optional" json:"securityHardeningOs" yaml:"securityHardeningOs"`
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
	// Property socEnabled: Valid values: true: enables reinforcement based on classified protection.
	//
	// false: disables reinforcement based on classified protection.
	// Default value: false.
	SocEnabled interface{} `field:"optional" json:"socEnabled" yaml:"socEnabled"`
	// Property sshFlags: Whether to enable public network SSH login: true: open false: not open.
	SshFlags interface{} `field:"optional" json:"sshFlags" yaml:"sshFlags"`
	// Property tags: Tag the cluster.
	Tags *[]*RosKubernetesCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property taint: It is used to mark nodes with taints.
	//
	// It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
	Taint interface{} `field:"optional" json:"taint" yaml:"taint"`
	// Property timeoutMins: Cluster resource stack creation timeout, in minutes.
	//
	// The default value is 60.
	TimeoutMins interface{} `field:"optional" json:"timeoutMins" yaml:"timeoutMins"`
	// Property timeZone: The time zone of the cluster.
	TimeZone interface{} `field:"optional" json:"timeZone" yaml:"timeZone"`
	// Property userCa: The CA of cluster.
	UserCa interface{} `field:"optional" json:"userCa" yaml:"userCa"`
	// Property userData: The user-defined data.
	//
	// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	// Property workerDataDisk: Whether to mount the data disk.
	//
	// The options are as follows:
	// true: indicates that the worker node mounts data disks.
	// false: indicates that the worker node does not mount data disks.
	// Default to false.
	WorkerDataDisk interface{} `field:"optional" json:"workerDataDisk" yaml:"workerDataDisk"`
	// Property workerDataDisks: A combination of configurations such as worker data disk type and size.
	//
	// This parameter is valid only when the worker node data disk is mounted.
	WorkerDataDisks interface{} `field:"optional" json:"workerDataDisks" yaml:"workerDataDisks"`
	// Property workerInstanceTypes: Worker node ECS specification type code.
	//
	// For more details, see Instance Specification Family.
	WorkerInstanceTypes interface{} `field:"optional" json:"workerInstanceTypes" yaml:"workerInstanceTypes"`
	// Property workerSystemDiskCategory: Worker node system disk type.
	//
	// The value includes:
	// cloud_efficiency: efficient cloud disk
	// cloud_ssd: SSD cloud disk
	// Default to cloud_efficiency.
	WorkerSystemDiskCategory interface{} `field:"optional" json:"workerSystemDiskCategory" yaml:"workerSystemDiskCategory"`
	// Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
	//
	// Default to 120.
	WorkerSystemDiskSize interface{} `field:"optional" json:"workerSystemDiskSize" yaml:"workerSystemDiskSize"`
	// Property workerSystemDiskSnapshotPolicyId: The ID of the policy that is used to back up the data disk of the worker node.
	WorkerSystemDiskSnapshotPolicyId interface{} `field:"optional" json:"workerSystemDiskSnapshotPolicyId" yaml:"workerSystemDiskSnapshotPolicyId"`
	// Property workerZoneIds: Zone ids of worker node virtual switches belongs to.
	WorkerZoneIds interface{} `field:"optional" json:"workerZoneIds" yaml:"workerZoneIds"`
}

