package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  `ALIYUN::ECS::Route`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:02.803Z")
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
     * Create a new `ALIYUN::ECS::Route`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
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
    public @org.jetbrains.annotations.NotNull java.lang.String getDestinationCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDestinationCidrBlock(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationCidrBlock", java.util.Objects.requireNonNull(value, "destinationCidrBlock is required"));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getRouteId() {
        return software.amazon.jsii.Kernel.get(this, "routeId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRouteId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routeId", java.util.Objects.requireNonNull(value, "routeId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "routeTableId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRouteTableId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routeTableId", java.util.Objects.requireNonNull(value, "routeTableId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getNextHopId() {
        return software.amazon.jsii.Kernel.get(this, "nextHopId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setNextHopId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
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
        software.amazon.jsii.Kernel.set(this, "nextHopList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getNextHopType() {
        return software.amazon.jsii.Kernel.get(this, "nextHopType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setNextHopType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
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
        @org.jetbrains.annotations.NotNull java.lang.String getNextHopId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getNextHopType() {
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
            private java.lang.String nextHopId;
            private java.lang.String nextHopType;

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
             * Builds the configured instance.
             * @return a new instance of {@link NextHopListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NextHopListProperty build() {
                return new Jsii$Proxy(nextHopId, nextHopType);
            }
        }

        /**
         * An implementation for {@link NextHopListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NextHopListProperty {
            private final java.lang.String nextHopId;
            private final java.lang.String nextHopType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.nextHopId = software.amazon.jsii.Kernel.get(this, "nextHopId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.nextHopType = software.amazon.jsii.Kernel.get(this, "nextHopType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String nextHopId, final java.lang.String nextHopType) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.nextHopId = java.util.Objects.requireNonNull(nextHopId, "nextHopId is required");
                this.nextHopType = nextHopType;
            }

            @Override
            public final java.lang.String getNextHopId() {
                return this.nextHopId;
            }

            @Override
            public final java.lang.String getNextHopType() {
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
         * @param routeId This parameter is required.
         */
        public Builder routeId(final java.lang.String routeId) {
            this.props.routeId(routeId);
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
         * @param nextHopId This parameter is required.
         */
        public Builder nextHopId(final java.lang.String nextHopId) {
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosRoute}.
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
