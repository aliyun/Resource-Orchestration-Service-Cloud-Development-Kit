//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (i *jsiiProxy_Ipfilters) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (i *jsiiProxy_Ipfilters) validateAddCountParameters(count interface{}) error {
	return nil
}

func (i *jsiiProxy_Ipfilters) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (i *jsiiProxy_Ipfilters) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (i *jsiiProxy_Ipfilters) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (i *jsiiProxy_Ipfilters) validateGetAttParameters(name *string) error {
	return nil
}

func (i *jsiiProxy_Ipfilters) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (i *jsiiProxy_Ipfilters) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (i *jsiiProxy_Ipfilters) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateIpfilters_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Ipfilters) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Ipfilters) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Ipfilters) validateSetPropsParameters(val *IpfiltersProps) error {
	return nil
}

func (j *jsiiProxy_Ipfilters) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewIpfiltersParameters(scope alicloudroscdkcore.Construct, id *string, props *IpfiltersProps) error {
	return nil
}

