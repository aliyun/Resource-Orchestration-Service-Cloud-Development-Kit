package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>NetworkOptimization</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-networkoptimization
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.501Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.NetworkOptimizationProps")
@software.amazon.jsii.Jsii.Proxy(NetworkOptimizationProps.Jsii$Proxy.class)
public interface NetworkOptimizationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property siteId: Site ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSiteId();

    /**
     * Property grpc: Whether to enable GRPC, default is disabled.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li><code>on</code>: Enabled</li>
     * <li><code>off</code>: Disabled.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGrpc() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttp2Origin() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRule() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleEnable() {
        return null;
    }

    /**
     * Property ruleName: Rule name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return null;
    }

    /**
     * Property sequence: Order of rule execution.
     * <p>
     * The smaller the value, the higher the priority for execution.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSequence() {
        return null;
    }

    /**
     * Property siteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSiteVersion() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSmartRouting() {
        return null;
    }

    /**
     * Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUploadMaxFilesize() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebsocket() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NetworkOptimizationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NetworkOptimizationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NetworkOptimizationProps> {
        java.lang.Object siteId;
        java.lang.Object grpc;
        java.lang.Object http2Origin;
        java.lang.Object rule;
        java.lang.Object ruleEnable;
        java.lang.Object ruleName;
        java.lang.Object sequence;
        java.lang.Object siteVersion;
        java.lang.Object smartRouting;
        java.lang.Object uploadMaxFilesize;
        java.lang.Object websocket;

        /**
         * Sets the value of {@link NetworkOptimizationProps#getSiteId}
         * @param siteId Property siteId: Site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(java.lang.Number siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getSiteId}
         * @param siteId Property siteId: Site ID. This parameter is required.
         * @return {@code this}
         */
        public Builder siteId(com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.siteId = siteId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getGrpc}
         * @param grpc Property grpc: Whether to enable GRPC, default is disabled.
         *             Value range:
         *             <p>
         *             <ul>
         *             <li><code>on</code>: Enabled</li>
         *             <li><code>off</code>: Disabled.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder grpc(java.lang.String grpc) {
            this.grpc = grpc;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getGrpc}
         * @param grpc Property grpc: Whether to enable GRPC, default is disabled.
         *             Value range:
         *             <p>
         *             <ul>
         *             <li><code>on</code>: Enabled</li>
         *             <li><code>off</code>: Disabled.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder grpc(com.aliyun.ros.cdk.core.IResolvable grpc) {
            this.grpc = grpc;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getHttp2Origin}
         * @param http2Origin Property http2Origin: Whether to enable HTTP2 origin, default is disabled.
         *                    Value range:
         *                    <p>
         *                    <ul>
         *                    <li><code>on</code>: Enabled</li>
         *                    <li><code>off</code>: Disabled.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder http2Origin(java.lang.String http2Origin) {
            this.http2Origin = http2Origin;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getHttp2Origin}
         * @param http2Origin Property http2Origin: Whether to enable HTTP2 origin, default is disabled.
         *                    Value range:
         *                    <p>
         *                    <ul>
         *                    <li><code>on</code>: Enabled</li>
         *                    <li><code>off</code>: Disabled.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder http2Origin(com.aliyun.ros.cdk.core.IResolvable http2Origin) {
            this.http2Origin = http2Origin;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             <p>
         *             <ul>
         *             <li>Match all incoming requests: value set to true</li>
         *             <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder rule(java.lang.String rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getRule}
         * @param rule Property rule: Rule content, using conditional expressions to match user requests.
         *             When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
         *             <p>
         *             <ul>
         *             <li>Match all incoming requests: value set to true</li>
         *             <li>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder rule(com.aliyun.ros.cdk.core.IResolvable rule) {
            this.rule = rule;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: open.</li>
         *                   <li><code>off</code>: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(java.lang.String ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getRuleEnable}
         * @param ruleEnable Property ruleEnable: Rule switch.
         *                   When adding global configuration, this parameter does not need to be set. Value range:
         *                   <p>
         *                   <ul>
         *                   <li><code>on</code>: open.</li>
         *                   <li><code>off</code>: close.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleEnable(com.aliyun.ros.cdk.core.IResolvable ruleEnable) {
            this.ruleEnable = ruleEnable;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getRuleName}
         * @param ruleName Property ruleName: Rule name.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getSequence}
         * @param sequence Property sequence: Order of rule execution.
         *                 The smaller the value, the higher the priority for execution.
         * @return {@code this}
         */
        public Builder sequence(java.lang.Number sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getSequence}
         * @param sequence Property sequence: Order of rule execution.
         *                 The smaller the value, the higher the priority for execution.
         * @return {@code this}
         */
        public Builder sequence(com.aliyun.ros.cdk.core.IResolvable sequence) {
            this.sequence = sequence;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getSiteVersion}
         * @param siteVersion Property siteVersion: The version number of the site configuration.
         *                    For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * @return {@code this}
         */
        public Builder siteVersion(java.lang.Number siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getSiteVersion}
         * @param siteVersion Property siteVersion: The version number of the site configuration.
         *                    For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         * @return {@code this}
         */
        public Builder siteVersion(com.aliyun.ros.cdk.core.IResolvable siteVersion) {
            this.siteVersion = siteVersion;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getSmartRouting}
         * @param smartRouting Property smartRouting: Whether to enable smart routing service, default is disabled.
         *                     Value range:
         *                     <p>
         *                     <ul>
         *                     <li><code>on</code>: Enabled</li>
         *                     <li><code>off</code>: Disabled.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder smartRouting(java.lang.String smartRouting) {
            this.smartRouting = smartRouting;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getSmartRouting}
         * @param smartRouting Property smartRouting: Whether to enable smart routing service, default is disabled.
         *                     Value range:
         *                     <p>
         *                     <ul>
         *                     <li><code>on</code>: Enabled</li>
         *                     <li><code>off</code>: Disabled.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder smartRouting(com.aliyun.ros.cdk.core.IResolvable smartRouting) {
            this.smartRouting = smartRouting;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getUploadMaxFilesize}
         * @param uploadMaxFilesize Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
         * @return {@code this}
         */
        public Builder uploadMaxFilesize(java.lang.Number uploadMaxFilesize) {
            this.uploadMaxFilesize = uploadMaxFilesize;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getUploadMaxFilesize}
         * @param uploadMaxFilesize Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
         * @return {@code this}
         */
        public Builder uploadMaxFilesize(com.aliyun.ros.cdk.core.IResolvable uploadMaxFilesize) {
            this.uploadMaxFilesize = uploadMaxFilesize;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getWebsocket}
         * @param websocket Property websocket: Whether to enable Websocket, default is enabled.
         *                  Value range:
         *                  <p>
         *                  <ul>
         *                  <li><code>on</code>: Enabled</li>
         *                  <li><code>off</code>: Disabled.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder websocket(java.lang.String websocket) {
            this.websocket = websocket;
            return this;
        }

        /**
         * Sets the value of {@link NetworkOptimizationProps#getWebsocket}
         * @param websocket Property websocket: Whether to enable Websocket, default is enabled.
         *                  Value range:
         *                  <p>
         *                  <ul>
         *                  <li><code>on</code>: Enabled</li>
         *                  <li><code>off</code>: Disabled.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder websocket(com.aliyun.ros.cdk.core.IResolvable websocket) {
            this.websocket = websocket;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NetworkOptimizationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NetworkOptimizationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NetworkOptimizationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkOptimizationProps {
        private final java.lang.Object siteId;
        private final java.lang.Object grpc;
        private final java.lang.Object http2Origin;
        private final java.lang.Object rule;
        private final java.lang.Object ruleEnable;
        private final java.lang.Object ruleName;
        private final java.lang.Object sequence;
        private final java.lang.Object siteVersion;
        private final java.lang.Object smartRouting;
        private final java.lang.Object uploadMaxFilesize;
        private final java.lang.Object websocket;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.siteId = software.amazon.jsii.Kernel.get(this, "siteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.grpc = software.amazon.jsii.Kernel.get(this, "grpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.http2Origin = software.amazon.jsii.Kernel.get(this, "http2Origin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rule = software.amazon.jsii.Kernel.get(this, "rule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleEnable = software.amazon.jsii.Kernel.get(this, "ruleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sequence = software.amazon.jsii.Kernel.get(this, "sequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.siteVersion = software.amazon.jsii.Kernel.get(this, "siteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.smartRouting = software.amazon.jsii.Kernel.get(this, "smartRouting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uploadMaxFilesize = software.amazon.jsii.Kernel.get(this, "uploadMaxFilesize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.websocket = software.amazon.jsii.Kernel.get(this, "websocket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.siteId = java.util.Objects.requireNonNull(builder.siteId, "siteId is required");
            this.grpc = builder.grpc;
            this.http2Origin = builder.http2Origin;
            this.rule = builder.rule;
            this.ruleEnable = builder.ruleEnable;
            this.ruleName = builder.ruleName;
            this.sequence = builder.sequence;
            this.siteVersion = builder.siteVersion;
            this.smartRouting = builder.smartRouting;
            this.uploadMaxFilesize = builder.uploadMaxFilesize;
            this.websocket = builder.websocket;
        }

        @Override
        public final java.lang.Object getSiteId() {
            return this.siteId;
        }

        @Override
        public final java.lang.Object getGrpc() {
            return this.grpc;
        }

        @Override
        public final java.lang.Object getHttp2Origin() {
            return this.http2Origin;
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
        public final java.lang.Object getSequence() {
            return this.sequence;
        }

        @Override
        public final java.lang.Object getSiteVersion() {
            return this.siteVersion;
        }

        @Override
        public final java.lang.Object getSmartRouting() {
            return this.smartRouting;
        }

        @Override
        public final java.lang.Object getUploadMaxFilesize() {
            return this.uploadMaxFilesize;
        }

        @Override
        public final java.lang.Object getWebsocket() {
            return this.websocket;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("siteId", om.valueToTree(this.getSiteId()));
            if (this.getGrpc() != null) {
                data.set("grpc", om.valueToTree(this.getGrpc()));
            }
            if (this.getHttp2Origin() != null) {
                data.set("http2Origin", om.valueToTree(this.getHttp2Origin()));
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
            if (this.getSequence() != null) {
                data.set("sequence", om.valueToTree(this.getSequence()));
            }
            if (this.getSiteVersion() != null) {
                data.set("siteVersion", om.valueToTree(this.getSiteVersion()));
            }
            if (this.getSmartRouting() != null) {
                data.set("smartRouting", om.valueToTree(this.getSmartRouting()));
            }
            if (this.getUploadMaxFilesize() != null) {
                data.set("uploadMaxFilesize", om.valueToTree(this.getUploadMaxFilesize()));
            }
            if (this.getWebsocket() != null) {
                data.set("websocket", om.valueToTree(this.getWebsocket()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.NetworkOptimizationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NetworkOptimizationProps.Jsii$Proxy that = (NetworkOptimizationProps.Jsii$Proxy) o;

            if (!siteId.equals(that.siteId)) return false;
            if (this.grpc != null ? !this.grpc.equals(that.grpc) : that.grpc != null) return false;
            if (this.http2Origin != null ? !this.http2Origin.equals(that.http2Origin) : that.http2Origin != null) return false;
            if (this.rule != null ? !this.rule.equals(that.rule) : that.rule != null) return false;
            if (this.ruleEnable != null ? !this.ruleEnable.equals(that.ruleEnable) : that.ruleEnable != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            if (this.sequence != null ? !this.sequence.equals(that.sequence) : that.sequence != null) return false;
            if (this.siteVersion != null ? !this.siteVersion.equals(that.siteVersion) : that.siteVersion != null) return false;
            if (this.smartRouting != null ? !this.smartRouting.equals(that.smartRouting) : that.smartRouting != null) return false;
            if (this.uploadMaxFilesize != null ? !this.uploadMaxFilesize.equals(that.uploadMaxFilesize) : that.uploadMaxFilesize != null) return false;
            return this.websocket != null ? this.websocket.equals(that.websocket) : that.websocket == null;
        }

        @Override
        public final int hashCode() {
            int result = this.siteId.hashCode();
            result = 31 * result + (this.grpc != null ? this.grpc.hashCode() : 0);
            result = 31 * result + (this.http2Origin != null ? this.http2Origin.hashCode() : 0);
            result = 31 * result + (this.rule != null ? this.rule.hashCode() : 0);
            result = 31 * result + (this.ruleEnable != null ? this.ruleEnable.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.sequence != null ? this.sequence.hashCode() : 0);
            result = 31 * result + (this.siteVersion != null ? this.siteVersion.hashCode() : 0);
            result = 31 * result + (this.smartRouting != null ? this.smartRouting.hashCode() : 0);
            result = 31 * result + (this.uploadMaxFilesize != null ? this.uploadMaxFilesize.hashCode() : 0);
            result = 31 * result + (this.websocket != null ? this.websocket.hashCode() : 0);
            return result;
        }
    }
}
