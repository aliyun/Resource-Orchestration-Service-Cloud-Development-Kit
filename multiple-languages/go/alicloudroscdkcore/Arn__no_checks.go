//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func validateArn_ExtractResourceNameParameters(arn *string, resourceType *string) error {
	return nil
}

func validateArn_FormatParameters(components *ArnComponents) error {
	return nil
}

func validateArn_SplitParameters(arn interface{}, arnFormat ArnFormat) error {
	return nil
}

