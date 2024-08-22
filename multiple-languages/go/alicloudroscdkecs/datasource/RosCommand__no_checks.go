//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosCommand) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosCommand) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosCommand_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosCommand_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosCommand_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosCommand) validateSetCommandIdParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosCommand) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosCommand) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func validateNewRosCommandParameters(scope alicloudroscdkcore.Construct, id *string, props *RosCommandProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

