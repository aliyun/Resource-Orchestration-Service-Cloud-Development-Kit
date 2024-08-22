//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (k *jsiiProxy_KeyPairs) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (k *jsiiProxy_KeyPairs) validateAddCountParameters(count interface{}) error {
	return nil
}

func (k *jsiiProxy_KeyPairs) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (k *jsiiProxy_KeyPairs) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (k *jsiiProxy_KeyPairs) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (k *jsiiProxy_KeyPairs) validateGetAttParameters(name *string) error {
	return nil
}

func (k *jsiiProxy_KeyPairs) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (k *jsiiProxy_KeyPairs) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (k *jsiiProxy_KeyPairs) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateKeyPairs_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_KeyPairs) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_KeyPairs) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_KeyPairs) validateSetPropsParameters(val *KeyPairsProps) error {
	return nil
}

func (j *jsiiProxy_KeyPairs) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewKeyPairsParameters(scope alicloudroscdkcore.Construct, id *string, props *KeyPairsProps) error {
	return nil
}

