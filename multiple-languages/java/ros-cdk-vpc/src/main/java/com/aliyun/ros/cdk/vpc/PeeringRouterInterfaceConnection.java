package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.74.0 (build 6d08790)", date = "2023-02-14T06:40:12.937Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceConnection")
public class PeeringRouterInterfaceConnection extends com.aliyun.ros.cdk.core.Resource {

    protected PeeringRouterInterfaceConnection(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PeeringRouterInterfaceConnection(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
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
    public PeeringRouterInterfaceConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceConnectionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public PeeringRouterInterfaceConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceConnectionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute OppositeInterfaceId: The receiver RouterInterface ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOppositeInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrOppositeInterfaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RouterInterfaceId: The initiator RouterInterface ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouterInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouterInterfaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceConnection}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceConnection> {
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
        private final com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceConnectionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceConnectionProps.Builder();
        }

        /**
         * Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param oppositeInterfaceId Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface. This parameter is required.
         */
        public Builder oppositeInterfaceId(final java.lang.String oppositeInterfaceId) {
            this.props.oppositeInterfaceId(oppositeInterfaceId);
            return this;
        }
        /**
         * Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param oppositeInterfaceId Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface. This parameter is required.
         */
        public Builder oppositeInterfaceId(final com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceId) {
            this.props.oppositeInterfaceId(oppositeInterfaceId);
            return this;
        }

        /**
         * Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param routerInterfaceId Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface. This parameter is required.
         */
        public Builder routerInterfaceId(final java.lang.String routerInterfaceId) {
            this.props.routerInterfaceId(routerInterfaceId);
            return this;
        }
        /**
         * Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param routerInterfaceId Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface. This parameter is required.
         */
        public Builder routerInterfaceId(final com.aliyun.ros.cdk.core.IResolvable routerInterfaceId) {
            this.props.routerInterfaceId(routerInterfaceId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceConnection}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceConnection build() {
            return new com.aliyun.ros.cdk.vpc.PeeringRouterInterfaceConnection(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
