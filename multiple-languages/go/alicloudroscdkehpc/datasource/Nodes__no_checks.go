//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (n *jsiiProxy_Nodes) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (n *jsiiProxy_Nodes) validateAddCountParameters(count interface{}) error {
	return nil
}

func (n *jsiiProxy_Nodes) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (n *jsiiProxy_Nodes) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (n *jsiiProxy_Nodes) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (n *jsiiProxy_Nodes) validateGetAttParameters(name *string) error {
	return nil
}

func (n *jsiiProxy_Nodes) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (n *jsiiProxy_Nodes) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (n *jsiiProxy_Nodes) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateNodes_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Nodes) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Nodes) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Nodes) validateSetPropsParameters(val *NodesProps) error {
	return nil
}

func (j *jsiiProxy_Nodes) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewNodesParameters(scope alicloudroscdkcore.Construct, id *string, props *NodesProps) error {
	return nil
}

