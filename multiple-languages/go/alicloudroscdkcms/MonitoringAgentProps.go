package alicloudroscdkcms


// Properties for defining a `MonitoringAgent`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagent
type MonitoringAgentProps struct {
	// Property force: Specifies whether to install the CloudMonitor agent.
	//
	// Valid values:
	// true (default value): yes
	// false: no.
	Force interface{} `field:"optional" json:"force" yaml:"force"`
	// Property installCommand: Specifies whether to install the CloudMonitor agent on all ECS instances that belong to the current Alibaba Cloud account.
	//
	// Valid values:
	// onlyInstallNotHasAgent: installs the latest version of the CloudMonitor agent only on ECS instances on which the agent is not installed.
	// onlyUpgradeAgent: upgrades the CloudMonitor agent to the latest version only for ECS instances on which an earlier version of the agent is installed.
	// installAndUpgrade: installs the latest version of the CloudMonitor agent on ECS instances on which the agent is not installed, and upgrades the CloudMonitor agent to the latest version for ECS instances on which an earlier version of the agent is installed.
	// Note If you set the InstallCommand parameter, the InstanceIds parameter does not take effect.
	InstallCommand interface{} `field:"optional" json:"installCommand" yaml:"installCommand"`
	// Property instanceIds: Alibaba Cloud host ID.
	//
	// The range of n: 1 ~ 10.
	// Explain that InstallCommand and InstanceIds must be selected one by one.
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
}

