//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (c *jsiiProxy_CenInstances) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (c *jsiiProxy_CenInstances) validateAddCountParameters(count interface{}) error {
	return nil
}

func (c *jsiiProxy_CenInstances) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (c *jsiiProxy_CenInstances) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (c *jsiiProxy_CenInstances) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (c *jsiiProxy_CenInstances) validateGetAttParameters(name *string) error {
	return nil
}

func (c *jsiiProxy_CenInstances) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (c *jsiiProxy_CenInstances) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (c *jsiiProxy_CenInstances) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateCenInstances_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_CenInstances) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_CenInstances) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_CenInstances) validateSetPropsParameters(val *CenInstancesProps) error {
	return nil
}

func (j *jsiiProxy_CenInstances) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewCenInstancesParameters(scope alicloudroscdkcore.Construct, id *string, props *CenInstancesProps) error {
	return nil
}

