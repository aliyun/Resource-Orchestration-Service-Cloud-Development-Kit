package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Resource Orchestration Service intrinsic functions.
//
// https://help.aliyun.com/zh/ros/user-guide/functions
type Fn interface {
}

// The jsii proxy struct for Fn
type jsiiProxy_Fn struct {
	_ byte // padding
}

func Fn_Add(values interface{}) IResolvable {
	_init_.Initialize()

	if err := validateFn_AddParameters(values); err != nil {
		panic(err)
	}
	var returns IResolvable

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"add",
		[]interface{}{values},
		&returns,
	)

	return returns
}

// Returns whether a value in the specified array is true or false.
//
// Returns true if any item in the array is true, and false otherwise.
func Fn_Any(values interface{}) *string {
	_init_.Initialize()

	if err := validateFn_AnyParameters(values); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"any",
		[]interface{}{values},
		&returns,
	)

	return returns
}

func Fn_Avg(ndigits *float64, values *[]*float64) *float64 {
	_init_.Initialize()

	if err := validateFn_AvgParameters(ndigits, values); err != nil {
		panic(err)
	}
	var returns *float64

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"avg",
		[]interface{}{ndigits, values},
		&returns,
	)

	return returns
}

func Fn_Base64Decode(data *string) *string {
	_init_.Initialize()

	if err := validateFn_Base64DecodeParameters(data); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"base64Decode",
		[]interface{}{data},
		&returns,
	)

	return returns
}

// The intrinsic function ``Fn::Base64`` returns the Base64 representation of the input string.
//
// Returns: a token represented as a string.
func Fn_Base64Encode(data *string) *string {
	_init_.Initialize()

	if err := validateFn_Base64EncodeParameters(data); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"base64Encode",
		[]interface{}{data},
		&returns,
	)

	return returns
}

func Fn_Calculate(values *string, ndigits *float64, para *[]*float64) *float64 {
	_init_.Initialize()

	if err := validateFn_CalculateParameters(values, ndigits, para); err != nil {
		panic(err)
	}
	var returns *float64

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"calculate",
		[]interface{}{values, ndigits, para},
		&returns,
	)

	return returns
}

// Returns a list of CIDR addresses.
func Fn_Cidr(ipBlock interface{}, count interface{}, cidrBits interface{}) *string {
	_init_.Initialize()

	if err := validateFn_CidrParameters(ipBlock, count, cidrBits); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"cidr",
		[]interface{}{ipBlock, count, cidrBits},
		&returns,
	)

	return returns
}

// Returns true if all the specified conditions evaluate to true, or returns false if any one of the conditions evaluates to false.
//
// ``Fn::And`` acts as
// an AND operator. The minimum number of conditions that you can include is
// 2, and the maximum is 10.
//
// Returns: an FnCondition token.
func Fn_ConditionAnd(conditions ...interface{}) IRosConditionExpression {
	_init_.Initialize()

	if err := validateFn_ConditionAndParameters(&conditions); err != nil {
		panic(err)
	}
	args := []interface{}{}
	for _, a := range conditions {
		args = append(args, a)
	}

	var returns IRosConditionExpression

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"conditionAnd",
		args,
		&returns,
	)

	return returns
}

// Compares if two values are equal.
//
// Returns true if the two values are equal
// or false if they aren't.
//
// Returns: an FnCondition token.
func Fn_ConditionEquals(lhs interface{}, rhs interface{}) IRosConditionExpression {
	_init_.Initialize()

	if err := validateFn_ConditionEqualsParameters(lhs, rhs); err != nil {
		panic(err)
	}
	var returns IRosConditionExpression

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"conditionEquals",
		[]interface{}{lhs, rhs},
		&returns,
	)

	return returns
}

// Returns one value if the specified condition evaluates to true and another value if the specified condition evaluates to false.
//
// Returns: an FnCondition token.
func Fn_ConditionIf(conditionId interface{}, valueIfTrue interface{}, valueIfFalse interface{}) interface{} {
	_init_.Initialize()

	if err := validateFn_ConditionIfParameters(conditionId, valueIfTrue, valueIfFalse); err != nil {
		panic(err)
	}
	var returns interface{}

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"conditionIf",
		[]interface{}{conditionId, valueIfTrue, valueIfFalse},
		&returns,
	)

	return returns
}

// Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.
//
// ``Fn::Not`` acts as a NOT operator.
//
// Returns: an FnCondition token.
func Fn_ConditionNot(condition interface{}) IRosConditionExpression {
	_init_.Initialize()

	if err := validateFn_ConditionNotParameters(condition); err != nil {
		panic(err)
	}
	var returns IRosConditionExpression

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"conditionNot",
		[]interface{}{condition},
		&returns,
	)

	return returns
}

