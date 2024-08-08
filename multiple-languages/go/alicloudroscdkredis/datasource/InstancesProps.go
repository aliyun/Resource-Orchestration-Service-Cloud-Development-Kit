package datasource


// Properties for defining a `Instances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instances
type InstancesProps struct {
	// Property architectureType: The architecture of the instance.
	//
	// Valid values:
	// cluster: The instance is a cluster instance.
	// standard: The instance is a standard instance.
	// rwsplit: The instance is a read\/write splitting instance.
	ArchitectureType interface{} `field:"optional" json:"architectureType" yaml:"architectureType"`
	// Property chargeType: The billing method of the instance.
	//
	// Valid values:
	// PrePaid: subscription
	// PostPaid: pay-as-you-go.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property editionType: The edition of the instance.
	//
	// Valid values:
	// Community: Community Edition
	// Enterprise: Enhance Edition (Tair).
	EditionType interface{} `field:"optional" json:"editionType" yaml:"editionType"`
	// Property engineVersion: The database engine version of the instance.
	//
	// Valid values: 2.8, 4.0, and 5.0.
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	// Property expired: Specifies whether the instance has expired.
	//
	// Valid values:
	// true: The instance has expired.
	// false: The instance has not expired.
	Expired interface{} `field:"optional" json:"expired" yaml:"expired"`
	// Property globalInstance: Specifies whether to return the child instances of distributed instances.
	//
	// Valid values:
	// true: Only child instances are returned.
	// false: Child instances are not returned.
	GlobalInstance interface{} `field:"optional" json:"globalInstance" yaml:"globalInstance"`
	// Property instanceClass: The instance type.
	InstanceClass interface{} `field:"optional" json:"instanceClass" yaml:"instanceClass"`
	// Property instanceIds: The IDs of instances.
	//
	// If you specify multiple instance IDs, separate the instance IDs with commas (,).
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	// Property instanceStatus: The state of the instance.
	//
	// Valid values:
	// Normal: The instance is normal.
	// Creating: The instance is being created.
	// Changing: The configurations of the instance are being changed.
	// Inactive: The instance is disabled.
	// Flushing: The instance is being released.
	// Released: The instance is released.
	// Transforming: The instance is being transformed.
	// Unavailable: The instance is suspended.
	// Error: The instance cannot be created.
	// Migrating: The instance is being migrated.
	// BackupRecovering: The instance is being restored from a backup.
	// MinorVersionUpgrading: The minor version of the instance is being updated.
	// NetworkModifying: The network type of the instance is being changed.
	// SSLModifying: The SSL certificate of the instance is being changed.
	// MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
	InstanceStatus interface{} `field:"optional" json:"instanceStatus" yaml:"instanceStatus"`
	// Property instanceType: The category of the instance.
	//
	// Valid values:
	// Tair
	// Redis
	// Memcache.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property networkType: The network type of the instance.
	//
	// Valid values:
	// CLASSIC: classic network
	// VPC: Virtual Private Cloud (VPC).
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property privateIp: The private IP address of the instance.
	PrivateIp interface{} `field:"optional" json:"privateIp" yaml:"privateIp"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the instance belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property searchKey: The keyword used for fuzzy search.
	//
	// The keyword can be based on an instance name or an instance ID.
	SearchKey interface{} `field:"optional" json:"searchKey" yaml:"searchKey"`
	// Property vpcId: The ID of the VPC.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the VSwitch.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone ID of the instance.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

