//go:build !no_runtime_type_checking

package alicloudroscdkossdeployment

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkossassets"
)

func validateSource_AssetParameters(path *string, options *alicloudroscdkossassets.AssetOptions) error {
	if path == nil {
		return fmt.Errorf("parameter path is required, but nil was provided")
	}

	if err := _jsii_.ValidateStruct(options, func() string { return "parameter options" }); err != nil {
		return err
	}

	return nil
}

func validateSource_BucketParameters(bucket interface{}, objectKey interface{}) error {
	if bucket == nil {
		return fmt.Errorf("parameter bucket is required, but nil was provided")
	}
	switch bucket.(type) {
	case *string:
		// ok
	case string:
		// ok
	case alicloudroscdkcore.IResolvable:
		// ok
	case alicloudroscdkoss.Bucket:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(bucket) {
			return fmt.Errorf("parameter bucket must be one of the allowed types: *string, alicloudroscdkcore.IResolvable, alicloudroscdkoss.Bucket; received %#v (a %T)", bucket, bucket)
		}
	}

	if objectKey == nil {
		return fmt.Errorf("parameter objectKey is required, but nil was provided")
	}
	switch objectKey.(type) {
	case *string:
		// ok
	case string:
		// ok
	case alicloudroscdkcore.IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(objectKey) {
			return fmt.Errorf("parameter objectKey must be one of the allowed types: *string, alicloudroscdkcore.IResolvable; received %#v (a %T)", objectKey, objectKey)
		}
	}

	return nil
}

func validateSource_DataParameters(objectKey *string, data *string) error {
	if objectKey == nil {
		return fmt.Errorf("parameter objectKey is required, but nil was provided")
	}

	if data == nil {
		return fmt.Errorf("parameter data is required, but nil was provided")
	}

	return nil
}

func validateSource_JsonDataParameters(objectKey *string, obj interface{}) error {
	if objectKey == nil {
		return fmt.Errorf("parameter objectKey is required, but nil was provided")
	}

	if obj == nil {
		return fmt.Errorf("parameter obj is required, but nil was provided")
	}

	return nil
}

