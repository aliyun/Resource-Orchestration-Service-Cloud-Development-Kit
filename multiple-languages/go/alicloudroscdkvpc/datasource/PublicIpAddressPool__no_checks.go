//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (p *jsiiProxy_PublicIpAddressPool) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPool) validateAddCountParameters(count interface{}) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPool) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPool) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPool) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPool) validateGetAttParameters(name *string) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPool) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPool) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (p *jsiiProxy_PublicIpAddressPool) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validatePublicIpAddressPool_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_PublicIpAddressPool) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_PublicIpAddressPool) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_PublicIpAddressPool) validateSetPropsParameters(val *PublicIpAddressPoolProps) error {
	return nil
}

func (j *jsiiProxy_PublicIpAddressPool) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewPublicIpAddressPoolParameters(scope alicloudroscdkcore.Construct, id *string, props *PublicIpAddressPoolProps) error {
	return nil
}

