package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  <code>ALIYUN::ECS::Route</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:01.551Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosRoute")
public class RosRoute extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRoute(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRoute(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosRoute.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::ECS::Route</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRoute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosRouteProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestinationCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationCidrBlock(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationCidrBlock", java.util.Objects.requireNonNull(value, "destinationCidrBlock is required"));
    }

    /**
     */
    public void setDestinationCidrBlock(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationCidrBlock", java.util.Objects.requireNonNull(value, "destinationCidrBlock is required"));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteTableId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routeTableId", java.util.Objects.requireNonNull(value, "routeTableId is required"));
    }

    /**
     */
    public void setRouteTableId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeTableId", java.util.Objects.requireNonNull(value, "routeTableId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNextHopId() {
        return software.amazon.jsii.Kernel.get(this, "nextHopId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNextHopId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nextHopId", value);
    }

    /**
     */
    public void setNextHopId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nextHopId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNextHopList() {
        return software.amazon.jsii.Kernel.get(this, "nextHopList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNextHopList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nextHopList", value);
    }

    /**
     */
    public void setNextHopList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ecs.RosRoute.NextHopListProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ecs.RosRoute.NextHopListProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "nextHopList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNextHopType() {
        return software.amazon.jsii.Kernel.get(this, "nextHopType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNextHopType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nextHopType", value);
    }

    /**
     */
    public void setNextHopType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nextHopType", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosRoute.NextHopListProperty")
    @software.amazon.jsii.Jsii.Proxy(NextHopListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NextHopListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getNextHopId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNextHopType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NextHopListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NextHopListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NextHopListProperty> {
            java.lang.Object nextHopId;
            java.lang.Object nextHopType;

            /**
             * Sets the value of {@link NextHopListProperty#getNextHopId}
             * @param nextHopId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nextHopId(java.lang.String nextHopId) {
                this.nextHopId = nextHopId;
                return this;
            }

            /**
             * Sets the value of {@link NextHopListProperty#getNextHopId}
             * @param nextHopId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nextHopId(com.aliyun.ros.cdk.core.IResolvable nextHopId) {
                this.nextHopId = nextHopId;
                return this;
            }

            /**
             * Sets the value of {@link NextHopListProperty#getNextHopType}
             * @param nextHopType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nextHopType(java.lang.String nextHopType) {
                this.nextHopType = nextHopType;
                return this;
            }

            /**
             * Sets the value of {@link NextHopListProperty#getNextHopType}
             * @param nextHopType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nextHopType(com.aliyun.ros.cdk.core.IResolvable nextHopType) {
                this.nextHopType = nextHopType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NextHopListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NextHopListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NextHopListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NextHopListProperty {
            private final java.lang.Object nextHopId;
            private final java.lang.Object nextHopType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.nextHopId = software.amazon.jsii.Kernel.get(this, "nextHopId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nextHopType = software.amazon.jsii.Kernel.get(this, "nextHopType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.nextHopId = java.util.Objects.requireNonNull(builder.nextHopId, "nextHopId is required");
                this.nextHopType = builder.nextHopType;
            }

            @Override
            public final java.lang.Object getNextHopId() {
                return this.nextHopId;
            }

            @Override
            public final java.lang.Object getNextHopType() {
                return this.nextHopType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("nextHopId", om.valueToTree(this.getNextHopId()));
                if (this.getNextHopType() != null) {
                    data.set("nextHopType", om.valueToTree(this.getNextHopType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosRoute.NextHopListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NextHopListProperty.Jsii$Proxy that = (NextHopListProperty.Jsii$Proxy) o;

                if (!nextHopId.equals(that.nextHopId)) return false;
                return this.nextHopType != null ? this.nextHopType.equals(that.nextHopType) : that.nextHopType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.nextHopId.hashCode();
                result = 31 * result + (this.nextHopType != null ? this.nextHopType.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosRoute}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosRoute> {
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
        private final com.aliyun.ros.cdk.ecs.RosRouteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosRouteProps.Builder();
        }

        /**
         * @return {@code this}
         * @param destinationCidrBlock This parameter is required.
         */
        public Builder destinationCidrBlock(final java.lang.String destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationCidrBlock This parameter is required.
         */
        public Builder destinationCidrBlock(final com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeTableId This parameter is required.
         */
        public Builder routeTableId(final java.lang.String routeTableId) {
            this.props.routeTableId(routeTableId);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeTableId This parameter is required.
         */
        public Builder routeTableId(final com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.props.routeTableId(routeTableId);
            return this;
        }

        /**
         * @return {@code this}
         * @param nextHopId This parameter is required.
         */
        public Builder nextHopId(final java.lang.String nextHopId) {
            this.props.nextHopId(nextHopId);
            return this;
        }
        /**
         * @return {@code this}
         * @param nextHopId This parameter is required.
         */
        public Builder nextHopId(final com.aliyun.ros.cdk.core.IResolvable nextHopId) {
            this.props.nextHopId(nextHopId);
            return this;
        }

        /**
         * @return {@code this}
         * @param nextHopList This parameter is required.
         */
        public Builder nextHopList(final com.aliyun.ros.cdk.core.IResolvable nextHopList) {
            this.props.nextHopList(nextHopList);
            return this;
        }
        /**
         * @return {@code this}
         * @param nextHopList This parameter is required.
         */
        public Builder nextHopList(final java.util.List<? extends java.lang.Object> nextHopList) {
            this.props.nextHopList(nextHopList);
            return this;
        }

        /**
         * @return {@code this}
         * @param nextHopType This parameter is required.
         */
        public Builder nextHopType(final java.lang.String nextHopType) {
            this.props.nextHopType(nextHopType);
            return this;
        }
        /**
         * @return {@code this}
         * @param nextHopType This parameter is required.
         */
        public Builder nextHopType(final com.aliyun.ros.cdk.core.IResolvable nextHopType) {
            this.props.nextHopType(nextHopType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosRoute}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosRoute build() {
            return new com.aliyun.ros.cdk.ecs.RosRoute(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
