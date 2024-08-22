package alicloudroscdkassemblyschema


// A manifest for a single artifact within the cloud assembly.
type ArtifactManifest struct {
	// The type of artifact.
	Type ArtifactType `field:"required" json:"type" yaml:"type"`
	// IDs of artifacts that must be deployed before this artifact.
	Dependencies *[]*string `field:"optional" json:"dependencies" yaml:"dependencies"`
	// Associated metadata.
	Metadata *map[string]*[]*MetadataEntry `field:"optional" json:"metadata" yaml:"metadata"`
	// The set of properties for this artifact (depends on type).
	Properties interface{} `field:"optional" json:"properties" yaml:"properties"`
}

