//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (j *jsiiProxy_JobMonitorRule) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRule) validateAddCountParameters(count interface{}) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRule) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRule) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRule) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRule) validateGetAttParameters(name *string) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRule) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRule) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRule) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateJobMonitorRule_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRule) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRule) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_JobMonitorRule) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewJobMonitorRuleParameters(scope alicloudroscdkcore.Construct, id *string, props *JobMonitorRuleProps) error {
	return nil
}

