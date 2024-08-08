//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_Account) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_Account) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_Account) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_Account) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_Account) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_Account) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_Account) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_Account) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_Account) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateAccount_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Account) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Account) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Account) validateSetPropsParameters(val *AccountProps) error {
	return nil
}

func (j *jsiiProxy_Account) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewAccountParameters(scope alicloudroscdkcore.Construct, id *string, props *AccountProps) error {
	return nil
}

