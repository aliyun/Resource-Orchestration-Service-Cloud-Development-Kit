package com.aliyun.ros.cdk.edas.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::EDAS::Applications</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:00.041Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.datasource.Applications")
public class Applications extends com.aliyun.ros.cdk.core.Resource {

    protected Applications(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Applications(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::EDAS::Applications</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Applications(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.edas.datasource.ApplicationsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::EDAS::Applications</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Applications(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.edas.datasource.ApplicationsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::EDAS::Applications</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Applications(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute AppIds: The list of application IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAppIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Applications: The list of applications.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApplications() {
        return software.amazon.jsii.Kernel.get(this, "attrApplications", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.edas.datasource.Applications}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.edas.datasource.Applications> {
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
        private com.aliyun.ros.cdk.edas.datasource.ApplicationsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property appName: The application name keyword.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The application name keyword. This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props().appName(appName);
            return this;
        }
        /**
         * Property appName: The application name keyword.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The application name keyword. This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props().appName(appName);
            return this;
        }

        /**
         * Property clusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props().clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props().clusterId(clusterId);
            return this;
        }

        /**
         * Property logicalRegionId: The ID of the namespace.
         * <p>
         * @return {@code this}
         * @param logicalRegionId Property logicalRegionId: The ID of the namespace. This parameter is required.
         */
        public Builder logicalRegionId(final java.lang.String logicalRegionId) {
            this.props().logicalRegionId(logicalRegionId);
            return this;
        }
        /**
         * Property logicalRegionId: The ID of the namespace.
         * <p>
         * @return {@code this}
         * @param logicalRegionId Property logicalRegionId: The ID of the namespace. This parameter is required.
         */
        public Builder logicalRegionId(final com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.props().logicalRegionId(logicalRegionId);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.edas.datasource.Applications}.
         */
        @Override
        public com.aliyun.ros.cdk.edas.datasource.Applications build() {
            return new com.aliyun.ros.cdk.edas.datasource.Applications(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.edas.datasource.ApplicationsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.edas.datasource.ApplicationsProps.Builder();
            }
            return this.props;
        }
    }
}
