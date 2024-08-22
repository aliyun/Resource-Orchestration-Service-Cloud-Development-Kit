package alicloudroscdkhologram


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hologram-instance
type InstanceProps struct {
	// Property endpoints: List of domain names.
	Endpoints interface{} `field:"required" json:"endpoints" yaml:"endpoints"`
	// Property instanceName: The name of the resource.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property instanceType: The instance type.
	//
	// Value:
	// - Standard: Universal.
	// - Follower: Read-only slave instance.
	// - Warehouse: calculation group type.
	// - Shared: Shared.
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	// Property paymentType: The payment type of the resource.
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	// Property zoneId: The zone Id.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property autoPay: Whether to pay automatically.
	//
	// The default value is true. Value:
	// - true: automatic payment
	// - false: only generate orders, not pay
	// > The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property coldStorageSize: Instance low-frequency storage space.
	//
	// Unit: GB.
	// > Pay-As-You-Go (PostPaid) instances ignore this parameter.
	ColdStorageSize interface{} `field:"optional" json:"coldStorageSize" yaml:"coldStorageSize"`
	// Property cpu: Instance specifications.
	//
	// Value:
	// - 8 cores 32 GB (number of compute nodes: 1)
	// - 16 cores 64 GB (number of compute nodes: 1)
	// - 32 core 128 GB (number of compute nodes: 2)
	// - 64 core 256 GB (number of compute nodes: 4)
	// - 96 core 384 GB (number of computing nodes: 6)
	// - 128 core 512 GB (number of compute nodes: 8)
	// - Wait
	// >>
	// >- just fill in the audit number.
	// >- Please submit a work order application for purchasing 1024 or above specifications.
	// >- Shared instance types do not need to specify specifications.
	// > The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	// Property duration: The buying cycle.
	//
	// Buy for 2 months.
	// > If the Payment type is PostPaid, you do not need to specify it.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property gatewayCount: Number of gateway nodes.
	GatewayCount interface{} `field:"optional" json:"gatewayCount" yaml:"gatewayCount"`
	// Property initialDatabases: Initialize the database and split multiple database names ",".
	InitialDatabases interface{} `field:"optional" json:"initialDatabases" yaml:"initialDatabases"`
	// Property leaderInstanceId: The id of leader instance.
	LeaderInstanceId interface{} `field:"optional" json:"leaderInstanceId" yaml:"leaderInstanceId"`
	// Property pricingCycle: Billing cycle.
	//
	// Value:
	// - Month: monthly billing
	// - Hour: hourly billing
	// >>
	// > - PrePaid only supports Month
	// > - PostPaid only supports Hour
	// >- The Shared type is automatically set to Hour without specifying it.
	PricingCycle interface{} `field:"optional" json:"pricingCycle" yaml:"pricingCycle"`
	// Property productCode: product code.
	ProductCode interface{} `field:"optional" json:"productCode" yaml:"productCode"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property scaleType: Change matching type.
	//
	// Value:
	// - UPGRADE: UPGRADE
	// - DOWNGRADE: Downgrading
	// >>
	// >- The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.
	// >- The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.
	ScaleType interface{} `field:"optional" json:"scaleType" yaml:"scaleType"`
	// Property storageSize: The standard storage space of the instance.
	//
	// Unit: GB.
	// > Pay-As-You-Go instances (PostPaid) ignore this parameter.
	StorageSize interface{} `field:"optional" json:"storageSize" yaml:"storageSize"`
	// Property tags: Tags of instance.
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

