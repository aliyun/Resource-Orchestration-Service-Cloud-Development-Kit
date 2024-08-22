//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DrdsInstances) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DrdsInstances) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DrdsInstances) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DrdsInstances) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DrdsInstances) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DrdsInstances) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DrdsInstances) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DrdsInstances) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DrdsInstances) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDrdsInstances_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DrdsInstances) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DrdsInstances) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DrdsInstances) validateSetPropsParameters(val *DrdsInstancesProps) error {
	return nil
}

func (j *jsiiProxy_DrdsInstances) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDrdsInstancesParameters(scope alicloudroscdkcore.Construct, id *string, props *DrdsInstancesProps) error {
	return nil
}

