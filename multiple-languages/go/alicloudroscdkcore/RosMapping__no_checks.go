//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosMapping) validateFindInMapParameters(key1 *string, key2 *string) error {
	return nil
}

func (r *jsiiProxy_RosMapping) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosMapping) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosMapping) validateSetValueParameters(key1 *string, key2 *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosMapping) validateSynthesizeParameters(session ISynthesisSession) error {
	return nil
}

func validateRosMapping_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosMapping_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateNewRosMappingParameters(scope Construct, id *string, props *RosMappingProps) error {
	return nil
}

