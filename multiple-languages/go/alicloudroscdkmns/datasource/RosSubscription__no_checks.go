//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosSubscription) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosSubscription) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosSubscription_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosSubscription_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosSubscription_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosSubscription) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosSubscription) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosSubscription) validateSetSubscriptionNameParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosSubscription) validateSetTopicNameParameters(val interface{}) error {
	return nil
}

func validateNewRosSubscriptionParameters(scope alicloudroscdkcore.Construct, id *string, props *RosSubscriptionProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

