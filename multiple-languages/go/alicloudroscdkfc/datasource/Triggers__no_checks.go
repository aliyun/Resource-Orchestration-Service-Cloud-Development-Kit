//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (t *jsiiProxy_Triggers) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (t *jsiiProxy_Triggers) validateAddCountParameters(count interface{}) error {
	return nil
}

func (t *jsiiProxy_Triggers) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (t *jsiiProxy_Triggers) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (t *jsiiProxy_Triggers) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (t *jsiiProxy_Triggers) validateGetAttParameters(name *string) error {
	return nil
}

func (t *jsiiProxy_Triggers) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (t *jsiiProxy_Triggers) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (t *jsiiProxy_Triggers) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateTriggers_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Triggers) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Triggers) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Triggers) validateSetPropsParameters(val *TriggersProps) error {
	return nil
}

func (j *jsiiProxy_Triggers) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewTriggersParameters(scope alicloudroscdkcore.Construct, id *string, props *TriggersProps) error {
	return nil
}

