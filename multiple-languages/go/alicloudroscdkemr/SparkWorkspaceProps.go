package alicloudroscdkemr


// Properties for defining a `SparkWorkspace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-sparkworkspace
type SparkWorkspaceProps struct {
	// Property ossBucket: The OSS bucket path of the workspace.
	//
	// The path must start with oss:\/\/<bucket-name>\/.
	OssBucket interface{} `field:"required" json:"ossBucket" yaml:"ossBucket"`
	// Property paymentType: The billing method of the workspace.
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	// Property ramRoleName: The RAM role used to run Spark jobs.
	RamRoleName interface{} `field:"required" json:"ramRoleName" yaml:"ramRoleName"`
	// Property resourceSpec: The resource specifications of the workspace.
	ResourceSpec interface{} `field:"required" json:"resourceSpec" yaml:"resourceSpec"`
	// Property workspaceName: The workspace name.
	//
	// The name must be 1 to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (_).
	WorkspaceName interface{} `field:"required" json:"workspaceName" yaml:"workspaceName"`
	// Property autoRenew: Whether to enable automatic renewal for a subscription.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: The automatic renewal duration.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property autoRenewPeriodUnit: The unit of the automatic renewal duration.
	AutoRenewPeriodUnit interface{} `field:"optional" json:"autoRenewPeriodUnit" yaml:"autoRenewPeriodUnit"`
	// Property autoStartSessionCluster: Whether to automatically start a session cluster.
	AutoStartSessionCluster interface{} `field:"optional" json:"autoStartSessionCluster" yaml:"autoStartSessionCluster"`
	// Property dlfCatalogId: The ID of the DLF catalog.
	DlfCatalogId interface{} `field:"optional" json:"dlfCatalogId" yaml:"dlfCatalogId"`
	// Property dlfType: The DLF type bound to the workspace.
	DlfType interface{} `field:"optional" json:"dlfType" yaml:"dlfType"`
	// Property duration: The subscription duration.
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	// Property gpuSpec: The GPU instance types of the workspace.
	GpuSpec interface{} `field:"optional" json:"gpuSpec" yaml:"gpuSpec"`
	// Property gpuSubscription: The GPU subscription configuration.
	//
	// This configuration is applied after the workspace is created.
	GpuSubscription interface{} `field:"optional" json:"gpuSubscription" yaml:"gpuSubscription"`
	// Property ipWhiteList: The IP whitelist of the workspace.
	//
	// This configuration is applied after the workspace is created.
	IpWhiteList interface{} `field:"optional" json:"ipWhiteList" yaml:"ipWhiteList"`
	// Property paymentDurationUnit: The unit of the subscription duration.
	PaymentDurationUnit interface{} `field:"optional" json:"paymentDurationUnit" yaml:"paymentDurationUnit"`
	// Property releaseType: The release type of the workspace.
	ReleaseType interface{} `field:"optional" json:"releaseType" yaml:"releaseType"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property subscription: The configuration used to convert a pay-as-you-go workspace to a subscription workspace.
	//
	// This configuration is applied after the workspace is created.
	Subscription interface{} `field:"optional" json:"subscription" yaml:"subscription"`
	// Property tags: Tags to attach to workspace.
	//
	// Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosSparkWorkspace_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

