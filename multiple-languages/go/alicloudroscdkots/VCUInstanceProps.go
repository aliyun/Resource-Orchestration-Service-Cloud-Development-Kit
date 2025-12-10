package alicloudroscdkots


// Properties for defining a `VCUInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vcuinstance
type VCUInstanceProps struct {
	// Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type.
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	// Property periodInMonth: Purchase duration.
	//
	// Unit: month. Value range: 1~24.
	PeriodInMonth interface{} `field:"required" json:"periodInMonth" yaml:"periodInMonth"`
	// Property vcu: Number of VCU units.
	//
	// Value range: 0~2000.
	Vcu interface{} `field:"required" json:"vcu" yaml:"vcu"`
	// Property aliasName: Instance alias name.
	AliasName interface{} `field:"optional" json:"aliasName" yaml:"aliasName"`
	// Property autoRenewPeriodInMonth: Automatic renewal cycle.
	//
	// When automatic renewal is enabled, it is required. Value range: 1~24.
	AutoRenewPeriodInMonth interface{} `field:"optional" json:"autoRenewPeriodInMonth" yaml:"autoRenewPeriodInMonth"`
	// Property enableAutoRenew: Whether to enable automatic renewal.
	EnableAutoRenew interface{} `field:"optional" json:"enableAutoRenew" yaml:"enableAutoRenew"`
	// Property enableElasticVcu: Whether to enable instance elasticity.
	//
	// If elasticity is enabled, the peak VCU usage of the instance can exceed the purchased VCU amount, but there will be additional charges.
	EnableElasticVcu interface{} `field:"optional" json:"enableElasticVcu" yaml:"enableElasticVcu"`
	// Property instanceDescription: Instance description.
	InstanceDescription interface{} `field:"optional" json:"instanceDescription" yaml:"instanceDescription"`
	// Property resourceGroupId: Resource Group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: The list of instance tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags for instance.
	Tags *[]*RosVCUInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

