package alicloudroscdkcms2


// Properties for defining a `RosPrometheusInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
type RosPrometheusInstanceProps struct {
	PrometheusInstanceName interface{} `field:"required" json:"prometheusInstanceName" yaml:"prometheusInstanceName"`
	ArchiveDuration interface{} `field:"optional" json:"archiveDuration" yaml:"archiveDuration"`
	AuthFreeReadPolicy interface{} `field:"optional" json:"authFreeReadPolicy" yaml:"authFreeReadPolicy"`
	AuthFreeWritePolicy interface{} `field:"optional" json:"authFreeWritePolicy" yaml:"authFreeWritePolicy"`
	BasicMetricQueryLimit interface{} `field:"optional" json:"basicMetricQueryLimit" yaml:"basicMetricQueryLimit"`
	EnableAuthFreeRead interface{} `field:"optional" json:"enableAuthFreeRead" yaml:"enableAuthFreeRead"`
	EnableAuthFreeWrite interface{} `field:"optional" json:"enableAuthFreeWrite" yaml:"enableAuthFreeWrite"`
	EnableAuthToken interface{} `field:"optional" json:"enableAuthToken" yaml:"enableAuthToken"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	StorageDuration interface{} `field:"optional" json:"storageDuration" yaml:"storageDuration"`
	Workspace interface{} `field:"optional" json:"workspace" yaml:"workspace"`
}

