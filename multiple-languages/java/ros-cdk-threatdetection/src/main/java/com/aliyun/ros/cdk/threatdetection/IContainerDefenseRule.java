package com.aliyun.ros.cdk.threatdetection;

/**
 * Represents a <code>ContainerDefenseRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.556Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.IContainerDefenseRule")
@software.amazon.jsii.Jsii.Proxy(IContainerDefenseRule.Jsii$Proxy.class)
public interface IContainerDefenseRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Description: Rule description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute RuleAction: The action that is performed when the rule is hit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleAction();

    /**
     * Attribute RuleId: Rule Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId();

    /**
     * Attribute RuleName: The name of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName();

    /**
     * Attribute RuleSwitch: The switch of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleSwitch();

    /**
     * Attribute RuleType: The rule type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleType();

    /**
     * Attribute Scope: Rule scope.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScope();

    /**
     * Attribute Whitelist: The whitelist of rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelist();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.threatdetection.IContainerDefenseRule.Jsii$Default {
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
         * Attribute Description: Rule description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleAction: The action that is performed when the rule is hit.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleAction() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleId: Rule Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleSwitch: The switch of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleType: The rule type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleType() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scope: Rule scope.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScope() {
            return software.amazon.jsii.Kernel.get(this, "attrScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Whitelist: The whitelist of rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IContainerDefenseRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IContainerDefenseRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Description: Rule description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleAction: The action that is performed when the rule is hit.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleAction() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleId: Rule Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: The name of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleSwitch: The switch of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleSwitch() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleSwitch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleType: The rule type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleType() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scope: Rule scope.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScope() {
            return software.amazon.jsii.Kernel.get(this, "attrScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Whitelist: The whitelist of rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.ContainerDefenseRuleProps.class));
        }
    }
}
