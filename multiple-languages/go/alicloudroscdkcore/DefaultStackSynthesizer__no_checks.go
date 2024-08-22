//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DefaultStackSynthesizer) validateAddFileAssetParameters(asset *FileAssetSource) error {
	return nil
}

func (d *jsiiProxy_DefaultStackSynthesizer) validateBindParameters(stack Stack) error {
	return nil
}

func (d *jsiiProxy_DefaultStackSynthesizer) validateEmitArtifactParameters(session ISynthesisSession, options *SynthesizeStackArtifactOptions) error {
	return nil
}

func (d *jsiiProxy_DefaultStackSynthesizer) validateReusableBindParameters(stack Stack) error {
	return nil
}

func (d *jsiiProxy_DefaultStackSynthesizer) validateRosLocationFromFileAssetParameters(location *alicloudroscdkassemblyschema.FileDestination) error {
	return nil
}

func (d *jsiiProxy_DefaultStackSynthesizer) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DefaultStackSynthesizer) validateSynthesizeStackArtifactsParameters(session ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DefaultStackSynthesizer) validateSynthesizeTemplateParameters(session ISynthesisSession) error {
	return nil
}

func validateNewDefaultStackSynthesizerParameters(props *DefaultStackSynthesizerProps) error {
	return nil
}

