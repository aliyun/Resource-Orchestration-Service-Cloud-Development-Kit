//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (l *jsiiProxy_LoadBalancers) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (l *jsiiProxy_LoadBalancers) validateAddCountParameters(count interface{}) error {
	return nil
}

func (l *jsiiProxy_LoadBalancers) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (l *jsiiProxy_LoadBalancers) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (l *jsiiProxy_LoadBalancers) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (l *jsiiProxy_LoadBalancers) validateGetAttParameters(name *string) error {
	return nil
}

func (l *jsiiProxy_LoadBalancers) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (l *jsiiProxy_LoadBalancers) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (l *jsiiProxy_LoadBalancers) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateLoadBalancers_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_LoadBalancers) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_LoadBalancers) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_LoadBalancers) validateSetPropsParameters(val *LoadBalancersProps) error {
	return nil
}

func (j *jsiiProxy_LoadBalancers) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewLoadBalancersParameters(scope alicloudroscdkcore.Construct, id *string, props *LoadBalancersProps) error {
	return nil
}

