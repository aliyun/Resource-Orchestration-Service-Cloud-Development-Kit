//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosOutput) validateAddConditionParameters(condition RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosOutput) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosOutput) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosOutput) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func validateRosOutput_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosOutput_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateNewRosOutputParameters(scope Construct, id *string, props *RosOutputProps) error {
	return nil
}

