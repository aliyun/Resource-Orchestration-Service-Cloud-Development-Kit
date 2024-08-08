//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (v *jsiiProxy_Vpc) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (v *jsiiProxy_Vpc) validateAddCountParameters(count interface{}) error {
	return nil
}

func (v *jsiiProxy_Vpc) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (v *jsiiProxy_Vpc) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (v *jsiiProxy_Vpc) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (v *jsiiProxy_Vpc) validateGetAttParameters(name *string) error {
	return nil
}

func (v *jsiiProxy_Vpc) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (v *jsiiProxy_Vpc) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (v *jsiiProxy_Vpc) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateVpc_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Vpc) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Vpc) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Vpc) validateSetPropsParameters(val *VpcProps) error {
	return nil
}

func (j *jsiiProxy_Vpc) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewVpcParameters(scope alicloudroscdkcore.Construct, id *string, props *VpcProps) error {
	return nil
}

