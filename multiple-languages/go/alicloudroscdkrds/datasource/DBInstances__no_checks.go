//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DBInstances) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DBInstances) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DBInstances) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DBInstances) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DBInstances) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DBInstances) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DBInstances) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DBInstances) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DBInstances) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDBInstances_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DBInstances) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DBInstances) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DBInstances) validateSetPropsParameters(val *DBInstancesProps) error {
	return nil
}

func (j *jsiiProxy_DBInstances) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDBInstancesParameters(scope alicloudroscdkcore.Construct, id *string, props *DBInstancesProps) error {
	return nil
}

