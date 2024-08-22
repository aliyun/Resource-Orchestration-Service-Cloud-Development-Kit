//go:build no_runtime_type_checking

package alicloudroscdkcore

// Building without runtime type checking enabled, so all the below just return nil

func validateFn_AddParameters(values interface{}) error {
	return nil
}

func validateFn_AnyParameters(values interface{}) error {
	return nil
}

func validateFn_AvgParameters(ndigits *float64, values *[]*float64) error {
	return nil
}

func validateFn_Base64DecodeParameters(data *string) error {
	return nil
}

func validateFn_Base64EncodeParameters(data *string) error {
	return nil
}

func validateFn_CalculateParameters(values *string, ndigits *float64, para *[]*float64) error {
	return nil
}

func validateFn_CidrParameters(ipBlock interface{}, count interface{}, cidrBits interface{}) error {
	return nil
}

func validateFn_ConditionAndParameters(conditions *[]interface{}) error {
	return nil
}

func validateFn_ConditionEqualsParameters(lhs interface{}, rhs interface{}) error {
	return nil
}

func validateFn_ConditionIfParameters(conditionId interface{}, valueIfTrue interface{}, valueIfFalse interface{}) error {
	return nil
}

func validateFn_ConditionNotParameters(condition interface{}) error {
	return nil
}

func validateFn_ConditionOrParameters(conditions *[]interface{}) error {
	return nil
}

func validateFn_ContainsParameters(values interface{}, value interface{}) error {
	return nil
}

func validateFn_EachMemberInParameters(values1 interface{}, values2 interface{}) error {
	return nil
}

func validateFn_FindInMapParameters(mapName *string, topLevelKey *string, secondLevelKey *string) error {
	return nil
}

func validateFn_FormatTimeParameters(format interface{}, timeZone interface{}) error {
	return nil
}

func validateFn_GetAttParameters(logicalNameOfResource *string, attributeName *string) error {
	return nil
}

func validateFn_GetAzsParameters(region *string) error {
	return nil
}

func validateFn_GetJsonValueParameters(key *string, jsonData interface{}) error {
	return nil
}

func validateFn_GetStackOutputParameters(stackID *string, outputKey *string) error {
	return nil
}

func validateFn_IndentParameters(str interface{}, level interface{}, indent interface{}) error {
	return nil
}

func validateFn_IndexParameters(itemToFindIndex interface{}, itemList interface{}) error {
	return nil
}

func validateFn_JoinParameters(delimiter *string, listOfValues *[]interface{}) error {
	return nil
}

func validateFn_JqParameters(method *string, script *string, inputString interface{}) error {
	return nil
}

func validateFn_LengthOfParameters(obj interface{}) error {
	return nil
}

func validateFn_ListMergeParameters(valueList *[]interface{}) error {
	return nil
}

func validateFn_MarketplaceImageParameters(imageProductCode interface{}) error {
	return nil
}

func validateFn_MatchPatternParameters(pattern interface{}, value interface{}) error {
	return nil
}

func validateFn_MaxParameters(values *[]*float64) error {
	return nil
}

func validateFn_MergeMapToListParameters(mapList *[]*map[string]*[]interface{}) error {
	return nil
}

func validateFn_MinParameters(values *[]*float64) error {
	return nil
}

func validateFn_RefParameters(logicalName *string) error {
	return nil
}

func validateFn_ReplaceParameters(replaceData *map[string]interface{}, content *string) error {
	return nil
}

func validateFn_SelectParameters(index interface{}, array interface{}) error {
	return nil
}

func validateFn_SelectMapListParameters(key *string, mapList *[]*map[string]interface{}) error {
	return nil
}

func validateFn_SplitParameters(delimiter *string, source *string) error {
	return nil
}

func validateFn_StrParameters(value interface{}) error {
	return nil
}

func validateFn_SubParameters(body *string) error {
	return nil
}

