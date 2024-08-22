//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_Address) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_Address) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_Address) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_Address) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_Address) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_Address) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_Address) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_Address) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_Address) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateAddress_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Address) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Address) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Address) validateSetPropsParameters(val *AddressProps) error {
	return nil
}

func (j *jsiiProxy_Address) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewAddressParameters(scope alicloudroscdkcore.Construct, id *string, props *AddressProps) error {
	return nil
}

