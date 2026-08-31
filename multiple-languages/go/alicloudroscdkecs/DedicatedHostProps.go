package alicloudroscdkecs


// Properties for defining a `DedicatedHost`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhost
type DedicatedHostProps struct {
	// Property dedicatedHostType: The dedicated host type.
	//
	// You can call the [DescribeDedicatedHostTypes]()
	// operation to query the most recent list of dedicated host types.
	DedicatedHostType interface{} `field:"required" json:"dedicatedHostType" yaml:"dedicatedHostType"`
	// Property actionOnMaintenance: The policy for migrating the instances deployed on the dedicated host when the dedicated host fails or needs to be repaired online.
	//
	// Valid values:
	// - Migrate: The instances are migrated to another physical machine and then
	// restarted.
	// If cloud disks are attached to the dedicated host, the default value is Migrate.
	// - Stop: The instances are stopped. If the dedicated host cannot be repaired, the
	// instances are migrated to another physical machine and then restarted.
	// If local disks are attached to the dedicated host, the default value is Stop.
	ActionOnMaintenance interface{} `field:"optional" json:"actionOnMaintenance" yaml:"actionOnMaintenance"`
	// Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment.
	//
	// If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
	AutoPlacement interface{} `field:"optional" json:"autoPlacement" yaml:"autoPlacement"`
	// Property autoReleaseTime: The time when to automatically release the dedicated host.
	//
	// Specify the time in
	// the `ISO 8601` standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in
	// UTC.
	// >
	// - It must be at least half an hour later than the current time.
	// - It must be at most three years later than the current time.
	// - If the value of seconds (ss) is not 00, it is automatically set to 00.
	AutoReleaseTime interface{} `field:"optional" json:"autoReleaseTime" yaml:"autoReleaseTime"`
	// Property autoRenew: Whether renew the fee automatically?
	//
	// When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: The time period of auto renew.
	//
	// When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
	//
	// If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property cpuOverCommitRatio: The CPU overcommit ratio.
	//
	// You can configure CPU overcommit ratios only for the
	// following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.
	// The CPU overcommit ratio affects the number of available vCPUs on a dedicated
	// host. You can use the following formula to calculate the number of available
	// vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU
	// cores * 2 * CPU overcommit ratio. For example, the number of physical CPU cores
	// on each g6s dedicated host is 52. If you set the CPU overcommit ratio of a g6s
	// dedicated host to 4, the number of available vCPUs on the dedicated host is 416.
	// For scenarios that have minimal requirements on CPU stability or where CPU load
	// is not heavy, such as development and test environments, you can increase the
	// number of available vCPUs on a dedicated host by increasing the CPU overcommit
	// ratio. This way, you can deploy more ECS instances of the same specifications on
	// the dedicated host and reduce the unit deployment cost.
	CpuOverCommitRatio interface{} `field:"optional" json:"cpuOverCommitRatio" yaml:"cpuOverCommitRatio"`
	// Property dedicatedHostClusterId: The ID of the dedicated host cluster.
	DedicatedHostClusterId interface{} `field:"optional" json:"dedicatedHostClusterId" yaml:"dedicatedHostClusterId"`
	// Property dedicatedHostName: The name of the dedicated host.
	//
	// The name must be 2 to 128 characters in length
	// and can contain letters and digits. The name can contain colons (:), underscores
	// (_), periods (.), and hyphens (-).
	DedicatedHostName interface{} `field:"optional" json:"dedicatedHostName" yaml:"dedicatedHostName"`
	// Property description: The description of the dedicated host.
	//
	// The description must be 2 to 256
	// characters in length and cannot start with `http:\/\/` or `https:\/\/`.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property minQuantity: The minimum number of dedicated hosts to create.
	//
	// Valid values: 1 to 100.
	// > If the number of available dedicated hosts is less than the minimum number of
	// dedicated hosts to create, the dedicated hosts fail to be created.
	MinQuantity interface{} `field:"optional" json:"minQuantity" yaml:"minQuantity"`
	// Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host.
	//
	// Unit: seconds. Valid values: 15 to 310.
	NetworkAttributesSlbUdpTimeout interface{} `field:"optional" json:"networkAttributesSlbUdpTimeout" yaml:"networkAttributesSlbUdpTimeout"`
	// Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host.
	//
	// Unit: seconds. Valid values: 15 to 310.
	NetworkAttributesUdpTimeout interface{} `field:"optional" json:"networkAttributesUdpTimeout" yaml:"networkAttributesUdpTimeout"`
	// Property period: Prepaid time period.
	//
	// Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year.
	//
	// Default value is Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property quantity: The number of dedicated hosts that you want to create.
	//
	// Valid values: 1 to 100.Default value: 1.
	Quantity interface{} `field:"optional" json:"quantity" yaml:"quantity"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to DedicatedHost.
	//
	// Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosDedicatedHost_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zoneId: The ID of the zone in which to create the dedicated host.
	//
	// This parameter is empty by default. If you do not specify a zone, the system
	// selects a zone.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

