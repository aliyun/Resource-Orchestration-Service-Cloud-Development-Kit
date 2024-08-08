//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_AccountAlias) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_AccountAlias) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_AccountAlias) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_AccountAlias) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_AccountAlias) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_AccountAlias) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_AccountAlias) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_AccountAlias) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_AccountAlias) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateAccountAlias_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_AccountAlias) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_AccountAlias) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_AccountAlias) validateSetPropsParameters(val *AccountAliasProps) error {
	return nil
}

func (j *jsiiProxy_AccountAlias) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewAccountAliasParameters(scope alicloudroscdkcore.Construct, id *string, props *AccountAliasProps) error {
	return nil
}

