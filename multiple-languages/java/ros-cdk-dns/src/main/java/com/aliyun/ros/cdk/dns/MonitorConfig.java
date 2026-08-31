package com.aliyun.ros.cdk.dns;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DNS::MonitorConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:23:04.479Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.MonitorConfig")
public class MonitorConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dns.IMonitorConfig {

    protected MonitorConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MonitorConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public MonitorConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.MonitorConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public MonitorConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.MonitorConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute MonitorConfigId: The ID of the monitor config.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrMonitorConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.MonitorConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dns.MonitorConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.MonitorConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.MonitorConfig> {
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
        private final com.aliyun.ros.cdk.dns.MonitorConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.MonitorConfigProps.Builder();
        }

        /**
         * Property addrPoolId: The ID of the address pool.
         * <p>
         * @return {@code this}
         * @param addrPoolId Property addrPoolId: The ID of the address pool. This parameter is required.
         */
        public Builder addrPoolId(final java.lang.String addrPoolId) {
            this.props.addrPoolId(addrPoolId);
            return this;
        }
        /**
         * Property addrPoolId: The ID of the address pool.
         * <p>
         * @return {@code this}
         * @param addrPoolId Property addrPoolId: The ID of the address pool. This parameter is required.
         */
        public Builder addrPoolId(final com.aliyun.ros.cdk.core.IResolvable addrPoolId) {
            this.props.addrPoolId(addrPoolId);
            return this;
        }

        /**
         * Property evaluationCount: The evaluation count of the monitor.
         * <p>
         * @return {@code this}
         * @param evaluationCount Property evaluationCount: The evaluation count of the monitor. This parameter is required.
         */
        public Builder evaluationCount(final java.lang.Number evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }
        /**
         * Property evaluationCount: The evaluation count of the monitor.
         * <p>
         * @return {@code this}
         * @param evaluationCount Property evaluationCount: The evaluation count of the monitor. This parameter is required.
         */
        public Builder evaluationCount(final com.aliyun.ros.cdk.core.IResolvable evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }

        /**
         * Property interval: The health check interval.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The health check interval. This parameter is required.
         */
        public Builder interval(final java.lang.Number interval) {
            this.props.interval(interval);
            return this;
        }
        /**
         * Property interval: The health check interval.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The health check interval. This parameter is required.
         */
        public Builder interval(final com.aliyun.ros.cdk.core.IResolvable interval) {
            this.props.interval(interval);
            return this;
        }

        /**
         * Property ispCityNode: The ISP city node list.
         * <p>
         * @return {@code this}
         * @param ispCityNode Property ispCityNode: The ISP city node list. This parameter is required.
         */
        public Builder ispCityNode(final com.aliyun.ros.cdk.core.IResolvable ispCityNode) {
            this.props.ispCityNode(ispCityNode);
            return this;
        }
        /**
         * Property ispCityNode: The ISP city node list.
         * <p>
         * @return {@code this}
         * @param ispCityNode Property ispCityNode: The ISP city node list. This parameter is required.
         */
        public Builder ispCityNode(final java.util.List<? extends java.lang.Object> ispCityNode) {
            this.props.ispCityNode(ispCityNode);
            return this;
        }

