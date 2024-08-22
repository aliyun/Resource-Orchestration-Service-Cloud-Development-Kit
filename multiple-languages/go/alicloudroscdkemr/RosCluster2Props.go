package alicloudroscdkemr


// Properties for defining a `RosCluster2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster2
type RosCluster2Props struct {
	Applications interface{} `field:"required" json:"applications" yaml:"applications"`
	ClusterName interface{} `field:"required" json:"clusterName" yaml:"clusterName"`
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	NodeAttributes interface{} `field:"required" json:"nodeAttributes" yaml:"nodeAttributes"`
	NodeGroups interface{} `field:"required" json:"nodeGroups" yaml:"nodeGroups"`
	ReleaseVersion interface{} `field:"required" json:"releaseVersion" yaml:"releaseVersion"`
	ApplicationConfigs interface{} `field:"optional" json:"applicationConfigs" yaml:"applicationConfigs"`
	BootstrapScripts interface{} `field:"optional" json:"bootstrapScripts" yaml:"bootstrapScripts"`
	DeployMode interface{} `field:"optional" json:"deployMode" yaml:"deployMode"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityMode interface{} `field:"optional" json:"securityMode" yaml:"securityMode"`
	SubscriptionConfig interface{} `field:"optional" json:"subscriptionConfig" yaml:"subscriptionConfig"`
	Tags *[]*RosCluster2_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

