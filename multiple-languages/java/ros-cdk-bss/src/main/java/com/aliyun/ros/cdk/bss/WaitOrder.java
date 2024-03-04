package com.aliyun.ros.cdk.bss;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::BSS::WaitOrder</code>, which is used to wait for an order to be fulfilled.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:50.154Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bss.$Module.class, fqn = "@alicloud/ros-cdk-bss.WaitOrder")
public class WaitOrder extends com.aliyun.ros.cdk.core.Resource {

    protected WaitOrder(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WaitOrder(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public WaitOrder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.WaitOrderProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public WaitOrder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.WaitOrderProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.WaitOrderProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.bss.WaitOrderProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.WaitOrderProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.bss.WaitOrder}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bss.WaitOrder> {
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
        private final com.aliyun.ros.cdk.bss.WaitOrderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bss.WaitOrderProps.Builder();
        }

        /**
         * Property orderIds: A list of order ids.
         * <p>
         * @return {@code this}
         * @param orderIds Property orderIds: A list of order ids. This parameter is required.
         */
        public Builder orderIds(final java.util.List<? extends java.lang.Object> orderIds) {
            this.props.orderIds(orderIds);
            return this;
        }
        /**
         * Property orderIds: A list of order ids.
         * <p>
         * @return {@code this}
         * @param orderIds Property orderIds: A list of order ids. This parameter is required.
         */
        public Builder orderIds(final com.aliyun.ros.cdk.core.IResolvable orderIds) {
            this.props.orderIds(orderIds);
            return this;
        }

        /**
         * Property cancelOnDelete: Cancel order where delete the resource.
         * <p>
         * Ignore the paid order. Default true
         * <p>
         * @return {@code this}
         * @param cancelOnDelete Property cancelOnDelete: Cancel order where delete the resource. This parameter is required.
         */
        public Builder cancelOnDelete(final java.lang.Boolean cancelOnDelete) {
            this.props.cancelOnDelete(cancelOnDelete);
            return this;
        }
        /**
         * Property cancelOnDelete: Cancel order where delete the resource.
         * <p>
         * Ignore the paid order. Default true
         * <p>
         * @return {@code this}
         * @param cancelOnDelete Property cancelOnDelete: Cancel order where delete the resource. This parameter is required.
         */
        public Builder cancelOnDelete(final com.aliyun.ros.cdk.core.IResolvable cancelOnDelete) {
            this.props.cancelOnDelete(cancelOnDelete);
            return this;
        }

        /**
         * Property waitForOrderProduced: Wait util all orders related ROS resources are produced.
         * <p>
         * Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
         * <p>
         * @return {@code this}
         * @param waitForOrderProduced Property waitForOrderProduced: Wait util all orders related ROS resources are produced. This parameter is required.
         */
        public Builder waitForOrderProduced(final java.lang.Boolean waitForOrderProduced) {
            this.props.waitForOrderProduced(waitForOrderProduced);
            return this;
        }
        /**
         * Property waitForOrderProduced: Wait util all orders related ROS resources are produced.
         * <p>
         * Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
         * <p>
         * @return {@code this}
         * @param waitForOrderProduced Property waitForOrderProduced: Wait util all orders related ROS resources are produced. This parameter is required.
         */
        public Builder waitForOrderProduced(final com.aliyun.ros.cdk.core.IResolvable waitForOrderProduced) {
            this.props.waitForOrderProduced(waitForOrderProduced);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bss.WaitOrder}.
         */
        @Override
        public com.aliyun.ros.cdk.bss.WaitOrder build() {
            return new com.aliyun.ros.cdk.bss.WaitOrder(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
