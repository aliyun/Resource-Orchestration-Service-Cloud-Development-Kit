//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (b *jsiiProxy_BackupPlan) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (b *jsiiProxy_BackupPlan) validateAddCountParameters(count interface{}) error {
	return nil
}

func (b *jsiiProxy_BackupPlan) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (b *jsiiProxy_BackupPlan) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (b *jsiiProxy_BackupPlan) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (b *jsiiProxy_BackupPlan) validateGetAttParameters(name *string) error {
	return nil
}

func (b *jsiiProxy_BackupPlan) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (b *jsiiProxy_BackupPlan) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (b *jsiiProxy_BackupPlan) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateBackupPlan_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_BackupPlan) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_BackupPlan) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_BackupPlan) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewBackupPlanParameters(scope alicloudroscdkcore.Construct, id *string, props *BackupPlanProps) error {
	return nil
}

