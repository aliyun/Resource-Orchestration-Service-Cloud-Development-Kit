//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_SecurityGroups) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_SecurityGroups) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_SecurityGroups) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_SecurityGroups) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_SecurityGroups) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_SecurityGroups) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_SecurityGroups) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_SecurityGroups) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_SecurityGroups) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateSecurityGroups_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_SecurityGroups) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_SecurityGroups) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_SecurityGroups) validateSetPropsParameters(val *SecurityGroupsProps) error {
	return nil
}

func (j *jsiiProxy_SecurityGroups) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewSecurityGroupsParameters(scope alicloudroscdkcore.Construct, id *string, props *SecurityGroupsProps) error {
	return nil
}

