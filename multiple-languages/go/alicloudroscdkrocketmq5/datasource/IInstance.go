package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq5/datasource/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute AccountInfo: The account information.
	AttrAccountInfo() interface{}
	// Attribute AclInfo: The information about access control.
	AttrAclInfo() interface{}
	// Attribute Bid: The business ID (BID) of the commodity.
	AttrBid() interface{}
	// Attribute CommodityCode: The commodity code of the instance.
	//
	// The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
	AttrCommodityCode() interface{}
	// Attribute CreateTime: The time when the instance was created.
	AttrCreateTime() interface{}
	// Attribute ExpireTime: The time when the instance expires.
	AttrExpireTime() interface{}
	// Attribute ExtConfig: The extended configurations.
	//
	// We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.
	AttrExtConfig() interface{}
	// Attribute GroupCount: The number of groups.
	AttrGroupCount() interface{}
	// Attribute InstanceId: The ID of the RocketMQ instance.
	AttrInstanceId() interface{}
	// Attribute InstanceName: The name of the instance.
	AttrInstanceName() interface{}
	// Attribute InstanceQuotas: The instance quotas.
	AttrInstanceQuotas() interface{}
	// Attribute NetworkInfo: The network information.
	AttrNetworkInfo() interface{}
	// Attribute PaymentType: The billing method of the instance.
	AttrPaymentType() interface{}
	// Attribute ProductInfo: The extended configurations of the instance.
	AttrProductInfo() interface{}
	// Attribute ReleaseTime: The time when the instance was released.
	AttrReleaseTime() interface{}
	// Attribute Remark: The description of the instance.
	AttrRemark() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SeriesCode: The primary edition of the instance.
	AttrSeriesCode() interface{}
	// Attribute ServiceCode: The code of the service to which the instance belongs.
	//
	// The service code of ApsaraMQ for RocketMQ is rmq.
	AttrServiceCode() interface{}
	// Attribute Software: The instance software information.
	AttrSoftware() interface{}
	// Attribute StartTime: The time when the instance was started.
	AttrStartTime() interface{}
	// Attribute Status: The status of the instance.
	AttrStatus() interface{}
	// Attribute SubSeriesCode: The sub-category edition of the instance.
	AttrSubSeriesCode() interface{}
	// Attribute Tags: The resource tags.
	AttrTags() interface{}
	// Attribute TopicCount: The number of topics.
	AttrTopicCount() interface{}
	// Attribute UpdateTime: The time when the instance was last modified.
	AttrUpdateTime() interface{}
	// Attribute UserId: The ID of the user who owns the instance.
	AttrUserId() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrAccountInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrAclInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrBid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCommodityCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommodityCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrExpireTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrExtConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExtConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrGroupCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceQuotas() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceQuotas",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrNetworkInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrProductInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProductInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrReleaseTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReleaseTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrRemark() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemark",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSeriesCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSeriesCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrServiceCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSoftware() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSoftware",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSubSeriesCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubSeriesCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrTopicCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopicCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

