package alicloudroscdkassemblyschema


// Type of cloud artifact.
type ArtifactType string

const (
	// Stub required because of JSII.
	ArtifactType_NONE ArtifactType = "NONE"
	// The artifact is an ROS stack.
	ArtifactType_ALIYUN_ROS_STACK ArtifactType = "ALIYUN_ROS_STACK"
	// The artifact contains the CDK application's construct tree.
	ArtifactType_CDK_TREE ArtifactType = "CDK_TREE"
	// Manifest for all assets in the Cloud Assembly.
	ArtifactType_ASSET_MANIFEST ArtifactType = "ASSET_MANIFEST"
	// Nested Cloud Assembly.
	ArtifactType_NESTED_CLOUD_ASSEMBLY ArtifactType = "NESTED_CLOUD_ASSEMBLY"
)

