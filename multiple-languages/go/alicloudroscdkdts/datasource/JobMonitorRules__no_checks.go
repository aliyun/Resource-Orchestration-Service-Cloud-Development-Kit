//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (j *jsiiProxy_JobMonitorRules) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateAddCountParameters(count interface{}) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateGetAttParameters(name *string) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateJobMonitorRules_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateSetPropsParameters(val *JobMonitorRulesProps) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRules) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewJobMonitorRulesParameters(scope alicloudroscdkcore.Construct, id *string, props *JobMonitorRulesProps) error {
	return nil
}