// Returns true if any one of the specified conditions evaluate to true, or returns false if all of the conditions evaluates to false.
//
// ``Fn::Or`` acts
// as an OR operator. The minimum number of conditions that you can include is
// 2, and the maximum is 10.
//
// Returns: an FnCondition token.
func Fn_ConditionOr(conditions ...interface{}) IRosConditionExpression {
	_init_.Initialize()

	if err := validateFn_ConditionOrParameters(&conditions); err != nil {
		panic(err)
	}
	args := []interface{}{}
	for _, a := range conditions {
		args = append(args, a)
	}

	var returns IRosConditionExpression

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"conditionOr",
		args,
		&returns,
	)

	return returns
}

// Returns true if at least one member of the list matches the specified value and false otherwise.
func Fn_Contains(values interface{}, value interface{}) *string {
	_init_.Initialize()

	if err := validateFn_ContainsParameters(values, value); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"contains",
		[]interface{}{values, value},
		&returns,
	)

	return returns
}

// Returns true if every member of the first list is equal to at least one value in the second list, and false otherwise.
func Fn_EachMemberIn(values1 interface{}, values2 interface{}) *string {
	_init_.Initialize()

	if err := validateFn_EachMemberInParameters(values1, values2); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"eachMemberIn",
		[]interface{}{values1, values2},
		&returns,
	)

	return returns
}

// The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level map that is declared in the Mappings section.
//
// Returns: a token represented as a string.
func Fn_FindInMap(mapName *string, topLevelKey *string, secondLevelKey *string) IResolvable {
	_init_.Initialize()

	if err := validateFn_FindInMapParameters(mapName, topLevelKey, secondLevelKey); err != nil {
		panic(err)
	}
	var returns IResolvable

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"findInMap",
		[]interface{}{mapName, topLevelKey, secondLevelKey},
		&returns,
	)

	return returns
}

// Returns the formatted time of the object.
func Fn_FormatTime(format interface{}, timeZone interface{}) *string {
	_init_.Initialize()

	if err := validateFn_FormatTimeParameters(format, timeZone); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"formatTime",
		[]interface{}{format, timeZone},
		&returns,
	)

	return returns
}

// The ``Fn::GetAtt`` intrinsic function returns the value of an attribute from a resource in the template.
//
// Returns: an IResolvable object.
func Fn_GetAtt(logicalNameOfResource *string, attributeName *string) IResolvable {
	_init_.Initialize()

	if err := validateFn_GetAttParameters(logicalNameOfResource, attributeName); err != nil {
		panic(err)
	}
	var returns IResolvable

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"getAtt",
		[]interface{}{logicalNameOfResource, attributeName},
		&returns,
	)

	return returns
}

// The intrinsic function ``Fn::GetAZs`` returns an array that lists Availability Zones for a specified region.
//
// Because customers have access to
// different Availability Zones, the intrinsic function ``Fn::GetAZs`` enables
// template authors to write templates that adapt to the calling user's
// access. That way you don't have to hard-code a full list of Availability
// Zones for a specified region.
//
// Returns: a token represented as a string array.
func Fn_GetAzs(region *string) *[]*string {
	_init_.Initialize()

	if err := validateFn_GetAzsParameters(region); err != nil {
		panic(err)
	}
	var returns *[]*string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"getAzs",
		[]interface{}{region},
		&returns,
	)

	return returns
}

func Fn_GetJsonValue(key *string, jsonData interface{}) *string {
	_init_.Initialize()

	if err := validateFn_GetJsonValueParameters(key, jsonData); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"getJsonValue",
		[]interface{}{key, jsonData},
		&returns,
	)

	return returns
}

// The intrinsic function ``Fn::GetStackOutput`` returns the value of an output exported by another stack.
//
// Returns: a token represented as a string.
func Fn_GetStackOutput(stackID *string, outputKey *string, stackRegion *string) IResolvable {
	_init_.Initialize()

	if err := validateFn_GetStackOutputParameters(stackID, outputKey); err != nil {
		panic(err)
	}
	var returns IResolvable

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"getStackOutput",
		[]interface{}{stackID, outputKey, stackRegion},
		&returns,
	)

	return returns
}

// The intrinsic function Fn::Indent adjust the indentation of the string.
func Fn_Indent(str interface{}, level interface{}, indent interface{}) *string {
	_init_.Initialize()

	if err := validateFn_IndentParameters(str, level, indent); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"indent",
		[]interface{}{str, level, indent},
		&returns,
	)

	return returns
}

// Returns the index of the item in the list.
func Fn_Index(itemToFindIndex interface{}, itemList interface{}) *string {
	_init_.Initialize()

	if err := validateFn_IndexParameters(itemToFindIndex, itemList); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"index",
		[]interface{}{itemToFindIndex, itemList},
		&returns,
	)

	return returns
}

// The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by the specified delimiter.
//
// If a delimiter is the empty
// string, the set of values are concatenated with no delimiter.
//
// Returns: a token represented as a string.
func Fn_Join(delimiter *string, listOfValues *[]interface{}) *string {
	_init_.Initialize()

	if err := validateFn_JoinParameters(delimiter, listOfValues); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"join",
		[]interface{}{delimiter, listOfValues},
		&returns,
	)

	return returns
}

