package alicloudroscdkemr


// Properties for defining a `Cluster2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster2
type Cluster2Props struct {
	// Property applications: Application List.The value range of the number n of the number N group: 1 ~ 100.
	Applications interface{} `field:"required" json:"applications" yaml:"applications"`
	// Property clusterName: Cluster name.The length is 1 ~ 128 characters, and the alphabet or Chinese must be started. It cannot start with http:\/\/ and https: \/\/.It can include Chinese, English, numbers, half-horn colons (:), down line (_), half-angle period (.) Or short lines (-).
	ClusterName interface{} `field:"required" json:"clusterName" yaml:"clusterName"`
	// Property clusterType: Cluster type.Ranges: DATALAKE: The new version of the data lake. OLAP: Data analysis. DATAFLOW: Real -time data stream. DATASERVING: Data service. HADOOP: The old version of the data lake (not recommended, it is recommended to use the new version of the data lake).
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	// Property nodeAttributes: Node attributes.All ECS nodes basic attributes of the cluster.
	NodeAttributes interface{} `field:"required" json:"nodeAttributes" yaml:"nodeAttributes"`
	// Property nodeGroups: The node group configuration array.The value range of the number n of the number N group: 1 ~ 100.
	NodeGroups interface{} `field:"required" json:"nodeGroups" yaml:"nodeGroups"`
	// Property releaseVersion: EMR release version.View EMR distribution versions can be viewed through the EMR cluster.
	ReleaseVersion interface{} `field:"required" json:"releaseVersion" yaml:"releaseVersion"`
	// Property applicationConfigs: Application configuration.The value range of the number n of the array element n: 1 ~ 1000.
	ApplicationConfigs interface{} `field:"optional" json:"applicationConfigs" yaml:"applicationConfigs"`
	// Property bootstrapScripts: Guide the script group.The value range of the number n of the number N group: 1 ~ 10.
	BootstrapScripts interface{} `field:"optional" json:"bootstrapScripts" yaml:"bootstrapScripts"`
	// Property deployMode: Application deployment mode in the cluster.Ranges: Normal: non -high available deployment.Cluster 1 master node. HA: High availability deployment.High availability deployment requires at least 3 master nodes.
	DeployMode interface{} `field:"optional" json:"deployMode" yaml:"deployMode"`
	// Property paymentType: Payment type.
	//
	// Ranges:
	// PayAsYouGo: Post-paid, pay-as-you-go.
	// Subscription: Prepaid, yearly and monthly.
	// Default: PayAsYouGo.
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	// Property resourceGroupId: Resource group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityMode: Cluster Kerberos security mode.Ranges: Normal: General mode, does not open the Kerberos mode. Kerberos: Open the Kerberos mode.
	SecurityMode interface{} `field:"optional" json:"securityMode" yaml:"securityMode"`
	// Property subscriptionConfig: Pre -paid allocation.When the value of PaymentType is Subscripting, it must be filled.
	SubscriptionConfig interface{} `field:"optional" json:"subscriptionConfig" yaml:"subscriptionConfig"`
	// Property tags: Tags to attach to cluster.
	//
	// Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCluster2_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

