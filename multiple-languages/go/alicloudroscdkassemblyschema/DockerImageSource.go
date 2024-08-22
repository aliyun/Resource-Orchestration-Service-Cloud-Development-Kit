package alicloudroscdkassemblyschema


// Properties for how to produce a Docker image from a source.
type DockerImageSource struct {
	// Disable the cache and pass `--no-cache` to the `docker build` command.
	CacheDisabled *bool `field:"optional" json:"cacheDisabled" yaml:"cacheDisabled"`
	// Cache from options to pass to the `docker build` command.
	// See: https://docs.docker.com/build/cache/backends/
	//
	CacheFrom *[]*DockerCacheOption `field:"optional" json:"cacheFrom" yaml:"cacheFrom"`
	// Cache to options to pass to the `docker build` command.
	// See: https://docs.docker.com/build/cache/backends/
	//
	CacheTo *DockerCacheOption `field:"optional" json:"cacheTo" yaml:"cacheTo"`
	// The directory containing the Docker image build instructions.
	//
	// This path is relative to the asset manifest location.
	Directory *string `field:"optional" json:"directory" yaml:"directory"`
	// Additional build arguments.
	//
	// Only allowed when `directory` is set.
	DockerBuildArgs *map[string]*string `field:"optional" json:"dockerBuildArgs" yaml:"dockerBuildArgs"`
	// Additional build secrets.
	//
	// Only allowed when `directory` is set.
	DockerBuildSecrets *map[string]*string `field:"optional" json:"dockerBuildSecrets" yaml:"dockerBuildSecrets"`
	// SSH agent socket or keys.
	//
	// Requires building with docker buildkit.
	DockerBuildSsh *string `field:"optional" json:"dockerBuildSsh" yaml:"dockerBuildSsh"`
	// Target build stage in a Dockerfile with multiple build stages.
	//
	// Only allowed when `directory` is set.
	DockerBuildTarget *string `field:"optional" json:"dockerBuildTarget" yaml:"dockerBuildTarget"`
	// The name of the file with build instructions.
	//
	// Only allowed when `directory` is set.
	DockerFile *string `field:"optional" json:"dockerFile" yaml:"dockerFile"`
	// Outputs.
	// See: https://docs.docker.com/engine/reference/commandline/build/#custom-build-outputs
	//
	DockerOutputs *[]*string `field:"optional" json:"dockerOutputs" yaml:"dockerOutputs"`
	// A command-line executable that returns the name of a local Docker image on stdout after being run.
	Executable *[]*string `field:"optional" json:"executable" yaml:"executable"`
	// Networking mode for the RUN commands during build. _Requires Docker Engine API v1.25+_.
	//
	// Specify this property to build images on a specific networking mode.
	NetworkMode *string `field:"optional" json:"networkMode" yaml:"networkMode"`
	// Platform to build for. _Requires Docker Buildx_.
	//
	// Specify this property to build images on a specific platform/architecture.
	Platform *string `field:"optional" json:"platform" yaml:"platform"`
}

