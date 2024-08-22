//go:build no_runtime_type_checking

package alicloudroscdkossdeployment

// Building without runtime type checking enabled, so all the below just return nil

func validateSource_AssetParameters(path *string, options *alicloudroscdkossassets.AssetOptions) error {
	return nil
}

func validateSource_BucketParameters(bucket interface{}, objectKey interface{}) error {
	return nil
}

func validateSource_DataParameters(objectKey *string, data *string) error {
	return nil
}

func validateSource_JsonDataParameters(objectKey *string, obj interface{}) error {
	return nil
}

