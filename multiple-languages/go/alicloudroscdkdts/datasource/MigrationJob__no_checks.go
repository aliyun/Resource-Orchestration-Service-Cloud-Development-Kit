//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (m *jsiiProxy_MigrationJob) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (m *jsiiProxy_MigrationJob) validateAddCountParameters(count interface{}) error {
	return nil
}

func (m *jsiiProxy_MigrationJob) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (m *jsiiProxy_MigrationJob) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (m *jsiiProxy_MigrationJob) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (m *jsiiProxy_MigrationJob) validateGetAttParameters(name *string) error {
	return nil
}

func (m *jsiiProxy_MigrationJob) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (m *jsiiProxy_MigrationJob) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (m *jsiiProxy_MigrationJob) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateMigrationJob_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_MigrationJob) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_MigrationJob) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_MigrationJob) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewMigrationJobParameters(scope alicloudroscdkcore.Construct, id *string, props *MigrationJobProps) error {
	return nil
}

