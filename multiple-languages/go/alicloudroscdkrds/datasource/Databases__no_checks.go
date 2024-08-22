//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_Databases) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_Databases) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_Databases) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_Databases) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_Databases) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_Databases) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_Databases) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_Databases) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_Databases) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDatabases_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Databases) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Databases) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Databases) validateSetPropsParameters(val *DatabasesProps) error {
	return nil
}

func (j *jsiiProxy_Databases) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDatabasesParameters(scope alicloudroscdkcore.Construct, id *string, props *DatabasesProps) error {
	return nil
}

