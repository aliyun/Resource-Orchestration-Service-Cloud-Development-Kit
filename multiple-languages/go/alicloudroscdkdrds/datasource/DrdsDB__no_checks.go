//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DrdsDB) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DrdsDB) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DrdsDB) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DrdsDB) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DrdsDB) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DrdsDB) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DrdsDB) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DrdsDB) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DrdsDB) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDrdsDB_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DrdsDB) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DrdsDB) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DrdsDB) validateSetPropsParameters(val *DrdsDBProps) error {
	return nil
}

func (j *jsiiProxy_DrdsDB) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDrdsDBParameters(scope alicloudroscdkcore.Construct, id *string, props *DrdsDBProps) error {
	return nil
}

