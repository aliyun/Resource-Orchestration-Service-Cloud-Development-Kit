package com.aliyun.ros.cdk.vpc.datasource;

/**
 * This class is a base encapsulation around the ROS resource type <code>DATASOURCE::VPC::RouteEntries</code>, which is used to query routes.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:25.094Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosRouteEntries")
public class RosRouteEntries extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRouteEntries(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRouteEntries(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.datasource.RosRouteEntries.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRouteEntries(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.RosRouteEntriesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteEntries() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteEntries", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteEntryIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteEntryIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationCidrBlock(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationCidrBlock", value);
    }

    /**
     */
    public void setDestinationCidrBlock(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationCidrBlock", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpVersion() {
        return software.amazon.jsii.Kernel.get(this, "ipVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ipVersion", value);
    }

    /**
     */
    public void setIpVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipVersion", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRefreshOptions(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "refreshOptions", value);
    }

    /**
     */
    public void setRefreshOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "refreshOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRouteEntryId() {
        return software.amazon.jsii.Kernel.get(this, "routeEntryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteEntryId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routeEntryId", value);
    }

    /**
     */
    public void setRouteEntryId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeEntryId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRouteEntryName() {
        return software.amazon.jsii.Kernel.get(this, "routeEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteEntryName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routeEntryName", value);
    }

    /**
     */
    public void setRouteEntryName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeEntryName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRouteEntryType() {
        return software.amazon.jsii.Kernel.get(this, "routeEntryType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteEntryType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routeEntryType", value);
    }

    /**
     */
    public void setRouteEntryType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeEntryType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.RosRouteEntries}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.RosRouteEntries> {
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
        private final com.aliyun.ros.cdk.vpc.datasource.RosRouteEntriesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.datasource.RosRouteEntriesProps.Builder();
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
         * @param ipVersion This parameter is required.
         */
        public Builder ipVersion(final java.lang.String ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipVersion This parameter is required.
         */
        public Builder ipVersion(final com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.props.ipVersion(ipVersion);
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
         * @return {@code this}
         * @param refreshOptions This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param refreshOptions This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeEntryId This parameter is required.
         */
        public Builder routeEntryId(final java.lang.String routeEntryId) {
            this.props.routeEntryId(routeEntryId);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeEntryId This parameter is required.
         */
        public Builder routeEntryId(final com.aliyun.ros.cdk.core.IResolvable routeEntryId) {
            this.props.routeEntryId(routeEntryId);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeEntryName This parameter is required.
         */
        public Builder routeEntryName(final java.lang.String routeEntryName) {
            this.props.routeEntryName(routeEntryName);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeEntryName This parameter is required.
         */
        public Builder routeEntryName(final com.aliyun.ros.cdk.core.IResolvable routeEntryName) {
            this.props.routeEntryName(routeEntryName);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeEntryType This parameter is required.
         */
        public Builder routeEntryType(final java.lang.String routeEntryType) {
            this.props.routeEntryType(routeEntryType);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeEntryType This parameter is required.
         */
        public Builder routeEntryType(final com.aliyun.ros.cdk.core.IResolvable routeEntryType) {
            this.props.routeEntryType(routeEntryType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.RosRouteEntries}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.RosRouteEntries build() {
            return new com.aliyun.ros.cdk.vpc.datasource.RosRouteEntries(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
