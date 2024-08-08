//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (f *jsiiProxy_Functions) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (f *jsiiProxy_Functions) validateAddCountParameters(count interface{}) error {
	return nil
}

func (f *jsiiProxy_Functions) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (f *jsiiProxy_Functions) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (f *jsiiProxy_Functions) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (f *jsiiProxy_Functions) validateGetAttParameters(name *string) error {
	return nil
}

func (f *jsiiProxy_Functions) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (f *jsiiProxy_Functions) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (f *jsiiProxy_Functions) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateFunctions_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Functions) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Functions) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Functions) validateSetPropsParameters(val *FunctionsProps) error {
	return nil
}

func (j *jsiiProxy_Functions) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewFunctionsParameters(scope alicloudroscdkcore.Construct, id *string, props *FunctionsProps) error {
	return nil
}

