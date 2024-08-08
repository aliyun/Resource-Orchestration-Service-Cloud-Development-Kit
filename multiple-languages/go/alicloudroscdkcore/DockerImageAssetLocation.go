package alicloudroscdkcore


// The location of the published docker image.
//
// This is where the image can be
// consumed at runtime.
type DockerImageAssetLocation struct {
	// The URI of the image in Aliyun ACR (including a tag).
	ImageUri *string `field:"required" json:"imageUri" yaml:"imageUri"`
	// The name of the ACR repository.
	RepositoryName *string `field:"required" json:"repositoryName" yaml:"repositoryName"`
	// The tag of the image in Aliyun ACR.
	ImageTag *string `field:"optional" json:"imageTag" yaml:"imageTag"`
}

