//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_AssetStaging) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_AssetStaging) validateRelativeStagedPathParameters(stack Stack) error {
	return nil
}

func (a *jsiiProxy_AssetStaging) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func validateAssetStaging_IsConstructParameters(x interface{}) error {
	return nil
}

func validateNewAssetStagingParameters(scope Construct, id *string, props *AssetStagingProps) error {
	return nil
}

