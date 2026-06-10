package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>WafRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:49:07.712Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IWafRule")
@software.amazon.jsii.Jsii.Proxy(IWafRule.Jsii$Proxy.class)
public interface IWafRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Config: The configuration of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig();

    /**
     * Attribute Phase: The version of the website.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhase();

    /**
     * Attribute RulesetId: The ID of the WAF ruleset, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850233.html">ListWafRulesets</a> operation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRulesetId();

    /**
     * Attribute UpdateTime: The time when the rule was last modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    /**
     * Attribute WafRuleId: WafRule Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWafRuleId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WafRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IWafRule.Jsii$Default {
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
         * Attribute Config: The configuration of the rule.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Phase: The version of the website.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhase() {
            return software.amazon.jsii.Kernel.get(this, "attrPhase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RulesetId: The ID of the WAF ruleset, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850233.html">ListWafRulesets</a> operation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRulesetId() {
            return software.amazon.jsii.Kernel.get(this, "attrRulesetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the rule was last modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WafRuleId: WafRule Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWafRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrWafRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WafRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WafRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IWafRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IWafRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Config: The configuration of the rule.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Phase: The version of the website.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhase() {
            return software.amazon.jsii.Kernel.get(this, "attrPhase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RulesetId: The ID of the WAF ruleset, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850233.html">ListWafRulesets</a> operation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRulesetId() {
            return software.amazon.jsii.Kernel.get(this, "attrRulesetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the rule was last modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WafRuleId: WafRule Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWafRuleId() {
            return software.amazon.jsii.Kernel.get(this, "attrWafRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.WafRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.WafRuleProps.class));
        }
    }
}
