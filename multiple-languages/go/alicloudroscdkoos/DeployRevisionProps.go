package alicloudroscdkoos


// Properties for defining a `DeployRevision`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-deployrevision
type DeployRevisionProps struct {
	// Property applicationName: The name of the application.
	ApplicationName interface{} `field:"required" json:"applicationName" yaml:"applicationName"`
	// Property deployResourceType: The type of the deployment resource.
	//
	// Valid values:
	// - `Kubernetes`: A Kubernetes cluster.
	// - `Ecs`: An ECS instance.
	// - `FC`: A Function Compute service.
	// - `SWAS`: A Simple Application Server instance.
	DeployResourceType interface{} `field:"optional" json:"deployResourceType" yaml:"deployResourceType"`
	// Property description: The description of the revision.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property hooks: The hook of the code to be deployed.
	Hooks interface{} `field:"optional" json:"hooks" yaml:"hooks"`
	// Property location: The location of the code to be deployed.
	Location interface{} `field:"optional" json:"location" yaml:"location"`
	// Property revisionType: The type of the deployment revision.
	//
	// Valid values:
	// - `Command`: A command.
	// - `GitRepo`: A Git repository.
	// - `HelmChart`: A Helm chart.
	// - `Oss`: An object in Object Storage Service (OSS).
	// - `EcsImage`: An ECS image.
	// - `DockerImage`: A Docker image.
	// - `Yaml`: A YAML file.
	RevisionType interface{} `field:"optional" json:"revisionType" yaml:"revisionType"`
}

