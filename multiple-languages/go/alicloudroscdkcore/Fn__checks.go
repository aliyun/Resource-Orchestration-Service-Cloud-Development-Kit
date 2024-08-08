//go:build !no_runtime_type_checking

package alicloudroscdkcore

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func validateFn_AddParameters(values interface{}) error {
	if values == nil {
		return fmt.Errorf("parameter values is required, but nil was provided")
	}
	switch values.(type) {
	case *float64:
		// ok
	case float64:
		// ok
	case *int:
		// ok
	case int:
		// ok
	case *uint:
		// ok
	case uint:
		// ok
	case *int8:
		// ok
	case int8:
		// ok
	case *int16:
		// ok
	case int16:
		// ok
	case *int32:
		// ok
	case int32:
		// ok
	case *int64:
		// ok
	case int64:
		// ok
	case *uint8:
		// ok
	case uint8:
		// ok
	case *uint16:
		// ok
	case uint16:
		// ok
	case *uint32:
		// ok
	case uint32:
		// ok
	case *uint64:
		// ok
	case uint64:
		// ok
	case *[]interface{}:
		// ok
	case []interface{}:
		// ok
	case *map[string]interface{}:
		// ok
	case map[string]interface{}:
		// ok
	default:
		return fmt.Errorf("parameter values must be one of the allowed types: *float64, *[]interface{}, *map[string]interface{}; received %#v (a %T)", values, values)
	}

	return nil
}

func validateFn_AnyParameters(values interface{}) error {
	if values == nil {
		return fmt.Errorf("parameter values is required, but nil was provided")
	}
	switch values.(type) {
	case *[]interface{}:
		// ok
	case []interface{}:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(values) {
			return fmt.Errorf("parameter values must be one of the allowed types: *[]interface{}, IResolvable; received %#v (a %T)", values, values)
		}
	}

	return nil
}

func validateFn_AvgParameters(ndigits *float64, values *[]*float64) error {
	if ndigits == nil {
		return fmt.Errorf("parameter ndigits is required, but nil was provided")
	}

	if values == nil {
		return fmt.Errorf("parameter values is required, but nil was provided")
	}

	return nil
}

func validateFn_Base64DecodeParameters(data *string) error {
	if data == nil {
		return fmt.Errorf("parameter data is required, but nil was provided")
	}

	return nil
}

func validateFn_Base64EncodeParameters(data *string) error {
	if data == nil {
		return fmt.Errorf("parameter data is required, but nil was provided")
	}

	return nil
}

func validateFn_CalculateParameters(values *string, ndigits *float64, para *[]*float64) error {
	if values == nil {
		return fmt.Errorf("parameter values is required, but nil was provided")
	}

	if ndigits == nil {
		return fmt.Errorf("parameter ndigits is required, but nil was provided")
	}

	if para == nil {
		return fmt.Errorf("parameter para is required, but nil was provided")
	}

	return nil
}

func validateFn_CidrParameters(ipBlock interface{}, count interface{}, cidrBits interface{}) error {
	if ipBlock == nil {
		return fmt.Errorf("parameter ipBlock is required, but nil was provided")
	}
	switch ipBlock.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(ipBlock) {
			return fmt.Errorf("parameter ipBlock must be one of the allowed types: *string, IResolvable; received %#v (a %T)", ipBlock, ipBlock)
		}
	}

	if count == nil {
		return fmt.Errorf("parameter count is required, but nil was provided")
	}
	switch count.(type) {
	case *float64:
		// ok
	case float64:
		// ok
	case *int:
		// ok
	case int:
		// ok
	case *uint:
		// ok
	case uint:
		// ok
	case *int8:
		// ok
	case int8:
		// ok
	case *int16:
		// ok
	case int16:
		// ok
	case *int32:
		// ok
	case int32:
		// ok
	case *int64:
		// ok
	case int64:
		// ok
	case *uint8:
		// ok
	case uint8:
		// ok
	case *uint16:
		// ok
	case uint16:
		// ok
	case *uint32:
		// ok
	case uint32:
		// ok
	case *uint64:
		// ok
	case uint64:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(count) {
			return fmt.Errorf("parameter count must be one of the allowed types: *float64, IResolvable; received %#v (a %T)", count, count)
		}
	}

	if cidrBits == nil {
		return fmt.Errorf("parameter cidrBits is required, but nil was provided")
	}
	switch cidrBits.(type) {
	case *float64:
		// ok
	case float64:
		// ok
	case *int:
		// ok
	case int:
		// ok
	case *uint:
		// ok
	case uint:
		// ok
	case *int8:
		// ok
	case int8:
		// ok
	case *int16:
		// ok
	case int16:
		// ok
	case *int32:
		// ok
	case int32:
		// ok
	case *int64:
		// ok
	case int64:
		// ok
	case *uint8:
		// ok
	case uint8:
		// ok
	case *uint16:
		// ok
	case uint16:
		// ok
	case *uint32:
		// ok
	case uint32:
		// ok
	case *uint64:
		// ok
	case uint64:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(cidrBits) {
			return fmt.Errorf("parameter cidrBits must be one of the allowed types: *float64, IResolvable; received %#v (a %T)", cidrBits, cidrBits)
		}
	}

	return nil
}

