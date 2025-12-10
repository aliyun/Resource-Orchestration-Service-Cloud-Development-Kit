package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::OriginRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.595Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.OriginRule")
public class OriginRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IOriginRule {

    protected OriginRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected OriginRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public OriginRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public OriginRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConfigId: Back-to-source rule configuration ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigType: The configuration type.
     * <p>
     * You can use this parameter to check the global configuration or rule configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDnsRecord() {
        return software.amazon.jsii.Kernel.get(this, "attrDnsRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Follow302Enable: Return Source 302 follow switch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302Enable() {
        return software.amazon.jsii.Kernel.get(this, "attrFollow302Enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302MaxTries() {
        return software.amazon.jsii.Kernel.get(this, "attrFollow302MaxTries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Follow302RetainArgs: Retain the original request parameter switch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302RetainArgs() {
        return software.amazon.jsii.Kernel.get(this, "attrFollow302RetainArgs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Follow302RetainHeader: Retain the original request header switch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302RetainHeader() {
        return software.amazon.jsii.Kernel.get(this, "attrFollow302RetainHeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Follow302TargetHost: Modify the source host after 302.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFollow302TargetHost() {
        return software.amazon.jsii.Kernel.get(this, "attrFollow302TargetHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginHost: The HOST carried in the back-to-origin request.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHost() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginHost", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHttpPort() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginHttpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginHttpsPort() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginHttpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginMtls: The mtls switch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginMtls() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginMtls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginReadTimeout: Read timeout interval of the source station (s).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginReadTimeout() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginReadTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginScheme: The protocol used by the back-to-origin request.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginScheme() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginScheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginSni: SNI carried in the back-to-origin request.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginSni() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginSni", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginVerify: Source station certificate verification switch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginVerify() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginVerify", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Range: Use the range sharding method to download the file from the source.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRange() {
        return software.amazon.jsii.Kernel.get(this, "attrRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RangeChunkSize: range shard size.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRangeChunkSize() {
        return software.amazon.jsii.Kernel.get(this, "attrRangeChunkSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
        return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RuleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Sequence: Order of rule execution.
     * <p>
     * The smaller the value, the higher the priority for execution.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
        return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginRuleProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.OriginRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.OriginRule> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.esa.OriginRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.OriginRuleProps.Builder();
        }

        /**
         * Property siteId: The site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property dnsRecord: Overwrite the DNS resolution record of the origin request.
         * <p>
         * @return {@code this}
         * @param dnsRecord Property dnsRecord: Overwrite the DNS resolution record of the origin request. This parameter is required.
         */
        public Builder dnsRecord(final java.lang.String dnsRecord) {
            this.props.dnsRecord(dnsRecord);
            return this;
        }
        /**
         * Property dnsRecord: Overwrite the DNS resolution record of the origin request.
         * <p>
         * @return {@code this}
         * @param dnsRecord Property dnsRecord: Overwrite the DNS resolution record of the origin request. This parameter is required.
         */
        public Builder dnsRecord(final com.aliyun.ros.cdk.core.IResolvable dnsRecord) {
            this.props.dnsRecord(dnsRecord);
            return this;
        }

        /**
         * Property follow302Enable: Return Source 302 follow switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: ON.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param follow302Enable Property follow302Enable: Return Source 302 follow switch. This parameter is required.
         */
        public Builder follow302Enable(final java.lang.String follow302Enable) {
            this.props.follow302Enable(follow302Enable);
            return this;
        }
        /**
         * Property follow302Enable: Return Source 302 follow switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: ON.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param follow302Enable Property follow302Enable: Return Source 302 follow switch. This parameter is required.
         */
        public Builder follow302Enable(final com.aliyun.ros.cdk.core.IResolvable follow302Enable) {
            this.props.follow302Enable(follow302Enable);
            return this;
        }

        /**
         * Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
         * <p>
         * @return {@code this}
         * @param follow302MaxTries Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5]. This parameter is required.
         */
        public Builder follow302MaxTries(final java.lang.Number follow302MaxTries) {
            this.props.follow302MaxTries(follow302MaxTries);
            return this;
        }
        /**
         * Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
         * <p>
         * @return {@code this}
         * @param follow302MaxTries Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5]. This parameter is required.
         */
        public Builder follow302MaxTries(final com.aliyun.ros.cdk.core.IResolvable follow302MaxTries) {
            this.props.follow302MaxTries(follow302MaxTries);
            return this;
        }

        /**
         * Property follow302RetainArgs: Retain the original request parameter switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: ON.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param follow302RetainArgs Property follow302RetainArgs: Retain the original request parameter switch. This parameter is required.
         */
        public Builder follow302RetainArgs(final java.lang.String follow302RetainArgs) {
            this.props.follow302RetainArgs(follow302RetainArgs);
            return this;
        }
        /**
         * Property follow302RetainArgs: Retain the original request parameter switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: ON.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param follow302RetainArgs Property follow302RetainArgs: Retain the original request parameter switch. This parameter is required.
         */
        public Builder follow302RetainArgs(final com.aliyun.ros.cdk.core.IResolvable follow302RetainArgs) {
            this.props.follow302RetainArgs(follow302RetainArgs);
            return this;
        }

        /**
         * Property follow302RetainHeader: Retain the original request header switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: ON.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param follow302RetainHeader Property follow302RetainHeader: Retain the original request header switch. This parameter is required.
         */
        public Builder follow302RetainHeader(final java.lang.String follow302RetainHeader) {
            this.props.follow302RetainHeader(follow302RetainHeader);
            return this;
        }
        /**
         * Property follow302RetainHeader: Retain the original request header switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: ON.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param follow302RetainHeader Property follow302RetainHeader: Retain the original request header switch. This parameter is required.
         */
        public Builder follow302RetainHeader(final com.aliyun.ros.cdk.core.IResolvable follow302RetainHeader) {
            this.props.follow302RetainHeader(follow302RetainHeader);
            return this;
        }

        /**
         * Property follow302TargetHost: Modify the source host after 302.
         * <p>
         * @return {@code this}
         * @param follow302TargetHost Property follow302TargetHost: Modify the source host after 302. This parameter is required.
         */
        public Builder follow302TargetHost(final java.lang.String follow302TargetHost) {
            this.props.follow302TargetHost(follow302TargetHost);
            return this;
        }
        /**
         * Property follow302TargetHost: Modify the source host after 302.
         * <p>
         * @return {@code this}
         * @param follow302TargetHost Property follow302TargetHost: Modify the source host after 302. This parameter is required.
         */
        public Builder follow302TargetHost(final com.aliyun.ros.cdk.core.IResolvable follow302TargetHost) {
            this.props.follow302TargetHost(follow302TargetHost);
            return this;
        }

        /**
         * Property originHost: The HOST carried in the back-to-origin request.
         * <p>
         * @return {@code this}
         * @param originHost Property originHost: The HOST carried in the back-to-origin request. This parameter is required.
         */
        public Builder originHost(final java.lang.String originHost) {
            this.props.originHost(originHost);
            return this;
        }
        /**
         * Property originHost: The HOST carried in the back-to-origin request.
         * <p>
         * @return {@code this}
         * @param originHost Property originHost: The HOST carried in the back-to-origin request. This parameter is required.
         */
        public Builder originHost(final com.aliyun.ros.cdk.core.IResolvable originHost) {
            this.props.originHost(originHost);
            return this;
        }

        /**
         * Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
         * <p>
         * @return {@code this}
         * @param originHttpPort Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin. This parameter is required.
         */
        public Builder originHttpPort(final java.lang.Number originHttpPort) {
            this.props.originHttpPort(originHttpPort);
            return this;
        }
        /**
         * Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
         * <p>
         * @return {@code this}
         * @param originHttpPort Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin. This parameter is required.
         */
        public Builder originHttpPort(final com.aliyun.ros.cdk.core.IResolvable originHttpPort) {
            this.props.originHttpPort(originHttpPort);
            return this;
        }

        /**
         * Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
         * <p>
         * @return {@code this}
         * @param originHttpsPort Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests. This parameter is required.
         */
        public Builder originHttpsPort(final java.lang.Number originHttpsPort) {
            this.props.originHttpsPort(originHttpsPort);
            return this;
        }
        /**
         * Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
         * <p>
         * @return {@code this}
         * @param originHttpsPort Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests. This parameter is required.
         */
        public Builder originHttpsPort(final com.aliyun.ros.cdk.core.IResolvable originHttpsPort) {
            this.props.originHttpsPort(originHttpsPort);
            return this;
        }

        /**
         * Property originMtls: The mtls switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: ON.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param originMtls Property originMtls: The mtls switch. This parameter is required.
         */
        public Builder originMtls(final java.lang.String originMtls) {
            this.props.originMtls(originMtls);
            return this;
        }
        /**
         * Property originMtls: The mtls switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: ON.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param originMtls Property originMtls: The mtls switch. This parameter is required.
         */
        public Builder originMtls(final com.aliyun.ros.cdk.core.IResolvable originMtls) {
            this.props.originMtls(originMtls);
            return this;
        }

        /**
         * Property originReadTimeout: Read timeout interval of the source station (s).
         * <p>
         * @return {@code this}
         * @param originReadTimeout Property originReadTimeout: Read timeout interval of the source station (s). This parameter is required.
         */
        public Builder originReadTimeout(final java.lang.Number originReadTimeout) {
            this.props.originReadTimeout(originReadTimeout);
            return this;
        }
        /**
         * Property originReadTimeout: Read timeout interval of the source station (s).
         * <p>
         * @return {@code this}
         * @param originReadTimeout Property originReadTimeout: Read timeout interval of the source station (s). This parameter is required.
         */
        public Builder originReadTimeout(final com.aliyun.ros.cdk.core.IResolvable originReadTimeout) {
            this.props.originReadTimeout(originReadTimeout);
            return this;
        }

        /**
         * Property originScheme: The protocol used by the back-to-origin request.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>http</code>: uses the http protocol to return to the source.</li>
         * <li><code>https</code>: uses the https protocol to return to the source.</li>
         * <li><code>follow</code>: follows the Client Protocol back to the source.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param originScheme Property originScheme: The protocol used by the back-to-origin request. This parameter is required.
         */
        public Builder originScheme(final java.lang.String originScheme) {
            this.props.originScheme(originScheme);
            return this;
        }
        /**
         * Property originScheme: The protocol used by the back-to-origin request.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>http</code>: uses the http protocol to return to the source.</li>
         * <li><code>https</code>: uses the https protocol to return to the source.</li>
         * <li><code>follow</code>: follows the Client Protocol back to the source.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param originScheme Property originScheme: The protocol used by the back-to-origin request. This parameter is required.
         */
        public Builder originScheme(final com.aliyun.ros.cdk.core.IResolvable originScheme) {
            this.props.originScheme(originScheme);
            return this;
        }

        /**
         * Property originSni: SNI carried in the back-to-origin request.
         * <p>
         * @return {@code this}
         * @param originSni Property originSni: SNI carried in the back-to-origin request. This parameter is required.
         */
        public Builder originSni(final java.lang.String originSni) {
            this.props.originSni(originSni);
            return this;
        }
        /**
         * Property originSni: SNI carried in the back-to-origin request.
         * <p>
         * @return {@code this}
         * @param originSni Property originSni: SNI carried in the back-to-origin request. This parameter is required.
         */
        public Builder originSni(final com.aliyun.ros.cdk.core.IResolvable originSni) {
            this.props.originSni(originSni);
            return this;
        }

        /**
         * Property originVerify: Source station certificate verification switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: ON.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param originVerify Property originVerify: Source station certificate verification switch. This parameter is required.
         */
        public Builder originVerify(final java.lang.String originVerify) {
            this.props.originVerify(originVerify);
            return this;
        }
        /**
         * Property originVerify: Source station certificate verification switch.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: ON.</li>
         * <li><code>off</code>: closed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param originVerify Property originVerify: Source station certificate verification switch. This parameter is required.
         */
        public Builder originVerify(final com.aliyun.ros.cdk.core.IResolvable originVerify) {
            this.props.originVerify(originVerify);
            return this;
        }

        /**
         * Property range: Use the range sharding method to download the file from the source.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: Open.</li>
         * <li><code>off</code>: off.</li>
         * <li><code>force</code>: force.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param range Property range: Use the range sharding method to download the file from the source. This parameter is required.
         */
        public Builder range(final java.lang.String range) {
            this.props.range(range);
            return this;
        }
        /**
         * Property range: Use the range sharding method to download the file from the source.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: Open.</li>
         * <li><code>off</code>: off.</li>
         * <li><code>force</code>: force.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param range Property range: Use the range sharding method to download the file from the source. This parameter is required.
         */
        public Builder range(final com.aliyun.ros.cdk.core.IResolvable range) {
            this.props.range(range);
            return this;
        }

        /**
         * Property rangeChunkSize: range shard size.
         * <p>
         * @return {@code this}
         * @param rangeChunkSize Property rangeChunkSize: range shard size. This parameter is required.
         */
        public Builder rangeChunkSize(final java.lang.String rangeChunkSize) {
            this.props.rangeChunkSize(rangeChunkSize);
            return this;
        }
        /**
         * Property rangeChunkSize: range shard size.
         * <p>
         * @return {@code this}
         * @param rangeChunkSize Property rangeChunkSize: range shard size. This parameter is required.
         */
        public Builder rangeChunkSize(final com.aliyun.ros.cdk.core.IResolvable rangeChunkSize) {
            this.props.rangeChunkSize(rangeChunkSize);
            return this;
        }

        /**
         * Property rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         * <p>
         * <ul>
         * <li>Match all incoming requests: value set to true</li>
         * <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests. This parameter is required.
         */
        public Builder rule(final java.lang.String rule) {
            this.props.rule(rule);
            return this;
        }
        /**
         * Property rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         * <p>
         * <ul>
         * <li>Match all incoming requests: value set to true</li>
         * <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests. This parameter is required.
         */
        public Builder rule(final com.aliyun.ros.cdk.core.IResolvable rule) {
            this.props.rule(rule);
            return this;
        }

        /**
         * Property ruleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set. Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: close.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         */
        public Builder ruleEnable(final java.lang.String ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }
        /**
         * Property ruleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set. Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: open.</li>
         * <li><code>off</code>: close.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ruleEnable Property ruleEnable: Rule switch. This parameter is required.
         */
        public Builder ruleEnable(final com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.props.ruleEnable(ruleEnable);
            return this;
        }

        /**
         * Property ruleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: Rule name. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property sequence: Order of rule execution.
         * <p>
         * The smaller the value, the higher the priority for execution.
         * <p>
         * @return {@code this}
         * @param sequence Property sequence: Order of rule execution. This parameter is required.
         */
        public Builder sequence(final java.lang.Number sequence) {
            this.props.sequence(sequence);
            return this;
        }
        /**
         * Property sequence: Order of rule execution.
         * <p>
         * The smaller the value, the higher the priority for execution.
         * <p>
         * @return {@code this}
         * @param sequence Property sequence: Order of rule execution. This parameter is required.
         */
        public Builder sequence(final com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.props.sequence(sequence);
            return this;
        }

        /**
         * Property siteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: The version number of the site configuration. This parameter is required.
         */
        public Builder siteVersion(final java.lang.Number siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }
        /**
         * Property siteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * <p>
         * @return {@code this}
         * @param siteVersion Property siteVersion: The version number of the site configuration. This parameter is required.
         */
        public Builder siteVersion(final com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.props.siteVersion(siteVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.OriginRule}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.OriginRule build() {
            return new com.aliyun.ros.cdk.esa.OriginRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
