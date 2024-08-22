//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (n *jsiiProxy_NetworkRule) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (n *jsiiProxy_NetworkRule) validateAddCountParameters(count interface{}) error {
	return nil
}

func (n *jsiiProxy_NetworkRule) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (n *jsiiProxy_NetworkRule) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (n *jsiiProxy_NetworkRule) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (n *jsiiProxy_NetworkRule) validateGetAttParameters(name *string) error {
	return nil
}

func (n *jsiiProxy_NetworkRule) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (n *jsiiProxy_NetworkRule) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (n *jsiiProxy_NetworkRule) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateNetworkRule_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_NetworkRule) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_NetworkRule) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_NetworkRule) validateSetPropsParameters(val *NetworkRuleProps) error {
	return nil
}

func (j *jsiiProxy_NetworkRule) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewNetworkRuleParameters(scope alicloudroscdkcore.Construct, id *string, props *NetworkRuleProps) error {
	return nil
}

