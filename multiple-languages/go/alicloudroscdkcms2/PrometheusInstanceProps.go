package alicloudroscdkcms2


// Properties for defining a `PrometheusInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
type PrometheusInstanceProps struct {
	// Property prometheusInstanceName: The name of the Prometheus instance.
	PrometheusInstanceName interface{} `field:"required" json:"prometheusInstanceName" yaml:"prometheusInstanceName"`
	// Property archiveDuration: The archive duration of the Prometheus instance.
	ArchiveDuration interface{} `field:"optional" json:"archiveDuration" yaml:"archiveDuration"`
	// Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
	AuthFreeReadPolicy interface{} `field:"optional" json:"authFreeReadPolicy" yaml:"authFreeReadPolicy"`
	// Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
	AuthFreeWritePolicy interface{} `field:"optional" json:"authFreeWritePolicy" yaml:"authFreeWritePolicy"`
	// Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
	BasicMetricQueryLimit interface{} `field:"optional" json:"basicMetricQueryLimit" yaml:"basicMetricQueryLimit"`
	// Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
	EnableAuthFreeRead interface{} `field:"optional" json:"enableAuthFreeRead" yaml:"enableAuthFreeRead"`
	// Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
	EnableAuthFreeWrite interface{} `field:"optional" json:"enableAuthFreeWrite" yaml:"enableAuthFreeWrite"`
	// Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
	EnableAuthToken interface{} `field:"optional" json:"enableAuthToken" yaml:"enableAuthToken"`
	// Property paymentType: The payment type of the Prometheus instance.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property status: The status of the Prometheus instance.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property storageDuration: The storage duration of the Prometheus instance.
	StorageDuration interface{} `field:"optional" json:"storageDuration" yaml:"storageDuration"`
	// Property workspace: The workspace of the Prometheus instance.
	Workspace interface{} `field:"optional" json:"workspace" yaml:"workspace"`
}

