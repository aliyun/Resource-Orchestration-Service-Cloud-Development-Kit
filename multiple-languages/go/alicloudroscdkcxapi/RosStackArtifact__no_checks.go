//go:build no_runtime_type_checking

package alicloudroscdkcxapi

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosStackArtifact) validateFindMetadataByTypeParameters(type_ *string) error {
	return nil
}

func validateRosStackArtifact_FromManifestParameters(assembly CloudAssembly, id *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) error {
	return nil
}

func validateNewRosStackArtifactParameters(assembly CloudAssembly, artifactId *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) error {
	return nil
}

