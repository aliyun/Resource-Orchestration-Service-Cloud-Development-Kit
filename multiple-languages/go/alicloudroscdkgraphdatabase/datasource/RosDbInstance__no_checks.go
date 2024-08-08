//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosDbInstance) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosDbInstance) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosDbInstance_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosDbInstance_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosDbInstance_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosDbInstance) validateSetDbInstanceIdParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosDbInstance) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosDbInstance) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func validateNewRosDbInstanceParameters(scope alicloudroscdkcore.Construct, id *string, props *RosDbInstanceProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

