package com.aliyun.ros.cdk.vpc;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::VPC::TrafficMirrorSession</code>, which is used to create a traffic image session.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:57.982Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficMirrorSession")
public class RosTrafficMirrorSession extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTrafficMirrorSession(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTrafficMirrorSession(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosTrafficMirrorSession.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTrafficMirrorSession(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrafficMirrorSessionId() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficMirrorSessionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPriority() {
        return software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public void setPriority(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priority", java.util.Objects.requireNonNull(value, "priority is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorFilterId() {
        return software.amazon.jsii.Kernel.get(this, "trafficMirrorFilterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficMirrorFilterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorFilterId", java.util.Objects.requireNonNull(value, "trafficMirrorFilterId is required"));
    }

    /**
     */
    public void setTrafficMirrorFilterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorFilterId", java.util.Objects.requireNonNull(value, "trafficMirrorFilterId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorSourceIds() {
        return software.amazon.jsii.Kernel.get(this, "trafficMirrorSourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficMirrorSourceIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorSourceIds", java.util.Objects.requireNonNull(value, "trafficMirrorSourceIds is required"));
    }

    /**
     */
    public void setTrafficMirrorSourceIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "trafficMirrorSourceIds", java.util.Objects.requireNonNull(value, "trafficMirrorSourceIds is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorTargetId() {
        return software.amazon.jsii.Kernel.get(this, "trafficMirrorTargetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficMirrorTargetId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorTargetId", java.util.Objects.requireNonNull(value, "trafficMirrorTargetId is required"));
    }

    /**
     */
    public void setTrafficMirrorTargetId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorTargetId", java.util.Objects.requireNonNull(value, "trafficMirrorTargetId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorTargetType() {
        return software.amazon.jsii.Kernel.get(this, "trafficMirrorTargetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficMirrorTargetType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorTargetType", java.util.Objects.requireNonNull(value, "trafficMirrorTargetType is required"));
    }

    /**
     */
    public void setTrafficMirrorTargetType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorTargetType", java.util.Objects.requireNonNull(value, "trafficMirrorTargetType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnabled() {
        return software.amazon.jsii.Kernel.get(this, "enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enabled", value);
    }

    /**
     */
    public void setEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPacketLength() {
        return software.amazon.jsii.Kernel.get(this, "packetLength", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPacketLength(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "packetLength", value);
    }

    /**
     */
    public void setPacketLength(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "packetLength", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTag(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tag", value);
    }

    /**
     */
    public void setTag(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.RosTag)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.core.RosTag; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "tag", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrafficMirrorSessionDescription() {
        return software.amazon.jsii.Kernel.get(this, "trafficMirrorSessionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficMirrorSessionDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorSessionDescription", value);
    }

    /**
     */
    public void setTrafficMirrorSessionDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorSessionDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTrafficMirrorSessionName() {
        return software.amazon.jsii.Kernel.get(this, "trafficMirrorSessionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficMirrorSessionName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorSessionName", value);
    }

    /**
     */
    public void setTrafficMirrorSessionName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficMirrorSessionName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVirtualNetworkId() {
        return software.amazon.jsii.Kernel.get(this, "virtualNetworkId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVirtualNetworkId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "virtualNetworkId", value);
    }

    /**
     */
    public void setVirtualNetworkId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "virtualNetworkId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficMirrorSession.TagProperty")
    @software.amazon.jsii.Jsii.Proxy(TagProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagProperty#getValue}
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
             * @return a new instance of {@link TagProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagProperty {
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
                this.key = builder.key;
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

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosTrafficMirrorSession.TagProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagProperty.Jsii$Proxy that = (TagProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosTrafficMirrorSession}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosTrafficMirrorSession> {
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
        private final com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosTrafficMirrorSessionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * @return {@code this}
         * @param priority This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficMirrorFilterId This parameter is required.
         */
        public Builder trafficMirrorFilterId(final java.lang.String trafficMirrorFilterId) {
            this.props.trafficMirrorFilterId(trafficMirrorFilterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficMirrorFilterId This parameter is required.
         */
        public Builder trafficMirrorFilterId(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorFilterId) {
            this.props.trafficMirrorFilterId(trafficMirrorFilterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficMirrorSourceIds This parameter is required.
         */
        public Builder trafficMirrorSourceIds(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorSourceIds) {
            this.props.trafficMirrorSourceIds(trafficMirrorSourceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficMirrorSourceIds This parameter is required.
         */
        public Builder trafficMirrorSourceIds(final java.util.List<? extends java.lang.Object> trafficMirrorSourceIds) {
            this.props.trafficMirrorSourceIds(trafficMirrorSourceIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficMirrorTargetId This parameter is required.
         */
        public Builder trafficMirrorTargetId(final java.lang.String trafficMirrorTargetId) {
            this.props.trafficMirrorTargetId(trafficMirrorTargetId);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficMirrorTargetId This parameter is required.
         */
        public Builder trafficMirrorTargetId(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorTargetId) {
            this.props.trafficMirrorTargetId(trafficMirrorTargetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficMirrorTargetType This parameter is required.
         */
        public Builder trafficMirrorTargetType(final java.lang.String trafficMirrorTargetType) {
            this.props.trafficMirrorTargetType(trafficMirrorTargetType);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficMirrorTargetType This parameter is required.
         */
        public Builder trafficMirrorTargetType(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorTargetType) {
            this.props.trafficMirrorTargetType(trafficMirrorTargetType);
            return this;
        }

        /**
         * @return {@code this}
         * @param enabled This parameter is required.
         */
        public Builder enabled(final java.lang.Boolean enabled) {
            this.props.enabled(enabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param enabled This parameter is required.
         */
        public Builder enabled(final com.aliyun.ros.cdk.core.IResolvable enabled) {
            this.props.enabled(enabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param packetLength This parameter is required.
         */
        public Builder packetLength(final java.lang.Number packetLength) {
            this.props.packetLength(packetLength);
            return this;
        }
        /**
         * @return {@code this}
         * @param packetLength This parameter is required.
         */
        public Builder packetLength(final com.aliyun.ros.cdk.core.IResolvable packetLength) {
            this.props.packetLength(packetLength);
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
         * @param tag This parameter is required.
         */
        public Builder tag(final com.aliyun.ros.cdk.core.IResolvable tag) {
            this.props.tag(tag);
            return this;
        }
        /**
         * @return {@code this}
         * @param tag This parameter is required.
         */
        public Builder tag(final java.util.List<? extends java.lang.Object> tag) {
            this.props.tag(tag);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficMirrorSessionDescription This parameter is required.
         */
        public Builder trafficMirrorSessionDescription(final java.lang.String trafficMirrorSessionDescription) {
            this.props.trafficMirrorSessionDescription(trafficMirrorSessionDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficMirrorSessionDescription This parameter is required.
         */
        public Builder trafficMirrorSessionDescription(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorSessionDescription) {
            this.props.trafficMirrorSessionDescription(trafficMirrorSessionDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficMirrorSessionName This parameter is required.
         */
        public Builder trafficMirrorSessionName(final java.lang.String trafficMirrorSessionName) {
            this.props.trafficMirrorSessionName(trafficMirrorSessionName);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficMirrorSessionName This parameter is required.
         */
        public Builder trafficMirrorSessionName(final com.aliyun.ros.cdk.core.IResolvable trafficMirrorSessionName) {
            this.props.trafficMirrorSessionName(trafficMirrorSessionName);
            return this;
        }

        /**
         * @return {@code this}
         * @param virtualNetworkId This parameter is required.
         */
        public Builder virtualNetworkId(final java.lang.Number virtualNetworkId) {
            this.props.virtualNetworkId(virtualNetworkId);
            return this;
        }
        /**
         * @return {@code this}
         * @param virtualNetworkId This parameter is required.
         */
        public Builder virtualNetworkId(final com.aliyun.ros.cdk.core.IResolvable virtualNetworkId) {
            this.props.virtualNetworkId(virtualNetworkId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosTrafficMirrorSession}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosTrafficMirrorSession build() {
            return new com.aliyun.ros.cdk.vpc.RosTrafficMirrorSession(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
