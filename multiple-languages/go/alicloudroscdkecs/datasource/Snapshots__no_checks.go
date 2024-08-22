//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (s *jsiiProxy_Snapshots) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (s *jsiiProxy_Snapshots) validateAddCountParameters(count interface{}) error {
	return nil
}

func (s *jsiiProxy_Snapshots) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (s *jsiiProxy_Snapshots) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (s *jsiiProxy_Snapshots) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (s *jsiiProxy_Snapshots) validateGetAttParameters(name *string) error {
	return nil
}

func (s *jsiiProxy_Snapshots) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (s *jsiiProxy_Snapshots) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (s *jsiiProxy_Snapshots) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateSnapshots_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Snapshots) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Snapshots) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Snapshots) validateSetPropsParameters(val *SnapshotsProps) error {
	return nil
}

func (j *jsiiProxy_Snapshots) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewSnapshotsParameters(scope alicloudroscdkcore.Construct, id *string, props *SnapshotsProps) error {
	return nil
}

