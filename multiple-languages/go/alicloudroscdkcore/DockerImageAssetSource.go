package alicloudroscdkcore


type DockerImageAssetSource struct {
	// The hash of the contents of the docker build context.
	//
	// This hash is used
	// throughout the system to identify this image and avoid duplicate work
	// in case the source did not change.
	//
	// NOTE: this means that if you wish to update your docker image, you
	// must make a modification to the source (e.g. add some metadata to your Dockerfile).
	SourceHash *string `field:"required" json:"sourceHash" yaml:"sourceHash"`
	// Unique identifier of the docker image asset and its potential revisions.
	//
	// Required if using AppScopedStagingSynthesizer.
	AssetName *string `field:"optional" json:"assetName" yaml:"assetName"`
	// The directory where the Dockerfile is stored, must be relative to the cloud assembly root.
	DirectoryName *string `field:"optional" json:"directoryName" yaml:"directoryName"`
	// Build args to pass to the `docker build` command.
	//
	// Since Docker build arguments are resolved before deployment, keys and
	// values cannot refer to unresolved tokens.
	//
	// Only allowed when `directoryName` is specified.
	DockerBuildArgs *map[string]*string `field:"optional" json:"dockerBuildArgs" yaml:"dockerBuildArgs"`
	// Build sACRets to pass to the `docker build` command.
	//
	// Since Docker build sACRets are resolved before deployment, keys and
	// values cannot refer to unresolved tokens.
	//
	// Only allowed when `directoryName` is specified.
	DockerBuildSACRets *map[string]*string `field:"optional" json:"dockerBuildSACRets" yaml:"dockerBuildSACRets"`
	// SSH agent socket or keys to pass to the `docker buildx` command.
	DockerBuildSsh *string `field:"optional" json:"dockerBuildSsh" yaml:"dockerBuildSsh"`
	// Docker target to build to.
	//
	// Only allowed when `directoryName` is specified.
	DockerBuildTarget *string `field:"optional" json:"dockerBuildTarget" yaml:"dockerBuildTarget"`
	// Disable the cache and pass `--no-cache` to the `docker build` command.
	DockerCacheDisabled *bool `field:"optional" json:"dockerCacheDisabled" yaml:"dockerCacheDisabled"`
	// Cache from options to pass to the `docker build` command.
	DockerCacheFrom *[]*DockerCacheOption `field:"optional" json:"dockerCacheFrom" yaml:"dockerCacheFrom"`
	// Cache to options to pass to the `docker build` command.
	DockerCacheTo *DockerCacheOption `field:"optional" json:"dockerCacheTo" yaml:"dockerCacheTo"`
	// Path to the Dockerfile (relative to the directory).
	//
	// Only allowed when `directoryName` is specified.
	DockerFile *string `field:"optional" json:"dockerFile" yaml:"dockerFile"`
	// Outputs to pass to the `docker build` command.
	DockerOutputs *[]*string `field:"optional" json:"dockerOutputs" yaml:"dockerOutputs"`
	// An external command that will produce the packaged asset.
	//
	// The command should produce the name of a local Docker image on `stdout`.
	Executable *[]*string `field:"optional" json:"executable" yaml:"executable"`
	// Networking mode for the RUN commands during build. _Requires Docker Engine API v1.25+_.
	//
	// Specify this property to build images on a specific networking mode.
	NetworkMode *string `field:"optional" json:"networkMode" yaml:"networkMode"`
	// Platform to build for. _Requires Docker Buildx_.
	//
	// Specify this property to build images on a specific platform.
	Platform *string `field:"optional" json:"platform" yaml:"platform"`
}

