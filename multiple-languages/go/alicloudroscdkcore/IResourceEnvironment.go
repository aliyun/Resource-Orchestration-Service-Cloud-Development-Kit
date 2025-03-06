package alicloudroscdkcore

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

type IResourceEnvironment interface {
	// The Alibaba Cloud account ID that this resource belongs to.
	//
	// Since this can be a Token
	// (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
	// make sure to use Token.compareStrings()
	// instead of just comparing the values for equality.
	Account() *string
	// The Alibaba Cloud region that this resource belongs to.
	//
	// Since this can be a Token
	// (for example, when the region is ROS's ALIYUN::Region intrinsic),
	// make sure to use Token.compareStrings()
	// instead of just comparing the values for equality.
	Region() *string
}

// The jsii proxy for IResourceEnvironment
type jsiiProxy_IResourceEnvironment struct {
	_ byte // padding
}

func (j *jsiiProxy_IResourceEnvironment) Account() *string {
	var returns *string
	_jsii_.Get(
		j,
		"account",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceEnvironment) Region() *string {
	var returns *string
	_jsii_.Get(
		j,
		"region",
		&returns,
	)
	return returns
}

