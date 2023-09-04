package com.aliyun.ros.cdk.ebs;

/**
 * A ROS template type:  <code>ALIYUN::EBS::DiskReplicaPair</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:36.636Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.RosDiskReplicaPair")
public class RosDiskReplicaPair extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDiskReplicaPair(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDiskReplicaPair(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::EBS::DiskReplicaPair</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDiskReplicaPair(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.RosDiskReplicaPairProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationDiskId() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationDiskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskId() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskReplicaPairName() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskReplicaPairName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReplicaPairId() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicaPairId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRpo() {
        return software.amazon.jsii.Kernel.get(this, "attrRpo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestinationDiskId() {
        return software.amazon.jsii.Kernel.get(this, "destinationDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationDiskId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationDiskId", java.util.Objects.requireNonNull(value, "destinationDiskId is required"));
    }

    /**
     */
    public void setDestinationDiskId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationDiskId", java.util.Objects.requireNonNull(value, "destinationDiskId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestinationRegionId() {
        return software.amazon.jsii.Kernel.get(this, "destinationRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationRegionId", java.util.Objects.requireNonNull(value, "destinationRegionId is required"));
    }

    /**
     */
    public void setDestinationRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationRegionId", java.util.Objects.requireNonNull(value, "destinationRegionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestinationZoneId() {
        return software.amazon.jsii.Kernel.get(this, "destinationZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationZoneId", java.util.Objects.requireNonNull(value, "destinationZoneId is required"));
    }

    /**
     */
    public void setDestinationZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationZoneId", java.util.Objects.requireNonNull(value, "destinationZoneId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDiskId() {
        return software.amazon.jsii.Kernel.get(this, "diskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "diskId", java.util.Objects.requireNonNull(value, "diskId is required"));
    }

    /**
     */
    public void setDiskId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskId", java.util.Objects.requireNonNull(value, "diskId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceZoneId() {
        return software.amazon.jsii.Kernel.get(this, "sourceZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceZoneId", java.util.Objects.requireNonNull(value, "sourceZoneId is required"));
    }

    /**
     */
    public void setSourceZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceZoneId", java.util.Objects.requireNonNull(value, "sourceZoneId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "bandwidth", value);
    }

    /**
     */
    public void setBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bandwidth", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiskReplicaPairName() {
        return software.amazon.jsii.Kernel.get(this, "diskReplicaPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskReplicaPairName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "diskReplicaPairName", value);
    }

    /**
     */
    public void setDiskReplicaPairName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskReplicaPairName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
    }

    /**
     */
    public void setPaymentType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "paymentType", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getRpo() {
        return software.amazon.jsii.Kernel.get(this, "rpo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRpo(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "rpo", value);
    }

    /**
     */
    public void setRpo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rpo", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.RosDiskReplicaPair.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ebs.RosDiskReplicaPair.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ebs.RosDiskReplicaPair}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ebs.RosDiskReplicaPair> {
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
        private final com.aliyun.ros.cdk.ebs.RosDiskReplicaPairProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ebs.RosDiskReplicaPairProps.Builder();
        }

        /**
         * @return {@code this}
         * @param destinationDiskId This parameter is required.
         */
        public Builder destinationDiskId(final java.lang.String destinationDiskId) {
            this.props.destinationDiskId(destinationDiskId);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationDiskId This parameter is required.
         */
        public Builder destinationDiskId(final com.aliyun.ros.cdk.core.IResolvable destinationDiskId) {
            this.props.destinationDiskId(destinationDiskId);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationRegionId This parameter is required.
         */
        public Builder destinationRegionId(final java.lang.String destinationRegionId) {
            this.props.destinationRegionId(destinationRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationRegionId This parameter is required.
         */
        public Builder destinationRegionId(final com.aliyun.ros.cdk.core.IResolvable destinationRegionId) {
            this.props.destinationRegionId(destinationRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationZoneId This parameter is required.
         */
        public Builder destinationZoneId(final java.lang.String destinationZoneId) {
            this.props.destinationZoneId(destinationZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationZoneId This parameter is required.
         */
        public Builder destinationZoneId(final com.aliyun.ros.cdk.core.IResolvable destinationZoneId) {
            this.props.destinationZoneId(destinationZoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskId This parameter is required.
         */
        public Builder diskId(final java.lang.String diskId) {
            this.props.diskId(diskId);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskId This parameter is required.
         */
        public Builder diskId(final com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.props.diskId(diskId);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceZoneId This parameter is required.
         */
        public Builder sourceZoneId(final java.lang.String sourceZoneId) {
            this.props.sourceZoneId(sourceZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceZoneId This parameter is required.
         */
        public Builder sourceZoneId(final com.aliyun.ros.cdk.core.IResolvable sourceZoneId) {
            this.props.sourceZoneId(sourceZoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param bandwidth This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param bandwidth This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
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
         * @param diskReplicaPairName This parameter is required.
         */
        public Builder diskReplicaPairName(final java.lang.String diskReplicaPairName) {
            this.props.diskReplicaPairName(diskReplicaPairName);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskReplicaPairName This parameter is required.
         */
        public Builder diskReplicaPairName(final com.aliyun.ros.cdk.core.IResolvable diskReplicaPairName) {
            this.props.diskReplicaPairName(diskReplicaPairName);
            return this;
        }

        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * @return {@code this}
         * @param paymentType This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
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
         * @param rpo This parameter is required.
         */
        public Builder rpo(final java.lang.Number rpo) {
            this.props.rpo(rpo);
            return this;
        }
        /**
         * @return {@code this}
         * @param rpo This parameter is required.
         */
        public Builder rpo(final com.aliyun.ros.cdk.core.IResolvable rpo) {
            this.props.rpo(rpo);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ebs.RosDiskReplicaPair}.
         */
        @Override
        public com.aliyun.ros.cdk.ebs.RosDiskReplicaPair build() {
            return new com.aliyun.ros.cdk.ebs.RosDiskReplicaPair(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
