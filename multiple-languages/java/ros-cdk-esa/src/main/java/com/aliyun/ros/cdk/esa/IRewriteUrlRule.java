package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>RewriteUrlRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.056Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IRewriteUrlRule")
@software.amazon.jsii.Jsii.Proxy(IRewriteUrlRule.Jsii$Proxy.class)
public interface IRewriteUrlRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConfigId: The configuration ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId();

    /**
     * Attribute ConfigType: Configuration type.
     * <p>
     * This parameter determines whether to query global configurations or feature-specific configurations. Note: This logic only takes effect if the functionName parameter is also provided.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType();

    /**
     * Attribute QueryString: The desired query string to which you want to rewrite the query string in the original request.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryString();

    /**
     * Attribute RewriteQueryStringType: Query string rewrite type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRewriteQueryStringType();

    /**
     * Attribute RewriteUriType: URI rewrite type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRewriteUriType();

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
     * Attribute Sequence: Rule execution order.
     * <p>
     * The smaller the value, the higher the priority of execution.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence();

    /**
     * Attribute SiteVersion: Version number of the site configuration.
     * <p>
     * For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion();

    /**
     * Attribute Uri: The desired URI to which you want to rewrite the path in the original request.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RewriteUrlRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IRewriteUrlRule.Jsii$Default {
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
         * Attribute ConfigId: The configuration ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: Configuration type.
         * <p>
         * This parameter determines whether to query global configurations or feature-specific configurations. Note: This logic only takes effect if the functionName parameter is also provided.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueryString: The desired query string to which you want to rewrite the query string in the original request.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryString() {
            return software.amazon.jsii.Kernel.get(this, "attrQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RewriteQueryStringType: Query string rewrite type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRewriteQueryStringType() {
            return software.amazon.jsii.Kernel.get(this, "attrRewriteQueryStringType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RewriteUriType: URI rewrite type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRewriteUriType() {
            return software.amazon.jsii.Kernel.get(this, "attrRewriteUriType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute Sequence: Rule execution order.
         * <p>
         * The smaller the value, the higher the priority of execution.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
            return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteVersion: Version number of the site configuration.
         * <p>
         * For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uri: The desired URI to which you want to rewrite the path in the original request.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
            return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RewriteUrlRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RewriteUrlRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRewriteUrlRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRewriteUrlRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConfigId: The configuration ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: Configuration type.
         * <p>
         * This parameter determines whether to query global configurations or feature-specific configurations. Note: This logic only takes effect if the functionName parameter is also provided.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueryString: The desired query string to which you want to rewrite the query string in the original request.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueryString() {
            return software.amazon.jsii.Kernel.get(this, "attrQueryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RewriteQueryStringType: Query string rewrite type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRewriteQueryStringType() {
            return software.amazon.jsii.Kernel.get(this, "attrRewriteQueryStringType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RewriteUriType: URI rewrite type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRewriteUriType() {
            return software.amazon.jsii.Kernel.get(this, "attrRewriteUriType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute Sequence: Rule execution order.
         * <p>
         * The smaller the value, the higher the priority of execution.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
            return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteVersion: Version number of the site configuration.
         * <p>
         * For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uri: The desired URI to which you want to rewrite the path in the original request.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
            return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RewriteUrlRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RewriteUrlRuleProps.class));
        }
    }
}
