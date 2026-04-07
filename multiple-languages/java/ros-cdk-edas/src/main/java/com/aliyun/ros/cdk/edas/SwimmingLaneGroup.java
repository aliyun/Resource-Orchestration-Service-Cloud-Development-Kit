package com.aliyun.ros.cdk.edas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EDAS::SwimmingLaneGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:25.512Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.SwimmingLaneGroup")
public class SwimmingLaneGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.edas.ISwimmingLaneGroup {

    protected SwimmingLaneGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SwimmingLaneGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SwimmingLaneGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.SwimmingLaneGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SwimmingLaneGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.SwimmingLaneGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GroupId: The ID of the swimming lane group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.SwimmingLaneGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edas.SwimmingLaneGroupProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.edas.SwimmingLaneGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edas.SwimmingLaneGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.edas.SwimmingLaneGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.edas.SwimmingLaneGroupProps.Builder();
        }

        /**
         * Property appIds: The list of application IDs involved in the swimming lane group.
         * <p>
         * @return {@code this}
         * @param appIds Property appIds: The list of application IDs involved in the swimming lane group. This parameter is required.
         */
        public Builder appIds(final com.aliyun.ros.cdk.core.IResolvable appIds) {
            this.props.appIds(appIds);
            return this;
        }
        /**
         * Property appIds: The list of application IDs involved in the swimming lane group.
         * <p>
         * @return {@code this}
         * @param appIds Property appIds: The list of application IDs involved in the swimming lane group. This parameter is required.
         */
        public Builder appIds(final java.util.List<? extends java.lang.Object> appIds) {
            this.props.appIds(appIds);
            return this;
        }

        /**
         * Property entryApp: The entry application.
         * <p>
         * Format: EDAS:{application ID}.
         * <p>
         * @return {@code this}
         * @param entryApp Property entryApp: The entry application. This parameter is required.
         */
        public Builder entryApp(final java.lang.String entryApp) {
            this.props.entryApp(entryApp);
            return this;
        }
        /**
         * Property entryApp: The entry application.
         * <p>
         * Format: EDAS:{application ID}.
         * <p>
         * @return {@code this}
         * @param entryApp Property entryApp: The entry application. This parameter is required.
         */
        public Builder entryApp(final com.aliyun.ros.cdk.core.IResolvable entryApp) {
            this.props.entryApp(entryApp);
            return this;
        }

        /**
         * Property logicalRegionId: The RegionId of the custom namespace.
         * <p>
         * Format: <code>physical Region:custom namespace identifier</code>.
         * <p>
         * @return {@code this}
         * @param logicalRegionId Property logicalRegionId: The RegionId of the custom namespace. This parameter is required.
         */
        public Builder logicalRegionId(final java.lang.String logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }
        /**
         * Property logicalRegionId: The RegionId of the custom namespace.
         * <p>
         * Format: <code>physical Region:custom namespace identifier</code>.
         * <p>
         * @return {@code this}
         * @param logicalRegionId Property logicalRegionId: The RegionId of the custom namespace. This parameter is required.
         */
        public Builder logicalRegionId(final com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }

        /**
         * Property name: The name of the swimming lane group.
         * <p>
         * The value can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the swimming lane group. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the swimming lane group.
         * <p>
         * The value can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the swimming lane group. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.edas.SwimmingLaneGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.edas.SwimmingLaneGroup build() {
            return new com.aliyun.ros.cdk.edas.SwimmingLaneGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
