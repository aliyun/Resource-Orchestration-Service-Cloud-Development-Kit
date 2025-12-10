package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>RedirectRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.559Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IRedirectRule")
@software.amazon.jsii.Jsii.Proxy(IRedirectRule.Jsii$Proxy.class)
public interface IRedirectRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConfigId: Config Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId();

    /**
     * Attribute ConfigType: The type of the configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType();

    /**
     * Attribute ReserveQueryString: Indicates whether the feature of retaining the query string is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReserveQueryString();

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule();

    /**
     * Attribute RuleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable();

    /**
     * Attribute RuleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName();

    /**
     * Attribute Sequence: Order of rule execution.
     * <p>
     * The smaller the value, the higher the priority for execution.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence();

    /**
     * Attribute SiteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion();

    /**
     * Attribute StatusCode: The response code that you want to use to indicate URL redirection.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusCode();

    /**
     * Attribute TargetUrl: The destination URL to which requests are redirected.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetUrl();

    /**
     * Attribute Type: The redirect type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RedirectRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IRedirectRule.Jsii$Default {
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
         * Attribute ConfigId: Config Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: The type of the configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReserveQueryString: Indicates whether the feature of retaining the query string is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReserveQueryString() {
            return software.amazon.jsii.Kernel.get(this, "attrReserveQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
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
         * Attribute RuleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sequence: Order of rule execution.
         * <p>
         * The smaller the value, the higher the priority for execution.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
            return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusCode: The response code that you want to use to indicate URL redirection.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusCode() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetUrl: The destination URL to which requests are redirected.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The redirect type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RedirectRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RedirectRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRedirectRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRedirectRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConfigId: Config Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: The type of the configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReserveQueryString: Indicates whether the feature of retaining the query string is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReserveQueryString() {
            return software.amazon.jsii.Kernel.get(this, "attrReserveQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
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
         * Attribute RuleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sequence: Order of rule execution.
         * <p>
         * The smaller the value, the higher the priority for execution.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
            return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusCode: The response code that you want to use to indicate URL redirection.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusCode() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TargetUrl: The destination URL to which requests are redirected.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTargetUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The redirect type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RedirectRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RedirectRuleProps.class));
        }
    }
}
