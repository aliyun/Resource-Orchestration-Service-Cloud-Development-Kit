package com.aliyun.ros.cdk.ddospro;

/**
 * Properties for defining a <code>WebRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-webrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.410Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.WebRuleProps")
@software.amazon.jsii.Jsii.Proxy(WebRuleProps.Jsii$Proxy.class)
public interface WebRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domain: The domain name of the website that you want to add to the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomain();

    /**
     * Property rsType: The address type of the origin server.
     * <p>
     * Valid values:
     * 0: IP address
     * 1: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRsType();

    /**
     * Property rules: The details of the forwarding rule.
     * <p>
     * The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
     * ProxyRules: the information about the origin server. The information includes the port number and IP address. This field is required and must be a JSON array. Each element in a JSON array is a JSON struct that contains the following fields: ProxyPort: the port number. This field is required and must be an integer; RealServers: the IP address. This field is required and must be a string array.
     * ProxyType: the protocol type. This field is required and must be a string. Valid values: http, https, websocket, and websockets.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRules();

    /**
     * Property defenseId: The ID of the associated defense.
     * <p>
     * This parameter applies to scenarios in which other cloud services, such as Object Storage Service (OSS), are integrated with Anti-DDoS Pro or Anti-DDoS Premium.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefenseId() {
        return null;
    }

    /**
     * Property httpsExt: The advanced HTTPS settings.
     * <p>
     * This parameter takes effect only when the value of the ProxyType parameter includes https. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
     * Http2https: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0. If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
     * Https2http: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0. If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
     * Http2: specifies whether to turn on Enable HTTP/2. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP/2 is turned off. The value 1 indicates that Enable HTTP/2 is turned on. The default value is 0. After you turn on Enable HTTP/2, the protocol type is HTTP/2.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpsExt() {
        return null;
    }

    /**
     * Property instanceIds: An array consisting of the IDs of instances that you want to associate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIds() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management.
     * <p>
     * This parameter is empty by default, which indicates that the instance belongs to the default resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WebRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WebRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WebRuleProps> {
        java.lang.Object domain;
        java.lang.Object rsType;
        java.lang.Object rules;
        java.lang.Object defenseId;
        java.lang.Object httpsExt;
        java.lang.Object instanceIds;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link WebRuleProps#getDomain}
         * @param domain Property domain: The domain name of the website that you want to add to the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(java.lang.String domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getDomain}
         * @param domain Property domain: The domain name of the website that you want to add to the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
            this.domain = domain;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getRsType}
         * @param rsType Property rsType: The address type of the origin server. This parameter is required.
         *               Valid values:
         *               0: IP address
         *               1: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
         * @return {@code this}
         */
        public Builder rsType(java.lang.Number rsType) {
            this.rsType = rsType;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getRsType}
         * @param rsType Property rsType: The address type of the origin server. This parameter is required.
         *               Valid values:
         *               0: IP address
         *               1: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
         * @return {@code this}
         */
        public Builder rsType(com.aliyun.ros.cdk.core.IResolvable rsType) {
            this.rsType = rsType;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getRules}
         * @param rules Property rules: The details of the forwarding rule. This parameter is required.
         *              The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
         *              ProxyRules: the information about the origin server. The information includes the port number and IP address. This field is required and must be a JSON array. Each element in a JSON array is a JSON struct that contains the following fields: ProxyPort: the port number. This field is required and must be an integer; RealServers: the IP address. This field is required and must be a string array.
         *              ProxyType: the protocol type. This field is required and must be a string. Valid values: http, https, websocket, and websockets.
         * @return {@code this}
         */
        public Builder rules(java.lang.String rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getRules}
         * @param rules Property rules: The details of the forwarding rule. This parameter is required.
         *              The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
         *              ProxyRules: the information about the origin server. The information includes the port number and IP address. This field is required and must be a JSON array. Each element in a JSON array is a JSON struct that contains the following fields: ProxyPort: the port number. This field is required and must be an integer; RealServers: the IP address. This field is required and must be a string array.
         *              ProxyType: the protocol type. This field is required and must be a string. Valid values: http, https, websocket, and websockets.
         * @return {@code this}
         */
        public Builder rules(com.aliyun.ros.cdk.core.IResolvable rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getDefenseId}
         * @param defenseId Property defenseId: The ID of the associated defense.
         *                  This parameter applies to scenarios in which other cloud services, such as Object Storage Service (OSS), are integrated with Anti-DDoS Pro or Anti-DDoS Premium.
         * @return {@code this}
         */
        public Builder defenseId(java.lang.String defenseId) {
            this.defenseId = defenseId;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getDefenseId}
         * @param defenseId Property defenseId: The ID of the associated defense.
         *                  This parameter applies to scenarios in which other cloud services, such as Object Storage Service (OSS), are integrated with Anti-DDoS Pro or Anti-DDoS Premium.
         * @return {@code this}
         */
        public Builder defenseId(com.aliyun.ros.cdk.core.IResolvable defenseId) {
            this.defenseId = defenseId;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getHttpsExt}
         * @param httpsExt Property httpsExt: The advanced HTTPS settings.
         *                 This parameter takes effect only when the value of the ProxyType parameter includes https. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
         *                 Http2https: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0. If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
         *                 Https2http: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0. If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
         *                 Http2: specifies whether to turn on Enable HTTP/2. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP/2 is turned off. The value 1 indicates that Enable HTTP/2 is turned on. The default value is 0. After you turn on Enable HTTP/2, the protocol type is HTTP/2.
         * @return {@code this}
         */
        public Builder httpsExt(java.lang.String httpsExt) {
            this.httpsExt = httpsExt;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getHttpsExt}
         * @param httpsExt Property httpsExt: The advanced HTTPS settings.
         *                 This parameter takes effect only when the value of the ProxyType parameter includes https. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
         *                 Http2https: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0. If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
         *                 Https2http: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0. If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
         *                 Http2: specifies whether to turn on Enable HTTP/2. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP/2 is turned off. The value 1 indicates that Enable HTTP/2 is turned on. The default value is 0. After you turn on Enable HTTP/2, the protocol type is HTTP/2.
         * @return {@code this}
         */
        public Builder httpsExt(com.aliyun.ros.cdk.core.IResolvable httpsExt) {
            this.httpsExt = httpsExt;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getInstanceIds}
         * @param instanceIds Property instanceIds: An array consisting of the IDs of instances that you want to associate.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getInstanceIds}
         * @param instanceIds Property instanceIds: An array consisting of the IDs of instances that you want to associate.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management.
         *                        This parameter is empty by default, which indicates that the instance belongs to the default resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link WebRuleProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management.
         *                        This parameter is empty by default, which indicates that the instance belongs to the default resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WebRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WebRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link WebRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WebRuleProps {
        private final java.lang.Object domain;
        private final java.lang.Object rsType;
        private final java.lang.Object rules;
        private final java.lang.Object defenseId;
        private final java.lang.Object httpsExt;
        private final java.lang.Object instanceIds;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rsType = software.amazon.jsii.Kernel.get(this, "rsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rules = software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defenseId = software.amazon.jsii.Kernel.get(this, "defenseId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpsExt = software.amazon.jsii.Kernel.get(this, "httpsExt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domain = java.util.Objects.requireNonNull(builder.domain, "domain is required");
            this.rsType = java.util.Objects.requireNonNull(builder.rsType, "rsType is required");
            this.rules = java.util.Objects.requireNonNull(builder.rules, "rules is required");
            this.defenseId = builder.defenseId;
            this.httpsExt = builder.httpsExt;
            this.instanceIds = builder.instanceIds;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getDomain() {
            return this.domain;
        }

        @Override
        public final java.lang.Object getRsType() {
            return this.rsType;
        }

        @Override
        public final java.lang.Object getRules() {
            return this.rules;
        }

        @Override
        public final java.lang.Object getDefenseId() {
            return this.defenseId;
        }

        @Override
        public final java.lang.Object getHttpsExt() {
            return this.httpsExt;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domain", om.valueToTree(this.getDomain()));
            data.set("rsType", om.valueToTree(this.getRsType()));
            data.set("rules", om.valueToTree(this.getRules()));
            if (this.getDefenseId() != null) {
                data.set("defenseId", om.valueToTree(this.getDefenseId()));
            }
            if (this.getHttpsExt() != null) {
                data.set("httpsExt", om.valueToTree(this.getHttpsExt()));
            }
            if (this.getInstanceIds() != null) {
                data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ddospro.WebRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WebRuleProps.Jsii$Proxy that = (WebRuleProps.Jsii$Proxy) o;

            if (!domain.equals(that.domain)) return false;
            if (!rsType.equals(that.rsType)) return false;
            if (!rules.equals(that.rules)) return false;
            if (this.defenseId != null ? !this.defenseId.equals(that.defenseId) : that.defenseId != null) return false;
            if (this.httpsExt != null ? !this.httpsExt.equals(that.httpsExt) : that.httpsExt != null) return false;
            if (this.instanceIds != null ? !this.instanceIds.equals(that.instanceIds) : that.instanceIds != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domain.hashCode();
            result = 31 * result + (this.rsType.hashCode());
            result = 31 * result + (this.rules.hashCode());
            result = 31 * result + (this.defenseId != null ? this.defenseId.hashCode() : 0);
            result = 31 * result + (this.httpsExt != null ? this.httpsExt.hashCode() : 0);
            result = 31 * result + (this.instanceIds != null ? this.instanceIds.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
