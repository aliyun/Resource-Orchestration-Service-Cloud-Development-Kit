//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DomainRecords) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_DomainRecords) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_DomainRecords) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_DomainRecords) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_DomainRecords) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_DomainRecords) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_DomainRecords) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_DomainRecords) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_DomainRecords) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDomainRecords_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_DomainRecords) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_DomainRecords) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_DomainRecords) validateSetPropsParameters(val *DomainRecordsProps) error {
	return nil
}

func (j *jsiiProxy_DomainRecords) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDomainRecordsParameters(scope alicloudroscdkcore.Construct, id *string, props *DomainRecordsProps) error {
	return nil
}

