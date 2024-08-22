//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (q *jsiiProxy_Queues) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (q *jsiiProxy_Queues) validateAddCountParameters(count interface{}) error {
	return nil
}

func (q *jsiiProxy_Queues) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (q *jsiiProxy_Queues) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (q *jsiiProxy_Queues) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (q *jsiiProxy_Queues) validateGetAttParameters(name *string) error {
	return nil
}

func (q *jsiiProxy_Queues) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (q *jsiiProxy_Queues) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (q *jsiiProxy_Queues) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateQueues_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Queues) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Queues) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Queues) validateSetPropsParameters(val *QueuesProps) error {
	return nil
}

func (j *jsiiProxy_Queues) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewQueuesParameters(scope alicloudroscdkcore.Construct, id *string, props *QueuesProps) error {
	return nil
}

