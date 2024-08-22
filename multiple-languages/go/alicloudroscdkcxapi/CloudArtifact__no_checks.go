//go:build no_runtime_type_checking

package alicloudroscdkcxapi

// Building without runtime type checking enabled, so all the below just return nil

func (c *jsiiProxy_CloudArtifact) validateFindMetadataByTypeParameters(type_ *string) error {
	return nil
}

func validateCloudArtifact_FromManifestParameters(assembly CloudAssembly, id *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) error {
	return nil
}

func validateNewCloudArtifactParameters(assembly CloudAssembly, id *string, manifest *alicloudroscdkassemblyschema.ArtifactManifest) error {
	return nil
}