        /**
         * Property monitorExtendInfo: The extended information.
         * <p>
         * The parameters vary based on the protocol type.
         * <p>
         * <ul>
         * <li>HTTP or HTTPS</li>
         * <li>port: The health check port.</li>
         * <li>host: The Host header.</li>
         * <li>path: The URL path.</li>
         * <li>code: The health check is considered abnormal if the returned HTTP status code
         * is greater than this value.</li>
         * <li>failureRate: The failure rate.</li>
         * <li>sni: Specifies whether to enable Server Name Indication (SNI). This parameter
         * is used only when the health check protocol is HTTPS. Valid values:</li>
         * <li>true</li>
         * <li>false</li>
         * <li>nodeType: The type of the monitoring node. This parameter is used when the
         * address pool type is DOMAIN. Valid values:</li>
         * <li>IPV4</li>
         * <li>IPV6</li>
         * <li>PING</li>
         * <li>failureRate: The failure rate.</li>
         * <li>packetNum: The number of ping packets.</li>
         * <li>packetLossRate: The packet loss rate.</li>
         * <li>nodeType: The type of the monitoring node. This parameter is used when the
         * address pool type is DOMAIN. Valid values:</li>
         * <li>IPV4</li>
         * <li>IPV6</li>
         * <li>TCP</li>
         * <li>port: The health check port.</li>
         * <li>failureRate: The failure rate.</li>
         * <li>nodeType: The type of the monitoring node. This parameter is used when the
         * address pool type is DOMAIN. Valid values:</li>
         * <li>IPV4</li>
         * <li>IPV6</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter must be a JSON string.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param monitorExtendInfo Property monitorExtendInfo: The extended information. This parameter is required.
         */
        public Builder monitorExtendInfo(final com.aliyun.ros.cdk.core.IResolvable monitorExtendInfo) {
            this.props.monitorExtendInfo(monitorExtendInfo);
            return this;
        }
        /**
         * Property monitorExtendInfo: The extended information.
         * <p>
         * The parameters vary based on the protocol type.
         * <p>
         * <ul>
         * <li>HTTP or HTTPS</li>
         * <li>port: The health check port.</li>
         * <li>host: The Host header.</li>
         * <li>path: The URL path.</li>
         * <li>code: The health check is considered abnormal if the returned HTTP status code
         * is greater than this value.</li>
         * <li>failureRate: The failure rate.</li>
         * <li>sni: Specifies whether to enable Server Name Indication (SNI). This parameter
         * is used only when the health check protocol is HTTPS. Valid values:</li>
         * <li>true</li>
         * <li>false</li>
         * <li>nodeType: The type of the monitoring node. This parameter is used when the
         * address pool type is DOMAIN. Valid values:</li>
         * <li>IPV4</li>
         * <li>IPV6</li>
         * <li>PING</li>
         * <li>failureRate: The failure rate.</li>
         * <li>packetNum: The number of ping packets.</li>
         * <li>packetLossRate: The packet loss rate.</li>
         * <li>nodeType: The type of the monitoring node. This parameter is used when the
         * address pool type is DOMAIN. Valid values:</li>
         * <li>IPV4</li>
         * <li>IPV6</li>
         * <li>TCP</li>
         * <li>port: The health check port.</li>
         * <li>failureRate: The failure rate.</li>
         * <li>nodeType: The type of the monitoring node. This parameter is used when the
         * address pool type is DOMAIN. Valid values:</li>
         * <li>IPV4</li>
         * <li>IPV6</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter must be a JSON string.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param monitorExtendInfo Property monitorExtendInfo: The extended information. This parameter is required.
         */
        public Builder monitorExtendInfo(final java.util.Map<java.lang.String, ? extends java.lang.Object> monitorExtendInfo) {
            this.props.monitorExtendInfo(monitorExtendInfo);
            return this;
        }

        /**
         * Property protocolType: The health check protocol.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>HTTP</li>
         * <li>HTTPS</li>
         * <li>PING</li>
         * <li>TCP</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: The health check protocol. This parameter is required.
         */
        public Builder protocolType(final java.lang.String protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }
        /**
         * Property protocolType: The health check protocol.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>HTTP</li>
         * <li>HTTPS</li>
         * <li>PING</li>
         * <li>TCP</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: The health check protocol. This parameter is required.
         */
        public Builder protocolType(final com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }

        /**
         * Property timeout: The timeout period.
         * <p>
         * Unit: milliseconds.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The timeout period.
         * <p>
         * Unit: milliseconds.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The timeout period. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.MonitorConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.MonitorConfig build() {
            return new com.aliyun.ros.cdk.dns.MonitorConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
