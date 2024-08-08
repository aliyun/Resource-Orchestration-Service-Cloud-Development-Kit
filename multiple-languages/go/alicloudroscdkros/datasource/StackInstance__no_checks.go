//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_StackInstance) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_StackInstance) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_StackInstance) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_StackInstance) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_StackInstance) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_StackInstance) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_StackInstance) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_StackInstance) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_StackInstance) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateStackInstance_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_StackInstance) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_StackInstance) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_StackInstance) validateSetPropsParameters(val *StackInstanceProps) error {
	return nil
}

func (j *jsiiProxy_StackInstance) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewStackInstanceParameters(scope alicloudroscdkcore.Construct, id *string, props *StackInstanceProps) error {
	return nil
}

