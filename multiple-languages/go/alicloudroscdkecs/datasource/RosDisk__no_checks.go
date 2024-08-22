//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosDisk) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosDisk) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosDisk_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosDisk_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosDisk_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosDisk) validateSetDiskIdParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosDisk) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosDisk) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func validateNewRosDiskParameters(scope alicloudroscdkcore.Construct, id *string, props *RosDiskProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

