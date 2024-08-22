//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosElement) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosElement) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosElement) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func validateRosElement_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosElement_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateNewRosElementParameters(scope Construct, id *string) error {
	return nil
}

