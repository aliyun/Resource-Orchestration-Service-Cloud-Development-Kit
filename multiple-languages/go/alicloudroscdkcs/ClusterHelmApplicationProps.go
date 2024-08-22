package alicloudroscdkcs


// Properties for defining a `ClusterHelmApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusterhelmapplication
type ClusterHelmApplicationProps struct {
	// Property chartUrl: The URL of chart.
	//
	// Supports HTTP or HTTPS.
	ChartUrl interface{} `field:"required" json:"chartUrl" yaml:"chartUrl"`
	// Property clusterId: The ID of the kubernetes cluster.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property name: The name for helm release.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property chartValues: Chart custom values.
	ChartValues interface{} `field:"optional" json:"chartValues" yaml:"chartValues"`
	// Property credential: The credential of ACR repo.
	//
	// Only take effects when ChartUrl is the address of ACR repo.
	Credential interface{} `field:"optional" json:"credential" yaml:"credential"`
	// Property namespace: Namespace to use with helm.
	//
	// Default is default.
	// If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
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

