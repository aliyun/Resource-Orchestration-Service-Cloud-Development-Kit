//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_Secrets) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_Secrets) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_Secrets) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_Secrets) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_Secrets) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_Secrets) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_Secrets) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_Secrets) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_Secrets) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateSecrets_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Secrets) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Secrets) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Secrets) validateSetPropsParameters(val *SecretsProps) error {
	return nil
}

func (j *jsiiProxy_Secrets) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewSecretsParameters(scope alicloudroscdkcore.Construct, id *string, props *SecretsProps) error {
	return nil
}

