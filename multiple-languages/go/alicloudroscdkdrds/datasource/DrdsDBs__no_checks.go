//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DrdsDBs) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DrdsDBs) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DrdsDBs) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DrdsDBs) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DrdsDBs) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DrdsDBs) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DrdsDBs) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DrdsDBs) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DrdsDBs) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDrdsDBs_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DrdsDBs) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DrdsDBs) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DrdsDBs) validateSetPropsParameters(val *DrdsDBsProps) error {
	return nil
}

func (j *jsiiProxy_DrdsDBs) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDrdsDBsParameters(scope alicloudroscdkcore.Construct, id *string, props *DrdsDBsProps) error {
	return nil
}

