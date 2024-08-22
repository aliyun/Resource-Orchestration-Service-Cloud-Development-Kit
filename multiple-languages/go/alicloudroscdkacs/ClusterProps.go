package alicloudroscdkacs


// Properties for defining a `Cluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-cluster
type ClusterProps struct {
	// Property name: The name of the cluster.
	//
	// The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property addons: The add-ons to be installed for the cluster.
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	// Property clusterSpec: The managed cluster spec.
	//
	// Value:
	// ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
	// ack.standard: Standard hosting cluster.
	// Default value: ack.pro.small.
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	// Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
	//
	// After deletion protection is enabled, the cluster cannot be deleted
	// in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
	// false: disables deletion protection for the cluster.
	// Default value: false.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
	//
	// false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
	EndpointPublicAccess interface{} `field:"optional" json:"endpointPublicAccess" yaml:"endpointPublicAccess"`
	// Property ipStack: The IP stack of the cluster.
	IpStack interface{} `field:"optional" json:"ipStack" yaml:"ipStack"`
	// Property kubernetesVersion: The version of the Kubernetes cluster.
	KubernetesVersion interface{} `field:"optional" json:"kubernetesVersion" yaml:"kubernetesVersion"`
	// Property loadBalancerSpec: The specification of the Server Load Balancer instance.
	//
	// Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
	LoadBalancerSpec interface{} `field:"optional" json:"loadBalancerSpec" yaml:"loadBalancerSpec"`
	// Property loggingType: The logging type of the cluster.
	//
	// By default, no logging service is used.
	LoggingType interface{} `field:"optional" json:"loggingType" yaml:"loggingType"`
	// Property maintenanceWindow: The maintenance window of the cluster.
	MaintenanceWindow interface{} `field:"optional" json:"maintenanceWindow" yaml:"maintenanceWindow"`
	// Property podVSwitchIds: The list of pod vSwitches.
	//
	// For each vSwitch that is allocated to nodes,
	//   you must specify at least one pod vSwitch in the same zone.
	//   The pod vSwitches cannot be the same as the node vSwitches.
	//   We recommend that you set the mask length of the CIDR block to a value no
	// greater than 19 for the pod vSwitches.
	// The pod_vswitch_ids parameter is required when the Terway network
	// plug-in is selected for the cluster.
	PodVSwitchIds interface{} `field:"optional" json:"podVSwitchIds" yaml:"podVSwitchIds"`
	// Property resourceGroupId: The ID of resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
	//
	// When the system is selected to automatically create a VPC, the network segment 172.19.0.0\/20 is used by default.
	ServiceCidr interface{} `field:"optional" json:"serviceCidr" yaml:"serviceCidr"`
	// Property serviceDiscoveryTypes: Intra-cluster service discovery type, used to specify the service discovery method in the ASK cluster.
	//
	// CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
	// a set of containers needs to be deployed in the cluster for DNS resolution.
	// By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
	// PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
	// the PrivateZone service needs to be enabled.
	// Default value: off.
	ServiceDiscoveryTypes interface{} `field:"optional" json:"serviceDiscoveryTypes" yaml:"serviceDiscoveryTypes"`
	// Property slsProjectName: The SLS project name of the cluster.
	//
	// If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
	SlsProjectName interface{} `field:"optional" json:"slsProjectName" yaml:"slsProjectName"`
	// Property snatEntry: Whether to configure SNAT for the network.
	//
	// When a VPC can access the public network environment, set it to false.
	// When an existing VPC cannot access the public network environment:
	// When set to True, SNAT is configured and the public network environment can be accessed at this time.
	// If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
	// Default to true.
	SnatEntry interface{} `field:"optional" json:"snatEntry" yaml:"snatEntry"`
	// Property tags: Tag the cluster.
	Tags *[]*RosCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property timeZone: The time zone of the cluster.
	TimeZone interface{} `field:"optional" json:"timeZone" yaml:"timeZone"`
	// Property vpcId: VPC ID.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchIds: The IDs of VSwitches.
	//
	// If you leave this property empty, the system automatically creates a VSwitch.
	// Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
	// Property zoneId: The zone ID.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

