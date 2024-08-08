//go:build no_runtime_type_checking

package datasource

// Building without runtime type checking enabled, so all the below just return nil

func (i *jsiiProxy_Images) validateAddConditionParameters(condition alicloudroscdkcore.RosCondition) error {
	return nil
}

func (i *jsiiProxy_Images) validateAddCountParameters(count interface{}) error {
	return nil
}

func (i *jsiiProxy_Images) validateAddDependencyParameters(resource alicloudroscdkcore.Resource) error {
	return nil
}

func (i *jsiiProxy_Images) validateAddResourceDescParameters(desc *string) error {
	return nil
}

func (i *jsiiProxy_Images) validateApplyRemovalPolicyParameters(policy alicloudroscdkcore.RemovalPolicy) error {
	return nil
}

func (i *jsiiProxy_Images) validateGetAttParameters(name *string) error {
	return nil
}

func (i *jsiiProxy_Images) validateOnSynthesizeParameters(session constructs.ISynthesisSession) error {
	return nil
}

func (i *jsiiProxy_Images) validateSetMetadataParameters(key *string, value interface{}) error {
	return nil
}

func (i *jsiiProxy_Images) validateSynthesizeParameters(session alicloudroscdkcore.ISynthesisSession) error {
	return nil
}

func validateImages_IsConstructParameters(x interface{}) error {
	return nil
}

func (j *jsiiProxy_Images) validateSetEnableResourcePropertyConstraintParameters(val *bool) error {
	return nil
}

func (j *jsiiProxy_Images) validateSetIdParameters(val *string) error {
	return nil
}

func (j *jsiiProxy_Images) validateSetPropsParameters(val *ImagesProps) error {
	return nil
}

func (j *jsiiProxy_Images) validateSetScopeParameters(val alicloudroscdkcore.Construct) error {
	return nil
}

func validateNewImagesParameters(scope alicloudroscdkcore.Construct, id *string, props *ImagesProps) error {
	return nil
}

