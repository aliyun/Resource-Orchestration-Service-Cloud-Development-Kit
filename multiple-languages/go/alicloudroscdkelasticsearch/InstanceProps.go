package alicloudroscdkelasticsearch


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearch-instance
type InstanceProps struct {
	// Property dataNode: The Elasticsearch cluster's data node setting.
	DataNode interface{} `field:"required" json:"dataNode" yaml:"dataNode"`
	// Property password: The password of the instance.
	//
	// The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&*()_+-=).
	Password interface{} `field:"required" json:"password" yaml:"password"`
	// Property version: Elasticsearch version.
	//
	// Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
	Version interface{} `field:"required" json:"version" yaml:"version"`
	// Property vSwitchId: The ID of VSwitch.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property description: The description of instance.
	//
	// It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enableKibanaPrivate: Enables or disables intranet access to Kibana.
	EnableKibanaPrivate interface{} `field:"optional" json:"enableKibanaPrivate" yaml:"enableKibanaPrivate"`
	// Property enableKibanaPublic: Enables or disables Internet access to Kibana.
	EnableKibanaPublic interface{} `field:"optional" json:"enableKibanaPublic" yaml:"enableKibanaPublic"`
	// Property enablePublic: Whether enable public access.
	//
	// If properties is true, will allocate public address.Default: false.
	EnablePublic interface{} `field:"optional" json:"enablePublic" yaml:"enablePublic"`
	// Property instanceCategory: Version Type: - x-pack: Create a commercial instance or a kernel-enhanced instance without Indexing Service and OpenStore enabled.
	//
	// - IS: Creates a kernel-enhanced instance with Indexing Service or OpenStore enabled.
	InstanceCategory interface{} `field:"optional" json:"instanceCategory" yaml:"instanceCategory"`
	// Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property kibanaNode: The dedicated kibana node setting.
	KibanaNode interface{} `field:"optional" json:"kibanaNode" yaml:"kibanaNode"`
	// Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.
	KibanaWhitelist interface{} `field:"optional" json:"kibanaWhitelist" yaml:"kibanaWhitelist"`
	// Property masterNode: The dedicated master node setting.
	//
	// If specified, dedicated master node will be created.
	MasterNode interface{} `field:"optional" json:"masterNode" yaml:"masterNode"`
	// Property period: The duration that you will buy Elasticsearch instance.
	//
	// It is valid when instance_charge_type is PrePaid. Unit is Month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Unit is Year, it could be from 1 to 3. Default value is 1.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: Unit of prepaid time period, it could be Month\/Year.
	//
	// Default value is Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property privateWhitelist: Set the instance's IP whitelist in VPC network.
	PrivateWhitelist interface{} `field:"optional" json:"privateWhitelist" yaml:"privateWhitelist"`
	// Property publicWhitelist: Set the instance's IP whitelist in Internet.
	//
	// The AllocatePublicAddress should be true.
	PublicWhitelist interface{} `field:"optional" json:"publicWhitelist" yaml:"publicWhitelist"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property ymlConfig: In the YML Configuration section of the Cluster  Configuration page of your Alibaba Cloud Elasticsearch cluster,  you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.
	YmlConfig interface{} `field:"optional" json:"ymlConfig" yaml:"ymlConfig"`
	// Property zoneCount: undefined.
	ZoneCount interface{} `field:"optional" json:"zoneCount" yaml:"zoneCount"`
	// Property zoneId: The zone id of elasticsearch.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

