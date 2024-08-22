package alicloudroscdkassemblyschema


// Where to publish docker images.
type DockerImageDestination struct {
	// The region where this asset will need to be published.
	Region *string `field:"optional" json:"region" yaml:"region"`
	// Tag of the image to publish.
	ImageTag *string `field:"required" json:"imageTag" yaml:"imageTag"`
	// Name of the ECR repository to publish to.
	RepositoryName *string `field:"required" json:"repositoryName" yaml:"repositoryName"`
}

