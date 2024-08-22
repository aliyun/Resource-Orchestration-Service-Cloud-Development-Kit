package alicloudroscdkelasticsearch


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearch-instance
type RosInstanceProps struct {
	DataNode interface{} `field:"required" json:"dataNode" yaml:"dataNode"`
	Password interface{} `field:"required" json:"password" yaml:"password"`
	Version interface{} `field:"required" json:"version" yaml:"version"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EnableKibanaPrivate interface{} `field:"optional" json:"enableKibanaPrivate" yaml:"enableKibanaPrivate"`
	EnableKibanaPublic interface{} `field:"optional" json:"enableKibanaPublic" yaml:"enableKibanaPublic"`
	EnablePublic interface{} `field:"optional" json:"enablePublic" yaml:"enablePublic"`
	InstanceCategory interface{} `field:"optional" json:"instanceCategory" yaml:"instanceCategory"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	KibanaNode interface{} `field:"optional" json:"kibanaNode" yaml:"kibanaNode"`
	KibanaWhitelist interface{} `field:"optional" json:"kibanaWhitelist" yaml:"kibanaWhitelist"`
	MasterNode interface{} `field:"optional" json:"masterNode" yaml:"masterNode"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	PrivateWhitelist interface{} `field:"optional" json:"privateWhitelist" yaml:"privateWhitelist"`
	PublicWhitelist interface{} `field:"optional" json:"publicWhitelist" yaml:"publicWhitelist"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	YmlConfig interface{} `field:"optional" json:"ymlConfig" yaml:"ymlConfig"`
	ZoneCount interface{} `field:"optional" json:"zoneCount" yaml:"zoneCount"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

