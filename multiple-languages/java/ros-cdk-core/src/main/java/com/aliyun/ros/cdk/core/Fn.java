package com.aliyun.ros.cdk.core;

/**
 * Resource Orchestration Service intrinsic functions.
 * <p>
 * https://help.aliyun.com/zh/ros/user-guide/functions
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.196Z")
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

    /**
     * Returns whether a value in the specified array is true or false.
     * <p>
     * Returns true if any item in the array is true, and false otherwise.
     * <p>
     * @param values An array of values. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String any(final @org.jetbrains.annotations.NotNull java.lang.Object values) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(values instanceof java.util.List)
                && !(values instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(values.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("values")
                        .append(" to be one of: java.util.List<java.lang.Object>, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(values.getClass()).toString());
            }
            if (values instanceof java.util.List) {
                @SuppressWarnings("unchecked")
                final java.util.List<java.lang.Object> __cast_89445e = (java.util.List<java.lang.Object>)values;
                for (int __idx_96736d = 0; __idx_96736d < __cast_89445e.size(); __idx_96736d++) {
                    final java.lang.Object __val_96736d = __cast_89445e.get(__idx_96736d);
                }
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "any", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(values, "values is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.Number avg(final @org.jetbrains.annotations.NotNull java.lang.Number ndigits, final @org.jetbrains.annotations.NotNull java.util.List<? extends java.lang.Number> values) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "avg", software.amazon.jsii.NativeType.forClass(java.lang.Number.class), new Object[] { java.util.Objects.requireNonNull(ndigits, "ndigits is required"), java.util.Objects.requireNonNull(values, "values is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.String base64Decode(final @org.jetbrains.annotations.NotNull java.lang.String data) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "base64Decode", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(data, "data is required") });
    }

    /**
     * The intrinsic function <code>Fn::Base64</code> returns the Base64 representation of the input string.
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
     * Returns a list of CIDR addresses.
     * <p>
     * @param ipBlock The IP address block from which you want to allocate the CIDR. This parameter is required.
     * @param count The number of IPv4 CIDRs to generate. This parameter is required.
     * @param cidrBits The number of subnet bits of the new CIDR. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String cidr(final @org.jetbrains.annotations.NotNull java.lang.Object ipBlock, final @org.jetbrains.annotations.NotNull java.lang.Object count, final @org.jetbrains.annotations.NotNull java.lang.Object cidrBits) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(ipBlock instanceof java.lang.String)
                && !(ipBlock instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(ipBlock.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("ipBlock")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(ipBlock.getClass()).toString());
            }
            if (
                 !(count instanceof java.lang.Number)
                && !(count instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(count.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("count")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(count.getClass()).toString());
            }
            if (
                 !(cidrBits instanceof java.lang.Number)
                && !(cidrBits instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(cidrBits.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("cidrBits")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(cidrBits.getClass()).toString());
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "cidr", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(ipBlock, "ipBlock is required"), java.util.Objects.requireNonNull(count, "count is required"), java.util.Objects.requireNonNull(cidrBits, "cidrBits is required") });
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
     * @param condition A condition such as <code>Fn::Equals</code> that evaluates to true or false. This parameter is required.
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
     * Returns true if at least one member of the list matches the specified value and false otherwise.
     * <p>
     * @param values An array of values. This parameter is required.
     * @param value A value. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String contains(final @org.jetbrains.annotations.NotNull java.lang.Object values, final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(values instanceof java.util.List)
                && !(values instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(values.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("values")
                        .append(" to be one of: java.util.List<java.lang.Object>, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(values.getClass()).toString());
            }
            if (values instanceof java.util.List) {
                @SuppressWarnings("unchecked")
                final java.util.List<java.lang.Object> __cast_89445e = (java.util.List<java.lang.Object>)values;
                for (int __idx_96736d = 0; __idx_96736d < __cast_89445e.size(); __idx_96736d++) {
                    final java.lang.Object __val_96736d = __cast_89445e.get(__idx_96736d);
                }
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "contains", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(values, "values is required"), value });
    }

    /**
     * Returns true if every member of the first list is equal to at least one value in the second list, and false otherwise.
     * <p>
     * @param values1 An array of values. This parameter is required.
     * @param values2 An array of values. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String eachMemberIn(final @org.jetbrains.annotations.NotNull java.lang.Object values1, final @org.jetbrains.annotations.NotNull java.lang.Object values2) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(values1 instanceof java.util.List)
                && !(values1 instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(values1.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("values1")
                        .append(" to be one of: java.util.List<java.lang.Object>, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(values1.getClass()).toString());
            }
            if (values1 instanceof java.util.List) {
                @SuppressWarnings("unchecked")
                final java.util.List<java.lang.Object> __cast_4ae8e1 = (java.util.List<java.lang.Object>)values1;
                for (int __idx_82abbb = 0; __idx_82abbb < __cast_4ae8e1.size(); __idx_82abbb++) {
                    final java.lang.Object __val_82abbb = __cast_4ae8e1.get(__idx_82abbb);
                }
            }
            if (
                 !(values2 instanceof java.util.List)
                && !(values2 instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(values2.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("values2")
                        .append(" to be one of: java.util.List<java.lang.Object>, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(values2.getClass()).toString());
            }
            if (values2 instanceof java.util.List) {
                @SuppressWarnings("unchecked")
                final java.util.List<java.lang.Object> __cast_b92750 = (java.util.List<java.lang.Object>)values2;
                for (int __idx_9f591a = 0; __idx_9f591a < __cast_b92750.size(); __idx_9f591a++) {
                    final java.lang.Object __val_9f591a = __cast_b92750.get(__idx_9f591a);
                }
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "eachMemberIn", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(values1, "values1 is required"), java.util.Objects.requireNonNull(values2, "values2 is required") });
    }

    /**
     * The intrinsic function <code>Fn::FindInMap</code> returns the value corresponding to keys in a two-level map that is declared in the Mappings section.
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
     * Returns the formatted time of the object.
     * <p>
     * @param format The format of the time. This parameter is required.
     * @param timeZone The time zone. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String formatTime(final @org.jetbrains.annotations.NotNull java.lang.Object format, final @org.jetbrains.annotations.NotNull java.lang.Object timeZone) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(format instanceof java.lang.String)
                && !(format instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(format.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("format")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(format.getClass()).toString());
            }
            if (
                 !(timeZone instanceof java.lang.String)
                && !(timeZone instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(timeZone.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("timeZone")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(timeZone.getClass()).toString());
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "formatTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(format, "format is required"), java.util.Objects.requireNonNull(timeZone, "timeZone is required") });
    }

    /**
     * The <code>Fn::GetAtt</code> intrinsic function returns the value of an attribute from a resource in the template.
     * <p>
     * @return an IResolvable object
     * @param logicalNameOfResource The logical name (also called logical ID) of the resource that contains the attribute that you want. This parameter is required.
     * @param attributeName The name of the resource-specific attribute whose value you want. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAtt(final @org.jetbrains.annotations.NotNull java.lang.String logicalNameOfResource, final @org.jetbrains.annotations.NotNull java.lang.String attributeName) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "getAtt", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(logicalNameOfResource, "logicalNameOfResource is required"), java.util.Objects.requireNonNull(attributeName, "attributeName is required") });
    }

    /**
     * The intrinsic function <code>Fn::GetAZs</code> returns an array that lists Availability Zones for a specified region.
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
     * The intrinsic function <code>Fn::GetStackOutput</code> returns the value of an output exported by another stack.
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
     * The intrinsic function <code>Fn::GetStackOutput</code> returns the value of an output exported by another stack.
     * <p>
     * @return a token represented as a string
     * @param stackID This parameter is required.
     * @param outputKey This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getStackOutput(final @org.jetbrains.annotations.NotNull java.lang.String stackID, final @org.jetbrains.annotations.NotNull java.lang.String outputKey) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "getStackOutput", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(stackID, "stackID is required"), java.util.Objects.requireNonNull(outputKey, "outputKey is required") });
    }

    /**
     * The intrinsic function Fn::Indent adjust the indentation of the string.
     * <p>
     * @param str Strings that need to be indented. This parameter is required.
     * @param level Indentation level. This parameter is required.
     * @param indent Optional, defaults to 2 for two Spaces per level, in the range [0,4].
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String indent(final @org.jetbrains.annotations.NotNull java.lang.Object str, final @org.jetbrains.annotations.NotNull java.lang.Object level, final @org.jetbrains.annotations.Nullable java.lang.Object indent) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(str instanceof java.lang.String)
                && !(str instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(str.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("str")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(str.getClass()).toString());
            }
            if (
                 !(level instanceof java.lang.Number)
                && !(level instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(level.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("level")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(level.getClass()).toString());
            }
            if (
                 !(indent instanceof java.lang.Number)
                && !(indent instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(indent.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("indent")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(indent.getClass()).toString());
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "indent", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(str, "str is required"), java.util.Objects.requireNonNull(level, "level is required"), indent });
    }

    /**
     * The intrinsic function Fn::Indent adjust the indentation of the string.
     * <p>
     * @param str Strings that need to be indented. This parameter is required.
     * @param level Indentation level. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String indent(final @org.jetbrains.annotations.NotNull java.lang.Object str, final @org.jetbrains.annotations.NotNull java.lang.Object level) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(str instanceof java.lang.String)
                && !(str instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(str.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("str")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(str.getClass()).toString());
            }
            if (
                 !(level instanceof java.lang.Number)
                && !(level instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(level.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("level")
                        .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(level.getClass()).toString());
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "indent", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(str, "str is required"), java.util.Objects.requireNonNull(level, "level is required") });
    }

    /**
     * Returns the index of the item in the list.
     * <p>
     * @param itemToFindIndex The item to find in the list. This parameter is required.
     * @param itemList The list to find the item in. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String index(final @org.jetbrains.annotations.NotNull java.lang.Object itemToFindIndex, final @org.jetbrains.annotations.NotNull java.lang.Object itemList) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(itemList instanceof java.util.List)
                && !(itemList instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(itemList.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("itemList")
                        .append(" to be one of: java.util.List<java.lang.Object>, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(itemList.getClass()).toString());
            }
            if (itemList instanceof java.util.List) {
                @SuppressWarnings("unchecked")
                final java.util.List<java.lang.Object> __cast_9dda49 = (java.util.List<java.lang.Object>)itemList;
                for (int __idx_c9f5b5 = 0; __idx_c9f5b5 < __cast_9dda49.size(); __idx_c9f5b5++) {
                    final java.lang.Object __val_c9f5b5 = __cast_9dda49.get(__idx_c9f5b5);
                }
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "index", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { itemToFindIndex, java.util.Objects.requireNonNull(itemList, "itemList is required") });
    }

    /**
     * The intrinsic function <code>Fn::Join</code> appends a set of values into a single value, separated by the specified delimiter.
     * <p>
     * If a delimiter is the empty
     * string, the set of values are concatenated with no delimiter.
     * <p>
     * @return a token represented as a string
     * @param delimiter The value you want to occur between fragments. This parameter is required.
     * @param listOfValues The list of values you want combined. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String join(final @org.jetbrains.annotations.NotNull java.lang.String delimiter, final @org.jetbrains.annotations.NotNull java.util.List<? extends java.lang.Object> listOfValues) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_fb0356 = 0; __idx_fb0356 < listOfValues.size(); __idx_fb0356++) {
                final java.lang.Object __val_fb0356 = listOfValues.get(__idx_fb0356);
                if (
                     !(__val_fb0356 instanceof java.lang.String)
                    && !(__val_fb0356 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_fb0356.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("listOfValues").append(".get(").append(__idx_fb0356).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_fb0356.getClass()).toString());
                }
            }
        }
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

    /**
     * Returns the length of the object.
     * <p>
     * @param obj An object whose length needs to be computed. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String lengthOf(final @org.jetbrains.annotations.NotNull java.lang.Object obj) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "lengthOf", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { obj });
    }

    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable listMerge(final @org.jetbrains.annotations.NotNull java.util.List<? extends java.lang.Object> valueList) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_dfc316 = 0; __idx_dfc316 < valueList.size(); __idx_dfc316++) {
                final java.lang.Object __val_dfc316 = valueList.get(__idx_dfc316);
                if (
                     !(__val_dfc316 instanceof java.util.List)
                    && !(__val_dfc316 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_dfc316.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("valueList").append(".get(").append(__idx_dfc316).append(")")
                            .append(" to be one of: java.util.List<java.lang.Object>, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_dfc316.getClass()).toString());
                }
                if (__val_dfc316 instanceof java.util.List) {
                    @SuppressWarnings("unchecked")
                    final java.util.List<java.lang.Object> __cast_2a5aee = (java.util.List<java.lang.Object>)__val_dfc316;
                    for (int __idx_78e089 = 0; __idx_78e089 < __cast_2a5aee.size(); __idx_78e089++) {
                        final java.lang.Object __val_78e089 = __cast_2a5aee.get(__idx_78e089);
                    }
                }
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "listMerge", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class), new Object[] { java.util.Objects.requireNonNull(valueList, "valueList is required") });
    }

    /**
     * The intrinsic function Fn::MarketplaceImage returns the default image ID of the specified cloud marketplace image product Code.
     * <p>
     * @param imageProductCode The product code of the cloud marketplace image. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String marketplaceImage(final @org.jetbrains.annotations.NotNull java.lang.Object imageProductCode) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(imageProductCode instanceof java.lang.String)
                && !(imageProductCode instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(imageProductCode.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("imageProductCode")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(imageProductCode.getClass()).toString());
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "marketplaceImage", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(imageProductCode, "imageProductCode is required") });
    }

    /**
     * Returns true if a specified string matches a specified pattern.
     * <p>
     * @param pattern A regular expression in string form. This parameter is required.
     * @param value The string to match. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String matchPattern(final @org.jetbrains.annotations.NotNull java.lang.Object pattern, final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(pattern instanceof java.lang.String)
                && !(pattern instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(pattern.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("pattern")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(pattern.getClass()).toString());
            }
            if (
                 !(value instanceof java.lang.String)
                && !(value instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(value.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(value.getClass()).toString());
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Fn.class, "matchPattern", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(pattern, "pattern is required"), java.util.Objects.requireNonNull(value, "value is required") });
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
     * The <code>Ref</code> intrinsic function returns the value of the specified parameter or resource.
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
     * The intrinsic function <code>Fn::Select</code> returns a single object from a list of objects by index.
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
     * To split a string into a list of string values so that you can select an element from the resulting string list, use the <code>Fn::Split</code> intrinsic function.
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
     * The intrinsic function <code>Fn::Sub</code> substitutes variables in an input string with values that you specify.
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
     * The intrinsic function <code>Fn::Sub</code> substitutes variables in an input string with values that you specify.
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
