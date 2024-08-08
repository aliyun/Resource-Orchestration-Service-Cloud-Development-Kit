package alicloudroscdkecs


// Properties for defining a `DedicatedHost`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhost
type DedicatedHostProps struct {
	// Property dedicatedHostType: The instance type of host.
	DedicatedHostType interface{} `field:"required" json:"dedicatedHostType" yaml:"dedicatedHostType"`
	// Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
	ActionOnMaintenance interface{} `field:"optional" json:"actionOnMaintenance" yaml:"actionOnMaintenance"`
	// Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment.
	//
	// If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
	AutoPlacement interface{} `field:"optional" json:"autoPlacement" yaml:"autoPlacement"`
	// Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time.
	//
	// format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
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
	// Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters.
	//
	// It must begin with an uppercase\/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:\/\/ or https:\/\/.
	DedicatedHostName interface{} `field:"optional" json:"dedicatedHostName" yaml:"dedicatedHostName"`
	// Property description: The description of host.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
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
	// Property zoneId: The zone to create the host.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

