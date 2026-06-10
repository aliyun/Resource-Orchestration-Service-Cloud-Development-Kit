package alicloudroscdkpai


// Properties for defining a `RosQuota`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-quota
type RosQuotaProps struct {
	QuotaName interface{} `field:"required" json:"quotaName" yaml:"quotaName"`
	AllocateStrategy interface{} `field:"optional" json:"allocateStrategy" yaml:"allocateStrategy"`
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	Min interface{} `field:"optional" json:"min" yaml:"min"`
	ParentQuotaId interface{} `field:"optional" json:"parentQuotaId" yaml:"parentQuotaId"`
	QueueStrategy interface{} `field:"optional" json:"queueStrategy" yaml:"queueStrategy"`
	QuotaConfig interface{} `field:"optional" json:"quotaConfig" yaml:"quotaConfig"`
	ResourceGroupIds interface{} `field:"optional" json:"resourceGroupIds" yaml:"resourceGroupIds"`
	ResourceType interface{} `field:"optional" json:"resourceType" yaml:"resourceType"`
}

