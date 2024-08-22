//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_Subscription) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_Subscription) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_Subscription) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_Subscription) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_Subscription) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_Subscription) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_Subscription) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_Subscription) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_Subscription) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateSubscription_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Subscription) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Subscription) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Subscription) validateSetPropsParameters(val *SubscriptionProps) error {
	return nil
}

func (j *jsiiProxy_Subscription) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewSubscriptionParameters(scope alicloudroscdkcore.Construct, id *string, props *SubscriptionProps) error {
	return nil
}

