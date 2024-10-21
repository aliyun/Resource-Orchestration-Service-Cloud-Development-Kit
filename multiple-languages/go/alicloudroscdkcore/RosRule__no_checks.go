//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosRule) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosRule) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosRule) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func validateRosRule_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosRule_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateNewRosRuleParameters(scope Construct, id *string, props *RosRuleProps) error {
	return nil
}

