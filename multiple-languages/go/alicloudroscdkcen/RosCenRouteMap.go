package alicloudroscdkcen

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class is a base encapsulation around the ROS resource type `ALIYUN::CEN::CenRouteMap`, which is used to create a routing policy.
type RosCenRouteMap interface {
	alicloudroscdkcore.RosResource
	AsPathMatchMode() interface{}
	SetAsPathMatchMode(val interface{})
	AttrRouteMapId() alicloudroscdkcore.IResolvable
	CenId() interface{}
	SetCenId(val interface{})
	CenRegionId() interface{}
	SetCenRegionId(val interface{})
	CidrMatchMode() interface{}
	SetCidrMatchMode(val interface{})
	CommunityMatchMode() interface{}
	SetCommunityMatchMode(val interface{})
	CommunityOperateMode() interface{}
	SetCommunityOperateMode(val interface{})
	// Returns: the stack trace of the point where this Resource was created from, sourced
	// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
	// node +internal+ entries filtered.
	CreationStack() *[]*string
	Description() interface{}
	SetDescription(val interface{})
	DestinationChildInstanceTypes() interface{}
	SetDestinationChildInstanceTypes(val interface{})
	DestinationCidrBlocks() interface{}
	SetDestinationCidrBlocks(val interface{})
	DestinationInstanceIds() interface{}
	SetDestinationInstanceIds(val interface{})
	DestinationInstanceIdsReverseMatch() interface{}
	SetDestinationInstanceIdsReverseMatch(val interface{})
	DestinationRouteTableIds() interface{}
	SetDestinationRouteTableIds(val interface{})
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	// The logical ID for this stack element.
	//
	// The logical ID of the element
	// is calculated from the path of the resource node in the construct tree.
	//
	// To override this value, use `overrideLogicalId(newLogicalId)`.
	//
	// Returns: the logical ID as a stringified token. This value will only get
	// resolved during synthesis.
	LogicalId() *string
	MapResult() interface{}
	SetMapResult(val interface{})
	MatchAsns() interface{}
	SetMatchAsns(val interface{})
	MatchCommunitySet() interface{}
	SetMatchCommunitySet(val interface{})
	NextPriority() interface{}
	SetNextPriority(val interface{})
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	OperateCommunitySet() interface{}
	SetOperateCommunitySet(val interface{})
	Preference() interface{}
	SetPreference(val interface{})
	PrependAsPath() interface{}
	SetPrependAsPath(val interface{})
	Priority() interface{}
	SetPriority(val interface{})
	// Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
	//
	// If, by any chance, the intrinsic reference of a resource is not a string, you could
	// coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
	Ref() *string
	// Options for this resource, such as condition, update policy etc.
	RosOptions() alicloudroscdkcore.IRosResourceOptions
	RosProperties() *map[string]interface{}
	// ROS resource type.
	RosResourceType() *string
	RouteTypes() interface{}
	SetRouteTypes(val interface{})
	SourceChildInstanceTypes() interface{}
	SetSourceChildInstanceTypes(val interface{})
	SourceInstanceIds() interface{}
	SetSourceInstanceIds(val interface{})
	SourceInstanceIdsReverseMatch() interface{}
	SetSourceInstanceIdsReverseMatch(val interface{})
	SourceRegionIds() interface{}
	SetSourceRegionIds(val interface{})
	SourceRouteTableIds() interface{}
	SetSourceRouteTableIds(val interface{})
	// The stack in which this element is defined.
	//
	// RosElements must be defined within a stack scope (directly or indirectly).
	Stack() alicloudroscdkcore.Stack
	TransmitDirection() interface{}
	SetTransmitDirection(val interface{})
	// Return properties modified after initiation.
	//
	// Resources that expose mutable properties should override this function to
	// collect and return the properties object for this resource.
	UpdatedProperites() *map[string]interface{}
	AddCondition(con alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	// Syntactic sugar for `addOverride(path, undefined)`.
	AddDeletionOverride(path *string)
	// Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.
	//
	// This can be used for resources across stacks (or nested stack) boundaries
	// and the dependency will automatically be transferred to the relevant scope.
	AddDependsOn(target alicloudroscdkcore.RosResource)
	AddDesc(desc *string)
	AddMetaData(key *string, value interface{})
	// Adds an override to the synthesized ROS resource.
	//
	// To add a
	// property override, either use `addPropertyOverride` or prefix `path` with
	// "Properties." (i.e. `Properties.TopicName`).
	//
	// If the override is nested, separate each nested level using a dot (.) in the path parameter.
	// If there is an array as part of the nesting, specify the index in the path.
	//
	// For example,
	// ```typescript
	// addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
	// addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')
	// ```
	// would add the overrides
	// ```json
	// "Properties": {
	//    "GlobalSecondaryIndexes": [
	//      {
	//        "Projection": {
	//          "NonKeyAttributes": [ "myattribute" ]
	//          ...
	//        }
	//        ...
	//      },
	//      {
	//        "ProjectionType": "INCLUDE"
	//        ...
	//      },
	//    ]
	//    ...
	// }
	// ```.
	AddOverride(path *string, value interface{})
	// Adds an override that deletes the value of a property from the resource definition.
	AddPropertyDeletionOverride(propertyPath *string)
	// Adds an override to a resource property.
	//
	// Syntactic sugar for `addOverride("Properties.<...>", value)`.
	AddPropertyOverride(propertyPath *string, value interface{})
	AddRosDependency(target *string)
	// Sets the deletion policy of the resource based on the removal policy specified.
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions)
	// Returns a token for an runtime attribute of this resource.
	//
	// Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
	// in case there is no generated attribute.
	GetAtt(attributeName *string) alicloudroscdkcore.Reference
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	OnPrepare()
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	OnSynthesize(session constructs.ISynthesisSession)
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	OnValidate() *[]*string
	// Overrides the auto-generated logical ID with a specific ID.
	OverrideLogicalId(newLogicalId *string)
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	RenderProperties(props *map[string]interface{}) *map[string]interface{}
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	//
	// Returns: a string representation of this resource.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
	ValidateProperties(_properties interface{})
}

