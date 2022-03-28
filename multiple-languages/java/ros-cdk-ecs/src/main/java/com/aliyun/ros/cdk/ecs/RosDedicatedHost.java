package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  `ALIYUN::ECS::DedicatedHost`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:02.334Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosDedicatedHost")
public class RosDedicatedHost extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDedicatedHost(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDedicatedHost(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosDedicatedHost.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ECS::DedicatedHost`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDedicatedHost(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosDedicatedHostProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDedicatedHostIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDedicatedHostType() {
        return software.amazon.jsii.Kernel.get(this, "dedicatedHostType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDedicatedHostType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostType", java.util.Objects.requireNonNull(value, "dedicatedHostType is required"));
    }

    /**
     */
    public void setDedicatedHostType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostType", java.util.Objects.requireNonNull(value, "dedicatedHostType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getActionOnMaintenance() {
        return software.amazon.jsii.Kernel.get(this, "actionOnMaintenance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setActionOnMaintenance(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "actionOnMaintenance", value);
    }

    /**
     */
    public void setActionOnMaintenance(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "actionOnMaintenance", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoPlacement() {
        return software.amazon.jsii.Kernel.get(this, "autoPlacement", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoPlacement(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoPlacement", value);
    }

    /**
     */
    public void setAutoPlacement(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoPlacement", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoReleaseTime() {
        return software.amazon.jsii.Kernel.get(this, "autoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoReleaseTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoReleaseTime", value);
    }

    /**
     */
    public void setAutoReleaseTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoReleaseTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenewPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriod", value);
    }

    /**
     */
    public void setAutoRenewPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", value);
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostName() {
        return software.amazon.jsii.Kernel.get(this, "dedicatedHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDedicatedHostName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostName", value);
    }

    /**
     */
    public void setDedicatedHostName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAttributesSlbUdpTimeout() {
        return software.amazon.jsii.Kernel.get(this, "networkAttributesSlbUdpTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkAttributesSlbUdpTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "networkAttributesSlbUdpTimeout", value);
    }

    /**
     */
    public void setNetworkAttributesSlbUdpTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkAttributesSlbUdpTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNetworkAttributesUdpTimeout() {
        return software.amazon.jsii.Kernel.get(this, "networkAttributesUdpTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkAttributesUdpTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "networkAttributesUdpTimeout", value);
    }

    /**
     */
    public void setNetworkAttributesUdpTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkAttributesUdpTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getQuantity() {
        return software.amazon.jsii.Kernel.get(this, "quantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQuantity(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "quantity", value);
    }

    /**
     */
    public void setQuantity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "quantity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosDedicatedHost.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosDedicatedHost.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosDedicatedHost}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosDedicatedHost> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.RosDedicatedHostProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosDedicatedHostProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dedicatedHostType This parameter is required.
         */
        public Builder dedicatedHostType(final java.lang.String dedicatedHostType) {
            this.props.dedicatedHostType(dedicatedHostType);
            return this;
        }
        /**
         * @return {@code this}
         * @param dedicatedHostType This parameter is required.
         */
        public Builder dedicatedHostType(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostType) {
            this.props.dedicatedHostType(dedicatedHostType);
            return this;
        }

        /**
         * @return {@code this}
         * @param actionOnMaintenance This parameter is required.
         */
        public Builder actionOnMaintenance(final java.lang.String actionOnMaintenance) {
            this.props.actionOnMaintenance(actionOnMaintenance);
            return this;
        }
        /**
         * @return {@code this}
         * @param actionOnMaintenance This parameter is required.
         */
        public Builder actionOnMaintenance(final com.aliyun.ros.cdk.core.IResolvable actionOnMaintenance) {
            this.props.actionOnMaintenance(actionOnMaintenance);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoPlacement This parameter is required.
         */
        public Builder autoPlacement(final java.lang.String autoPlacement) {
            this.props.autoPlacement(autoPlacement);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoPlacement This parameter is required.
         */
        public Builder autoPlacement(final com.aliyun.ros.cdk.core.IResolvable autoPlacement) {
            this.props.autoPlacement(autoPlacement);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoReleaseTime This parameter is required.
         */
        public Builder autoReleaseTime(final java.lang.String autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoReleaseTime This parameter is required.
         */
        public Builder autoReleaseTime(final com.aliyun.ros.cdk.core.IResolvable autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.String autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param dedicatedHostName This parameter is required.
         */
        public Builder dedicatedHostName(final java.lang.String dedicatedHostName) {
            this.props.dedicatedHostName(dedicatedHostName);
            return this;
        }
        /**
         * @return {@code this}
         * @param dedicatedHostName This parameter is required.
         */
        public Builder dedicatedHostName(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostName) {
            this.props.dedicatedHostName(dedicatedHostName);
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
         * @param networkAttributesSlbUdpTimeout This parameter is required.
         */
        public Builder networkAttributesSlbUdpTimeout(final java.lang.Number networkAttributesSlbUdpTimeout) {
            this.props.networkAttributesSlbUdpTimeout(networkAttributesSlbUdpTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkAttributesSlbUdpTimeout This parameter is required.
         */
        public Builder networkAttributesSlbUdpTimeout(final com.aliyun.ros.cdk.core.IResolvable networkAttributesSlbUdpTimeout) {
            this.props.networkAttributesSlbUdpTimeout(networkAttributesSlbUdpTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkAttributesUdpTimeout This parameter is required.
         */
        public Builder networkAttributesUdpTimeout(final java.lang.Number networkAttributesUdpTimeout) {
            this.props.networkAttributesUdpTimeout(networkAttributesUdpTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkAttributesUdpTimeout This parameter is required.
         */
        public Builder networkAttributesUdpTimeout(final com.aliyun.ros.cdk.core.IResolvable networkAttributesUdpTimeout) {
            this.props.networkAttributesUdpTimeout(networkAttributesUdpTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param quantity This parameter is required.
         */
        public Builder quantity(final java.lang.Number quantity) {
            this.props.quantity(quantity);
            return this;
        }
        /**
         * @return {@code this}
         * @param quantity This parameter is required.
         */
        public Builder quantity(final com.aliyun.ros.cdk.core.IResolvable quantity) {
            this.props.quantity(quantity);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosDedicatedHost.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosDedicatedHost}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosDedicatedHost build() {
            return new com.aliyun.ros.cdk.ecs.RosDedicatedHost(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
