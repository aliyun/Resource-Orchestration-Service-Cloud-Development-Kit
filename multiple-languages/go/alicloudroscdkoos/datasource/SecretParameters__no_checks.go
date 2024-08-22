//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_SecretParameters) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_SecretParameters) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_SecretParameters) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_SecretParameters) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_SecretParameters) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_SecretParameters) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_SecretParameters) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_SecretParameters) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_SecretParameters) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateSecretParameters_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_SecretParameters) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_SecretParameters) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_SecretParameters) validateSetPropsParameters(val *SecretParametersProps) error {
	return nil
}

func (j *jsiiProxy_SecretParameters) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewSecretParametersParameters(scope alicloudroscdkcore.Construct, id *string, props *SecretParametersProps) error {
	return nil
}

