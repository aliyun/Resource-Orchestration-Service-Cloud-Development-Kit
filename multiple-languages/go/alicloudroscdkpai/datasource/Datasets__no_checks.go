//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_Datasets) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_Datasets) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_Datasets) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_Datasets) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_Datasets) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_Datasets) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_Datasets) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_Datasets) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_Datasets) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDatasets_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Datasets) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Datasets) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Datasets) validateSetPropsParameters(val *DatasetsProps) error {
	return nil
}

func (j *jsiiProxy_Datasets) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDatasetsParameters(scope alicloudroscdkcore.Construct, id *string, props *DatasetsProps) error {
	return nil
}

