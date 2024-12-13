//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosServiceInstance) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosServiceInstance) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosServiceInstance_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosServiceInstance_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosServiceInstance_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosServiceInstance) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosServiceInstance) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosServiceInstance) validateSetServiceInstanceIdParameters(val interface{}) error {
	return nil
}

func validateNewRosServiceInstanceParameters(scope alicloudroscdkcore.Construct, id *string, props *RosServiceInstanceProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

