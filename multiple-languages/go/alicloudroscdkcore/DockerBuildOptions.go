package alicloudroscdkcore


// Docker build options.
type DockerBuildOptions struct {
	// Build args.
	BuildArgs *map[string]*string `field:"optional" json:"buildArgs" yaml:"buildArgs"`
	// Disable the cache and pass `--no-cache` to the `docker build` command.
	CacheDisabled *bool `field:"optional" json:"cacheDisabled" yaml:"cacheDisabled"`
	// Cache from options to pass to the `docker build` command.
	CacheFrom *[]*DockerCacheOption `field:"optional" json:"cacheFrom" yaml:"cacheFrom"`
	// Cache to options to pass to the `docker build` command.
	CacheTo *DockerCacheOption `field:"optional" json:"cacheTo" yaml:"cacheTo"`
	// Name of the Dockerfile, must relative to the docker build path.
	File *string `field:"optional" json:"file" yaml:"file"`
	// Set platform if server is multi-platform capable. _Requires Docker Engine API v1.38+_.
	//
	// Example value: `linux/amd64`.
	Platform *string `field:"optional" json:"platform" yaml:"platform"`
	// Set build target for multi-stage container builds. Any stage defined afterwards will be ignored.
	//
	// Example value: `build-env`.
	TargetStage *string `field:"optional" json:"targetStage" yaml:"targetStage"`
}

