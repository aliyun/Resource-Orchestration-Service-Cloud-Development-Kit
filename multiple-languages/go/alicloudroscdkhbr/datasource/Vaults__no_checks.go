//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (v *jsiiProxy_Vaults) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (v *jsiiProxy_Vaults) validateAddCountParameters(count interface{}) error {
	return nil
}

func (v *jsiiProxy_Vaults) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (v *jsiiProxy_Vaults) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (v *jsiiProxy_Vaults) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (v *jsiiProxy_Vaults) validateGetAttParameters(name *string) error {
	return nil
}

func (v *jsiiProxy_Vaults) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (v *jsiiProxy_Vaults) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (v *jsiiProxy_Vaults) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateVaults_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Vaults) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Vaults) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Vaults) validateSetPropsParameters(val *VaultsProps) error {
	return nil
}

func (j *jsiiProxy_Vaults) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewVaultsParameters(scope alicloudroscdkcore.Construct, id *string, props *VaultsProps) error {
	return nil
}

