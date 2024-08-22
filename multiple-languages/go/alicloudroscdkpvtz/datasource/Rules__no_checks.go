//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_Rules) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_Rules) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_Rules) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (r *jsiiProxy_Rules) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_Rules) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (r *jsiiProxy_Rules) validateGetAttParameters(name *string) error {
	return nil
}

func (r *jsiiProxy_Rules) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_Rules) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_Rules) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateRules_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Rules) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Rules) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Rules) validateSetPropsParameters(val *RulesProps) error {
	return nil
}

func (j *jsiiProxy_Rules) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewRulesParameters(scope alicloudroscdkcore.Construct, id *string, props *RulesProps) error {
	return nil
}

