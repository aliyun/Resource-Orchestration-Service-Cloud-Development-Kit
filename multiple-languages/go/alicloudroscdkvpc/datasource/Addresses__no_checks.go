//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_Addresses) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (a *jsiiProxy_Addresses) validateAddCountParameters(count interface{}) error {
	return nil
}

func (a *jsiiProxy_Addresses) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (a *jsiiProxy_Addresses) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (a *jsiiProxy_Addresses) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (a *jsiiProxy_Addresses) validateGetAttParameters(name *string) error {
	return nil
}

func (a *jsiiProxy_Addresses) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (a *jsiiProxy_Addresses) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (a *jsiiProxy_Addresses) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateAddresses_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Addresses) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Addresses) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Addresses) validateSetPropsParameters(val *AddressesProps) error {
	return nil
}

func (j *jsiiProxy_Addresses) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewAddressesParameters(scope alicloudroscdkcore.Construct, id *string, props *AddressesProps) error {
	return nil
}

