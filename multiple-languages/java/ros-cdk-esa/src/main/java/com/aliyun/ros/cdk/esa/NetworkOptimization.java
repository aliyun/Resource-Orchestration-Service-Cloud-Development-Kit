package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::NetworkOptimization</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.498Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.NetworkOptimization")
public class NetworkOptimization extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.INetworkOptimization {

    protected NetworkOptimization(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NetworkOptimization(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public NetworkOptimization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.NetworkOptimizationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public NetworkOptimization(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.NetworkOptimizationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConfigId: ConfigId of the configuration, which can be obtained by calling the ListNetworkOptimizations.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Grpc: Whether to enable GRPC, default is disabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGrpc() {
        return software.amazon.jsii.Kernel.get(this, "attrGrpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Http2Origin: Whether to enable HTTP2 origin, default is disabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Origin() {
        return software.amazon.jsii.Kernel.get(this, "attrHttp2Origin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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

    /**
     * Attribute SmartRouting: Whether to enable smart routing service, default is disabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSmartRouting() {
        return software.amazon.jsii.Kernel.get(this, "attrSmartRouting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUploadMaxFilesize() {
        return software.amazon.jsii.Kernel.get(this, "attrUploadMaxFilesize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Websocket: Whether to enable Websocket, default is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWebsocket() {
        return software.amazon.jsii.Kernel.get(this, "attrWebsocket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.NetworkOptimizationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.NetworkOptimizationProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.NetworkOptimization}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.NetworkOptimization> {
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
        private final com.aliyun.ros.cdk.esa.NetworkOptimizationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.NetworkOptimizationProps.Builder();
        }

        /**
         * Property siteId: Site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: Site ID. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: Site ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: Site ID. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property grpc: Whether to enable GRPC, default is disabled.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: Enabled</li>
         * <li><code>off</code>: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param grpc Property grpc: Whether to enable GRPC, default is disabled. This parameter is required.
         */
        public Builder grpc(final java.lang.String grpc) {
            this.props.grpc(grpc);
            return this;
        }
        /**
         * Property grpc: Whether to enable GRPC, default is disabled.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: Enabled</li>
         * <li><code>off</code>: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param grpc Property grpc: Whether to enable GRPC, default is disabled. This parameter is required.
         */
        public Builder grpc(final com.aliyun.ros.cdk.core.IResolvable grpc) {
            this.props.grpc(grpc);
            return this;
        }

        /**
         * Property http2Origin: Whether to enable HTTP2 origin, default is disabled.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: Enabled</li>
         * <li><code>off</code>: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param http2Origin Property http2Origin: Whether to enable HTTP2 origin, default is disabled. This parameter is required.
         */
        public Builder http2Origin(final java.lang.String http2Origin) {
            this.props.http2Origin(http2Origin);
            return this;
        }
        /**
         * Property http2Origin: Whether to enable HTTP2 origin, default is disabled.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: Enabled</li>
         * <li><code>off</code>: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param http2Origin Property http2Origin: Whether to enable HTTP2 origin, default is disabled. This parameter is required.
         */
        public Builder http2Origin(final com.aliyun.ros.cdk.core.IResolvable http2Origin) {
            this.props.http2Origin(http2Origin);
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
         * Property smartRouting: Whether to enable smart routing service, default is disabled.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: Enabled</li>
         * <li><code>off</code>: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param smartRouting Property smartRouting: Whether to enable smart routing service, default is disabled. This parameter is required.
         */
        public Builder smartRouting(final java.lang.String smartRouting) {
            this.props.smartRouting(smartRouting);
            return this;
        }
        /**
         * Property smartRouting: Whether to enable smart routing service, default is disabled.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: Enabled</li>
         * <li><code>off</code>: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param smartRouting Property smartRouting: Whether to enable smart routing service, default is disabled. This parameter is required.
         */
        public Builder smartRouting(final com.aliyun.ros.cdk.core.IResolvable smartRouting) {
            this.props.smartRouting(smartRouting);
            return this;
        }

        /**
         * Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
         * <p>
         * @return {@code this}
         * @param uploadMaxFilesize Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500. This parameter is required.
         */
        public Builder uploadMaxFilesize(final java.lang.Number uploadMaxFilesize) {
            this.props.uploadMaxFilesize(uploadMaxFilesize);
            return this;
        }
        /**
         * Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
         * <p>
         * @return {@code this}
         * @param uploadMaxFilesize Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500. This parameter is required.
         */
        public Builder uploadMaxFilesize(final com.aliyun.ros.cdk.core.IResolvable uploadMaxFilesize) {
            this.props.uploadMaxFilesize(uploadMaxFilesize);
            return this;
        }

        /**
         * Property websocket: Whether to enable Websocket, default is enabled.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: Enabled</li>
         * <li><code>off</code>: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param websocket Property websocket: Whether to enable Websocket, default is enabled. This parameter is required.
         */
        public Builder websocket(final java.lang.String websocket) {
            this.props.websocket(websocket);
            return this;
        }
        /**
         * Property websocket: Whether to enable Websocket, default is enabled.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li><code>on</code>: Enabled</li>
         * <li><code>off</code>: Disabled.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param websocket Property websocket: Whether to enable Websocket, default is enabled. This parameter is required.
         */
        public Builder websocket(final com.aliyun.ros.cdk.core.IResolvable websocket) {
            this.props.websocket(websocket);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.NetworkOptimization}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.NetworkOptimization build() {
            return new com.aliyun.ros.cdk.esa.NetworkOptimization(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
