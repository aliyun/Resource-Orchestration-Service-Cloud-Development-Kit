package com.aliyun.ros.cdk.dns;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DNS::MonitorConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.976Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RosMonitorConfig")
public class RosMonitorConfig extends com.aliyun.ros.cdk.core.RosResource {

    protected RosMonitorConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosMonitorConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dns.RosMonitorConfig.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosMonitorConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.RosMonitorConfigProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMonitorConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrMonitorConfigId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAddrPoolId() {
        return software.amazon.jsii.Kernel.get(this, "addrPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddrPoolId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "addrPoolId", java.util.Objects.requireNonNull(value, "addrPoolId is required"));
    }

    /**
     */
    public void setAddrPoolId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addrPoolId", java.util.Objects.requireNonNull(value, "addrPoolId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEvaluationCount() {
        return software.amazon.jsii.Kernel.get(this, "evaluationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEvaluationCount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "evaluationCount", java.util.Objects.requireNonNull(value, "evaluationCount is required"));
    }

    /**
     */
    public void setEvaluationCount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "evaluationCount", java.util.Objects.requireNonNull(value, "evaluationCount is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInterval() {
        return software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInterval(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "interval", java.util.Objects.requireNonNull(value, "interval is required"));
    }

    /**
     */
    public void setInterval(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "interval", java.util.Objects.requireNonNull(value, "interval is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getIspCityNode() {
        return software.amazon.jsii.Kernel.get(this, "ispCityNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIspCityNode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ispCityNode", java.util.Objects.requireNonNull(value, "ispCityNode is required"));
    }

    /**
     */
    public void setIspCityNode(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.dns.RosMonitorConfig.IspCityNodeProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.dns.RosMonitorConfig.IspCityNodeProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "ispCityNode", java.util.Objects.requireNonNull(value, "ispCityNode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMonitorExtendInfo() {
        return software.amazon.jsii.Kernel.get(this, "monitorExtendInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMonitorExtendInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "monitorExtendInfo", java.util.Objects.requireNonNull(value, "monitorExtendInfo is required"));
    }

    /**
     */
    public void setMonitorExtendInfo(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "monitorExtendInfo", java.util.Objects.requireNonNull(value, "monitorExtendInfo is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProtocolType() {
        return software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtocolType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "protocolType", java.util.Objects.requireNonNull(value, "protocolType is required"));
    }

    /**
     */
    public void setProtocolType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protocolType", java.util.Objects.requireNonNull(value, "protocolType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTimeout() {
        return software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "timeout", java.util.Objects.requireNonNull(value, "timeout is required"));
    }

    /**
     */
    public void setTimeout(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "timeout", java.util.Objects.requireNonNull(value, "timeout is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RosMonitorConfig.IspCityNodeProperty")
    @software.amazon.jsii.Jsii.Proxy(IspCityNodeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IspCityNodeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCityCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIspCode() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IspCityNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IspCityNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IspCityNodeProperty> {
            java.lang.Object cityCode;
            java.lang.Object ispCode;

            /**
             * Sets the value of {@link IspCityNodeProperty#getCityCode}
             * @param cityCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cityCode(java.lang.String cityCode) {
                this.cityCode = cityCode;
                return this;
            }

            /**
             * Sets the value of {@link IspCityNodeProperty#getCityCode}
             * @param cityCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cityCode(com.aliyun.ros.cdk.core.IResolvable cityCode) {
                this.cityCode = cityCode;
                return this;
            }

            /**
             * Sets the value of {@link IspCityNodeProperty#getIspCode}
             * @param ispCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ispCode(java.lang.String ispCode) {
                this.ispCode = ispCode;
                return this;
            }

            /**
             * Sets the value of {@link IspCityNodeProperty#getIspCode}
             * @param ispCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ispCode(com.aliyun.ros.cdk.core.IResolvable ispCode) {
                this.ispCode = ispCode;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IspCityNodeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IspCityNodeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IspCityNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IspCityNodeProperty {
            private final java.lang.Object cityCode;
            private final java.lang.Object ispCode;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cityCode = software.amazon.jsii.Kernel.get(this, "cityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ispCode = software.amazon.jsii.Kernel.get(this, "ispCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cityCode = builder.cityCode;
                this.ispCode = builder.ispCode;
            }

            @Override
            public final java.lang.Object getCityCode() {
                return this.cityCode;
            }

            @Override
            public final java.lang.Object getIspCode() {
                return this.ispCode;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCityCode() != null) {
                    data.set("cityCode", om.valueToTree(this.getCityCode()));
                }
                if (this.getIspCode() != null) {
                    data.set("ispCode", om.valueToTree(this.getIspCode()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.RosMonitorConfig.IspCityNodeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IspCityNodeProperty.Jsii$Proxy that = (IspCityNodeProperty.Jsii$Proxy) o;

                if (this.cityCode != null ? !this.cityCode.equals(that.cityCode) : that.cityCode != null) return false;
                return this.ispCode != null ? this.ispCode.equals(that.ispCode) : that.ispCode == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cityCode != null ? this.cityCode.hashCode() : 0;
                result = 31 * result + (this.ispCode != null ? this.ispCode.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.RosMonitorConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.RosMonitorConfig> {
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
        private final com.aliyun.ros.cdk.dns.RosMonitorConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.RosMonitorConfigProps.Builder();
        }

        /**
         * @return {@code this}
         * @param addrPoolId This parameter is required.
         */
        public Builder addrPoolId(final java.lang.String addrPoolId) {
            this.props.addrPoolId(addrPoolId);
            return this;
        }
        /**
         * @return {@code this}
         * @param addrPoolId This parameter is required.
         */
        public Builder addrPoolId(final com.aliyun.ros.cdk.core.IResolvable addrPoolId) {
            this.props.addrPoolId(addrPoolId);
            return this;
        }

        /**
         * @return {@code this}
         * @param evaluationCount This parameter is required.
         */
        public Builder evaluationCount(final java.lang.Number evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param evaluationCount This parameter is required.
         */
        public Builder evaluationCount(final com.aliyun.ros.cdk.core.IResolvable evaluationCount) {
            this.props.evaluationCount(evaluationCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param interval This parameter is required.
         */
        public Builder interval(final java.lang.Number interval) {
            this.props.interval(interval);
            return this;
        }
        /**
         * @return {@code this}
         * @param interval This parameter is required.
         */
        public Builder interval(final com.aliyun.ros.cdk.core.IResolvable interval) {
            this.props.interval(interval);
            return this;
        }

        /**
         * @return {@code this}
         * @param ispCityNode This parameter is required.
         */
        public Builder ispCityNode(final com.aliyun.ros.cdk.core.IResolvable ispCityNode) {
            this.props.ispCityNode(ispCityNode);
            return this;
        }
        /**
         * @return {@code this}
         * @param ispCityNode This parameter is required.
         */
        public Builder ispCityNode(final java.util.List<? extends java.lang.Object> ispCityNode) {
            this.props.ispCityNode(ispCityNode);
            return this;
        }

        /**
         * @return {@code this}
         * @param monitorExtendInfo This parameter is required.
         */
        public Builder monitorExtendInfo(final com.aliyun.ros.cdk.core.IResolvable monitorExtendInfo) {
            this.props.monitorExtendInfo(monitorExtendInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param monitorExtendInfo This parameter is required.
         */
        public Builder monitorExtendInfo(final java.util.Map<java.lang.String, ? extends java.lang.Object> monitorExtendInfo) {
            this.props.monitorExtendInfo(monitorExtendInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param protocolType This parameter is required.
         */
        public Builder protocolType(final java.lang.String protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }
        /**
         * @return {@code this}
         * @param protocolType This parameter is required.
         */
        public Builder protocolType(final com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.RosMonitorConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.RosMonitorConfig build() {
            return new com.aliyun.ros.cdk.dns.RosMonitorConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
