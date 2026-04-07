package alicloudroscdkcr


// Properties for defining a `RosRepoSyncRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
type RosRepoSyncRuleProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	NamespaceName interface{} `field:"required" json:"namespaceName" yaml:"namespaceName"`
	SyncRuleName interface{} `field:"required" json:"syncRuleName" yaml:"syncRuleName"`
	SyncScope interface{} `field:"required" json:"syncScope" yaml:"syncScope"`
	SyncTrigger interface{} `field:"required" json:"syncTrigger" yaml:"syncTrigger"`
	TargetInstanceId interface{} `field:"required" json:"targetInstanceId" yaml:"targetInstanceId"`
	TargetNamespaceName interface{} `field:"required" json:"targetNamespaceName" yaml:"targetNamespaceName"`
	TargetRegionId interface{} `field:"required" json:"targetRegionId" yaml:"targetRegionId"`
	RepoName interface{} `field:"optional" json:"repoName" yaml:"repoName"`
	RepoNameFilter interface{} `field:"optional" json:"repoNameFilter" yaml:"repoNameFilter"`
	TagFilter interface{} `field:"optional" json:"tagFilter" yaml:"tagFilter"`
	TargetRepoName interface{} `field:"optional" json:"targetRepoName" yaml:"targetRepoName"`
	TargetUserId interface{} `field:"optional" json:"targetUserId" yaml:"targetUserId"`
}

