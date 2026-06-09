package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>WaitingRoomRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:49:07.716Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IWaitingRoomRule")
@software.amazon.jsii.Jsii.Proxy(IWaitingRoomRule.Jsii$Proxy.class)
public interface IWaitingRoomRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Rule: The content of the rule, the implemented policy or conditional expression.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule();

    /**
     * Attribute RuleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable();

    /**
     * Attribute RuleName: Rule name, optional, used to query by waiting room bypass rule name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName();

    /**
     * Attribute WaitingRoomRuleId: The rule ID, which can be used to query a specific rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomRuleId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IWaitingRoomRule.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute Rule: The content of the rule, the implemented policy or conditional expression.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
            return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: Rule name, optional, used to query by waiting room bypass rule name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomRuleId: The rule ID, which can be used to query a specific rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WaitingRoomRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IWaitingRoomRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IWaitingRoomRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute Rule: The content of the rule, the implemented policy or conditional expression.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
            return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: Rule name, optional, used to query by waiting room bypass rule name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WaitingRoomRuleId: The rule ID, which can be used to query a specific rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitingRoomRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrWaitingRoomRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WaitingRoomRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WaitingRoomRuleProps.class));
        }
    }
}
