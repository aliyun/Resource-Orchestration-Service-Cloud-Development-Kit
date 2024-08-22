//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DiskReplicaGroups) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DiskReplicaGroups) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DiskReplicaGroups) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DiskReplicaGroups) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DiskReplicaGroups) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DiskReplicaGroups) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DiskReplicaGroups) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DiskReplicaGroups) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DiskReplicaGroups) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDiskReplicaGroups_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DiskReplicaGroups) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DiskReplicaGroups) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DiskReplicaGroups) validateSetPropsParameters(val *DiskReplicaGroupsProps) error {
	return nil
}

func (j *jsiiProxy_DiskReplicaGroups) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDiskReplicaGroupsParameters(scope alicloudroscdkcore.Construct, id *string, props *DiskReplicaGroupsProps) error {
	return nil
}

