//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_AssetManifestBuilder) validateAddDockerImageAssetParameters(stack Stack, sourceHash *string, source *alicloudroscdkassemblyschema.DockerImageSource, dest *alicloudroscdkassemblyschema.DockerImageDestination) error {
	return nil
}

func (a *jsiiProxy_AssetManifestBuilder) validateAddFileAssetParameters(stack Stack, sourceHash *string, source *alicloudroscdkassemblyschema.FileSource, dest *alicloudroscdkassemblyschema.FileDestination) error {
	return nil
}

func (a *jsiiProxy_AssetManifestBuilder) validateDefaultAddDockerImageAssetParameters(stack Stack, asset *DockerImageAssetSource, target *AssetManifestDockerImageDestination) error {
	return nil
}

func (a *jsiiProxy_AssetManifestBuilder) validateDefaultAddFileAssetParameters(stack Stack, asset *FileAssetSource, target *AssetManifestFileDestination) error {
	return nil
}

func (a *jsiiProxy_AssetManifestBuilder) validateEmitManifestParameters(stack Stack, session ISynthesisSession, options *alicloudroscdkassemblyschema.AssetManifestOptions) error {
	return nil
}

