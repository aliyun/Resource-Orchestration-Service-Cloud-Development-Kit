//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_App) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_App) validateSynthParameters(options *StageSynthesisOptions) error {
	return nil
}

func (a *jsiiProxy_App) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func validateApp_IsAppParameters(obj interface{}) error {
	return nil
}

func validateApp_IsConstructParameters(x interface{}) error {
	return nil
}

func validateApp_IsStageParameters(x interface{}) error {
	return nil
}

func validateApp_OfParameters(construct IConstruct) error {
	return nil
}

func validateNewAppParameters(props *AppProps) error {
	return nil
}

