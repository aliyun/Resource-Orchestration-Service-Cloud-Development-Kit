//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_Schedules) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_Schedules) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_Schedules) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_Schedules) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_Schedules) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_Schedules) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_Schedules) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_Schedules) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_Schedules) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateSchedules_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Schedules) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Schedules) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Schedules) validateSetPropsParameters(val *SchedulesProps) error {
	return nil
}

func (j *jsiiProxy_Schedules) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewSchedulesParameters(scope alicloudroscdkcore.Construct, id *string, props *SchedulesProps) error {
	return nil
}

