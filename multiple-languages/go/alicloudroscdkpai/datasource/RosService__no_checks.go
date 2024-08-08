//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosService) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosService) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosService) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosService) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosService) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosService) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosService) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosService) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosService) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosService) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosService) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosService) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosService) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosService) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosService) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosService) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosService) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosService_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosService_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosService_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosService) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosService) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosService) validateSetServiceNameParameters(val interface{}) error {
	return nil
}

func validateNewRosServiceParameters(scope alicloudroscdkcore.Construct, id *string, props *RosServiceProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

