//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_Subscriptions) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_Subscriptions) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_Subscriptions) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_Subscriptions) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_Subscriptions) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_Subscriptions) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_Subscriptions) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_Subscriptions) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_Subscriptions) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateSubscriptions_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Subscriptions) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Subscriptions) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Subscriptions) validateSetPropsParameters(val *SubscriptionsProps) error {
	return nil
}

func (j *jsiiProxy_Subscriptions) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewSubscriptionsParameters(scope alicloudroscdkcore.Construct, id *string, props *SubscriptionsProps) error {
	return nil
}

