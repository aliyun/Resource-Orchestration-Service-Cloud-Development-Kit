//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosServices) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosServices) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosServices_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosServices_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosServices_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosServices) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosServices) validateSetLabelsParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosServices) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosServices) validateSetServiceNameParameters(val interface{}) error {
	return nil
}

func validateNewRosServicesParameters(scope alicloudroscdkcore.Construct, id *string, props *RosServicesProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

