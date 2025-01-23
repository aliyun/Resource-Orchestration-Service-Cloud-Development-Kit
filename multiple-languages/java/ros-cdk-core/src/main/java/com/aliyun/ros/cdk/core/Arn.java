package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:33.585Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Arn")
public class Arn extends software.amazon.jsii.JsiiObject {

    protected Arn(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Arn(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Extract the full resource name from an ARN.
     * <p>
     * Necessary for resource names (paths) that may contain the separator, like
     * <code>acs:ram::123456789012****:role/adminrole/alice</code>.
     * <p>
     * Only works if we statically know the expected <code>resourceType</code> beforehand, since we're going
     * to use that to split the string on ':<resourceType>/' (and take the right-hand side).
     * <p>
     * We can't extract the 'resourceType' from the ARN at hand, because ROS Expressions
     * only allow literals in the 'separator' argument to <code>{ Fn::Split }</code>, and so it can't be
     * <code>{ Fn::Select: [5, { Fn::Split: [':', ARN] }}</code>.
     * <p>
     * Only necessary for ARN formats for which the type-name separator is <code>/</code>.
     * <p>
     * @param arn This parameter is required.
     * @param resourceType This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String extractResourceName(final @org.jetbrains.annotations.NotNull java.lang.String arn, final @org.jetbrains.annotations.NotNull java.lang.String resourceType) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Arn.class, "extractResourceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(arn, "arn is required"), java.util.Objects.requireNonNull(resourceType, "resourceType is required") });
    }

    /**
     * Creates an ARN from components.
     * <p>
     * If <code>partition</code>, <code>region</code> or <code>account</code> are not specified, the stack's
     * partition, region and account will be used.
     * <p>
     * If any component is the empty string, an empty string will be inserted
     * into the generated ARN at the location that component corresponds to.
     * <p>
     * The ARN will be formatted as follows:
     * <p>
     * {partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}
     * <p>
     * The required ARN pieces that are omitted will be taken from the stack that
     * the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
     * can be 'undefined'.
     * <p>
     * @param components This parameter is required.
     * @param stack
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String format(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ArnComponents components, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.Stack stack) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Arn.class, "format", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(components, "components is required"), stack });
    }

    /**
     * Creates an ARN from components.
     * <p>
     * If <code>partition</code>, <code>region</code> or <code>account</code> are not specified, the stack's
     * partition, region and account will be used.
     * <p>
     * If any component is the empty string, an empty string will be inserted
     * into the generated ARN at the location that component corresponds to.
     * <p>
     * The ARN will be formatted as follows:
     * <p>
     * {partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}
     * <p>
     * The required ARN pieces that are omitted will be taken from the stack that
     * the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
     * can be 'undefined'.
     * <p>
     * @param components This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull java.lang.String format(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ArnComponents components) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Arn.class, "format", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(components, "components is required") });
    }

    /**
     * Splits the provided ARN into its components.
     * <p>
     * Works both if 'arn' is a string like 'acs:oss:::bucket',
     * and a Token representing a dynamic CloudFormation expression
     * (in which case the returned components will also be dynamic ROS expressions,
     * encoded as Tokens).
     * <p>
     * @param arn the ARN to split into its components. This parameter is required.
     * @param arnFormat the expected format of 'arn' - depends on what format the service 'arn' represents uses. This parameter is required.
     */
    public static @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ArnComponents split(final @org.jetbrains.annotations.NotNull java.lang.Object arn, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ArnFormat arnFormat) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (
                 !(arn instanceof java.lang.String)
                && !(arn instanceof com.aliyun.ros.cdk.core.IResolvable)
                && !(arn.getClass().equals(software.amazon.jsii.JsiiObject.class))
            ) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("arn")
                        .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                        .append(arn.getClass()).toString());
            }
        }
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.Arn.class, "split", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ArnComponents.class), new Object[] { java.util.Objects.requireNonNull(arn, "arn is required"), java.util.Objects.requireNonNull(arnFormat, "arnFormat is required") });
    }
}
