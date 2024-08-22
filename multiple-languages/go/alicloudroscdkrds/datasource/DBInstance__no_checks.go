//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DBInstance) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DBInstance) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DBInstance) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DBInstance) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DBInstance) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DBInstance) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DBInstance) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DBInstance) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DBInstance) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDBInstance_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DBInstance) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DBInstance) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DBInstance) validateSetPropsParameters(val *DBInstanceProps) error {
	return nil
}

func (j *jsiiProxy_DBInstance) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDBInstanceParameters(scope alicloudroscdkcore.Construct, id *string, props *DBInstanceProps) error {
	return nil
}

