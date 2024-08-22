//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_AlarmContacts) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_AlarmContacts) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_AlarmContacts) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_AlarmContacts) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_AlarmContacts) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_AlarmContacts) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_AlarmContacts) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_AlarmContacts) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_AlarmContacts) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateAlarmContacts_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_AlarmContacts) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_AlarmContacts) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_AlarmContacts) validateSetPropsParameters(val *AlarmContactsProps) error {
	return nil
}

func (j *jsiiProxy_AlarmContacts) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewAlarmContactsParameters(scope alicloudroscdkcore.Construct, id *string, props *AlarmContactsProps) error {
	return nil
}

