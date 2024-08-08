//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_Accounts) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_Accounts) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_Accounts) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_Accounts) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_Accounts) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_Accounts) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_Accounts) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_Accounts) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_Accounts) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateAccounts_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Accounts) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Accounts) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Accounts) validateSetPropsParameters(val *AccountsProps) error {
	return nil
}

func (j *jsiiProxy_Accounts) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewAccountsParameters(scope alicloudroscdkcore.Construct, id *string, props *AccountsProps) error {
	return nil
}

