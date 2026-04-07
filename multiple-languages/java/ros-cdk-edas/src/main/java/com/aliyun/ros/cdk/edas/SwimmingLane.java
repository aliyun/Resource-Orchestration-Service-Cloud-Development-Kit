package com.aliyun.ros.cdk.edas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EDAS::SwimmingLane</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:25.511Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.SwimmingLane")
public class SwimmingLane extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.edas.ISwimmingLane {

    protected SwimmingLane(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SwimmingLane(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SwimmingLane(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.SwimmingLaneProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SwimmingLane(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.SwimmingLaneProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute LaneId: The ID of the swimming lane.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaneId() {
        return software.amazon.jsii.Kernel.get(this, "attrLaneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.SwimmingLaneProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.edas.SwimmingLaneProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.edas.SwimmingLane}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edas.SwimmingLane> {
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
        private final com.aliyun.ros.cdk.edas.SwimmingLaneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.edas.SwimmingLaneProps.Builder();
        }

        /**
         * Property entryRules: The entry rules of the swimming lane.
         * <p>
         * @return {@code this}
         * @param entryRules Property entryRules: The entry rules of the swimming lane. This parameter is required.
         */
        public Builder entryRules(final com.aliyun.ros.cdk.core.IResolvable entryRules) {
            this.props.entryRules(entryRules);
            return this;
        }
        /**
         * Property entryRules: The entry rules of the swimming lane.
         * <p>
         * @return {@code this}
         * @param entryRules Property entryRules: The entry rules of the swimming lane. This parameter is required.
         */
        public Builder entryRules(final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> entryRules) {
            this.props.entryRules(entryRules);
            return this;
        }

        /**
         * Property groupId: The group ID of the swimming lane.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The group ID of the swimming lane. This parameter is required.
         */
        public Builder groupId(final java.lang.Number groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The group ID of the swimming lane.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The group ID of the swimming lane. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property logicalRegionId: The RegionId of the logical region.
         * <p>
         * Format: <code>physicalRegion:customNamespaceIdentifier</code>.
         * <p>
         * @return {@code this}
         * @param logicalRegionId Property logicalRegionId: The RegionId of the logical region. This parameter is required.
         */
        public Builder logicalRegionId(final java.lang.String logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }
        /**
         * Property logicalRegionId: The RegionId of the logical region.
         * <p>
         * Format: <code>physicalRegion:customNamespaceIdentifier</code>.
         * <p>
         * @return {@code this}
         * @param logicalRegionId Property logicalRegionId: The RegionId of the logical region. This parameter is required.
         */
        public Builder logicalRegionId(final com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.props.logicalRegionId(logicalRegionId);
            return this;
        }

        /**
         * Property name: The name of the swimming lane.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the swimming lane. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the swimming lane.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the swimming lane. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property tag: The tag of the swimming lane.
         * <p>
         * @return {@code this}
         * @param tag Property tag: The tag of the swimming lane. This parameter is required.
         */
        public Builder tag(final java.lang.String tag) {
            this.props.tag(tag);
            return this;
        }
        /**
         * Property tag: The tag of the swimming lane.
         * <p>
         * @return {@code this}
         * @param tag Property tag: The tag of the swimming lane. This parameter is required.
         */
        public Builder tag(final com.aliyun.ros.cdk.core.IResolvable tag) {
            this.props.tag(tag);
            return this;
        }

        /**
         * Property appInfos: Application information involved in the swimming lane.
         * <p>
         * @return {@code this}
         * @param appInfos Property appInfos: Application information involved in the swimming lane. This parameter is required.
         */
        public Builder appInfos(final com.aliyun.ros.cdk.core.IResolvable appInfos) {
            this.props.appInfos(appInfos);
            return this;
        }
        /**
         * Property appInfos: Application information involved in the swimming lane.
         * <p>
         * @return {@code this}
         * @param appInfos Property appInfos: Application information involved in the swimming lane. This parameter is required.
         */
        public Builder appInfos(final java.util.List<? extends java.lang.Object> appInfos) {
            this.props.appInfos(appInfos);
            return this;
        }

        /**
         * Property enableRules: Whether to enable flow control rules.
         * <p>
         * @return {@code this}
         * @param enableRules Property enableRules: Whether to enable flow control rules. This parameter is required.
         */
        public Builder enableRules(final java.lang.Boolean enableRules) {
            this.props.enableRules(enableRules);
            return this;
        }
        /**
         * Property enableRules: Whether to enable flow control rules.
         * <p>
         * @return {@code this}
         * @param enableRules Property enableRules: Whether to enable flow control rules. This parameter is required.
         */
        public Builder enableRules(final com.aliyun.ros.cdk.core.IResolvable enableRules) {
            this.props.enableRules(enableRules);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.edas.SwimmingLane}.
         */
        @Override
        public com.aliyun.ros.cdk.edas.SwimmingLane build() {
            return new com.aliyun.ros.cdk.edas.SwimmingLane(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
