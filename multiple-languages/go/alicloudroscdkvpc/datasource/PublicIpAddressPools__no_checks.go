//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (p *jsiiProxy_PublicIpAddressPools) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPools) validateAddCountParameters(count interface{}) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPools) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPools) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPools) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPools) validateGetAttParameters(name *string) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPools) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPools) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPools) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validatePublicIpAddressPools_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_PublicIpAddressPools) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_PublicIpAddressPools) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_PublicIpAddressPools) validateSetPropsParameters(val *PublicIpAddressPoolsProps) error {
	return nil
}

func (j *jsiiProxy_PublicIpAddressPools) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewPublicIpAddressPoolsParameters(scope alicloudroscdkcore.Construct, id *string, props *PublicIpAddressPoolsProps) error {
	return nil
}

