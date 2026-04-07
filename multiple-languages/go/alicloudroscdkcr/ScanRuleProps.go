package alicloudroscdkcr


// Properties for defining a `ScanRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
type ScanRuleProps struct {
	// Property instanceId: ACR Instance ID.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
	RepoTagFilterPattern interface{} `field:"required" json:"repoTagFilterPattern" yaml:"repoTagFilterPattern"`
	// Property ruleName: The scan rule name.
	RuleName interface{} `field:"required" json:"ruleName" yaml:"ruleName"`
	// Property scanScope: The scan scope.
	//
	// Valid values:
	// NAMESPACE: namespace.
	// REPO: repository.
	// INSTANCE: CR instance.
	ScanScope interface{} `field:"required" json:"scanScope" yaml:"scanScope"`
	// Property scanType: The scan type.
	//
	// Valid values:
	// * VUL: Products Cloud Security Scanner.
	// * SBOM: Product Content Analysis.
	ScanType interface{} `field:"required" json:"scanType" yaml:"scanType"`
	// Property triggerType: Trigger type.
	//
	// Valid values:
	// * AUTO: automatically trigger.
	// * MANUAL: manually trigger.
	TriggerType interface{} `field:"required" json:"triggerType" yaml:"triggerType"`
	// Property namespaces: The list of namespaces.
	//
	// * When the scan scope is NAMESPACE, this parameter cannot be empty.
	// * If the scan scope is REPO, you must specify a unique Namespace for this parameter.
	Namespaces interface{} `field:"optional" json:"namespaces" yaml:"namespaces"`
	// Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty.
	RepoNames interface{} `field:"optional" json:"repoNames" yaml:"repoNames"`
}

