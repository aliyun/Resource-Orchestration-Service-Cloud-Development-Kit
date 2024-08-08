//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosPolicy) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosPolicy) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosPolicy_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosPolicy_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosPolicy_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosPolicy) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosPolicy) validateSetPolicyNameParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosPolicy) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func validateNewRosPolicyParameters(scope alicloudroscdkcore.Construct, id *string, props *RosPolicyProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

