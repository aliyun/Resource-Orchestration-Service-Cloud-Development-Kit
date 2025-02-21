package alicloudroscdkadblake


// Properties for defining a `ResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroup
type ResourceGroupProps struct {
	// Property dbClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property engine: Database engine, value: AnalyticDB (default): AnalyticDB for mysql engine.
	//
	// Sparkwarehouse: Sparkwarehous engine.
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	// Property groupName: The name of the resource group.
	//
	// The name can be up to 255 characters in length.
	// The name must start with a letter or digit.
	// The name can contain letters, digits, hyphens (-), and underscores (_).
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	// Property groupType: The type of the resource group.
	//
	// Valid values:
	// Interactive
	// Job
	// Note For more information about resource groups, see Resource group overview.
	GroupType interface{} `field:"required" json:"groupType" yaml:"groupType"`
	// Property autoStopInterval: Automatically stop time, the unit is minutes (m).
	AutoStopInterval interface{} `field:"optional" json:"autoStopInterval" yaml:"autoStopInterval"`
	// Property clusterMode: The mode of cluster.
	//
	// Default: AutoScale.
	ClusterMode interface{} `field:"optional" json:"clusterMode" yaml:"clusterMode"`
	// Property clusterSizeResource: A reserved parameter.
	ClusterSizeResource interface{} `field:"optional" json:"clusterSizeResource" yaml:"clusterSizeResource"`
	// Property enableSpot: Specifies whether to enable the spot instance feature for the resource group.
	//
	// After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
	// True
	// False.
	EnableSpot interface{} `field:"optional" json:"enableSpot" yaml:"enableSpot"`
	// Property engineParams: Engine configuration.
	EngineParams interface{} `field:"optional" json:"engineParams" yaml:"engineParams"`
	// Property maxClusterCount: A reserved parameter.
	MaxClusterCount interface{} `field:"optional" json:"maxClusterCount" yaml:"maxClusterCount"`
	// Property maxComputeResource: The maximum reserved computing resources.
	//
	// If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16ACU.
	// If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8ACU.
	MaxComputeResource interface{} `field:"optional" json:"maxComputeResource" yaml:"maxComputeResource"`
	// Property minClusterCount: A reserved parameter.
	MinClusterCount interface{} `field:"optional" json:"minClusterCount" yaml:"minClusterCount"`
	// Property minComputeResource: The minimum reserved computing resources.
	//
	// When GroupType is set to Interactive, set this parameter to 16ACU.
	// When GroupType is set to Job, set this parameter to 0ACU.
	MinComputeResource interface{} `field:"optional" json:"minComputeResource" yaml:"minComputeResource"`
	// Property rules: The job resubmission rules.
	Rules interface{} `field:"optional" json:"rules" yaml:"rules"`
}

