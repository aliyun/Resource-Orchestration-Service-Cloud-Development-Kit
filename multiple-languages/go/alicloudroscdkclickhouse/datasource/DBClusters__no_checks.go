//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DBClusters) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DBClusters) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DBClusters) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DBClusters) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DBClusters) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DBClusters) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DBClusters) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DBClusters) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DBClusters) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDBClusters_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DBClusters) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DBClusters) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DBClusters) validateSetPropsParameters(val *DBClustersProps) error {
	return nil
}

func (j *jsiiProxy_DBClusters) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDBClustersParameters(scope alicloudroscdkcore.Construct, id *string, props *DBClustersProps) error {
	return nil
}

