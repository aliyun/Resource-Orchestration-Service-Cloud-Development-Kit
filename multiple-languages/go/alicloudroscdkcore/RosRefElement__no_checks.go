//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosRefElement) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosRefElement) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosRefElement) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func validateRosRefElement_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosRefElement_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateNewRosRefElementParameters(scope Construct, id *string) error {
	return nil
}

