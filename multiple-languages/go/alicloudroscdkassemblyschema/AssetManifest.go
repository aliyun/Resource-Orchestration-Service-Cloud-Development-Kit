package alicloudroscdkassemblyschema


// Definitions for the asset manifest.
type AssetManifest struct {
	// Version of the manifest.
	Version *string `field:"required" json:"version" yaml:"version"`
	// The Docker image assets in this manifest.
	DockerImages *map[string]*DockerImageAsset `field:"optional" json:"dockerImages" yaml:"dockerImages"`
	// The file assets in this manifest.
	Files *map[string]*FileAsset `field:"optional" json:"files" yaml:"files"`
}

