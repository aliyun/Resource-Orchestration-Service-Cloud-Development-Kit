//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_StackSynthesizer) validateAddFileAssetParameters(asset *FileAssetSource) error {
	return nil
}

func (s *jsiiProxy_StackSynthesizer) validateBindParameters(stack Stack) error {
	return nil
}

func (s *jsiiProxy_StackSynthesizer) validateEmitArtifactParameters(session ISynthesisSession, options *SynthesizeStackArtifactOptions) error {
	return nil
}

func (s *jsiiProxy_StackSynthesizer) validateRosLocationFromFileAssetParameters(location *alicloudroscdkassemblyschema.FileDestination) error {
	return nil
}

func (s *jsiiProxy_StackSynthesizer) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_StackSynthesizer) validateSynthesizeTemplateParameters(session ISynthesisSession) error {
	return nil
}

