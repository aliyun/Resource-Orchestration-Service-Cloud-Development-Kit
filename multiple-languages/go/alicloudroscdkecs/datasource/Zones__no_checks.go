//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (z *jsiiProxy_Zones) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (z *jsiiProxy_Zones) validateAddCountParameters(count interface{}) error {
	return nil
}

func (z *jsiiProxy_Zones) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (z *jsiiProxy_Zones) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (z *jsiiProxy_Zones) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (z *jsiiProxy_Zones) validateGetAttParameters(name *string) error {
	return nil
}

func (z *jsiiProxy_Zones) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (z *jsiiProxy_Zones) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (z *jsiiProxy_Zones) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateZones_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Zones) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Zones) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Zones) validateSetPropsParameters(val *ZonesProps) error {
	return nil
}

func (j *jsiiProxy_Zones) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewZonesParameters(scope alicloudroscdkcore.Construct, id *string, props *ZonesProps) error {
	return nil
}

