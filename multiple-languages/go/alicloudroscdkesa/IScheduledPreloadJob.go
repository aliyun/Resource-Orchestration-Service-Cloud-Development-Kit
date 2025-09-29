package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `ScheduledPreloadJob`.
type IScheduledPreloadJob interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the task was created.
	AttrCreateTime() interface{}
	// Attribute Domains: The domain names to be prefetched.
	AttrDomains() interface{}
	// Attribute ErrorInfo: The error message.
	AttrErrorInfo() interface{}
	// Attribute FailedFileOss: OSS address of failed file.
	AttrFailedFileOss() interface{}
	// Attribute FileId: The ID of the URL list file, which can be used during downloads.
	AttrFileId() interface{}
	// Attribute InsertWay: The method to submit the URLs to be prefetched.
	AttrInsertWay() interface{}
	// Attribute ScheduledPreloadJobId: The ID of the prefetch task.
	AttrScheduledPreloadJobId() interface{}
	// Attribute ScheduledPreloadJobName: The task name.
	AttrScheduledPreloadJobName() interface{}
	// Attribute SiteId: The site ID.
	AttrSiteId() interface{}
	// Attribute TaskSubmitted: The number of submitted prefetch tasks.
	AttrTaskSubmitted() interface{}
	// Attribute TaskType: The task type.
	//
	// Valid values: refresh and preload.
	AttrTaskType() interface{}
	// Attribute UrlCount: The total number of URLs.
	AttrUrlCount() interface{}
	// Attribute UrlSubmitted: The number of submitted URLs.
	AttrUrlSubmitted() interface{}
	Props() *ScheduledPreloadJobProps
}

// The jsii proxy for IScheduledPreloadJob
type jsiiProxy_IScheduledPreloadJob struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrDomains() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomains",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrErrorInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrErrorInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrFailedFileOss() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFailedFileOss",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrFileId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrInsertWay() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInsertWay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrScheduledPreloadJobId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduledPreloadJobId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrScheduledPreloadJobName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScheduledPreloadJobName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrTaskSubmitted() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskSubmitted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrTaskType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTaskType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrUrlCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUrlCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) AttrUrlSubmitted() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUrlSubmitted",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScheduledPreloadJob) Props() *ScheduledPreloadJobProps {
	var returns *ScheduledPreloadJobProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

