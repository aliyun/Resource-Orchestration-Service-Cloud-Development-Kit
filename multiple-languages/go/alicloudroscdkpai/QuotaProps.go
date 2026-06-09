package alicloudroscdkpai


// Properties for defining a `Quota`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-quota
type QuotaProps struct {
	// Property quotaName: The name of the quota.
	QuotaName interface{} `field:"required" json:"quotaName" yaml:"quotaName"`
	// Property allocateStrategy: The allocation strategy.
	AllocateStrategy interface{} `field:"optional" json:"allocateStrategy" yaml:"allocateStrategy"`
	// Property clusterSpec: The cluster specification.
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	// Property description: The description of the quota.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property labels: The labels associated with the quota.
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	// Property min: The minimum resource allocation configuration.
	Min interface{} `field:"optional" json:"min" yaml:"min"`
	// Property parentQuotaId: The ID of the parent quota.
	ParentQuotaId interface{} `field:"optional" json:"parentQuotaId" yaml:"parentQuotaId"`
	// Property queueStrategy: The queue strategy.
	QueueStrategy interface{} `field:"optional" json:"queueStrategy" yaml:"queueStrategy"`
	// Property quotaConfig: The quota configuration.
	QuotaConfig interface{} `field:"optional" json:"quotaConfig" yaml:"quotaConfig"`
	// Property resourceGroupIds: The list of resource group IDs.
	ResourceGroupIds interface{} `field:"optional" json:"resourceGroupIds" yaml:"resourceGroupIds"`
	// Property resourceType: The type of the resource.
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
}

