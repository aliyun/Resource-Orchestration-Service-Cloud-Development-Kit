package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `PrefixList`.
type IPrefixList interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the prefix list was created.
	AttrCreateTime() interface{}
	// Attribute Entries: The CIDR address block list of the prefix list.
	AttrEntries() interface{}
	// Attribute IpVersion: The IP version of the prefix list.
	AttrIpVersion() interface{}
	// Attribute MaxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
	AttrMaxEntries() interface{}
	// Attribute OwnerId: The Alibaba Cloud account (primary account) to which the prefix list belongs.
	AttrOwnerId() interface{}
	// Attribute PrefixListDescription: The description of the prefix list.
	AttrPrefixListDescription() interface{}
	// Attribute PrefixListId: The ID of the query Prefix List.
	AttrPrefixListId() interface{}
	// Attribute PrefixListName: The name of the prefix list.
	AttrPrefixListName() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
	AttrResourceGroupId() interface{}
	// Attribute ShareType: The share type of the prefix list.
	AttrShareType() interface{}
	// Attribute Tags: The tags of PrefixList.
	AttrTags() interface{}
	Props() *PrefixListProps
}

// The jsii proxy for IPrefixList
type jsiiProxy_IPrefixList struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPrefixList) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) AttrEntries() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEntries",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) AttrIpVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) AttrMaxEntries() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxEntries",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) AttrOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) AttrPrefixListDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrefixListDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) AttrPrefixListId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrefixListId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) AttrPrefixListName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrefixListName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) AttrShareType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrShareType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrefixList) Props() *PrefixListProps {
	var returns *PrefixListProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

