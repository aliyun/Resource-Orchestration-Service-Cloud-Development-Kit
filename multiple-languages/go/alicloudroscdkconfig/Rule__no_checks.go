//go:build no_runtime_type_checking

package alicloudroscdkconfig

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_Rule) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (r *jsiiProxy_Rule) validateAddCountParameters(count interface{}) error {
	return nil
}

func (r *jsiiProxy_Rule) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (r *jsiiProxy_Rule) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (r *jsiiProxy_Rule) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (r *jsiiProxy_Rule) validateGetAttParameters(name *string) error {
	return nil
}

func (r *jsiiProxy_Rule) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (r *jsiiProxy_Rule) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (r *jsiiProxy_Rule) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateRule_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Rule) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Rule) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Rule) validateSetPropsParameters(val *RuleProps) error {
	return nil
}

func (j *jsiiProxy_Rule) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewRuleParameters(scope alicloudroscdkcore.Construct, id *string, props *RuleProps) error {
	return nil
}

