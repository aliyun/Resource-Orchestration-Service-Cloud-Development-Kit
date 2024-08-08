//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (f *jsiiProxy_Flows) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (f *jsiiProxy_Flows) validateAddCountParameters(count interface{}) error {
	return nil
}

func (f *jsiiProxy_Flows) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (f *jsiiProxy_Flows) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (f *jsiiProxy_Flows) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (f *jsiiProxy_Flows) validateGetAttParameters(name *string) error {
	return nil
}

func (f *jsiiProxy_Flows) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (f *jsiiProxy_Flows) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (f *jsiiProxy_Flows) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateFlows_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Flows) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Flows) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Flows) validateSetPropsParameters(val *FlowsProps) error {
	return nil
}

func (j *jsiiProxy_Flows) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewFlowsParameters(scope alicloudroscdkcore.Construct, id *string, props *FlowsProps) error {
	return nil
}

