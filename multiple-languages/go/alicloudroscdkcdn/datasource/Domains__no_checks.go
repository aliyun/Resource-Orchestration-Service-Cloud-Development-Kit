//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_Domains) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (d *jsiiProxy_Domains) validateAddCountParameters(count interface{}) error {
	return nil
}

func (d *jsiiProxy_Domains) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (d *jsiiProxy_Domains) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (d *jsiiProxy_Domains) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (d *jsiiProxy_Domains) validateGetAttParameters(name *string) error {
	return nil
}

func (d *jsiiProxy_Domains) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (d *jsiiProxy_Domains) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (d *jsiiProxy_Domains) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateDomains_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Domains) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Domains) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Domains) validateSetPropsParameters(val *DomainsProps) error {
	return nil
}

func (j *jsiiProxy_Domains) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewDomainsParameters(scope alicloudroscdkcore.Construct, id *string, props *DomainsProps) error {
	return nil
}

