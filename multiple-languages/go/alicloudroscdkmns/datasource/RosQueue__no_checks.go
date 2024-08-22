//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosQueue) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosQueue) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosQueue_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosQueue_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosQueue_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosQueue) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosQueue) validateSetQueueNameParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosQueue) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func validateNewRosQueueParameters(scope alicloudroscdkcore.Construct, id *string, props *RosQueueProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

