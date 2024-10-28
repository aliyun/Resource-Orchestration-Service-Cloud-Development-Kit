//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (l *jsiiProxy_LoadBalancerTCPListener) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (l *jsiiProxy_LoadBalancerTCPListener) validateAddCountParameters(count interface{}) error {
	return nil
}

func (l *jsiiProxy_LoadBalancerTCPListener) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (l *jsiiProxy_LoadBalancerTCPListener) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (l *jsiiProxy_LoadBalancerTCPListener) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (l *jsiiProxy_LoadBalancerTCPListener) validateGetAttParameters(name *string) error {
	return nil
}

func (l *jsiiProxy_LoadBalancerTCPListener) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (l *jsiiProxy_LoadBalancerTCPListener) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (l *jsiiProxy_LoadBalancerTCPListener) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateLoadBalancerTCPListener_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_LoadBalancerTCPListener) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_LoadBalancerTCPListener) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_LoadBalancerTCPListener) validateSetPropsParameters(val *LoadBalancerTCPListenerProps) error {
	return nil
}

func (j *jsiiProxy_LoadBalancerTCPListener) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewLoadBalancerTCPListenerParameters(scope alicloudroscdkcore.Construct, id *string, props *LoadBalancerTCPListenerProps) error {
	return nil
}