func validateFn_ConditionAndParameters(conditions *[]interface{}) error {
	for idx_562a77, v := range *conditions {
		switch v.(type) {
		case *string:
			// ok
		case string:
			// ok
		case IRosConditionExpression:
			// ok
		default:
			if !_jsii_.IsAnonymousProxy(v) {
				return fmt.Errorf("parameter conditions[%#v] must be one of the allowed types: *string, IRosConditionExpression; received %#v (a %T)", idx_562a77, v, v)
			}
		}
	}

	return nil
}

func validateFn_ConditionEqualsParameters(lhs interface{}, rhs interface{}) error {
	if lhs == nil {
		return fmt.Errorf("parameter lhs is required, but nil was provided")
	}

	if rhs == nil {
		return fmt.Errorf("parameter rhs is required, but nil was provided")
	}

	return nil
}

func validateFn_ConditionIfParameters(conditionId interface{}, valueIfTrue interface{}, valueIfFalse interface{}) error {
	if conditionId == nil {
		return fmt.Errorf("parameter conditionId is required, but nil was provided")
	}
	switch conditionId.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IRosConditionExpression:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(conditionId) {
			return fmt.Errorf("parameter conditionId must be one of the allowed types: *string, IRosConditionExpression; received %#v (a %T)", conditionId, conditionId)
		}
	}

	if valueIfTrue == nil {
		return fmt.Errorf("parameter valueIfTrue is required, but nil was provided")
	}

	if valueIfFalse == nil {
		return fmt.Errorf("parameter valueIfFalse is required, but nil was provided")
	}

	return nil
}

func validateFn_ConditionNotParameters(condition interface{}) error {
	if condition == nil {
		return fmt.Errorf("parameter condition is required, but nil was provided")
	}
	switch condition.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IRosConditionExpression:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(condition) {
			return fmt.Errorf("parameter condition must be one of the allowed types: *string, IRosConditionExpression; received %#v (a %T)", condition, condition)
		}
	}

	return nil
}

func validateFn_ConditionOrParameters(conditions *[]interface{}) error {
	for idx_562a77, v := range *conditions {
		switch v.(type) {
		case *string:
			// ok
		case string:
			// ok
		case IRosConditionExpression:
			// ok
		default:
			if !_jsii_.IsAnonymousProxy(v) {
				return fmt.Errorf("parameter conditions[%#v] must be one of the allowed types: *string, IRosConditionExpression; received %#v (a %T)", idx_562a77, v, v)
			}
		}
	}

	return nil
}

func validateFn_ContainsParameters(values interface{}, value interface{}) error {
	if values == nil {
		return fmt.Errorf("parameter values is required, but nil was provided")
	}
	switch values.(type) {
	case *[]interface{}:
		// ok
	case []interface{}:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(values) {
			return fmt.Errorf("parameter values must be one of the allowed types: *[]interface{}, IResolvable; received %#v (a %T)", values, values)
		}
	}

	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}

	return nil
}

