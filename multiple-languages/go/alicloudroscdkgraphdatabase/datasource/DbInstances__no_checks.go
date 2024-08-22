//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DbInstances) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DbInstances) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DbInstances) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DbInstances) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DbInstances) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DbInstances) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DbInstances) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DbInstances) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DbInstances) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDbInstances_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DbInstances) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DbInstances) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DbInstances) validateSetPropsParameters(val *DbInstancesProps) error {
	return nil
}

func (j *jsiiProxy_DbInstances) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDbInstancesParameters(scope alicloudroscdkcore.Construct, id *string, props *DbInstancesProps) error {
	return nil
}

