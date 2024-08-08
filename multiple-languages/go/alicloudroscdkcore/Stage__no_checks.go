//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_Stage) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_Stage) validateSynthParameters(options *StageSynthesisOptions) error {
	return nil
}

func (s *jsiiProxy_Stage) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func validateStage_IsConstructParameters(x interface{}) error {
	return nil
}

func validateStage_IsStageParameters(x interface{}) error {
	return nil
}

func validateStage_OfParameters(construct IConstruct) error {
	return nil
}

func validateNewStageParameters(scope Construct, id *string, props *StageProps) error {
	return nil
}

