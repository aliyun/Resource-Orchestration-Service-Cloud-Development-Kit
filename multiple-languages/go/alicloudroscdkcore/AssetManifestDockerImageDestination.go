package alicloudroscdkcore


// The destination for a docker image asset, when it is given to the AssetManifestBuilder.
type AssetManifestDockerImageDestination struct {
	// Repository name where the docker image asset should be written.
	RepositoryName *string `field:"required" json:"repositoryName" yaml:"repositoryName"`
	// Prefix to add to the asset hash to make the Docker image tag.
	DockerTagPrefix *string `field:"optional" json:"dockerTagPrefix" yaml:"dockerTagPrefix"`
}

