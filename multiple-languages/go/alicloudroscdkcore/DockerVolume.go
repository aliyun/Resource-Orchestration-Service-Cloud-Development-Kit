package alicloudroscdkcore


// A Docker volume.
type DockerVolume struct {
	// The path where the file or directory is mounted in the container.
	ContainerPath *string `field:"required" json:"containerPath" yaml:"containerPath"`
	// The path to the file or directory on the host machine.
	HostPath *string `field:"required" json:"hostPath" yaml:"hostPath"`
	// Mount consistency.
	//
	// Only applicable for macOS.
	// See: https://docs.docker.com/storage/bind-mounts/#configure-mount-consistency-for-macos
	//
	Consistency DockerVolumeConsistency `field:"optional" json:"consistency" yaml:"consistency"`
}

