//go:build no_runtime_type_checking

package alicloudroscdkassemblyschema

// Building without runtime type checking enabled, so all the below just return nil

func validateManifest_LoadParameters(filePath *string) error {
	return nil
}

func validateManifest_LoadAssemblyManifestParameters(filePath *string) error {
	return nil
}

func validateManifest_SaveParameters(manifest *AssemblyManifest, filePath *string) error {
	return nil
}

func validateManifest_SaveAssemblyManifestParameters(manifest *AssemblyManifest, filePath *string) error {
	return nil
}