// The jsii proxy struct for RosCenRouteMap
type jsiiProxy_RosCenRouteMap struct {
	internal.Type__alicloudroscdkcoreRosResource
}

func (j *jsiiProxy_RosCenRouteMap) AsPathMatchMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"asPathMatchMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) AttrRouteMapId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrRouteMapId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) CenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) CenRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cenRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) CidrMatchMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"cidrMatchMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) CommunityMatchMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"communityMatchMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) CommunityOperateMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"communityOperateMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) CreationStack() *[]*string {
	var returns *[]*string
	_jsii_.Get(
		j,
		"creationStack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) Description() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) DestinationChildInstanceTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destinationChildInstanceTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) DestinationCidrBlocks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destinationCidrBlocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) DestinationInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destinationInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) DestinationInstanceIdsReverseMatch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destinationInstanceIdsReverseMatch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) DestinationRouteTableIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"destinationRouteTableIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) LogicalId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"logicalId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) MapResult() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"mapResult",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) MatchAsns() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"matchAsns",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) MatchCommunitySet() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"matchCommunitySet",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) NextPriority() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"nextPriority",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) OperateCommunitySet() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"operateCommunitySet",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) Preference() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"preference",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) PrependAsPath() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"prependAsPath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) Priority() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"priority",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) RosOptions() alicloudroscdkcore.IRosResourceOptions {
	var returns alicloudroscdkcore.IRosResourceOptions
	_jsii_.Get(
		j,
		"rosOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) RosProperties() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"rosProperties",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) RosResourceType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"rosResourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) RouteTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"routeTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) SourceChildInstanceTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceChildInstanceTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) SourceInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) SourceInstanceIdsReverseMatch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceInstanceIdsReverseMatch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) SourceRegionIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceRegionIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) SourceRouteTableIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"sourceRouteTableIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) TransmitDirection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"transmitDirection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosCenRouteMap) UpdatedProperites() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"updatedProperites",
		&returns,
	)
	return returns
}


