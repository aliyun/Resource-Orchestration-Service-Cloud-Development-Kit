package com.aliyun.ros.cdk.edas;

/**
 * A ROS resource type:  <code>ALIYUN::EDAS::UserDefineRegion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:09.805Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.UserDefineRegion")
public class UserDefineRegion extends com.aliyun.ros.cdk.core.Resource {

    protected UserDefineRegion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UserDefineRegion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::EDAS::UserDefineRegion</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public UserDefineRegion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.UserDefineRegionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::EDAS::UserDefineRegion</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public UserDefineRegion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.edas.UserDefineRegionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BelongRegion: Under the physical region ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBelongRegion() {
        return software.amazon.jsii.Kernel.get(this, "attrBelongRegion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DebugEnable: Whether debug is enable.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDebugEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrDebugEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Id: Resource ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RegionName: Region name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRegionName() {
        return software.amazon.jsii.Kernel.get(this, "attrRegionName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UserId: User account ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.edas.UserDefineRegion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edas.UserDefineRegion> {
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
        private final com.aliyun.ros.cdk.edas.UserDefineRegionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.edas.UserDefineRegionProps.Builder();
        }

        /**
         * Property regionName: Logical region (or namespace) name.
         * <p>
         * @return {@code this}
         * @param regionName Property regionName: Logical region (or namespace) name. This parameter is required.
         */
        public Builder regionName(final java.lang.String regionName) {
            this.props.regionName(regionName);
            return this;
        }
        /**
         * Property regionName: Logical region (or namespace) name.
         * <p>
         * @return {@code this}
         * @param regionName Property regionName: Logical region (or namespace) name. This parameter is required.
         */
        public Builder regionName(final com.aliyun.ros.cdk.core.IResolvable regionName) {
            this.props.regionName(regionName);
            return this;
        }

        /**
         * Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").
         * <p>
         * @return {@code this}
         * @param regionTag Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier"). This parameter is required.
         */
        public Builder regionTag(final java.lang.String regionTag) {
            this.props.regionTag(regionTag);
            return this;
        }
        /**
         * Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").
         * <p>
         * @return {@code this}
         * @param regionTag Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier"). This parameter is required.
         */
        public Builder regionTag(final com.aliyun.ros.cdk.core.IResolvable regionTag) {
            this.props.regionTag(regionTag);
            return this;
        }

        /**
         * Property debugEnable: Whether debug is enable.
         * <p>
         * @return {@code this}
         * @param debugEnable Property debugEnable: Whether debug is enable. This parameter is required.
         */
        public Builder debugEnable(final java.lang.Boolean debugEnable) {
            this.props.debugEnable(debugEnable);
            return this;
        }
        /**
         * Property debugEnable: Whether debug is enable.
         * <p>
         * @return {@code this}
         * @param debugEnable Property debugEnable: Whether debug is enable. This parameter is required.
         */
        public Builder debugEnable(final com.aliyun.ros.cdk.core.IResolvable debugEnable) {
            this.props.debugEnable(debugEnable);
            return this;
        }

        /**
         * Property description: Logic region (or namespace) description.
         * <p>
         * @return {@code this}
         * @param description Property description: Logic region (or namespace) description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Logic region (or namespace) description.
         * <p>
         * @return {@code this}
         * @param description Property description: Logic region (or namespace) description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.edas.UserDefineRegion}.
         */
        @Override
        public com.aliyun.ros.cdk.edas.UserDefineRegion build() {
            return new com.aliyun.ros.cdk.edas.UserDefineRegion(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
