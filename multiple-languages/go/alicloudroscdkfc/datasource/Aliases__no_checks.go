//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_Aliases) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_Aliases) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_Aliases) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_Aliases) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_Aliases) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_Aliases) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_Aliases) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_Aliases) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_Aliases) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateAliases_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Aliases) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Aliases) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Aliases) validateSetPropsParameters(val *AliasesProps) error {
	return nil
}

func (j *jsiiProxy_Aliases) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewAliasesParameters(scope alicloudroscdkcore.Construct, id *string, props *AliasesProps) error {
	return nil
}