func NewRosCenRouteMap(scope alicloudroscdkcore.Construct, id *string, props *RosCenRouteMapProps, enableResourcePropertyConstraint *bool) RosCenRouteMap {
	_init_.Initialize()

	if err := validateNewRosCenRouteMapParameters(scope, id, props, enableResourcePropertyConstraint); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosCenRouteMap{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cen.RosCenRouteMap",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

func NewRosCenRouteMap_Override(r RosCenRouteMap, scope alicloudroscdkcore.Construct, id *string, props *RosCenRouteMapProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cen.RosCenRouteMap",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		r,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetAsPathMatchMode(val interface{}) {
	if err := j.validateSetAsPathMatchModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"asPathMatchMode",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetCenId(val interface{}) {
	if err := j.validateSetCenIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cenId",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetCenRegionId(val interface{}) {
	if err := j.validateSetCenRegionIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cenRegionId",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetCidrMatchMode(val interface{}) {
	if err := j.validateSetCidrMatchModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"cidrMatchMode",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetCommunityMatchMode(val interface{}) {
	if err := j.validateSetCommunityMatchModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"communityMatchMode",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetCommunityOperateMode(val interface{}) {
	if err := j.validateSetCommunityOperateModeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"communityOperateMode",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetDescription(val interface{}) {
	if err := j.validateSetDescriptionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetDestinationChildInstanceTypes(val interface{}) {
	if err := j.validateSetDestinationChildInstanceTypesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destinationChildInstanceTypes",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetDestinationCidrBlocks(val interface{}) {
	if err := j.validateSetDestinationCidrBlocksParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destinationCidrBlocks",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetDestinationInstanceIds(val interface{}) {
	if err := j.validateSetDestinationInstanceIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destinationInstanceIds",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetDestinationInstanceIdsReverseMatch(val interface{}) {
	if err := j.validateSetDestinationInstanceIdsReverseMatchParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destinationInstanceIdsReverseMatch",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetDestinationRouteTableIds(val interface{}) {
	if err := j.validateSetDestinationRouteTableIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"destinationRouteTableIds",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetMapResult(val interface{}) {
	if err := j.validateSetMapResultParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"mapResult",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetMatchAsns(val interface{}) {
	if err := j.validateSetMatchAsnsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"matchAsns",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetMatchCommunitySet(val interface{}) {
	if err := j.validateSetMatchCommunitySetParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"matchCommunitySet",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetNextPriority(val interface{}) {
	if err := j.validateSetNextPriorityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"nextPriority",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetOperateCommunitySet(val interface{}) {
	if err := j.validateSetOperateCommunitySetParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"operateCommunitySet",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetPreference(val interface{}) {
	if err := j.validateSetPreferenceParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"preference",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetPrependAsPath(val interface{}) {
	if err := j.validateSetPrependAsPathParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"prependAsPath",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetPriority(val interface{}) {
	if err := j.validateSetPriorityParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"priority",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetRouteTypes(val interface{}) {
	if err := j.validateSetRouteTypesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"routeTypes",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetSourceChildInstanceTypes(val interface{}) {
	if err := j.validateSetSourceChildInstanceTypesParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceChildInstanceTypes",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetSourceInstanceIds(val interface{}) {
	if err := j.validateSetSourceInstanceIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceInstanceIds",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetSourceInstanceIdsReverseMatch(val interface{}) {
	if err := j.validateSetSourceInstanceIdsReverseMatchParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceInstanceIdsReverseMatch",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetSourceRegionIds(val interface{}) {
	if err := j.validateSetSourceRegionIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceRegionIds",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetSourceRouteTableIds(val interface{}) {
	if err := j.validateSetSourceRouteTableIdsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"sourceRouteTableIds",
		val,
	)
}

func (j *jsiiProxy_RosCenRouteMap)SetTransmitDirection(val interface{}) {
	if err := j.validateSetTransmitDirectionParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"transmitDirection",
		val,
	)
}

// Return whether the given object is a Construct.
func RosCenRouteMap_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosCenRouteMap_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosCenRouteMap",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Returns `true` if a construct is a stack element (i.e. part of the synthesized template).
//
// Uses duck-typing instead of `instanceof` to allow stack elements from different
// versions of this library to be included in the same stack.
//
// Returns: The construct as a stack element or undefined if it is not a stack element.
func RosCenRouteMap_IsRosElement(x interface{}) *bool {
	_init_.Initialize()

	if err := validateRosCenRouteMap_IsRosElementParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosCenRouteMap",
		"isRosElement",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a RosResource.
func RosCenRouteMap_IsRosResource(construct alicloudroscdkcore.IConstruct) *bool {
	_init_.Initialize()

	if err := validateRosCenRouteMap_IsRosResourceParameters(construct); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cen.RosCenRouteMap",
		"isRosResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func RosCenRouteMap_ROS_RESOURCE_TYPE_NAME() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-cen.RosCenRouteMap",
		"ROS_RESOURCE_TYPE_NAME",
		&returns,
	)
	return returns
}

func (r *jsiiProxy_RosCenRouteMap) AddCondition(con alicloudroscdkcore.RosCondition) {
	if err := r.validateAddConditionParameters(con); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCondition",
		[]interface{}{con},
	)
}

func (r *jsiiProxy_RosCenRouteMap) AddCount(count interface{}) {
	if err := r.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addCount",
		[]interface{}{count},
	)
}

func (r *jsiiProxy_RosCenRouteMap) AddDeletionOverride(path *string) {
	if err := r.validateAddDeletionOverrideParameters(path); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDeletionOverride",
		[]interface{}{path},
	)
}

func (r *jsiiProxy_RosCenRouteMap) AddDependsOn(target alicloudroscdkcore.RosResource) {
	if err := r.validateAddDependsOnParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDependsOn",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosCenRouteMap) AddDesc(desc *string) {
	if err := r.validateAddDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addDesc",
		[]interface{}{desc},
	)
}

func (r *jsiiProxy_RosCenRouteMap) AddMetaData(key *string, value interface{}) {
	if err := r.validateAddMetaDataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addMetaData",
		[]interface{}{key, value},
	)
}

func (r *jsiiProxy_RosCenRouteMap) AddOverride(path *string, value interface{}) {
	if err := r.validateAddOverrideParameters(path, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addOverride",
		[]interface{}{path, value},
	)
}

func (r *jsiiProxy_RosCenRouteMap) AddPropertyDeletionOverride(propertyPath *string) {
	if err := r.validateAddPropertyDeletionOverrideParameters(propertyPath); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyDeletionOverride",
		[]interface{}{propertyPath},
	)
}

func (r *jsiiProxy_RosCenRouteMap) AddPropertyOverride(propertyPath *string, value interface{}) {
	if err := r.validateAddPropertyOverrideParameters(propertyPath, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addPropertyOverride",
		[]interface{}{propertyPath, value},
	)
}

func (r *jsiiProxy_RosCenRouteMap) AddRosDependency(target *string) {
	if err := r.validateAddRosDependencyParameters(target); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"addRosDependency",
		[]interface{}{target},
	)
}

func (r *jsiiProxy_RosCenRouteMap) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy, options *alicloudroscdkcore.RemovalPolicyOptions) {
	if err := r.validateApplyRemovalPolicyParameters(options); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"applyRemovalPolicy",
		[]interface{}{policy, options},
	)
}

func (r *jsiiProxy_RosCenRouteMap) GetAtt(attributeName *string) alicloudroscdkcore.Reference {
	if err := r.validateGetAttParameters(attributeName); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.Reference

	_jsii_.Invoke(
		r,
		"getAtt",
		[]interface{}{attributeName},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCenRouteMap) OnPrepare() {
	_jsii_.InvokeVoid(
		r,
		"onPrepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosCenRouteMap) OnSynthesize(session constructs.ISynthesisSession) {
	if err := r.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosCenRouteMap) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCenRouteMap) OverrideLogicalId(newLogicalId *string) {
	if err := r.validateOverrideLogicalIdParameters(newLogicalId); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideLogicalId",
		[]interface{}{newLogicalId},
	)
}

func (r *jsiiProxy_RosCenRouteMap) Prepare() {
	_jsii_.InvokeVoid(
		r,
		"prepare",
		nil, // no parameters
	)
}

func (r *jsiiProxy_RosCenRouteMap) RenderProperties(props *map[string]interface{}) *map[string]interface{} {
	if err := r.validateRenderPropertiesParameters(props); err != nil {
		panic(err)
	}
	var returns *map[string]interface{}

	_jsii_.Invoke(
		r,
		"renderProperties",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCenRouteMap) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := r.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"synthesize",
		[]interface{}{session},
	)
}

func (r *jsiiProxy_RosCenRouteMap) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		r,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCenRouteMap) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		r,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosCenRouteMap) ValidateProperties(_properties interface{}) {
	if err := r.validateValidatePropertiesParameters(_properties); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"validateProperties",
		[]interface{}{_properties},
	)
}

