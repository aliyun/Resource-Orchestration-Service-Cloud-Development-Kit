package com.aliyun.ros.cdk.ga;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::GA::BasicEndpoint</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:10.211Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosBasicEndpoint")
public class RosBasicEndpoint extends com.aliyun.ros.cdk.core.RosResource {

    protected RosBasicEndpoint(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosBasicEndpoint(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ga.RosBasicEndpoint.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosBasicEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.RosBasicEndpointProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId() {
        return software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEndpointAddress() {
        return software.amazon.jsii.Kernel.get(this, "endpointAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointAddress(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointAddress", java.util.Objects.requireNonNull(value, "endpointAddress is required"));
    }

    /**
     */
    public void setEndpointAddress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointAddress", java.util.Objects.requireNonNull(value, "endpointAddress is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEndpointGroupId() {
        return software.amazon.jsii.Kernel.get(this, "endpointGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointGroupId", java.util.Objects.requireNonNull(value, "endpointGroupId is required"));
    }

    /**
     */
    public void setEndpointGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointGroupId", java.util.Objects.requireNonNull(value, "endpointGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointSubAddress() {
        return software.amazon.jsii.Kernel.get(this, "endpointSubAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointSubAddress(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointSubAddress", value);
    }

    /**
     */
    public void setEndpointSubAddress(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointSubAddress", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointSubAddressType() {
        return software.amazon.jsii.Kernel.get(this, "endpointSubAddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointSubAddressType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointSubAddressType", value);
    }

    /**
     */
    public void setEndpointSubAddressType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointSubAddressType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointType() {
        return software.amazon.jsii.Kernel.get(this, "endpointType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointType", value);
    }

    /**
     */
    public void setEndpointType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointZoneId() {
        return software.amazon.jsii.Kernel.get(this, "endpointZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointZoneId", value);
    }

    /**
     */
    public void setEndpointZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointZoneId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.RosBasicEndpoint}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.RosBasicEndpoint> {
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
        private final com.aliyun.ros.cdk.ga.RosBasicEndpointProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.RosBasicEndpointProps.Builder();
        }

        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointAddress This parameter is required.
         */
        public Builder endpointAddress(final java.lang.String endpointAddress) {
            this.props.endpointAddress(endpointAddress);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointAddress This parameter is required.
         */
        public Builder endpointAddress(final com.aliyun.ros.cdk.core.IResolvable endpointAddress) {
            this.props.endpointAddress(endpointAddress);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointGroupId This parameter is required.
         */
        public Builder endpointGroupId(final java.lang.String endpointGroupId) {
            this.props.endpointGroupId(endpointGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointGroupId This parameter is required.
         */
        public Builder endpointGroupId(final com.aliyun.ros.cdk.core.IResolvable endpointGroupId) {
            this.props.endpointGroupId(endpointGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointSubAddress This parameter is required.
         */
        public Builder endpointSubAddress(final java.lang.String endpointSubAddress) {
            this.props.endpointSubAddress(endpointSubAddress);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointSubAddress This parameter is required.
         */
        public Builder endpointSubAddress(final com.aliyun.ros.cdk.core.IResolvable endpointSubAddress) {
            this.props.endpointSubAddress(endpointSubAddress);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointSubAddressType This parameter is required.
         */
        public Builder endpointSubAddressType(final java.lang.String endpointSubAddressType) {
            this.props.endpointSubAddressType(endpointSubAddressType);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointSubAddressType This parameter is required.
         */
        public Builder endpointSubAddressType(final com.aliyun.ros.cdk.core.IResolvable endpointSubAddressType) {
            this.props.endpointSubAddressType(endpointSubAddressType);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointType This parameter is required.
         */
        public Builder endpointType(final java.lang.String endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointType This parameter is required.
         */
        public Builder endpointType(final com.aliyun.ros.cdk.core.IResolvable endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointZoneId This parameter is required.
         */
        public Builder endpointZoneId(final java.lang.String endpointZoneId) {
            this.props.endpointZoneId(endpointZoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointZoneId This parameter is required.
         */
        public Builder endpointZoneId(final com.aliyun.ros.cdk.core.IResolvable endpointZoneId) {
            this.props.endpointZoneId(endpointZoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.RosBasicEndpoint}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.RosBasicEndpoint build() {
            return new com.aliyun.ros.cdk.ga.RosBasicEndpoint(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
