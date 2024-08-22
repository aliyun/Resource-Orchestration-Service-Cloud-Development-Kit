//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (c *jsiiProxy_ConsumerGroups) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (c *jsiiProxy_ConsumerGroups) validateAddCountParameters(count interface{}) error {
	return nil
}

func (c *jsiiProxy_ConsumerGroups) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (c *jsiiProxy_ConsumerGroups) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (c *jsiiProxy_ConsumerGroups) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (c *jsiiProxy_ConsumerGroups) validateGetAttParameters(name *string) error {
	return nil
}

func (c *jsiiProxy_ConsumerGroups) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (c *jsiiProxy_ConsumerGroups) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (c *jsiiProxy_ConsumerGroups) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateConsumerGroups_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_ConsumerGroups) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_ConsumerGroups) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_ConsumerGroups) validateSetPropsParameters(val *ConsumerGroupsProps) error {
	return nil
}

func (j *jsiiProxy_ConsumerGroups) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewConsumerGroupsParameters(scope alicloudroscdkcore.Construct, id *string, props *ConsumerGroupsProps) error {
	return nil
}

