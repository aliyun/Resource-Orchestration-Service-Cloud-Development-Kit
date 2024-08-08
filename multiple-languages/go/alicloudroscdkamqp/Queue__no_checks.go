//go:build no_runtime_type_checking

package alicloudroscdkamqp

// Building without runtime type checking enabled, so all the below just return nil

func (q *jsiiProxy_Queue) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (q *jsiiProxy_Queue) validateAddCountParameters(count interface{}) error {
	return nil
}

func (q *jsiiProxy_Queue) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (q *jsiiProxy_Queue) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (q *jsiiProxy_Queue) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (q *jsiiProxy_Queue) validateGetAttParameters(name *string) error {
	return nil
}

func (q *jsiiProxy_Queue) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (q *jsiiProxy_Queue) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (q *jsiiProxy_Queue) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateQueue_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Queue) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Queue) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Queue) validateSetPropsParameters(val *QueueProps) error {
	return nil
}

func (j *jsiiProxy_Queue) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewQueueParameters(scope alicloudroscdkcore.Construct, id *string, props *QueueProps) error {
	return nil
}

