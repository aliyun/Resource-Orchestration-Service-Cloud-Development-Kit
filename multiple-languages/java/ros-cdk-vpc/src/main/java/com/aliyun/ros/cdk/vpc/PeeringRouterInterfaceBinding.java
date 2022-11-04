package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:44.112Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBinding")
public class PeeringRouterInterfaceBinding extends com.aliyun.ros.cdk.core.Resource {

    protected PeeringRouterInterfaceBinding(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PeeringRouterInterfaceBinding(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
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
    public PeeringRouterInterfaceBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceBindingProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public PeeringRouterInterfaceBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceBindingProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RouterInterfaceId: The RouterInterface ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouterInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouterInterfaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceBinding}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceBinding> {
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
        private final com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceBindingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceBindingProps.Builder();
        }

        /**
         * Property oppositeInterfaceId: The connection peer RouterInterface ID.
         * <p>
         * @return {@code this}
         * @param oppositeInterfaceId Property oppositeInterfaceId: The connection peer RouterInterface ID. This parameter is required.
         */
        public Builder oppositeInterfaceId(final java.lang.String oppositeInterfaceId) {
            this.props.oppositeInterfaceId(oppositeInterfaceId);
            return this;
        }
        /**
         * Property oppositeInterfaceId: The connection peer RouterInterface ID.
         * <p>
         * @return {@code this}
         * @param oppositeInterfaceId Property oppositeInterfaceId: The connection peer RouterInterface ID. This parameter is required.
         */
        public Builder oppositeInterfaceId(final com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceId) {
            this.props.oppositeInterfaceId(oppositeInterfaceId);
            return this;
        }

        /**
         * Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param routerInterfaceId Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface. This parameter is required.
         */
        public Builder routerInterfaceId(final java.lang.String routerInterfaceId) {
            this.props.routerInterfaceId(routerInterfaceId);
            return this;
        }
        /**
         * Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param routerInterfaceId Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface. This parameter is required.
         */
        public Builder routerInterfaceId(final com.aliyun.ros.cdk.core.IResolvable routerInterfaceId) {
            this.props.routerInterfaceId(routerInterfaceId);
            return this;
        }

        /**
         * Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param oppositeInterfaceOwnerId Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. This parameter is required.
         */
        public Builder oppositeInterfaceOwnerId(final java.lang.String oppositeInterfaceOwnerId) {
            this.props.oppositeInterfaceOwnerId(oppositeInterfaceOwnerId);
            return this;
        }
        /**
         * Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param oppositeInterfaceOwnerId Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. This parameter is required.
         */
        public Builder oppositeInterfaceOwnerId(final com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceOwnerId) {
            this.props.oppositeInterfaceOwnerId(oppositeInterfaceOwnerId);
            return this;
        }

        /**
         * Property oppositeRouterId: Router ID of the connection peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param oppositeRouterId Property oppositeRouterId: Router ID of the connection peer RouterInterface. This parameter is required.
         */
        public Builder oppositeRouterId(final java.lang.String oppositeRouterId) {
            this.props.oppositeRouterId(oppositeRouterId);
            return this;
        }
        /**
         * Property oppositeRouterId: Router ID of the connection peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param oppositeRouterId Property oppositeRouterId: Router ID of the connection peer RouterInterface. This parameter is required.
         */
        public Builder oppositeRouterId(final com.aliyun.ros.cdk.core.IResolvable oppositeRouterId) {
            this.props.oppositeRouterId(oppositeRouterId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceBinding}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceBinding build() {
            return new com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceBinding(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
