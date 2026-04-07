package alicloudroscdkcr


// Properties for defining a `RepoSyncRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
type RepoSyncRuleProps struct {
	// Property instanceId: The ID of the CR instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property namespaceName: The name of the CR namespace.
	NamespaceName interface{} `field:"required" json:"namespaceName" yaml:"namespaceName"`
	// Property syncRuleName: The name of the image sync rule.
	SyncRuleName interface{} `field:"required" json:"syncRuleName" yaml:"syncRuleName"`
	// Property syncScope: The synchronization scope.
	//
	// Valid values: REPO, NAMESPACE.
	SyncScope interface{} `field:"required" json:"syncScope" yaml:"syncScope"`
	// Property syncTrigger: The mode of triggering the synchronization rule.
	//
	// Valid values: INITIATIVE, PASSIVE.
	SyncTrigger interface{} `field:"required" json:"syncTrigger" yaml:"syncTrigger"`
	// Property targetInstanceId: The ID of the destination instance.
	TargetInstanceId interface{} `field:"required" json:"targetInstanceId" yaml:"targetInstanceId"`
	// Property targetNamespaceName: The name of the destination namespace.
	TargetNamespaceName interface{} `field:"required" json:"targetNamespaceName" yaml:"targetNamespaceName"`
	// Property targetRegionId: The ID of the destination region.
	TargetRegionId interface{} `field:"required" json:"targetRegionId" yaml:"targetRegionId"`
	// Property repoName: The name of the repository.
	//
	// This parameter is required when SyncScope is REPO.
	RepoName interface{} `field:"optional" json:"repoName" yaml:"repoName"`
	// Property repoNameFilter: The regular expression that is used to filter repositories.
	RepoNameFilter interface{} `field:"optional" json:"repoNameFilter" yaml:"repoNameFilter"`
	// Property tagFilter: The tag filter.
	//
	// Default value: .*
	TagFilter interface{} `field:"optional" json:"tagFilter" yaml:"tagFilter"`
	// Property targetRepoName: The name of the destination image repository.
	//
	// This parameter is optional.
	TargetRepoName interface{} `field:"optional" json:"targetRepoName" yaml:"targetRepoName"`
	// Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
	TargetUserId interface{} `field:"optional" json:"targetUserId" yaml:"targetUserId"`
}

