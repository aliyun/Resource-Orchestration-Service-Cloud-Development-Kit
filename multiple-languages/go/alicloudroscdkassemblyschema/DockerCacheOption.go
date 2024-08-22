package alicloudroscdkassemblyschema


// Options for configuring the Docker cache backend.
type DockerCacheOption struct {
	// The type of cache to use.
	//
	// Refer to https://docs.docker.com/build/cache/backends/ for full list of backends.
	//
	// Example:
	//   'registry'
	//
	Type *string `field:"required" json:"type" yaml:"type"`
	// Any parameters to pass into the docker cache backend configuration.
	//
	// Refer to https://docs.docker.com/build/cache/backends/ for cache backend configuration.
	Params *map[string]*string `field:"optional" json:"params" yaml:"params"`
}

