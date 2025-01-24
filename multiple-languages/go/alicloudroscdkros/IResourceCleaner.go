package alicloudroscdkros

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
)

// Represents a `ResourceCleaner`.
type IResourceCleaner interface {
	alicloudroscdkcore.IResource
	// Attribute CleanResult: The cleanup result.
	//
	// Valid values:
	// - Success: All resources are cleaned up successfully.
	// - ResourceFailure: Partial resources fail to clean up.
	// - Timeout: Timeout to clean up.
	// - CheckFailure: Pre check of cleanup fails.
	// - UnknownFailure: Unexpected failure.
	// - UserCancelled: Cleanup is cancelled by user.
	// - None: Cleanup is not triggered.
	AttrCleanResult() interface{}
	// Attribute NoCleanupResourceDetails: The details of the resources that are scanned but filtered.
	//
	// Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
	// The format is the same as ResourceDetails.
	AttrNoCleanupResourceDetails() interface{}
	// Attribute NoCleanupResourcePartialDetails: The partial details of the resources that are scanned but filtered.
	//
	// Only resources with the resource types ResourceCleaner supports and the regions not filtered are scanned.
	// The format is the same as ResourcePartialDetails.
	AttrNoCleanupResourcePartialDetails() interface{}
	// Attribute ResourceDetails: The details of resources to be cleaned up.
	//
	// The value is a list of dict. The dict contains the fields below:
	// - ResourceType: Resource type of the resource.
	// - RegionId: Region ID of the resource.
	// - ResourceId: ID of the resource.
	// - ResourceName: Name of the resource.
	// - CleanupType: Cleanup type of the resource. Valid values:
	// - Normal: The resource can be deleted normally.
	// - DeleteWithInstance: The resource will be deleted with the resource it belongs to. If the resource it belongs to is filtered or excluded, the deletion probably fails. CleanupTypeReasons give more information.
	// - UnableToDelete: Unable to delete the resource. CleanupTypeReasons give more information.
	// - CleanupTypeReasons: The information of the related CleanupType.
	// - ResourceStatus: Status of the resource. Valid values:
	// - Deleting: The resource is deleting.
	// - Failure: The deletion of the resource failed.
	// - Success: The resource is deleted.
	// - Skipped: The deletion of the resource is skipped.
	// - Pending: The deletion of the resource is not started.
	// - ResourceStatusReason: The information of the related ResourceStatus.
	// - Dependencies: The resources that need to be deleted before the deletion of the resource. The value is a list of dict. The dict contains the fields below:
	// - ResourceType: Resource type of the dependency resource.
	// - RegionId: Region ID of the dependency resource.
	// - ResourceId: ID of the dependency resource.
	AttrResourceDetails() interface{}
	// Attribute ResourcePartialDetails: The partial details of resources to be cleaned up.
	//
	// The value is a list of dict. The dict contains the fields below:
	// - ResourceType: Resource type of the resource.
	// - RegionId: Region ID of the resource.
	// - ResourceId: ID of the resource.
	// - ResourceName: Name of the resource.
	// - ResourceStatus: Status of the resource. Valid values:
	// - Deleting: The resource is deleting.
	// - Failure: The deletion of the resource failed.
	// - Success: The resource is deleted.
	// - Skipped: The deletion of the resource is skipped.
	// - Pending: The deletion of the resource is not started.
	// - ResourceStatusReason: The information of the related ResourceStatus.
	AttrResourcePartialDetails() interface{}
	// Attribute ResourceSummary: The details of resources to be cleaned up.
	//
	// The value is a list of dict. The dict contains the fields below:
	// - ResourceType: Resource type of the resources.
	// - DeletingCount: Number of deleting resources of the resource type.
	// - SuccessCount: Number of deleted resources of the resource type.
	// - FailureCount: Number of resources that failed to delete of the resource type.
	// - SkippedCount: Number of skipped resources of the resource type.
	// - PendingCount: Number of resources that have not been deleted of the resource type.
	// - OtherCount: Number of other resources of the resource type.
	// - TotalCount: Number of total resources of the resource type.
	AttrResourceSummary() interface{}
	// Attribute ScanErrors: The scan errors.
	//
	// It takes effect only when property Mode is Loose.
	// The value is a list of dict. The dict contains the fields below:
	// - ResourceType: Resource type for scanning.
	// - RegionId: Region ID for scanning.
	// - ErrorMessage: Error message of scanning with specified resource type and region ID.
	AttrScanErrors() interface{}
	Props() *ResourceCleanerProps
}

// The jsii proxy for IResourceCleaner
type jsiiProxy_IResourceCleaner struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceCleaner) AttrCleanResult() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCleanResult",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceCleaner) AttrNoCleanupResourceDetails() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNoCleanupResourceDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceCleaner) AttrNoCleanupResourcePartialDetails() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNoCleanupResourcePartialDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceCleaner) AttrResourceDetails() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceCleaner) AttrResourcePartialDetails() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourcePartialDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceCleaner) AttrResourceSummary() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceSummary",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceCleaner) AttrScanErrors() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScanErrors",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceCleaner) Props() *ResourceCleanerProps {
	var returns *ResourceCleanerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

