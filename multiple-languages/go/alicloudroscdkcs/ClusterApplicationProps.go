package alicloudroscdkcs


// Properties for defining a `ClusterApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterapplication
type ClusterApplicationProps struct {
	// Property clusterId: The ID of the kubernetes cluster.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property yamlContent: The yaml content of application.
	YamlContent interface{} `field:"required" json:"yamlContent" yaml:"yamlContent"`
	// Property defaultNamespace: The default namespace for the application, default value is default.
	//
	// If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
	// If the DefaultNamespace does not exist, ROS will automatically create it and delete it during the deletion phase.
	DefaultNamespace interface{} `field:"optional" json:"defaultNamespace" yaml:"defaultNamespace"`
	// Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user.
	//
	// Valid values:
	// - EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.
	// - None: Do nothing.
	// The default value is EnsureAdminRoleAndBinding.
	RolePolicy interface{} `field:"optional" json:"rolePolicy" yaml:"rolePolicy"`
	// Property stage: At what stage to run.
	//
	// Valid values:
	// - All: all stages, including create, update, and delete.
	// - Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
	// The default is All.
	Stage interface{} `field:"optional" json:"stage" yaml:"stage"`
	// Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.
	//
	// - Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.
	ValidationMode interface{} `field:"optional" json:"validationMode" yaml:"validationMode"`
	// Property waitUntil: After starting a creation or update, wait until all conditions are met.
	WaitUntil interface{} `field:"optional" json:"waitUntil" yaml:"waitUntil"`
}

