//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (p *jsiiProxy_PrefixLists) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (p *jsiiProxy_PrefixLists) validateAddCountParameters(count interface{}) error {
	return nil
}

func (p *jsiiProxy_PrefixLists) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (p *jsiiProxy_PrefixLists) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (p *jsiiProxy_PrefixLists) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (p *jsiiProxy_PrefixLists) validateGetAttParameters(name *string) error {
	return nil
}

func (p *jsiiProxy_PrefixLists) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (p *jsiiProxy_PrefixLists) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (p *jsiiProxy_PrefixLists) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validatePrefixLists_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_PrefixLists) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_PrefixLists) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_PrefixLists) validateSetPropsParameters(val *PrefixListsProps) error {
	return nil
}

func (j *jsiiProxy_PrefixLists) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewPrefixListsParameters(scope alicloudroscdkcore.Construct, id *string, props *PrefixListsProps) error {
	return nil
}

