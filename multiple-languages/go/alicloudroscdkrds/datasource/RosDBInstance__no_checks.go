//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosDBInstance) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosDBInstance) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosDBInstance_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosDBInstance_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosDBInstance_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosDBInstance) validateSetDbInstanceIdParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosDBInstance) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosDBInstance) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func validateNewRosDBInstanceParameters(scope alicloudroscdkcore.Construct, id *string, props *RosDBInstanceProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

