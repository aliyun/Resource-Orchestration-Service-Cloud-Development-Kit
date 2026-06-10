package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>RewriteUrlRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-rewriteurlrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:49:07.759Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.RewriteUrlRuleProps")
@software.amazon.jsii.Jsii.Proxy(RewriteUrlRuleProps.Jsii$Proxy.class)
public interface RewriteUrlRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property siteId: The website ID, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850189.html">ListSites</a> operation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property queryString: The desired query string to which you want to rewrite the query string in the original request.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueryString() {
        return null;
    }

    /**
     * Property rewriteQueryStringType: Query string rewrite type.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li><code>static</code>: Static mode.</li>
     * <li><code>dynamic</code>: Dynamic mode.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRewriteQueryStringType() {
        return null;
    }

    /**
     * Property rewriteUriType: URI rewrite type.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li><code>static</code>: Static mode.</li>
     * <li><code>dynamic</code>: Dynamic mode.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRewriteUriType() {
        return null;
    }

    /**
     * Property rule: Rule content, using conditional expressions to match user requests.
     * <p>
     * When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return null;
    }

    /**
     * Property ruleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set. Value range:
     * on: open.
     * off: close.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleEnable() {
        return null;
    }

    /**
     * Property ruleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return null;
    }

    /**
     * Property siteVersion: Version number of the site configuration.
     * <p>
     * For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return null;
    }

    /**
     * Property uri: The desired URI to which you want to rewrite the path in the original request.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUri() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RewriteUrlRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RewriteUrlRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RewriteUrlRuleProps> {
        java.lang.Object siteId;
        java.lang.Object queryString;
        java.lang.Object rewriteQueryStringType;
        java.lang.Object rewriteUriType;
        java.lang.Object rule;
        java.lang.Object ruleEnable;
        java.lang.Object ruleName;
        java.lang.Object siteVersion;
        java.lang.Object uri;

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getSiteId}
         * @param siteId Property siteId: The website ID, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850189.html">ListSites</a> operation. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getSiteId}
         * @param siteId Property siteId: The website ID, which can be obtained by calling the <a href="https://www.alibabacloud.com/help/en/doc-detail/2850189.html">ListSites</a> operation. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getQueryString}
         * @param queryString Property queryString: The desired query string to which you want to rewrite the query string in the original request.
         * @return {@code this}
         */
        public Builder queryString(java.lang.String queryString) {
            this.queryString = queryString;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getQueryString}
         * @param queryString Property queryString: The desired query string to which you want to rewrite the query string in the original request.
         * @return {@code this}
         */
        public Builder queryString(com.aliyun.ros.cdk.core.IResolvable queryString) {
            this.queryString = queryString;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getRewriteQueryStringType}
         * @param rewriteQueryStringType Property rewriteQueryStringType: Query string rewrite type.
         *                               Value range:
         *                               <p>
         *                               <ul>
         *                               <li><code>static</code>: Static mode.</li>
         *                               <li><code>dynamic</code>: Dynamic mode.</li>
         *                               </ul>
         * @return {@code this}
         */
        public Builder rewriteQueryStringType(java.lang.String rewriteQueryStringType) {
            this.rewriteQueryStringType = rewriteQueryStringType;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getRewriteQueryStringType}
         * @param rewriteQueryStringType Property rewriteQueryStringType: Query string rewrite type.
         *                               Value range:
         *                               <p>
         *                               <ul>
         *                               <li><code>static</code>: Static mode.</li>
         *                               <li><code>dynamic</code>: Dynamic mode.</li>
         *                               </ul>
         * @return {@code this}
         */
        public Builder rewriteQueryStringType(com.aliyun.ros.cdk.core.IResolvable rewriteQueryStringType) {
            this.rewriteQueryStringType = rewriteQueryStringType;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getRewriteUriType}
         * @param rewriteUriType Property rewriteUriType: URI rewrite type.
         *                       Value range:
         *                       <p>
         *                       <ul>
         *                       <li><code>static</code>: Static mode.</li>
         *                       <li><code>dynamic</code>: Dynamic mode.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder rewriteUriType(java.lang.String rewriteUriType) {
            this.rewriteUriType = rewriteUriType;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getRewriteUriType}
         * @param rewriteUriType Property rewriteUriType: URI rewrite type.
         *                       Value range:
         *                       <p>
         *                       <ul>
         *                       <li><code>static</code>: Static mode.</li>
         *                       <li><code>dynamic</code>: Dynamic mode.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder rewriteUriType(com.aliyun.ros.cdk.core.IResolvable rewriteUriType) {
            this.rewriteUriType = rewriteUriType;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             Match all incoming requests: value set to true
         *             Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
         * @return {@code this}
         */
        public Builder rule(java.lang.String rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             Match all incoming requests: value set to true
         *             Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   on: open.
         *                   off: close.
         * @return {@code this}
         */
        public Builder ruleEnable(java.lang.String ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   on: open.
         *                   off: close.
         * @return {@code this}
         */
        public Builder ruleEnable(com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         *                 When adding global configuration, this parameter does not need to be set.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getSiteVersion}
         * @param siteVersion Property siteVersion: Version number of the site configuration.
         *                    For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
         * @return {@code this}
         */
        public Builder siteVersion(java.lang.Number siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getSiteVersion}
         * @param siteVersion Property siteVersion: Version number of the site configuration.
         *                    For a site with configuration version management enabled, you can use this parameter to specify the site version in which the configuration takes effect. The default version is 0.
         * @return {@code this}
         */
        public Builder siteVersion(com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getUri}
         * @param uri Property uri: The desired URI to which you want to rewrite the path in the original request.
         * @return {@code this}
         */
        public Builder uri(java.lang.String uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link RewriteUrlRuleProps#getUri}
         * @param uri Property uri: The desired URI to which you want to rewrite the path in the original request.
         * @return {@code this}
         */
        public Builder uri(com.aliyun.ros.cdk.core.IResolvable uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RewriteUrlRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RewriteUrlRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RewriteUrlRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RewriteUrlRuleProps {
        private final java.lang.Object siteId;
        private final java.lang.Object queryString;
        private final java.lang.Object rewriteQueryStringType;
        private final java.lang.Object rewriteUriType;
        private final java.lang.Object rule;
        private final java.lang.Object ruleEnable;
        private final java.lang.Object ruleName;
        private final java.lang.Object siteVersion;
        private final java.lang.Object uri;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queryString = software.amazon.jsii.Kernel.get(this, "queryString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rewriteQueryStringType = software.amazon.jsii.Kernel.get(this, "rewriteQueryStringType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rewriteUriType = software.amazon.jsii.Kernel.get(this, "rewriteUriType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleEnable = software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteVersion = software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uri = software.amazon.jsii.Kernel.get(this, "uri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.queryString = builder.queryString;
            this.rewriteQueryStringType = builder.rewriteQueryStringType;
            this.rewriteUriType = builder.rewriteUriType;
            this.rule = builder.rule;
            this.ruleEnable = builder.ruleEnable;
            this.ruleName = builder.ruleName;
            this.siteVersion = builder.siteVersion;
            this.uri = builder.uri;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getQueryString() {
            return this.queryString;
        }

        @Override
        public final java.lang.Object getRewriteQueryStringType() {
            return this.rewriteQueryStringType;
        }

        @Override
        public final java.lang.Object getRewriteUriType() {
            return this.rewriteUriType;
        }

        @Override
        public final java.lang.Object getRule() {
            return this.rule;
        }

        @Override
        public final java.lang.Object getRuleEnable() {
            return this.ruleEnable;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getSiteVersion() {
            return this.siteVersion;
        }

        @Override
        public final java.lang.Object getUri() {
            return this.uri;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getQueryString() != null) {
                data.set("queryString", om.valueToTree(this.getQueryString()));
            }
            if (this.getRewriteQueryStringType() != null) {
                data.set("rewriteQueryStringType", om.valueToTree(this.getRewriteQueryStringType()));
            }
            if (this.getRewriteUriType() != null) {
                data.set("rewriteUriType", om.valueToTree(this.getRewriteUriType()));
            }
            if (this.getRule() != null) {
                data.set("rule", om.valueToTree(this.getRule()));
            }
            if (this.getRuleEnable() != null) {
                data.set("ruleEnable", om.valueToTree(this.getRuleEnable()));
            }
            if (this.getRuleName() != null) {
                data.set("ruleName", om.valueToTree(this.getRuleName()));
            }
            if (this.getSiteVersion() != null) {
                data.set("siteVersion", om.valueToTree(this.getSiteVersion()));
            }
            if (this.getUri() != null) {
                data.set("uri", om.valueToTree(this.getUri()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.RewriteUrlRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RewriteUrlRuleProps.Jsii$Proxy that = (RewriteUrlRuleProps.Jsii$Proxy) o;

            if (!siteId.equals(that.siteId)) return false;
            if (this.queryString != null ? !this.queryString.equals(that.queryString) : that.queryString != null) return false;
            if (this.rewriteQueryStringType != null ? !this.rewriteQueryStringType.equals(that.rewriteQueryStringType) : that.rewriteQueryStringType != null) return false;
            if (this.rewriteUriType != null ? !this.rewriteUriType.equals(that.rewriteUriType) : that.rewriteUriType != null) return false;
            if (this.rule != null ? !this.rule.equals(that.rule) : that.rule != null) return false;
            if (this.ruleEnable != null ? !this.ruleEnable.equals(that.ruleEnable) : that.ruleEnable != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            if (this.siteVersion != null ? !this.siteVersion.equals(that.siteVersion) : that.siteVersion != null) return false;
            return this.uri != null ? this.uri.equals(that.uri) : that.uri == null;
        }

        @Override
        public final int hashCode() {
            int result = this.siteId.hashCode();
            result = 31 * result + (this.queryString != null ? this.queryString.hashCode() : 0);
            result = 31 * result + (this.rewriteQueryStringType != null ? this.rewriteQueryStringType.hashCode() : 0);
            result = 31 * result + (this.rewriteUriType != null ? this.rewriteUriType.hashCode() : 0);
            result = 31 * result + (this.rule != null ? this.rule.hashCode() : 0);
            result = 31 * result + (this.ruleEnable != null ? this.ruleEnable.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.siteVersion != null ? this.siteVersion.hashCode() : 0);
            result = 31 * result + (this.uri != null ? this.uri.hashCode() : 0);
            return result;
        }
    }
}
