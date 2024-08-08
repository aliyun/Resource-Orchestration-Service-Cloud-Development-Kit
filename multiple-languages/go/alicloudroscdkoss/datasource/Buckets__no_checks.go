//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (b *jsiiProxy_Buckets) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (b *jsiiProxy_Buckets) validateAddCountParameters(count interface{}) error {
	return nil
}

func (b *jsiiProxy_Buckets) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (b *jsiiProxy_Buckets) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (b *jsiiProxy_Buckets) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (b *jsiiProxy_Buckets) validateGetAttParameters(name *string) error {
	return nil
}

func (b *jsiiProxy_Buckets) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (b *jsiiProxy_Buckets) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (b *jsiiProxy_Buckets) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateBuckets_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Buckets) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Buckets) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Buckets) validateSetPropsParameters(val *BucketsProps) error {
	return nil
}

func (j *jsiiProxy_Buckets) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewBucketsParameters(scope alicloudroscdkcore.Construct, id *string, props *BucketsProps) error {
	return nil
}

