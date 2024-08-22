//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (m *jsiiProxy_MonitorGroups) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (m *jsiiProxy_MonitorGroups) validateAddCountParameters(count interface{}) error {
	return nil
}

func (m *jsiiProxy_MonitorGroups) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (m *jsiiProxy_MonitorGroups) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (m *jsiiProxy_MonitorGroups) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (m *jsiiProxy_MonitorGroups) validateGetAttParameters(name *string) error {
	return nil
}

func (m *jsiiProxy_MonitorGroups) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (m *jsiiProxy_MonitorGroups) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (m *jsiiProxy_MonitorGroups) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateMonitorGroups_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_MonitorGroups) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_MonitorGroups) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_MonitorGroups) validateSetPropsParameters(val *MonitorGroupsProps) error {
	return nil
}

func (j *jsiiProxy_MonitorGroups) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewMonitorGroupsParameters(scope alicloudroscdkcore.Construct, id *string, props *MonitorGroupsProps) error {
	return nil
}

