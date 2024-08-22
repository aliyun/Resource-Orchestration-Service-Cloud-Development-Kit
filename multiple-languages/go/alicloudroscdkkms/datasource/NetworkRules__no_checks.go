//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (n *jsiiProxy_NetworkRules) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (n *jsiiProxy_NetworkRules) validateAddCountParameters(count interface{}) error {
	return nil
}

func (n *jsiiProxy_NetworkRules) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (n *jsiiProxy_NetworkRules) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (n *jsiiProxy_NetworkRules) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (n *jsiiProxy_NetworkRules) validateGetAttParameters(name *string) error {
	return nil
}

func (n *jsiiProxy_NetworkRules) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (n *jsiiProxy_NetworkRules) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (n *jsiiProxy_NetworkRules) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateNetworkRules_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_NetworkRules) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_NetworkRules) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_NetworkRules) validateSetPropsParameters(val *NetworkRulesProps) error {
	return nil
}

func (j *jsiiProxy_NetworkRules) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewNetworkRulesParameters(scope alicloudroscdkcore.Construct, id *string, props *NetworkRulesProps) error {
	return nil
}

