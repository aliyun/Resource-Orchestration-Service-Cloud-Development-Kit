package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>OriginRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.549Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IOriginRule")
@software.amazon.jsii.Jsii.Proxy(IOriginRule.Jsii$Proxy.class)
public interface IOriginRule extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConfigId: Back-to-source rule configuration ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId();

    /**
     * Attribute ConfigType: The configuration type.
     * <p>
     * You can use this parameter to check the global configuration or rule configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType();

    /**
     * Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsRecord();

    /**
     * Attribute Follow302Enable: Return Source 302 follow switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302Enable();

    /**
     * Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302MaxTries();

    /**
     * Attribute Follow302RetainArgs: Retain the original request parameter switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302RetainArgs();

    /**
     * Attribute Follow302RetainHeader: Retain the original request header switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302RetainHeader();

    /**
     * Attribute Follow302TargetHost: Modify the source host after 302.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302TargetHost();

    /**
     * Attribute OriginHost: The HOST carried in the back-to-origin request.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHost();

    /**
     * Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHttpPort();

    /**
     * Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHttpsPort();

    /**
     * Attribute OriginMtls: The mtls switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginMtls();

    /**
     * Attribute OriginReadTimeout: Read timeout interval of the source station (s).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginReadTimeout();

    /**
     * Attribute OriginScheme: The protocol used by the back-to-origin request.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginScheme();

    /**
     * Attribute OriginSni: SNI carried in the back-to-origin request.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginSni();

    /**
     * Attribute OriginVerify: Source station certificate verification switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginVerify();

    /**
     * Attribute Range: Use the range sharding method to download the file from the source.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRange();

    /**
     * Attribute RangeChunkSize: range shard size.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRangeChunkSize();

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

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginRuleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IOriginRule.Jsii$Default {
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
         * Attribute ConfigId: Back-to-source rule configuration ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: The configuration type.
         * <p>
         * You can use this parameter to check the global configuration or rule configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Follow302Enable: Return Source 302 follow switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302Enable() {
            return software.amazon.jsii.Kernel.get(this, "attrFollow302Enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302MaxTries() {
            return software.amazon.jsii.Kernel.get(this, "attrFollow302MaxTries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Follow302RetainArgs: Retain the original request parameter switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302RetainArgs() {
            return software.amazon.jsii.Kernel.get(this, "attrFollow302RetainArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Follow302RetainHeader: Retain the original request header switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302RetainHeader() {
            return software.amazon.jsii.Kernel.get(this, "attrFollow302RetainHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Follow302TargetHost: Modify the source host after 302.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302TargetHost() {
            return software.amazon.jsii.Kernel.get(this, "attrFollow302TargetHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginHost: The HOST carried in the back-to-origin request.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHost() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHttpPort() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginHttpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHttpsPort() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginHttpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginMtls: The mtls switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginMtls() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginMtls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginReadTimeout: Read timeout interval of the source station (s).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginReadTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginReadTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginScheme: The protocol used by the back-to-origin request.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginScheme() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginScheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginSni: SNI carried in the back-to-origin request.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginSni() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginSni", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginVerify: Source station certificate verification switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginVerify() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginVerify", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Range: Use the range sharding method to download the file from the source.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRange() {
            return software.amazon.jsii.Kernel.get(this, "attrRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RangeChunkSize: range shard size.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRangeChunkSize() {
            return software.amazon.jsii.Kernel.get(this, "attrRangeChunkSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginRuleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IOriginRule}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IOriginRule, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConfigId: Back-to-source rule configuration ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: The configuration type.
         * <p>
         * You can use this parameter to check the global configuration or rule configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsRecord() {
            return software.amazon.jsii.Kernel.get(this, "attrDnsRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Follow302Enable: Return Source 302 follow switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302Enable() {
            return software.amazon.jsii.Kernel.get(this, "attrFollow302Enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302MaxTries() {
            return software.amazon.jsii.Kernel.get(this, "attrFollow302MaxTries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Follow302RetainArgs: Retain the original request parameter switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302RetainArgs() {
            return software.amazon.jsii.Kernel.get(this, "attrFollow302RetainArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Follow302RetainHeader: Retain the original request header switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302RetainHeader() {
            return software.amazon.jsii.Kernel.get(this, "attrFollow302RetainHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Follow302TargetHost: Modify the source host after 302.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302TargetHost() {
            return software.amazon.jsii.Kernel.get(this, "attrFollow302TargetHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginHost: The HOST carried in the back-to-origin request.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHost() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHttpPort() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginHttpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHttpsPort() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginHttpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginMtls: The mtls switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginMtls() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginMtls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginReadTimeout: Read timeout interval of the source station (s).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginReadTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginReadTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginScheme: The protocol used by the back-to-origin request.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginScheme() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginScheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginSni: SNI carried in the back-to-origin request.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginSni() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginSni", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginVerify: Source station certificate verification switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginVerify() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginVerify", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Range: Use the range sharding method to download the file from the source.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRange() {
            return software.amazon.jsii.Kernel.get(this, "attrRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RangeChunkSize: range shard size.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRangeChunkSize() {
            return software.amazon.jsii.Kernel.get(this, "attrRangeChunkSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginRuleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginRuleProps.class));
        }
    }
}
