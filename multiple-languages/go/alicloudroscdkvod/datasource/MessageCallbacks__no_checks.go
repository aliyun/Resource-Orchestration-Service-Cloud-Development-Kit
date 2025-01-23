//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (m *jsiiProxy_MessageCallbacks) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (m *jsiiProxy_MessageCallbacks) validateAddCountParameters(count interface{}) error {
	return nil
}

func (m *jsiiProxy_MessageCallbacks) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (m *jsiiProxy_MessageCallbacks) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (m *jsiiProxy_MessageCallbacks) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (m *jsiiProxy_MessageCallbacks) validateGetAttParameters(name *string) error {
	return nil
}

func (m *jsiiProxy_MessageCallbacks) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (m *jsiiProxy_MessageCallbacks) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (m *jsiiProxy_MessageCallbacks) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateMessageCallbacks_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_MessageCallbacks) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_MessageCallbacks) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_MessageCallbacks) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewMessageCallbacksParameters(scope alicloudroscdkcore.Construct, id *string, props *MessageCallbacksProps) error {
	return nil
}

