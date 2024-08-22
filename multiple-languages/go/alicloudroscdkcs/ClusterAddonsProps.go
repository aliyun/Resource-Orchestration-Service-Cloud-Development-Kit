package alicloudroscdkcs


// Properties for defining a `ClusterAddons`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusteraddons
type ClusterAddonsProps struct {
	// Property addons: A combination of addon plugins for Kubernetes clusters.
	//
	// Network plug-in: including Flannel and Terway network plug-ins
	// Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
	// Ingress: The installation of the Ingress component is enabled by default.
	Addons interface{} `field:"required" json:"addons" yaml:"addons"`
	// Property clusterId: Cluster ID.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property installedIgnore: Whether to ignore already installed addons when creating.
	//
	// If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
	// Default false.
	InstalledIgnore interface{} `field:"optional" json:"installedIgnore" yaml:"installedIgnore"`
	// Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user.
	//
	// Valid values:
	// - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
	// - None: Do nothing.
	// The default value is EnsureAdminRoleAndBinding.
	RolePolicy interface{} `field:"optional" json:"rolePolicy" yaml:"rolePolicy"`
	// Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.
	//
	// - Strict: in addition to basic validation, also validate the legality of WaitUntil.
	ValidationMode interface{} `field:"optional" json:"validationMode" yaml:"validationMode"`
	// Property waitUntil: After starting a creation or update, wait until all conditions are met.
	WaitUntil interface{} `field:"optional" json:"waitUntil" yaml:"waitUntil"`
}