func validateFn_EachMemberInParameters(values1 interface{}, values2 interface{}) error {
	if values1 == nil {
		return fmt.Errorf("parameter values1 is required, but nil was provided")
	}
	switch values1.(type) {
	case *[]interface{}:
		// ok
	case []interface{}:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(values1) {
			return fmt.Errorf("parameter values1 must be one of the allowed types: *[]interface{}, IResolvable; received %#v (a %T)", values1, values1)
		}
	}

	if values2 == nil {
		return fmt.Errorf("parameter values2 is required, but nil was provided")
	}
	switch values2.(type) {
	case *[]interface{}:
		// ok
	case []interface{}:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(values2) {
			return fmt.Errorf("parameter values2 must be one of the allowed types: *[]interface{}, IResolvable; received %#v (a %T)", values2, values2)
		}
	}

	return nil
}

func validateFn_FindInMapParameters(mapName *string, topLevelKey *string, secondLevelKey *string) error {
	if mapName == nil {
		return fmt.Errorf("parameter mapName is required, but nil was provided")
	}

	if topLevelKey == nil {
		return fmt.Errorf("parameter topLevelKey is required, but nil was provided")
	}

	if secondLevelKey == nil {
		return fmt.Errorf("parameter secondLevelKey is required, but nil was provided")
	}

	return nil
}

func validateFn_FormatTimeParameters(format interface{}, timeZone interface{}) error {
	if format == nil {
		return fmt.Errorf("parameter format is required, but nil was provided")
	}
	switch format.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(format) {
			return fmt.Errorf("parameter format must be one of the allowed types: *string, IResolvable; received %#v (a %T)", format, format)
		}
	}

	if timeZone == nil {
		return fmt.Errorf("parameter timeZone is required, but nil was provided")
	}
	switch timeZone.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(timeZone) {
			return fmt.Errorf("parameter timeZone must be one of the allowed types: *string, IResolvable; received %#v (a %T)", timeZone, timeZone)
		}
	}

	return nil
}

func validateFn_GetAttParameters(logicalNameOfResource *string, attributeName *string) error {
	if logicalNameOfResource == nil {
		return fmt.Errorf("parameter logicalNameOfResource is required, but nil was provided")
	}

	if attributeName == nil {
		return fmt.Errorf("parameter attributeName is required, but nil was provided")
	}

	return nil
}

func validateFn_GetAzsParameters(region *string) error {
	if region == nil {
		return fmt.Errorf("parameter region is required, but nil was provided")
	}

	return nil
}

func validateFn_GetJsonValueParameters(key *string, jsonData interface{}) error {
	if key == nil {
		return fmt.Errorf("parameter key is required, but nil was provided")
	}

	if jsonData == nil {
		return fmt.Errorf("parameter jsonData is required, but nil was provided")
	}

	return nil
}

func validateFn_GetStackOutputParameters(stackID *string, outputKey *string) error {
	if stackID == nil {
		return fmt.Errorf("parameter stackID is required, but nil was provided")
	}

	if outputKey == nil {
		return fmt.Errorf("parameter outputKey is required, but nil was provided")
	}

	return nil
}

func validateFn_IndentParameters(str interface{}, level interface{}, indent interface{}) error {
	if str == nil {
		return fmt.Errorf("parameter str is required, but nil was provided")
	}
	switch str.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(str) {
			return fmt.Errorf("parameter str must be one of the allowed types: *string, IResolvable; received %#v (a %T)", str, str)
		}
	}

	if level == nil {
		return fmt.Errorf("parameter level is required, but nil was provided")
	}
	switch level.(type) {
	case *float64:
		// ok
	case float64:
		// ok
	case *int:
		// ok
	case int:
		// ok
	case *uint:
		// ok
	case uint:
		// ok
	case *int8:
		// ok
	case int8:
		// ok
	case *int16:
		// ok
	case int16:
		// ok
	case *int32:
		// ok
	case int32:
		// ok
	case *int64:
		// ok
	case int64:
		// ok
	case *uint8:
		// ok
	case uint8:
		// ok
	case *uint16:
		// ok
	case uint16:
		// ok
	case *uint32:
		// ok
	case uint32:
		// ok
	case *uint64:
		// ok
	case uint64:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(level) {
			return fmt.Errorf("parameter level must be one of the allowed types: *float64, IResolvable; received %#v (a %T)", level, level)
		}
	}

	switch indent.(type) {
	case *float64:
		// ok
	case float64:
		// ok
	case *int:
		// ok
	case int:
		// ok
	case *uint:
		// ok
	case uint:
		// ok
	case *int8:
		// ok
	case int8:
		// ok
	case *int16:
		// ok
	case int16:
		// ok
	case *int32:
		// ok
	case int32:
		// ok
	case *int64:
		// ok
	case int64:
		// ok
	case *uint8:
		// ok
	case uint8:
		// ok
	case *uint16:
		// ok
	case uint16:
		// ok
	case *uint32:
		// ok
	case uint32:
		// ok
	case *uint64:
		// ok
	case uint64:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(indent) {
			return fmt.Errorf("parameter indent must be one of the allowed types: *float64, IResolvable; received %#v (a %T)", indent, indent)
		}
	}

	return nil
}

