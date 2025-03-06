package com.aliyun.ros.cdk.ddospro;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DDoSPro::WebRule</code>, which is used to create a forwarding rule for a website.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.783Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.WebRule")
public class WebRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ddospro.IWebRule {

    protected WebRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WebRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public WebRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.WebRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public WebRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.WebRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Domain: The domain name of the website that you want to add to the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.WebRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ddospro.WebRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ddospro.WebRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ddospro.WebRule> {
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
        private final com.aliyun.ros.cdk.ddospro.WebRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ddospro.WebRuleProps.Builder();
        }

        /**
         * Property domain: The domain name of the website that you want to add to the instance.
         * <p>
         * @return {@code this}
         * @param domain Property domain: The domain name of the website that you want to add to the instance. This parameter is required.
         */
        public Builder domain(final java.lang.String domain) {
            this.props.domain(domain);
            return this;
        }
        /**
         * Property domain: The domain name of the website that you want to add to the instance.
         * <p>
         * @return {@code this}
         * @param domain Property domain: The domain name of the website that you want to add to the instance. This parameter is required.
         */
        public Builder domain(final com.aliyun.ros.cdk.core.IResolvable domain) {
            this.props.domain(domain);
            return this;
        }

        /**
         * Property rsType: The address type of the origin server.
         * <p>
         * Valid values:
         * 0: IP address
         * 1: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
         * <p>
         * @return {@code this}
         * @param rsType Property rsType: The address type of the origin server. This parameter is required.
         */
        public Builder rsType(final java.lang.Number rsType) {
            this.props.rsType(rsType);
            return this;
        }
        /**
         * Property rsType: The address type of the origin server.
         * <p>
         * Valid values:
         * 0: IP address
         * 1: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
         * <p>
         * @return {@code this}
         * @param rsType Property rsType: The address type of the origin server. This parameter is required.
         */
        public Builder rsType(final com.aliyun.ros.cdk.core.IResolvable rsType) {
            this.props.rsType(rsType);
            return this;
        }

        /**
         * Property rules: The details of the forwarding rule.
         * <p>
         * The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
         * ProxyRules: the information about the origin server. The information includes the port number and IP address. This field is required and must be a JSON array. Each element in a JSON array is a JSON struct that contains the following fields: ProxyPort: the port number. This field is required and must be an integer; RealServers: the IP address. This field is required and must be a string array.
         * ProxyType: the protocol type. This field is required and must be a string. Valid values: http, https, websocket, and websockets.
         * <p>
         * @return {@code this}
         * @param rules Property rules: The details of the forwarding rule. This parameter is required.
         */
        public Builder rules(final java.lang.String rules) {
            this.props.rules(rules);
            return this;
        }
        /**
         * Property rules: The details of the forwarding rule.
         * <p>
         * The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
         * ProxyRules: the information about the origin server. The information includes the port number and IP address. This field is required and must be a JSON array. Each element in a JSON array is a JSON struct that contains the following fields: ProxyPort: the port number. This field is required and must be an integer; RealServers: the IP address. This field is required and must be a string array.
         * ProxyType: the protocol type. This field is required and must be a string. Valid values: http, https, websocket, and websockets.
         * <p>
         * @return {@code this}
         * @param rules Property rules: The details of the forwarding rule. This parameter is required.
         */
        public Builder rules(final com.aliyun.ros.cdk.core.IResolvable rules) {
            this.props.rules(rules);
            return this;
        }

        /**
         * Property defenseId: The ID of the associated defense.
         * <p>
         * This parameter applies to scenarios in which other cloud services, such as Object Storage Service (OSS), are integrated with Anti-DDoS Pro or Anti-DDoS Premium.
         * <p>
         * @return {@code this}
         * @param defenseId Property defenseId: The ID of the associated defense. This parameter is required.
         */
        public Builder defenseId(final java.lang.String defenseId) {
            this.props.defenseId(defenseId);
            return this;
        }
        /**
         * Property defenseId: The ID of the associated defense.
         * <p>
         * This parameter applies to scenarios in which other cloud services, such as Object Storage Service (OSS), are integrated with Anti-DDoS Pro or Anti-DDoS Premium.
         * <p>
         * @return {@code this}
         * @param defenseId Property defenseId: The ID of the associated defense. This parameter is required.
         */
        public Builder defenseId(final com.aliyun.ros.cdk.core.IResolvable defenseId) {
            this.props.defenseId(defenseId);
            return this;
        }

        /**
         * Property httpsExt: The advanced HTTPS settings.
         * <p>
         * This parameter takes effect only when the value of the ProxyType parameter includes https. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
         * Http2https: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0. If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
         * Https2http: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0. If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
         * Http2: specifies whether to turn on Enable HTTP/2. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP/2 is turned off. The value 1 indicates that Enable HTTP/2 is turned on. The default value is 0. After you turn on Enable HTTP/2, the protocol type is HTTP/2.
         * <p>
         * @return {@code this}
         * @param httpsExt Property httpsExt: The advanced HTTPS settings. This parameter is required.
         */
        public Builder httpsExt(final java.lang.String httpsExt) {
            this.props.httpsExt(httpsExt);
            return this;
        }
        /**
         * Property httpsExt: The advanced HTTPS settings.
         * <p>
         * This parameter takes effect only when the value of the ProxyType parameter includes https. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
         * Http2https: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0. If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
         * Https2http: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0. If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
         * Http2: specifies whether to turn on Enable HTTP/2. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP/2 is turned off. The value 1 indicates that Enable HTTP/2 is turned on. The default value is 0. After you turn on Enable HTTP/2, the protocol type is HTTP/2.
         * <p>
         * @return {@code this}
         * @param httpsExt Property httpsExt: The advanced HTTPS settings. This parameter is required.
         */
        public Builder httpsExt(final com.aliyun.ros.cdk.core.IResolvable httpsExt) {
            this.props.httpsExt(httpsExt);
            return this;
        }

        /**
         * Property instanceIds: An array consisting of the IDs of instances that you want to associate.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: An array consisting of the IDs of instances that you want to associate. This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }
        /**
         * Property instanceIds: An array consisting of the IDs of instances that you want to associate.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: An array consisting of the IDs of instances that you want to associate. This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management.
         * <p>
         * This parameter is empty by default, which indicates that the instance belongs to the default resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management.
         * <p>
         * This parameter is empty by default, which indicates that the instance belongs to the default resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ddospro.WebRule}.
         */
        @Override
        public com.aliyun.ros.cdk.ddospro.WebRule build() {
            return new com.aliyun.ros.cdk.ddospro.WebRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
