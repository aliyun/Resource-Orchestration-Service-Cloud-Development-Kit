//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosVault) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosVault) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosVault_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosVault_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosVault_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosVault) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosVault) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosVault) validateSetVaultIdParameters(val interface{}) error {
	return nil
}

func validateNewRosVaultParameters(scope alicloudroscdkcore.Construct, id *string, props *RosVaultProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

