package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>HttpsBasicConfiguration</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.470Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IHttpsBasicConfiguration")
@software.amazon.jsii.Jsii.Proxy(IHttpsBasicConfiguration.Jsii$Proxy.class)
public interface IHttpsBasicConfiguration extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphersuite();

    /**
     * Attribute CiphersuiteGroup: Cipher suite group.
     * <p>
     * Default is all cipher suites.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphersuiteGroup();

    /**
     * Attribute ConfigId: ConfigId of the configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId();

    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType();

    /**
     * Attribute Http2: Indicates whether HTTP2 is enabled.
     * <p>
     * Default is on.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2();

    /**
     * Attribute Http3: Whether to enable HTTP3, which is enabled by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp3();

    /**
     * Attribute Https: Whether to enable HTTPS.
     * <p>
     * Default is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttps();

    /**
     * Attribute OcspStapling: Indicates whether OCSP is enabled.
     * <p>
     * Default is off.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOcspStapling();

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
     * Attribute Tls10: Whether to enable TLS1.0. Default is disabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls10();

    /**
     * Attribute Tls11: Whether to enable TLS1.1. Default is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls11();

    /**
     * Attribute Tls12: Whether to enable TLS1.2. Default is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls12();

    /**
     * Attribute Tls13: Whether to enable TLS1.3. Default is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls13();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsBasicConfigurationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IHttpsBasicConfiguration.Jsii$Default {
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
         * Attribute Ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphersuite() {
            return software.amazon.jsii.Kernel.get(this, "attrCiphersuite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CiphersuiteGroup: Cipher suite group.
         * <p>
         * Default is all cipher suites.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphersuiteGroup() {
            return software.amazon.jsii.Kernel.get(this, "attrCiphersuiteGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigId: ConfigId of the configuration.
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
         * Attribute Http2: Indicates whether HTTP2 is enabled.
         * <p>
         * Default is on.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2() {
            return software.amazon.jsii.Kernel.get(this, "attrHttp2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Http3: Whether to enable HTTP3, which is enabled by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp3() {
            return software.amazon.jsii.Kernel.get(this, "attrHttp3", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Https: Whether to enable HTTPS.
         * <p>
         * Default is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttps() {
            return software.amazon.jsii.Kernel.get(this, "attrHttps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OcspStapling: Indicates whether OCSP is enabled.
         * <p>
         * Default is off.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOcspStapling() {
            return software.amazon.jsii.Kernel.get(this, "attrOcspStapling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute Tls10: Whether to enable TLS1.0. Default is disabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls10() {
            return software.amazon.jsii.Kernel.get(this, "attrTls10", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tls11: Whether to enable TLS1.1. Default is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls11() {
            return software.amazon.jsii.Kernel.get(this, "attrTls11", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tls12: Whether to enable TLS1.2. Default is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls12() {
            return software.amazon.jsii.Kernel.get(this, "attrTls12", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tls13: Whether to enable TLS1.3. Default is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls13() {
            return software.amazon.jsii.Kernel.get(this, "attrTls13", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsBasicConfigurationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.HttpsBasicConfigurationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IHttpsBasicConfiguration}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IHttpsBasicConfiguration, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphersuite() {
            return software.amazon.jsii.Kernel.get(this, "attrCiphersuite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CiphersuiteGroup: Cipher suite group.
         * <p>
         * Default is all cipher suites.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphersuiteGroup() {
            return software.amazon.jsii.Kernel.get(this, "attrCiphersuiteGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigId: ConfigId of the configuration.
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
         * Attribute Http2: Indicates whether HTTP2 is enabled.
         * <p>
         * Default is on.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2() {
            return software.amazon.jsii.Kernel.get(this, "attrHttp2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Http3: Whether to enable HTTP3, which is enabled by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp3() {
            return software.amazon.jsii.Kernel.get(this, "attrHttp3", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Https: Whether to enable HTTPS.
         * <p>
         * Default is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttps() {
            return software.amazon.jsii.Kernel.get(this, "attrHttps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OcspStapling: Indicates whether OCSP is enabled.
         * <p>
         * Default is off.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOcspStapling() {
            return software.amazon.jsii.Kernel.get(this, "attrOcspStapling", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute Tls10: Whether to enable TLS1.0. Default is disabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls10() {
            return software.amazon.jsii.Kernel.get(this, "attrTls10", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tls11: Whether to enable TLS1.1. Default is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls11() {
            return software.amazon.jsii.Kernel.get(this, "attrTls11", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tls12: Whether to enable TLS1.2. Default is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls12() {
            return software.amazon.jsii.Kernel.get(this, "attrTls12", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tls13: Whether to enable TLS1.3. Default is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTls13() {
            return software.amazon.jsii.Kernel.get(this, "attrTls13", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsBasicConfigurationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.HttpsBasicConfigurationProps.class));
        }
    }
}
