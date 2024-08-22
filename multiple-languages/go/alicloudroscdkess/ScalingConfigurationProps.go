package alicloudroscdkess


// Properties for defining a `ScalingConfiguration`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingconfiguration
type ScalingConfigurationProps struct {
	// Property scalingGroupId: Scaling group id to create the scaling configuration.
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host.
	//
	// Valid values:
	// - **default**: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.
	// - **host**: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
	// Default value: **default**.
	Affinity interface{} `field:"optional" json:"affinity" yaml:"affinity"`
	// Property cpu: The number of vCPUs.
	//
	// You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
	// **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	// Property creditSpecification: The performance mode of the burstable instance.
	//
	// Valid values:
	// Standard: the standard mode.
	// Unlimited: the unlimited mode.
	CreditSpecification interface{} `field:"optional" json:"creditSpecification" yaml:"creditSpecification"`
	// Property dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance.
	//
	// You cannot create preemptible instances on dedicated hosts. If you specify **DedicatedHostId**, **SpotStrategy** and **SpotPriceLimit** are ignored.
	// You can call the **DescribeDedicatedHosts** operation to query dedicated host IDs.
	DedicatedHostId interface{} `field:"optional" json:"dedicatedHostId" yaml:"dedicatedHostId"`
	// Property deploymentSetId: Deployment set ID.
	DeploymentSetId interface{} `field:"optional" json:"deploymentSetId" yaml:"deploymentSetId"`
	// Property diskMappings: Disk mappings to attach to instance.
	DiskMappings interface{} `field:"optional" json:"diskMappings" yaml:"diskMappings"`
	// Property hostName: The hostname of the ECS instance.
	//
	// The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
	// Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
	// Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	// Property hpcClusterId: The HPC cluster ID to which the instance belongs.
	HpcClusterId interface{} `field:"optional" json:"hpcClusterId" yaml:"hpcClusterId"`
	// Property imageFamily: The name of the image family.
	//
	// You can configure this parameter to obtain the latest available images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
	ImageFamily interface{} `field:"optional" json:"imageFamily" yaml:"imageFamily"`
	// Property imageId: Image ID to create ecs instance .
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property imageName: The name of the image.
	//
	// Each image name must be unique in a region. If you specify **ImageId**, **ImageName** is ignored.
	// You cannot use **ImageName** to specify images that are purchased from Alibaba Cloud Marketplace.
	ImageName interface{} `field:"optional" json:"imageName" yaml:"imageName"`
	// Property imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values: - **true** - **false** Default value: **false**.
	ImageOptionsLoginAsNonRoot interface{} `field:"optional" json:"imageOptionsLoginAsNonRoot" yaml:"imageOptionsLoginAsNonRoot"`
	// Property instanceDescription: The description of the ECS instance.
	//
	// The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
	InstanceDescription interface{} `field:"optional" json:"instanceDescription" yaml:"instanceDescription"`
	// Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property instanceName: The name of the instance launched from the current scaling configuration.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria.
	InstancePatternInfos interface{} `field:"optional" json:"instancePatternInfos" yaml:"instancePatternInfos"`
	// Property instanceType: ecs supported instance type.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property instanceTypeOverrides: The instance types.
	InstanceTypeOverrides interface{} `field:"optional" json:"instanceTypeOverrides" yaml:"instanceTypeOverrides"`
	// Property instanceTypes: ecs supported instance types.
	//
	// Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
	InstanceTypes interface{} `field:"optional" json:"instanceTypes" yaml:"instanceTypes"`
	// Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second).
	//
	// The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
	InternetMaxBandwidthIn interface{} `field:"optional" json:"internetMaxBandwidthIn" yaml:"internetMaxBandwidthIn"`
	// Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
	//
	// The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
	// The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	// Property ioOptimized: The 'optimized' instance can provide better IO performance.
	//
	// Support 'none' and 'optimized' only, default is 'none'.
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	// Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	// Property keyPairName: SSH key pair name.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property loadBalancerWeight: The weight of the ECS instance as a backend server.
	//
	// Valid values: 1 to 100.
	// Default value: 50.
	LoadBalancerWeight interface{} `field:"optional" json:"loadBalancerWeight" yaml:"loadBalancerWeight"`
	// Property memory: The memory size.
	//
	// Unit: GiB.
	// You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
	// **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	// Property password: Password of created ecs instance.
	//
	// Must contain at least 3 types of special character, lower character, upper character, number.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property passwordInherit: Whether to use the password pre-configured in the image you select or not.
	//
	// When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
	PasswordInherit interface{} `field:"optional" json:"passwordInherit" yaml:"passwordInherit"`
	// Property privatePoolOptions: Option settings for private pools.
	PrivatePoolOptions interface{} `field:"optional" json:"privatePoolOptions" yaml:"privatePoolOptions"`
	// Property ramRoleName: Instance RAM role name.
	//
	// The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
	RamRoleName interface{} `field:"optional" json:"ramRoleName" yaml:"ramRoleName"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property scalingConfigurationName: Name of created scaling configuration.
	ScalingConfigurationName interface{} `field:"optional" json:"scalingConfigurationName" yaml:"scalingConfigurationName"`
	// Property securityEnhancementStrategy: Specifies whether to enable security hardening.
	//
	// Valid values:
	// - **Active**: enables security hardening. This value is applicable only to public images.
	// - **Deactive**: disables security hardening. This value is applicable to all image types.
	SecurityEnhancementStrategy interface{} `field:"optional" json:"securityEnhancementStrategy" yaml:"securityEnhancementStrategy"`
	// Property securityGroupId: Security Group to create ecs instance.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration.
	//
	// **Note**: If you specify **SecurityGroupId**, you cannot specify **SecurityGroupIds**.
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	// Property spotDuration: The retention period of the preemptible instance.
	//
	// Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
	// The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
	// If you set this parameter to 0, no protection period is specified for the preemptible instance.
	// Default value: 1.
	SpotDuration interface{} `field:"optional" json:"spotDuration" yaml:"spotDuration"`
	// Property spotInterruptionBehavior: The interruption mode of the preemptible instance.
	//
	// Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
	SpotInterruptionBehavior interface{} `field:"optional" json:"spotInterruptionBehavior" yaml:"spotInterruptionBehavior"`
	// Property spotPriceLimit: Set the hourly maximum price for the instance.
	//
	// Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	// Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
	//
	// The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
	// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
	// At most 50 items can be specified.
	// Key
	//  	ecs instance type
	// Value
	//  	Supports a maximum of 3 decimal places.
	SpotPriceLimitForInstanceType interface{} `field:"optional" json:"spotPriceLimitForInstanceType" yaml:"spotPriceLimitForInstanceType"`
	// Property spotStrategy: Preemption strategy for post-paid instances.
	//
	// It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
	// NoSpot: Normal pay-per-use instance
	// SpotWithPriceLimit: Set a preemptive instance of the cap price
	// SpotAsPriceGo: System automatic bidding, following the current market actual price
	// Default: NoSpot.
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	// Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
	SystemDiskAutoSnapshotPolicyId interface{} `field:"optional" json:"systemDiskAutoSnapshotPolicyId" yaml:"systemDiskAutoSnapshotPolicyId"`
	// Property systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk.
	//
	// Valid values:
	// - **true**
	// - **false**
	// **Note**: This parameter is available only if you set **SystemDiskCategory** to **cloud_auto**.
	SystemDiskBurstingEnabled interface{} `field:"optional" json:"systemDiskBurstingEnabled" yaml:"systemDiskBurstingEnabled"`
	// Property systemDiskCategories: The categories of the system disks.
	//
	// If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
	// - **cloud**: basic disk
	// - **cloud_efficiency**: ultra disk
	// - **cloud_ssd**: standard SSD
	// - **cloud_essd**: ESSD
	// **Note**: If you specify **SystemDiskCategories**, you cannot specify **SystemDiskCategory**.
	SystemDiskCategories interface{} `field:"optional" json:"systemDiskCategories" yaml:"systemDiskCategories"`
	// Property systemDiskCategory: Category of system disk.
	//
	// Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	// Property systemDiskDescription: The description of the system disk.
	//
	// The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
	SystemDiskDescription interface{} `field:"optional" json:"systemDiskDescription" yaml:"systemDiskDescription"`
	// Property systemDiskDiskName: The name of the system disk.
	//
	// The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
	SystemDiskDiskName interface{} `field:"optional" json:"systemDiskDiskName" yaml:"systemDiskDiskName"`
	// Property systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk.
	//
	// Valid values:
	// - **AES-256**
	// - **SM4-128**
	// Default value: **AES-256**.
	SystemDiskEncryptAlgorithm interface{} `field:"optional" json:"systemDiskEncryptAlgorithm" yaml:"systemDiskEncryptAlgorithm"`
	// Property systemDiskEncrypted: Specifies whether to encrypt the system disk.
	//
	// Valid values:
	// - **true**
	// - **false**
	// Default value: **false**.
	SystemDiskEncrypted interface{} `field:"optional" json:"systemDiskEncrypted" yaml:"systemDiskEncrypted"`
	// Property systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk.
	SystemDiskKmsKeyId interface{} `field:"optional" json:"systemDiskKmsKeyId" yaml:"systemDiskKmsKeyId"`
	// Property systemDiskPerformanceLevel: The performance level of an ESSD.
	SystemDiskPerformanceLevel interface{} `field:"optional" json:"systemDiskPerformanceLevel" yaml:"systemDiskPerformanceLevel"`
	// Property systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk.
	//
	// **Note**: IOPS measures the number of read and write operations that an EBS device can process per second.
	SystemDiskProvisionedIops interface{} `field:"optional" json:"systemDiskProvisionedIops" yaml:"systemDiskProvisionedIops"`
	// Property systemDiskSize: Size of system disk.
	//
	// Unit is GB.
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
	// Property tagList: The tags of an instance in list format.
	//
	// Do not use with Tags at the same time.
	// You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
	// At most 20 tags can be specified.
	// Key
	// It can be up to 64 characters in length.
	// Cannot begin with aliyun.
	// Cannot begin with http:\/\/ or https:\/\/.
	// Cannot be a null string.
	// Value
	// It can be up to 128 characters in length.
	// Cannot begin with aliyun.
	// Cannot begin with http:\/\/ or https:\/\/.
	// Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
	TagList interface{} `field:"optional" json:"tagList" yaml:"tagList"`
	// Property tenancy: Specifies whether to create an ECS instance on a dedicated host.
	//
	// Valid values:
	// - **default**: does not create an ECS instance on a dedicated host.
	// - **host**: creates an ECS instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the ECS instance.
	// Default value: **default**.
	Tenancy interface{} `field:"optional" json:"tenancy" yaml:"tenancy"`
	// Property userData: User data to pass to instance.
	//
	// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
	// Property zoneId: The zone ID of the ECS instance.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

