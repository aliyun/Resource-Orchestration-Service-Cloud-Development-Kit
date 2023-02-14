package com.aliyun.ros.cdk.core;

/**
 * Resource Orchestration Service intrinsic functions.
 * <p>
 * https://help.aliyun.com/document_detail/28852.html
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.74.0 (build 6d08790)", date = "2023-02-14T06:40:09.674Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Fn")
public class Fn extends software.amazon.jsii.JsiiObject {

    protected Fn(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Fn(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable add(final @org.jetbrains.annotations.NotNull java.lang.Object values) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(values instanceof java.lang.Number)
                && !(values instanceof java.util.List)
                && !(values instanceof java.util.Map)
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("values")
                        .append(" to be one of: java.lang.Number, java.util.List<java.lang.Object>, java.util.Map<java.lang.String, java.lang.Object>; received ")
                        .append(values.getClass()).toString());
            }
            if (values instanceof java.util.List) {
                @SuppressWarnings("unchecked")
                final java.util.List<java.lang.Object> __cast_89445e = (java.util.List<java.lang.Object>)values;
                for (int __idx_96736d = 0; __idx_96736d < __cast_89445e.size(); __idx_96736d++) {
                    final java.lang.Object __val_96736d = __cast_89445e.get(__idx_96736d);
                }
            }
            if (values instanceof java.util.Map) {
                @SuppressWarnings("unchecked")
                final java.util.Map<java.lang.String, java.lang.Object> __cast_89445e = (java.util.Map<java.lang.String, java.lang.Object>)values;
                if (!(__cast_89445e.keySet().toArray()[0] instanceof String)) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("values").append(".keySet()")
                            .append(" to contain class String; received ")
                            .append(__cast_89445e.keySet().toArray()[0].getClass()).toString());
                }
                for (final java.util.Map.Entry<String, java.lang.Object> __item_96736d: __cast_89445e.entrySet()) {
                    final java.lang.Object __val_96736d = __item_96736d.getValue();
                }
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "add", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(values, "values is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.Number avg(final @org.jetbrains.annotations.NotNull java.lang.Number ndigits, final @org.jetbrains.annotations.NotNull java.util.List<? extends java.lang.Number> values) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "avg", software.amazon.jsii.NativeType.forClass(java.lang.Number.class), new Object[] { java.util.Objects.requireNonNull(ndigits, "ndigits is required"), java.util.Objects.requireNonNull(values, "values is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.String base64Decode(final @org.jetbrains.annotations.NotNull java.lang.String data) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "base64Decode", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(data, "data is required") });
    }

    /**
     * The intrinsic function ``Fn::Base64`` returns the Base64 representation of the input string.
     * <p>
     * @return a token represented as a string
     * @param data The string value you want to convert to Base64. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String base64Encode(final @org.jetbrains.annotations.NotNull java.lang.String data) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "base64Encode", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(data, "data is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.Number calculate(final @org.jetbrains.annotations.NotNull java.lang.String values, final @org.jetbrains.annotations.NotNull java.lang.Number ndigits, final @org.jetbrains.annotations.NotNull java.util.List<? extends java.lang.Number> para) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "calculate", software.amazon.jsii.NativeType.forClass(java.lang.Number.class), new Object[] { java.util.Objects.requireNonNull(values, "values is required"), java.util.Objects.requireNonNull(ndigits, "ndigits is required"), java.util.Objects.requireNonNull(para, "para is required") });
    }

    /**
     * Returns true if all the specified conditions evaluate to true, or returns false if any one of the conditions evaluates to false.
     * <p>
     * <code>Fn::And</code> acts as
     * an AND operator. The minimum number of conditions that you can include is
     * 2, and the maximum is 10.
     * <p>
     * @return an FnCondition token
     * @param conditions conditions to AND. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IRosConditionExpression conditionAnd(final @org.jetbrains.annotations.NotNull java.lang.Object... conditions) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            final java.util.List<java.lang.Object> __conditions__asList = java.util.Arrays.asList(conditions);
            for (int __idx_48651d = 0; __idx_48651d < __conditions__asList.size(); __idx_48651d++) {
                final java.lang.Object __val_48651d = __conditions__asList.get(__idx_48651d);
                if (
                     !(__val_48651d instanceof java.lang.String)
                    && !(__val_48651d instanceof com.aliyun.ros.cdk.core.IRosConditionExpression)
                    && !(__val_48651d.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("conditions").append("[").append(__idx_48651d).append("]")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IRosConditionExpression; received ")
                            .append(__val_48651d.getClass()).toString());
                }
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "conditionAnd", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IRosConditionExpression.class), java.util.Arrays.<Object>stream(conditions).toArray(Object[]::new));
    }

    /**
     * Compares if two values are equal.
     * <p>
     * Returns true if the two values are equal
     * or false if they aren't.
     * <p>
     * @return an FnCondition token
     * @param lhs A value of any type that you want to compare. This parameter is required.
     * @param rhs A value of any type that you want to compare. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IRosConditionExpression conditionEquals(final @org.jetbrains.annotations.NotNull java.lang.Object lhs, final @org.jetbrains.annotations.NotNull java.lang.Object rhs) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "conditionEquals", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IRosConditionExpression.class), new Object[] { lhs, rhs });
    }

    /**
     * Returns one value if the specified condition evaluates to true and another value if the specified condition evaluates to false.
     * <p>
     * @return an FnCondition token
     * @param conditionId A reference to a condition in the Conditions section. This parameter is required.
     * @param valueIfTrue A value to be returned if the specified condition evaluates to true. This parameter is required.
     * @param valueIfFalse A value to be returned if the specified condition evaluates to false. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.Object conditionIf(final @org.jetbrains.annotations.NotNull java.lang.Object conditionId, final @org.jetbrains.annotations.NotNull java.lang.Object valueIfTrue, final @org.jetbrains.annotations.NotNull java.lang.Object valueIfFalse) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(conditionId instanceof java.lang.String)
                && !(conditionId instanceof com.aliyun.ros.cdk.core.IRosConditionExpression)
                && !(conditionId.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("conditionId")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IRosConditionExpression; received ")
                        .append(conditionId.getClass()).toString());
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "conditionIf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(conditionId, "conditionId is required"), valueIfTrue, valueIfFalse });
    }

    /**
     * Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.
     * <p>
     * <code>Fn::Not</code> acts as a NOT operator.
     * <p>
     * @return an FnCondition token
     * @param condition A condition such as ``Fn::Equals`` that evaluates to true or false. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IRosConditionExpression conditionNot(final @org.jetbrains.annotations.NotNull java.lang.Object condition) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(condition instanceof java.lang.String)
                && !(condition instanceof com.aliyun.ros.cdk.core.IRosConditionExpression)
                && !(condition.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("condition")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IRosConditionExpression; received ")
                        .append(condition.getClass()).toString());
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "conditionNot", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IRosConditionExpression.class), new Object[] { java.util.Objects.requireNonNull(condition, "condition is required") });
    }

    /**
     * Returns true if any one of the specified conditions evaluate to true, or returns false if all of the conditions evaluates to false.
     * <p>
     * <code>Fn::Or</code> acts
     * as an OR operator. The minimum number of conditions that you can include is
     * 2, and the maximum is 10.
     * <p>
     * @return an FnCondition token
     * @param conditions conditions that evaluates to true or false. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IRosConditionExpression conditionOr(final @org.jetbrains.annotations.NotNull java.lang.Object... conditions) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            final java.util.List<java.lang.Object> __conditions__asList = java.util.Arrays.asList(conditions);
            for (int __idx_48651d = 0; __idx_48651d < __conditions__asList.size(); __idx_48651d++) {
                final java.lang.Object __val_48651d = __conditions__asList.get(__idx_48651d);
                if (
                     !(__val_48651d instanceof java.lang.String)
                    && !(__val_48651d instanceof com.aliyun.ros.cdk.core.IRosConditionExpression)
                    && !(__val_48651d.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("conditions").append("[").append(__idx_48651d).append("]")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IRosConditionExpression; received ")
                            .append(__val_48651d.getClass()).toString());
                }
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "conditionOr", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IRosConditionExpression.class), java.util.Arrays.<Object>stream(conditions).toArray(Object[]::new));
    }

    /**
     * The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level map that is declared in the Mappings section.
     * <p>
     * @return a token represented as a string
     * @param mapName This parameter is required.
     * @param topLevelKey This parameter is required.
     * @param secondLevelKey This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable findInMap(final @org.jetbrains.annotations.NotNull java.lang.String mapName, final @org.jetbrains.annotations.NotNull java.lang.String topLevelKey, final @org.jetbrains.annotations.NotNull java.lang.String secondLevelKey) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "findInMap", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(mapName, "mapName is required"), java.util.Objects.requireNonNull(topLevelKey, "topLevelKey is required"), java.util.Objects.requireNonNull(secondLevelKey, "secondLevelKey is required") });
    }

    /**
     * The ``Fn::GetAtt`` intrinsic function returns the value of an attribute from a resource in the template.
     * <p>
     * @return an IResolvable object
     * @param logicalNameOfResource The logical name (also called logical ID) of the resource that contains the attribute that you want. This parameter is required.
     * @param attributeName The name of the resource-specific attribute whose value you want. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAtt(final @org.jetbrains.annotations.NotNull java.lang.String logicalNameOfResource, final @org.jetbrains.annotations.NotNull java.lang.String attributeName) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "getAtt", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(logicalNameOfResource, "logicalNameOfResource is required"), java.util.Objects.requireNonNull(attributeName, "attributeName is required") });
    }

    /**
     * The intrinsic function ``Fn::GetAZs`` returns an array that lists Availability Zones for a specified region.
     * <p>
     * Because customers have access to
     * different Availability Zones, the intrinsic function <code>Fn::GetAZs</code> enables
     * template authors to write templates that adapt to the calling user's
     * access. That way you don't have to hard-code a full list of Availability
     * Zones for a specified region.
     * <p>
     * @return a token represented as a string array
     * @param region The name of the region for which you want to get the Availability Zones. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> getAzs(final @org.jetbrains.annotations.NotNull java.lang.String region) {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "getAzs", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)), new Object[] { java.util.Objects.requireNonNull(region, "region is required") }));
    }

    public static @org.jetbrains.annotations.NotNull java.lang.String getJsonValue(final @org.jetbrains.annotations.NotNull java.lang.String key, final @org.jetbrains.annotations.NotNull java.lang.Object jsonData) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "getJsonValue", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(key, "key is required"), jsonData });
    }

    /**
     * The intrinsic function ``Fn::GetStackOutput`` returns the value of an output exported by another stack.
     * <p>
     * @return a token represented as a string
     * @param stackID This parameter is required.
     * @param outputKey This parameter is required.
     * @param stackRegion
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getStackOutput(final @org.jetbrains.annotations.NotNull java.lang.String stackID, final @org.jetbrains.annotations.NotNull java.lang.String outputKey, final @org.jetbrains.annotations.Nullable java.lang.String stackRegion) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "getStackOutput", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(stackID, "stackID is required"), java.util.Objects.requireNonNull(outputKey, "outputKey is required"), stackRegion });
    }

    /**
     * The intrinsic function ``Fn::GetStackOutput`` returns the value of an output exported by another stack.
     * <p>
     * @return a token represented as a string
     * @param stackID This parameter is required.
     * @param outputKey This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getStackOutput(final @org.jetbrains.annotations.NotNull java.lang.String stackID, final @org.jetbrains.annotations.NotNull java.lang.String outputKey) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "getStackOutput", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(stackID, "stackID is required"), java.util.Objects.requireNonNull(outputKey, "outputKey is required") });
    }

    /**
     * The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by the specified delimiter.
     * <p>
     * If a delimiter is the empty
     * string, the set of values are concatenated with no delimiter.
     * <p>
     * @return a token represented as a string
     * @param delimiter The value you want to occur between fragments. This parameter is required.
     * @param listOfValues The list of values you want combined. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String join(final @org.jetbrains.annotations.NotNull java.lang.String delimiter, final @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> listOfValues) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "join", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(delimiter, "delimiter is required"), java.util.Objects.requireNonNull(listOfValues, "listOfValues is required") });
    }

    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable jq(final @org.jetbrains.annotations.NotNull java.lang.String method, final @org.jetbrains.annotations.NotNull java.lang.String script, final @org.jetbrains.annotations.NotNull java.lang.Object inputString) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(inputString instanceof java.lang.String)
                && !(inputString instanceof java.util.Map)
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("inputString")
                        .append(" to be one of: java.lang.String, java.util.Map<java.lang.String, java.lang.Object>; received ")
                        .append(inputString.getClass()).toString());
            }
            if (inputString instanceof java.util.Map) {
                @SuppressWarnings("unchecked")
                final java.util.Map<java.lang.String, java.lang.Object> __cast_cad069 = (java.util.Map<java.lang.String, java.lang.Object>)inputString;
                if (!(__cast_cad069.keySet().toArray()[0] instanceof String)) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("inputString").append(".keySet()")
                            .append(" to contain class String; received ")
                            .append(__cast_cad069.keySet().toArray()[0].getClass()).toString());
                }
                for (final java.util.Map.Entry<String, java.lang.Object> __item_5b6ea0: __cast_cad069.entrySet()) {
                    final java.lang.Object __val_5b6ea0 = __item_5b6ea0.getValue();
                }
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "jq", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(method, "method is required"), java.util.Objects.requireNonNull(script, "script is required"), java.util.Objects.requireNonNull(inputString, "inputString is required") });
    }

    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable listMerge(final @org.jetbrains.annotations.NotNull java.util.List<? extends java.util.List<? extends java.lang.Object>> valueList) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "listMerge", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(valueList, "valueList is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.Number max(final @org.jetbrains.annotations.NotNull java.util.List<? extends java.lang.Number> values) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "max", software.amazon.jsii.NativeType.forClass(java.lang.Number.class), new Object[] { java.util.Objects.requireNonNull(values, "values is required") });
    }

    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable mergeMapToList(final @org.jetbrains.annotations.NotNull java.util.List<? extends java.util.Map<java.lang.String, ? extends java.util.List<? extends java.lang.Object>>> mapList) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "mergeMapToList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(mapList, "mapList is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.Number min(final @org.jetbrains.annotations.NotNull java.util.List<? extends java.lang.Number> values) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "min", software.amazon.jsii.NativeType.forClass(java.lang.Number.class), new Object[] { java.util.Objects.requireNonNull(values, "values is required") });
    }

    /**
     * The ``Ref`` intrinsic function returns the value of the specified parameter or resource.
     * <p>
     * Note that it doesn't validate the logicalName, it mainly serves paremeter/resource reference defined in a <code>RosInclude</code> template.
     * <p>
     * @param logicalName The logical name of a parameter/resource for which you want to retrieve its value. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String ref(final @org.jetbrains.annotations.NotNull java.lang.String logicalName) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "ref", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(logicalName, "logicalName is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.String replace(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, ? extends java.lang.Object> replaceData, final @org.jetbrains.annotations.NotNull java.lang.String content) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "replace", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(replaceData, "replaceData is required"), java.util.Objects.requireNonNull(content, "content is required") });
    }

    /**
     * The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.
     * <p>
     * @return a token represented as a string
     * @param index The index of the object to retrieve. This parameter is required.
     * @param array The list of objects to select from. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable select(final @org.jetbrains.annotations.NotNull java.lang.Object index, final @org.jetbrains.annotations.NotNull java.lang.Object array) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(index instanceof java.lang.String)
                && !(index instanceof java.lang.Number)
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("index")
                        .append(" to be one of: java.lang.String, java.lang.Number; received ")
                        .append(index.getClass()).toString());
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "select", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(index, "index is required"), array });
    }

    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable selectMapList(final @org.jetbrains.annotations.NotNull java.lang.String key, final @org.jetbrains.annotations.NotNull java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> mapList) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "selectMapList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(key, "key is required"), java.util.Objects.requireNonNull(mapList, "mapList is required") });
    }

    /**
     * To split a string into a list of string values so that you can select an element from the resulting string list, use the ``Fn::Split`` intrinsic function.
     * <p>
     * Specify the location of splits
     * with a delimiter, such as , (a comma). After you split a string, use the <code>Fn::Select</code> function
     * to pick a specific element.
     * <p>
     * @return a token represented as a string array
     * @param delimiter A string value that determines where the source string is divided. This parameter is required.
     * @param source The string value that you want to split. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.util.List<java.lang.String> split(final @org.jetbrains.annotations.NotNull java.lang.String delimiter, final @org.jetbrains.annotations.NotNull java.lang.String source) {
        return java.util.Collections.unmodifiableList(software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "split", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)), new Object[] { java.util.Objects.requireNonNull(delimiter, "delimiter is required"), java.util.Objects.requireNonNull(source, "source is required") }));
    }

    public static @org.jetbrains.annotations.NotNull java.lang.String str(final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "str", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { value });
    }

    /**
     * The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that you specify.
     * <p>
     * In your templates, you can use this function
     * to construct commands or outputs that include values that aren't available
     * until you create or update a stack.
     * <p>
     * @return a token represented as a string
     * @param body A string with variables that Ros Template substitutes with their associated values at runtime. This parameter is required.
     * @param variables The name of a variable that you included in the String parameter.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String sub(final @org.jetbrains.annotations.NotNull java.lang.String body, final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, ? extends java.lang.Object> variables) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "sub", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(body, "body is required"), variables });
    }

    /**
     * The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that you specify.
     * <p>
     * In your templates, you can use this function
     * to construct commands or outputs that include values that aren't available
     * until you create or update a stack.
     * <p>
     * @return a token represented as a string
     * @param body A string with variables that Ros Template substitutes with their associated values at runtime. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String sub(final @org.jetbrains.annotations.NotNull java.lang.String body) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "sub", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(body, "body is required") });
    }
}
