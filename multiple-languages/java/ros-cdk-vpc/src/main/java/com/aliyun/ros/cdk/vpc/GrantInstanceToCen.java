package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::GrantInstanceToCen`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:03.784Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.GrantInstanceToCen")
public class GrantInstanceToCen extends com.aliyun.ros.cdk.core.Resource {

    protected GrantInstanceToCen(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected GrantInstanceToCen(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::GrantInstanceToCen`.
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
    public GrantInstanceToCen(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.GrantInstanceToCenProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::GrantInstanceToCen`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public GrantInstanceToCen(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.GrantInstanceToCenProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CenId: The ID of the CEN instance to be authorized.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The ID of the network instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.GrantInstanceToCen}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.GrantInstanceToCen> {
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
        private final com.aliyun.ros.cdk.vpc.GrantInstanceToCenProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.GrantInstanceToCenProps.Builder();
        }

        /**
         * Property cenId: The ID of the CEN instance to be authorized.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance to be authorized. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the CEN instance to be authorized.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance to be authorized. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
         * <p>
         * @return {@code this}
         * @param cenOwnerId Property cenOwnerId: The UID of the account to which the target CEN instance belongs. This parameter is required.
         */
        public Builder cenOwnerId(final java.lang.Number cenOwnerId) {
            this.props.cenOwnerId(cenOwnerId);
            return this;
        }
        /**
         * Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
         * <p>
         * @return {@code this}
         * @param cenOwnerId Property cenOwnerId: The UID of the account to which the target CEN instance belongs. This parameter is required.
         */
        public Builder cenOwnerId(final com.aliyun.ros.cdk.core.IResolvable cenOwnerId) {
            this.props.cenOwnerId(cenOwnerId);
            return this;
        }

        /**
         * Property instanceId: The ID of the network instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the network instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the network instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the network instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property instanceType: The type of the network instance.
         * <p>
         * Valid values:
         * VPC: Virtual Private Cloud (VPC).
         * VBR: Virtual Border Router (VBR).
         * CCN: Cloud Connect Network (CCN).
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the network instance. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The type of the network instance.
         * <p>
         * Valid values:
         * VPC: Virtual Private Cloud (VPC).
         * VBR: Virtual Border Router (VBR).
         * CCN: Cloud Connect Network (CCN).
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the network instance. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.GrantInstanceToCen}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.GrantInstanceToCen build() {
            return new com.aliyun.ros.cdk.vpc.GrantInstanceToCen(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