func Fn_Jq(method *string, script *string, inputString interface{}) IResolvable {
	_init_.Initialize()

	if err := validateFn_JqParameters(method, script, inputString); err != nil {
		panic(err)
	}
	var returns IResolvable

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"jq",
		[]interface{}{method, script, inputString},
		&returns,
	)

	return returns
}

// Returns the length of the object.
func Fn_LengthOf(obj interface{}) *string {
	_init_.Initialize()

	if err := validateFn_LengthOfParameters(obj); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"lengthOf",
		[]interface{}{obj},
		&returns,
	)

	return returns
}

func Fn_ListMerge(valueList *[]interface{}) IResolvable {
	_init_.Initialize()

	if err := validateFn_ListMergeParameters(valueList); err != nil {
		panic(err)
	}
	var returns IResolvable

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"listMerge",
		[]interface{}{valueList},
		&returns,
	)

	return returns
}

// The intrinsic function Fn::MarketplaceImage returns the default image ID of the specified cloud marketplace image product Code.
func Fn_MarketplaceImage(imageProductCode interface{}) *string {
	_init_.Initialize()

	if err := validateFn_MarketplaceImageParameters(imageProductCode); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"marketplaceImage",
		[]interface{}{imageProductCode},
		&returns,
	)

	return returns
}

// Returns true if a specified string matches a specified pattern.
func Fn_MatchPattern(pattern interface{}, value interface{}) *string {
	_init_.Initialize()

	if err := validateFn_MatchPatternParameters(pattern, value); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"matchPattern",
		[]interface{}{pattern, value},
		&returns,
	)

	return returns
}

func Fn_Max(values *[]*float64) *float64 {
	_init_.Initialize()

	if err := validateFn_MaxParameters(values); err != nil {
		panic(err)
	}
	var returns *float64

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"max",
		[]interface{}{values},
		&returns,
	)

	return returns
}

func Fn_MergeMapToList(mapList *[]*map[string]*[]interface{}) IResolvable {
	_init_.Initialize()

	if err := validateFn_MergeMapToListParameters(mapList); err != nil {
		panic(err)
	}
	var returns IResolvable

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"mergeMapToList",
		[]interface{}{mapList},
		&returns,
	)

	return returns
}

func Fn_Min(values *[]*float64) *float64 {
	_init_.Initialize()

	if err := validateFn_MinParameters(values); err != nil {
		panic(err)
	}
	var returns *float64

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"min",
		[]interface{}{values},
		&returns,
	)

	return returns
}

// The ``Ref`` intrinsic function returns the value of the specified parameter or resource.
//
// Note that it doesn't validate the logicalName, it mainly serves paremeter/resource reference defined in a ``RosInclude`` template.
func Fn_Ref(logicalName *string) *string {
	_init_.Initialize()

	if err := validateFn_RefParameters(logicalName); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"ref",
		[]interface{}{logicalName},
		&returns,
	)

	return returns
}

func Fn_Replace(replaceData *map[string]interface{}, content *string) *string {
	_init_.Initialize()

	if err := validateFn_ReplaceParameters(replaceData, content); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"replace",
		[]interface{}{replaceData, content},
		&returns,
	)

	return returns
}

// The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.
//
// Returns: a token represented as a string.
func Fn_Select(index interface{}, array interface{}) IResolvable {
	_init_.Initialize()

	if err := validateFn_SelectParameters(index, array); err != nil {
		panic(err)
	}
	var returns IResolvable

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"select",
		[]interface{}{index, array},
		&returns,
	)

	return returns
}

func Fn_SelectMapList(key *string, mapList *[]*map[string]interface{}) IResolvable {
	_init_.Initialize()

	if err := validateFn_SelectMapListParameters(key, mapList); err != nil {
		panic(err)
	}
	var returns IResolvable

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"selectMapList",
		[]interface{}{key, mapList},
		&returns,
	)

	return returns
}

// To split a string into a list of string values so that you can select an element from the resulting string list, use the ``Fn::Split`` intrinsic function.
//
// Specify the location of splits
// with a delimiter, such as , (a comma). After you split a string, use the ``Fn::Select`` function
// to pick a specific element.
//
// Returns: a token represented as a string array.
func Fn_Split(delimiter *string, source *string) *[]*string {
	_init_.Initialize()

	if err := validateFn_SplitParameters(delimiter, source); err != nil {
		panic(err)
	}
	var returns *[]*string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"split",
		[]interface{}{delimiter, source},
		&returns,
	)

	return returns
}

func Fn_Str(value interface{}) *string {
	_init_.Initialize()

	if err := validateFn_StrParameters(value); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"str",
		[]interface{}{value},
		&returns,
	)

	return returns
}

// The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that you specify.
//
// In your templates, you can use this function
// to construct commands or outputs that include values that aren't available
// until you create or update a stack.
//
// Returns: a token represented as a string.
func Fn_Sub(body *string, variables *map[string]interface{}) *string {
	_init_.Initialize()

	if err := validateFn_SubParameters(body); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.Fn",
		"sub",
		[]interface{}{body, variables},
		&returns,
	)

	return returns
}

