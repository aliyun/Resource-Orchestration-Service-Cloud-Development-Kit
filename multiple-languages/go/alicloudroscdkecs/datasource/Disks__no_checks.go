//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_Disks) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_Disks) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_Disks) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_Disks) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_Disks) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_Disks) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_Disks) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_Disks) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_Disks) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDisks_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Disks) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Disks) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Disks) validateSetPropsParameters(val *DisksProps) error {
	return nil
}

func (j *jsiiProxy_Disks) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDisksParameters(scope alicloudroscdkcore.Construct, id *string, props *DisksProps) error {
	return nil
}

