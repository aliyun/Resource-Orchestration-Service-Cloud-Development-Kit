package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>NetworkOptimization</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.545Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.INetworkOptimization")
@software.amazon.jsii.Jsii.Proxy(INetworkOptimization.Jsii$Proxy.class)
public interface INetworkOptimization extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConfigId: ConfigId of the configuration, which can be obtained by calling the ListNetworkOptimizations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId();

    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType();

    /**
     * Attribute Grpc: Whether to enable GRPC, default is disabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrpc();

    /**
     * Attribute Http2Origin: Whether to enable HTTP2 origin, default is disabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Origin();

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
     * Attribute SmartRouting: Whether to enable smart routing service, default is disabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSmartRouting();

    /**
     * Attribute UploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadMaxFilesize();

    /**
     * Attribute Websocket: Whether to enable Websocket, default is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWebsocket();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.NetworkOptimizationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.INetworkOptimization.Jsii$Default {
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
         * Attribute ConfigId: ConfigId of the configuration, which can be obtained by calling the ListNetworkOptimizations.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Grpc: Whether to enable GRPC, default is disabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrpc() {
            return software.amazon.jsii.Kernel.get(this, "attrGrpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Http2Origin: Whether to enable HTTP2 origin, default is disabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Origin() {
            return software.amazon.jsii.Kernel.get(this, "attrHttp2Origin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute SmartRouting: Whether to enable smart routing service, default is disabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSmartRouting() {
            return software.amazon.jsii.Kernel.get(this, "attrSmartRouting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadMaxFilesize() {
            return software.amazon.jsii.Kernel.get(this, "attrUploadMaxFilesize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Websocket: Whether to enable Websocket, default is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWebsocket() {
            return software.amazon.jsii.Kernel.get(this, "attrWebsocket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.NetworkOptimizationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.NetworkOptimizationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link INetworkOptimization}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends INetworkOptimization, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConfigId: ConfigId of the configuration, which can be obtained by calling the ListNetworkOptimizations.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Grpc: Whether to enable GRPC, default is disabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrpc() {
            return software.amazon.jsii.Kernel.get(this, "attrGrpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Http2Origin: Whether to enable HTTP2 origin, default is disabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Origin() {
            return software.amazon.jsii.Kernel.get(this, "attrHttp2Origin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute SmartRouting: Whether to enable smart routing service, default is disabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSmartRouting() {
            return software.amazon.jsii.Kernel.get(this, "attrSmartRouting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadMaxFilesize() {
            return software.amazon.jsii.Kernel.get(this, "attrUploadMaxFilesize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Websocket: Whether to enable Websocket, default is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWebsocket() {
            return software.amazon.jsii.Kernel.get(this, "attrWebsocket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.NetworkOptimizationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.NetworkOptimizationProps.class));
        }
    }
}
