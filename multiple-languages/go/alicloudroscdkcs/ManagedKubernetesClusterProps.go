package alicloudroscdkcs


// Properties for defining a `ManagedKubernetesCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-managedkubernetescluster
type ManagedKubernetesClusterProps struct {
	// Property name: The name of the cluster.
	//
	// The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property vpcId: VPC ID.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property addons: A combination of addon plugins for Kubernetes clusters.
	//
	// Network plug-in: including Flannel and Terway network plug-ins
	// Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
	// Ingress: The installation of the Ingress component is enabled by default.
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	// Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
	CloudMonitorFlags interface{} `field:"optional" json:"cloudMonitorFlags" yaml:"cloudMonitorFlags"`
	// Property clusterSpec: The managed cluster spec.
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
	// Property controlPlaneLogComponents: List of target components for which logs need to be collected.
	//
	// Supports apiserver, kcm, scheduler, ccm and controlplane-events.
	ControlPlaneLogComponents interface{} `field:"optional" json:"controlPlaneLogComponents" yaml:"controlPlaneLogComponents"`
	// Property controlPlaneLogProject: Control plane log project.
	//
	// If this field is not set, a log service project named k8s-log-{ClusterID} will be automatically created.
	ControlPlaneLogProject interface{} `field:"optional" json:"controlPlaneLogProject" yaml:"controlPlaneLogProject"`
	// Property controlPlaneLogTtl: Control plane log retention duration (unit: day).
	//
	// Default 30.
	ControlPlaneLogTtl interface{} `field:"optional" json:"controlPlaneLogTtl" yaml:"controlPlaneLogTtl"`
	// Property deleteOptions: Delete options, only work for deleting resource.
	DeleteOptions interface{} `field:"optional" json:"deleteOptions" yaml:"deleteOptions"`
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
	// Property osType: The type of operating system.
	//
	// Valid values:
	// Windows
	// Linux
	// Default value: Linux.
	OsType interface{} `field:"optional" json:"osType" yaml:"osType"`
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
	// Property tags: Tag the cluster.
	Tags *[]*RosManagedKubernetesCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property taint: It is used to mark nodes with taints.
	//
	// It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
	Taint interface{} `field:"optional" json:"taint" yaml:"taint"`
	// Property timeoutMins: Cluster resource stack creation timeout, in minutes.
	//
	// The default value is 60.
	TimeoutMins interface{} `field:"optional" json:"timeoutMins" yaml:"timeoutMins"`
	// Property userData: The user-defined data.
	//
	// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	// Property zoneIds: Zone ids of worker node virtual switches belongs to.
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

