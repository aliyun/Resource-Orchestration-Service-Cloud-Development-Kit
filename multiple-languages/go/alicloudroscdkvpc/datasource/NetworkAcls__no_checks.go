//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (n *jsiiProxy_NetworkAcls) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (n *jsiiProxy_NetworkAcls) validateAddCountParameters(count interface{}) error {
	return nil
}

func (n *jsiiProxy_NetworkAcls) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (n *jsiiProxy_NetworkAcls) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (n *jsiiProxy_NetworkAcls) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (n *jsiiProxy_NetworkAcls) validateGetAttParameters(name *string) error {
	return nil
}

func (n *jsiiProxy_NetworkAcls) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (n *jsiiProxy_NetworkAcls) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (n *jsiiProxy_NetworkAcls) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateNetworkAcls_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_NetworkAcls) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_NetworkAcls) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_NetworkAcls) validateSetPropsParameters(val *NetworkAclsProps) error {
	return nil
}

func (j *jsiiProxy_NetworkAcls) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewNetworkAclsParameters(scope alicloudroscdkcore.Construct, id *string, props *NetworkAclsProps) error {
	return nil
}

