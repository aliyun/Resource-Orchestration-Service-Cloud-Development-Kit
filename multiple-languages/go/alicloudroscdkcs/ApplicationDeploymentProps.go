package alicloudroscdkcs


// Properties for defining a `ApplicationDeployment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-applicationdeployment
type ApplicationDeploymentProps struct {
	// Property chartUrl: Helm chart package URL, must be a valid URL.
	ChartUrl interface{} `field:"required" json:"chartUrl" yaml:"chartUrl"`
	// Property clusterId: The cluster id of the deployed application.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property name: Name of the deployed application.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property namespace: Deployment namespace.
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	// Property type: Type of the deployed application, currently can only be helm.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property values: Helm deployment parameters, a map that will be converted to YAML text.
	Values interface{} `field:"optional" json:"values" yaml:"values"`
}

