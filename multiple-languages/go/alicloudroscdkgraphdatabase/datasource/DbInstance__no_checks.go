//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DbInstance) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DbInstance) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DbInstance) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DbInstance) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DbInstance) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DbInstance) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DbInstance) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DbInstance) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DbInstance) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDbInstance_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DbInstance) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DbInstance) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DbInstance) validateSetPropsParameters(val *DbInstanceProps) error {
	return nil
}

func (j *jsiiProxy_DbInstance) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDbInstanceParameters(scope alicloudroscdkcore.Construct, id *string, props *DbInstanceProps) error {
	return nil
}

