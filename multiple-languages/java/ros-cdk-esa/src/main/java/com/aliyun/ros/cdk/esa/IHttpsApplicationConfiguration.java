package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>HttpsApplicationConfiguration</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.466Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IHttpsApplicationConfiguration")
@software.amazon.jsii.Jsii.Proxy(IHttpsApplicationConfiguration.Jsii$Proxy.class)
public interface IHttpsApplicationConfiguration extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AltSvc: Function switch, default off.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvc();

    /**
     * Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter.
     * <p>
     * This parameter is disabled by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcClear();

    /**
     * Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds.
     * <p>
     * The default value is 86400 seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcMa();

    /**
     * Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter.
     * <p>
     * This parameter is disabled by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcPersist();

    /**
     * Attribute ConfigId: Config Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId();

    /**
     * Attribute ConfigType: The type of the configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType();

    /**
     * Attribute Hsts: Whether to enable HSTS.
     * <p>
     * It is disabled by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHsts();

    /**
     * Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsIncludeSubdomains();

    /**
     * Attribute HstsMaxAge: The expiration time of HSTS, in seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsMaxAge();

    /**
     * Attribute HstsPreload: Whether to enable HSTS preloading.
     * <p>
     * It is disabled by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsPreload();

    /**
     * Attribute HttpsForce: Whether to enable forced HTTPS.
     * <p>
     * It is disabled by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsForce();

    /**
     * Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsForceCode();

    /**
     * Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.
     * <p>
     * This parameter is disabled by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsNoSniDeny();

    /**
     * Attribute HttpsSniVerify: Whether to enable SNI verification.
     * <p>
     * It is disabled by default.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsSniVerify();

    /**
     * Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsSniWhitelist();

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

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsApplicationConfigurationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IHttpsApplicationConfiguration.Jsii$Default {
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
         * Attribute AltSvc: Function switch, default off.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvc() {
            return software.amazon.jsii.Kernel.get(this, "attrAltSvc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter.
         * <p>
         * This parameter is disabled by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcClear() {
            return software.amazon.jsii.Kernel.get(this, "attrAltSvcClear", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds.
         * <p>
         * The default value is 86400 seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcMa() {
            return software.amazon.jsii.Kernel.get(this, "attrAltSvcMa", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter.
         * <p>
         * This parameter is disabled by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcPersist() {
            return software.amazon.jsii.Kernel.get(this, "attrAltSvcPersist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute Hsts: Whether to enable HSTS.
         * <p>
         * It is disabled by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHsts() {
            return software.amazon.jsii.Kernel.get(this, "attrHsts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsIncludeSubdomains() {
            return software.amazon.jsii.Kernel.get(this, "attrHstsIncludeSubdomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HstsMaxAge: The expiration time of HSTS, in seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsMaxAge() {
            return software.amazon.jsii.Kernel.get(this, "attrHstsMaxAge", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HstsPreload: Whether to enable HSTS preloading.
         * <p>
         * It is disabled by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsPreload() {
            return software.amazon.jsii.Kernel.get(this, "attrHstsPreload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsForce: Whether to enable forced HTTPS.
         * <p>
         * It is disabled by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsForce() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsForceCode() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsForceCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.
         * <p>
         * This parameter is disabled by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsNoSniDeny() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsNoSniDeny", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsSniVerify: Whether to enable SNI verification.
         * <p>
         * It is disabled by default.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsSniVerify() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsSniVerify", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsSniWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsSniWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsApplicationConfigurationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.HttpsApplicationConfigurationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IHttpsApplicationConfiguration}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IHttpsApplicationConfiguration, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AltSvc: Function switch, default off.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvc() {
            return software.amazon.jsii.Kernel.get(this, "attrAltSvc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter.
         * <p>
         * This parameter is disabled by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcClear() {
            return software.amazon.jsii.Kernel.get(this, "attrAltSvcClear", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds.
         * <p>
         * The default value is 86400 seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcMa() {
            return software.amazon.jsii.Kernel.get(this, "attrAltSvcMa", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter.
         * <p>
         * This parameter is disabled by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAltSvcPersist() {
            return software.amazon.jsii.Kernel.get(this, "attrAltSvcPersist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
         * Attribute Hsts: Whether to enable HSTS.
         * <p>
         * It is disabled by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHsts() {
            return software.amazon.jsii.Kernel.get(this, "attrHsts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsIncludeSubdomains() {
            return software.amazon.jsii.Kernel.get(this, "attrHstsIncludeSubdomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HstsMaxAge: The expiration time of HSTS, in seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsMaxAge() {
            return software.amazon.jsii.Kernel.get(this, "attrHstsMaxAge", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HstsPreload: Whether to enable HSTS preloading.
         * <p>
         * It is disabled by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHstsPreload() {
            return software.amazon.jsii.Kernel.get(this, "attrHstsPreload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsForce: Whether to enable forced HTTPS.
         * <p>
         * It is disabled by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsForce() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsForceCode() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsForceCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI.
         * <p>
         * This parameter is disabled by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsNoSniDeny() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsNoSniDeny", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsSniVerify: Whether to enable SNI verification.
         * <p>
         * It is disabled by default.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsSniVerify() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsSniVerify", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsSniWhitelist() {
            return software.amazon.jsii.Kernel.get(this, "attrHttpsSniWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.HttpsApplicationConfigurationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.HttpsApplicationConfigurationProps.class));
        }
    }
}
