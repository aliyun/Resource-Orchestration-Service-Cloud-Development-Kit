//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosParameter) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosParameter) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosParameter) validateResolveParameters(_context IResolveContext) error {
	return nil
}

func (r *jsiiProxy_RosParameter) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosParameter) validateValidatePropertiesParameters(props *RosParameterProps) error {
	return nil
}

func validateRosParameter_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosParameter_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateNewRosParameterParameters(scope Construct, id *string, props *RosParameterProps) error {
	return nil
}

