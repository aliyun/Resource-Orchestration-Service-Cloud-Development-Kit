//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosCondition) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosCondition) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosCondition) validateResolveParameters(_context IResolveContext) error {
	return nil
}

func (r *jsiiProxy_RosCondition) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func validateRosCondition_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosCondition_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateNewRosConditionParameters(scope Construct, id *string, props *RosConditionProps) error {
	return nil
}