func validateFn_IndexParameters(itemToFindIndex interface{}, itemList interface{}) error {
	if itemToFindIndex == nil {
		return fmt.Errorf("parameter itemToFindIndex is required, but nil was provided")
	}

	if itemList == nil {
		return fmt.Errorf("parameter itemList is required, but nil was provided")
	}
	switch itemList.(type) {
	case *[]interface{}:
		// ok
	case []interface{}:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(itemList) {
			return fmt.Errorf("parameter itemList must be one of the allowed types: *[]interface{}, IResolvable; received %#v (a %T)", itemList, itemList)
		}
	}

	return nil
}

func validateFn_JoinParameters(delimiter *string, listOfValues *[]interface{}) error {
	if delimiter == nil {
		return fmt.Errorf("parameter delimiter is required, but nil was provided")
	}

	if listOfValues == nil {
		return fmt.Errorf("parameter listOfValues is required, but nil was provided")
	}
	for idx_7506d4, v := range *listOfValues {
		switch v.(type) {
		case *string:
			// ok
		case string:
			// ok
		case IResolvable:
			// ok
		default:
			if !_jsii_.IsAnonymousProxy(v) {
				return fmt.Errorf("parameter listOfValues[%#v] must be one of the allowed types: *string, IResolvable; received %#v (a %T)", idx_7506d4, v, v)
			}
		}
	}

	return nil
}

func validateFn_JqParameters(method *string, script *string, inputString interface{}) error {
	if method == nil {
		return fmt.Errorf("parameter method is required, but nil was provided")
	}

	if script == nil {
		return fmt.Errorf("parameter script is required, but nil was provided")
	}

	if inputString == nil {
		return fmt.Errorf("parameter inputString is required, but nil was provided")
	}
	switch inputString.(type) {
	case *string:
		// ok
	case string:
		// ok
	case *map[string]interface{}:
		// ok
	case map[string]interface{}:
		// ok
	default:
		return fmt.Errorf("parameter inputString must be one of the allowed types: *string, *map[string]interface{}; received %#v (a %T)", inputString, inputString)
	}

	return nil
}

func validateFn_LengthOfParameters(obj interface{}) error {
	if obj == nil {
		return fmt.Errorf("parameter obj is required, but nil was provided")
	}

	return nil
}

func validateFn_ListMergeParameters(valueList *[]interface{}) error {
	if valueList == nil {
		return fmt.Errorf("parameter valueList is required, but nil was provided")
	}
	for idx_7313ea, v := range *valueList {
		switch v.(type) {
		case *[]interface{}:
			// ok
		case []interface{}:
			// ok
		case IResolvable:
			// ok
		default:
			if !_jsii_.IsAnonymousProxy(v) {
				return fmt.Errorf("parameter valueList[%#v] must be one of the allowed types: *[]interface{}, IResolvable; received %#v (a %T)", idx_7313ea, v, v)
			}
		}
	}

	return nil
}

