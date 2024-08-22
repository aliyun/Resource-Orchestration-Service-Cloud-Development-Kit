//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (t *jsiiProxy_Topics) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (t *jsiiProxy_Topics) validateAddCountParameters(count interface{}) error {
	return nil
}

func (t *jsiiProxy_Topics) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (t *jsiiProxy_Topics) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (t *jsiiProxy_Topics) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (t *jsiiProxy_Topics) validateGetAttParameters(name *string) error {
	return nil
}

func (t *jsiiProxy_Topics) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (t *jsiiProxy_Topics) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (t *jsiiProxy_Topics) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateTopics_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Topics) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Topics) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Topics) validateSetPropsParameters(val *TopicsProps) error {
	return nil
}

func (j *jsiiProxy_Topics) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewTopicsParameters(scope alicloudroscdkcore.Construct, id *string, props *TopicsProps) error {
	return nil
}

