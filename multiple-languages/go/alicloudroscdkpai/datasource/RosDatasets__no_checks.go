//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RosDatasets) validateAddConditionParameters(con alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateAddDeletionOverrideParameters(path *string) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateAddDependsOnParameters(target alicloudroscdkcore.RosResource) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateAddDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateAddMetaDataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateAddOverrideParameters(path *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateAddPropertyDeletionOverrideParameters(propertyPath *string) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateAddPropertyOverrideParameters(propertyPath *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateAddRosDependencyParameters(target *string) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateApplyRemovalPolicyParameters(options *alicloudroscdkcore.RemovalPolicyOptions) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateGetAttParameters(attributeName *string) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateOverrideLogicalIdParameters(newLogicalId *string) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateRenderPropertiesParameters(props *map[string]interface{}) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_RosDatasets) validateValidatePropertiesParameters(_properties interface{}) error {
	return nil
}

func validateRosDatasets_IsConstructParameters(x interface{}) error {
	return nil
}

func validateRosDatasets_IsRosElementParameters(x interface{}) error {
	return nil
}

func validateRosDatasets_IsRosResourceParameters(construct alicloudroscdkcore.IConstruct) error {
	return nil
}

func (j *jsiiProxy_RosDatasets) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_RosDatasets) validateSetRefreshOptionsParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosDatasets) validateSetSourceIdParameters(val interface{}) error {
	return nil
}

func (j *jsiiProxy_RosDatasets) validateSetWorkspaceIdParameters(val interface{}) error {
	return nil
}

func validateNewRosDatasetsParameters(scope alicloudroscdkcore.Construct, id *string, props *RosDatasetsProps, enableResourcePropertyConstraint *bool) error {
	return nil
}

