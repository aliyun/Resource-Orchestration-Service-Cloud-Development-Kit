//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosBucket) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosBucket) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosBucket_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosBucket_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosBucket_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosBucket) validateSetBucketNameParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosBucket) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosBucket) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func validateNewRosBucketParameters(scope alicloudroscdkcore.Construct, id *string, props *RosBucketProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

