//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_AlarmContact) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_AlarmContact) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_AlarmContact) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_AlarmContact) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_AlarmContact) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_AlarmContact) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_AlarmContact) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_AlarmContact) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_AlarmContact) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateAlarmContact_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_AlarmContact) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_AlarmContact) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_AlarmContact) validateSetPropsParameters(val *AlarmContactProps) error {
	return nil
}

func (j *jsiiProxy_AlarmContact) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewAlarmContactParameters(scope alicloudroscdkcore.Construct, id *string, props *AlarmContactProps) error {
	return nil
}