func validateFn_MarketplaceImageParameters(imageProductCode interface{}) error {
	if imageProductCode == nil {
		return fmt.Errorf("parameter imageProductCode is required, but nil was provided")
	}
	switch imageProductCode.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(imageProductCode) {
			return fmt.Errorf("parameter imageProductCode must be one of the allowed types: *string, IResolvable; received %#v (a %T)", imageProductCode, imageProductCode)
		}
	}

	return nil
}

func validateFn_MatchPatternParameters(pattern interface{}, value interface{}) error {
	if pattern == nil {
		return fmt.Errorf("parameter pattern is required, but nil was provided")
	}
	switch pattern.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(pattern) {
			return fmt.Errorf("parameter pattern must be one of the allowed types: *string, IResolvable; received %#v (a %T)", pattern, pattern)
		}
	}

	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}
	switch value.(type) {
	case *string:
		// ok
	case string:
		// ok
	case IResolvable:
		// ok
	default:
		if !_jsii_.IsAnonymousProxy(value) {
			return fmt.Errorf("parameter value must be one of the allowed types: *string, IResolvable; received %#v (a %T)", value, value)
		}
	}

	return nil
}

func validateFn_MaxParameters(values *[]*float64) error {
	if values == nil {
		return fmt.Errorf("parameter values is required, but nil was provided")
	}

	return nil
}

func validateFn_MergeMapToListParameters(mapList *[]*map[string]*[]interface{}) error {
	if mapList == nil {
		return fmt.Errorf("parameter mapList is required, but nil was provided")
	}

	return nil
}

func validateFn_MinParameters(values *[]*float64) error {
	if values == nil {
		return fmt.Errorf("parameter values is required, but nil was provided")
	}

	return nil
}

func validateFn_RefParameters(logicalName *string) error {
	if logicalName == nil {
		return fmt.Errorf("parameter logicalName is required, but nil was provided")
	}

	return nil
}

func validateFn_ReplaceParameters(replaceData *map[string]interface{}, content *string) error {
	if replaceData == nil {
		return fmt.Errorf("parameter replaceData is required, but nil was provided")
	}

	if content == nil {
		return fmt.Errorf("parameter content is required, but nil was provided")
	}

	return nil
}

func validateFn_SelectParameters(index interface{}, array interface{}) error {
	if index == nil {
		return fmt.Errorf("parameter index is required, but nil was provided")
	}
	switch index.(type) {
	case *string:
		// ok
	case string:
		// ok
	case *float64:
		// ok
	case float64:
		// ok
	case *int:
		// ok
	case int:
		// ok
	case *uint:
		// ok
	case uint:
		// ok
	case *int8:
		// ok
	case int8:
		// ok
	case *int16:
		// ok
	case int16:
		// ok
	case *int32:
		// ok
	case int32:
		// ok
	case *int64:
		// ok
	case int64:
		// ok
	case *uint8:
		// ok
	case uint8:
		// ok
	case *uint16:
		// ok
	case uint16:
		// ok
	case *uint32:
		// ok
	case uint32:
		// ok
	case *uint64:
		// ok
	case uint64:
		// ok
	default:
		return fmt.Errorf("parameter index must be one of the allowed types: *string, *float64; received %#v (a %T)", index, index)
	}

	if array == nil {
		return fmt.Errorf("parameter array is required, but nil was provided")
	}

	return nil
}

func validateFn_SelectMapListParameters(key *string, mapList *[]*map[string]interface{}) error {
	if key == nil {
		return fmt.Errorf("parameter key is required, but nil was provided")
	}

	if mapList == nil {
		return fmt.Errorf("parameter mapList is required, but nil was provided")
	}

	return nil
}

func validateFn_SplitParameters(delimiter *string, source *string) error {
	if delimiter == nil {
		return fmt.Errorf("parameter delimiter is required, but nil was provided")
	}

	if source == nil {
		return fmt.Errorf("parameter source is required, but nil was provided")
	}

	return nil
}

func validateFn_StrParameters(value interface{}) error {
	if value == nil {
		return fmt.Errorf("parameter value is required, but nil was provided")
	}

	return nil
}

func validateFn_SubParameters(body *string) error {
	if body == nil {
		return fmt.Errorf("parameter body is required, but nil was provided")
	}

	return nil
}

