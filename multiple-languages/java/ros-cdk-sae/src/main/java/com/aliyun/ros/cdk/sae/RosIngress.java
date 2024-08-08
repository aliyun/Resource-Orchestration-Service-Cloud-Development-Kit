package com.aliyun.ros.cdk.sae;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::SAE::Ingress</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:13.946Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosIngress")
public class RosIngress extends com.aliyun.ros.cdk.core.RosResource {

    protected RosIngress(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosIngress(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sae.RosIngress.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosIngress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.RosIngressProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIngressId() {
        return software.amazon.jsii.Kernel.get(this, "attrIngressId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDefaultRule() {
        return software.amazon.jsii.Kernel.get(this, "defaultRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultRule", java.util.Objects.requireNonNull(value, "defaultRule is required"));
    }

    /**
     */
    public void setDefaultRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.RosIngress.DefaultRuleProperty value) {
        software.amazon.jsii.Kernel.set(this, "defaultRule", java.util.Objects.requireNonNull(value, "defaultRule is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", java.util.Objects.requireNonNull(value, "description is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort() {
        return software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", java.util.Objects.requireNonNull(value, "listenerPort is required"));
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", java.util.Objects.requireNonNull(value, "listenerPort is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceId() {
        return software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespaceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespaceId", java.util.Objects.requireNonNull(value, "namespaceId is required"));
    }

    /**
     */
    public void setNamespaceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespaceId", java.util.Objects.requireNonNull(value, "namespaceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRules() {
        return software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRules(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rules", java.util.Objects.requireNonNull(value, "rules is required"));
    }

    /**
     */
    public void setRules(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.sae.RosIngress.RulesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.sae.RosIngress.RulesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "rules", java.util.Objects.requireNonNull(value, "rules is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSlbId() {
        return software.amazon.jsii.Kernel.get(this, "slbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSlbId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "slbId", java.util.Objects.requireNonNull(value, "slbId is required"));
    }

    /**
     */
    public void setSlbId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "slbId", java.util.Objects.requireNonNull(value, "slbId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCertId() {
        return software.amazon.jsii.Kernel.get(this, "certId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCertId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "certId", value);
    }

    /**
     */
    public void setCertId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "certId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCertIds() {
        return software.amazon.jsii.Kernel.get(this, "certIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCertIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "certIds", value);
    }

    /**
     */
    public void setCertIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "certIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getListenerProtocol() {
        return software.amazon.jsii.Kernel.get(this, "listenerProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerProtocol(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerProtocol", value);
    }

    /**
     */
    public void setListenerProtocol(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerProtocol", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalanceType() {
        return software.amazon.jsii.Kernel.get(this, "loadBalanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalanceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loadBalanceType", value);
    }

    /**
     */
    public void setLoadBalanceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalanceType", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosIngress.DefaultRuleProperty")
    @software.amazon.jsii.Jsii.Proxy(DefaultRuleProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DefaultRuleProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAppId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getContainerPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBackendProtocol() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DefaultRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DefaultRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DefaultRuleProperty> {
            java.lang.Object appId;
            java.lang.Object containerPort;
            java.lang.Object backendProtocol;

            /**
             * Sets the value of {@link DefaultRuleProperty#getAppId}
             * @param appId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appId(java.lang.String appId) {
                this.appId = appId;
                return this;
            }

            /**
             * Sets the value of {@link DefaultRuleProperty#getAppId}
             * @param appId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
                this.appId = appId;
                return this;
            }

            /**
             * Sets the value of {@link DefaultRuleProperty#getContainerPort}
             * @param containerPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder containerPort(java.lang.Number containerPort) {
                this.containerPort = containerPort;
                return this;
            }

            /**
             * Sets the value of {@link DefaultRuleProperty#getContainerPort}
             * @param containerPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder containerPort(com.aliyun.ros.cdk.core.IResolvable containerPort) {
                this.containerPort = containerPort;
                return this;
            }

            /**
             * Sets the value of {@link DefaultRuleProperty#getBackendProtocol}
             * @param backendProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backendProtocol(java.lang.String backendProtocol) {
                this.backendProtocol = backendProtocol;
                return this;
            }

            /**
             * Sets the value of {@link DefaultRuleProperty#getBackendProtocol}
             * @param backendProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backendProtocol(com.aliyun.ros.cdk.core.IResolvable backendProtocol) {
                this.backendProtocol = backendProtocol;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DefaultRuleProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DefaultRuleProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DefaultRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DefaultRuleProperty {
            private final java.lang.Object appId;
            private final java.lang.Object containerPort;
            private final java.lang.Object backendProtocol;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.containerPort = software.amazon.jsii.Kernel.get(this, "containerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.backendProtocol = software.amazon.jsii.Kernel.get(this, "backendProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.appId = java.util.Objects.requireNonNull(builder.appId, "appId is required");
                this.containerPort = java.util.Objects.requireNonNull(builder.containerPort, "containerPort is required");
                this.backendProtocol = builder.backendProtocol;
            }

            @Override
            public final java.lang.Object getAppId() {
                return this.appId;
            }

            @Override
            public final java.lang.Object getContainerPort() {
                return this.containerPort;
            }

            @Override
            public final java.lang.Object getBackendProtocol() {
                return this.backendProtocol;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("appId", om.valueToTree(this.getAppId()));
                data.set("containerPort", om.valueToTree(this.getContainerPort()));
                if (this.getBackendProtocol() != null) {
                    data.set("backendProtocol", om.valueToTree(this.getBackendProtocol()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosIngress.DefaultRuleProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DefaultRuleProperty.Jsii$Proxy that = (DefaultRuleProperty.Jsii$Proxy) o;

                if (!appId.equals(that.appId)) return false;
                if (!containerPort.equals(that.containerPort)) return false;
                return this.backendProtocol != null ? this.backendProtocol.equals(that.backendProtocol) : that.backendProtocol == null;
            }

            @Override
            public final int hashCode() {
                int result = this.appId.hashCode();
                result = 31 * result + (this.containerPort.hashCode());
                result = 31 * result + (this.backendProtocol != null ? this.backendProtocol.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosIngress.RulesProperty")
    @software.amazon.jsii.Jsii.Proxy(RulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAppId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getContainerPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDomain();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPath();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBackendProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRewritePath() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RulesProperty> {
            java.lang.Object appId;
            java.lang.Object containerPort;
            java.lang.Object domain;
            java.lang.Object path;
            java.lang.Object backendProtocol;
            java.lang.Object rewritePath;

            /**
             * Sets the value of {@link RulesProperty#getAppId}
             * @param appId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appId(java.lang.String appId) {
                this.appId = appId;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getAppId}
             * @param appId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
                this.appId = appId;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getContainerPort}
             * @param containerPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder containerPort(java.lang.Number containerPort) {
                this.containerPort = containerPort;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getContainerPort}
             * @param containerPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder containerPort(com.aliyun.ros.cdk.core.IResolvable containerPort) {
                this.containerPort = containerPort;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getDomain}
             * @param domain the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(java.lang.String domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getDomain}
             * @param domain the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getPath}
             * @param path the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getPath}
             * @param path the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getBackendProtocol}
             * @param backendProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backendProtocol(java.lang.String backendProtocol) {
                this.backendProtocol = backendProtocol;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getBackendProtocol}
             * @param backendProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder backendProtocol(com.aliyun.ros.cdk.core.IResolvable backendProtocol) {
                this.backendProtocol = backendProtocol;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getRewritePath}
             * @param rewritePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rewritePath(java.lang.String rewritePath) {
                this.rewritePath = rewritePath;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getRewritePath}
             * @param rewritePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder rewritePath(com.aliyun.ros.cdk.core.IResolvable rewritePath) {
                this.rewritePath = rewritePath;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RulesProperty {
            private final java.lang.Object appId;
            private final java.lang.Object containerPort;
            private final java.lang.Object domain;
            private final java.lang.Object path;
            private final java.lang.Object backendProtocol;
            private final java.lang.Object rewritePath;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.containerPort = software.amazon.jsii.Kernel.get(this, "containerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.backendProtocol = software.amazon.jsii.Kernel.get(this, "backendProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.rewritePath = software.amazon.jsii.Kernel.get(this, "rewritePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.appId = java.util.Objects.requireNonNull(builder.appId, "appId is required");
                this.containerPort = java.util.Objects.requireNonNull(builder.containerPort, "containerPort is required");
                this.domain = java.util.Objects.requireNonNull(builder.domain, "domain is required");
                this.path = java.util.Objects.requireNonNull(builder.path, "path is required");
                this.backendProtocol = builder.backendProtocol;
                this.rewritePath = builder.rewritePath;
            }

            @Override
            public final java.lang.Object getAppId() {
                return this.appId;
            }

            @Override
            public final java.lang.Object getContainerPort() {
                return this.containerPort;
            }

            @Override
            public final java.lang.Object getDomain() {
                return this.domain;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getBackendProtocol() {
                return this.backendProtocol;
            }

            @Override
            public final java.lang.Object getRewritePath() {
                return this.rewritePath;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("appId", om.valueToTree(this.getAppId()));
                data.set("containerPort", om.valueToTree(this.getContainerPort()));
                data.set("domain", om.valueToTree(this.getDomain()));
                data.set("path", om.valueToTree(this.getPath()));
                if (this.getBackendProtocol() != null) {
                    data.set("backendProtocol", om.valueToTree(this.getBackendProtocol()));
                }
                if (this.getRewritePath() != null) {
                    data.set("rewritePath", om.valueToTree(this.getRewritePath()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosIngress.RulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RulesProperty.Jsii$Proxy that = (RulesProperty.Jsii$Proxy) o;

                if (!appId.equals(that.appId)) return false;
                if (!containerPort.equals(that.containerPort)) return false;
                if (!domain.equals(that.domain)) return false;
                if (!path.equals(that.path)) return false;
                if (this.backendProtocol != null ? !this.backendProtocol.equals(that.backendProtocol) : that.backendProtocol != null) return false;
                return this.rewritePath != null ? this.rewritePath.equals(that.rewritePath) : that.rewritePath == null;
            }

            @Override
            public final int hashCode() {
                int result = this.appId.hashCode();
                result = 31 * result + (this.containerPort.hashCode());
                result = 31 * result + (this.domain.hashCode());
                result = 31 * result + (this.path.hashCode());
                result = 31 * result + (this.backendProtocol != null ? this.backendProtocol.hashCode() : 0);
                result = 31 * result + (this.rewritePath != null ? this.rewritePath.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.RosIngress}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.RosIngress> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sae.RosIngressProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.RosIngressProps.Builder();
        }

        /**
         * @return {@code this}
         * @param defaultRule This parameter is required.
         */
        public Builder defaultRule(final com.aliyun.ros.cdk.core.IResolvable defaultRule) {
            this.props.defaultRule(defaultRule);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultRule This parameter is required.
         */
        public Builder defaultRule(final com.aliyun.ros.cdk.sae.RosIngress.DefaultRuleProperty defaultRule) {
            this.props.defaultRule(defaultRule);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param namespaceId This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param namespaceId This parameter is required.
         */
        public Builder namespaceId(final com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param rules This parameter is required.
         */
        public Builder rules(final com.aliyun.ros.cdk.core.IResolvable rules) {
            this.props.rules(rules);
            return this;
        }
        /**
         * @return {@code this}
         * @param rules This parameter is required.
         */
        public Builder rules(final java.util.List<? extends java.lang.Object> rules) {
            this.props.rules(rules);
            return this;
        }

        /**
         * @return {@code this}
         * @param slbId This parameter is required.
         */
        public Builder slbId(final java.lang.String slbId) {
            this.props.slbId(slbId);
            return this;
        }
        /**
         * @return {@code this}
         * @param slbId This parameter is required.
         */
        public Builder slbId(final com.aliyun.ros.cdk.core.IResolvable slbId) {
            this.props.slbId(slbId);
            return this;
        }

        /**
         * @return {@code this}
         * @param certId This parameter is required.
         */
        public Builder certId(final java.lang.String certId) {
            this.props.certId(certId);
            return this;
        }
        /**
         * @return {@code this}
         * @param certId This parameter is required.
         */
        public Builder certId(final com.aliyun.ros.cdk.core.IResolvable certId) {
            this.props.certId(certId);
            return this;
        }

        /**
         * @return {@code this}
         * @param certIds This parameter is required.
         */
        public Builder certIds(final com.aliyun.ros.cdk.core.IResolvable certIds) {
            this.props.certIds(certIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param certIds This parameter is required.
         */
        public Builder certIds(final java.util.List<? extends java.lang.Object> certIds) {
            this.props.certIds(certIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerProtocol This parameter is required.
         */
        public Builder listenerProtocol(final java.lang.String listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerProtocol This parameter is required.
         */
        public Builder listenerProtocol(final com.aliyun.ros.cdk.core.IResolvable listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalanceType This parameter is required.
         */
        public Builder loadBalanceType(final java.lang.String loadBalanceType) {
            this.props.loadBalanceType(loadBalanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalanceType This parameter is required.
         */
        public Builder loadBalanceType(final com.aliyun.ros.cdk.core.IResolvable loadBalanceType) {
            this.props.loadBalanceType(loadBalanceType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sae.RosIngress}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.RosIngress build() {
            return new com.aliyun.ros.cdk.sae.RosIngress(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
