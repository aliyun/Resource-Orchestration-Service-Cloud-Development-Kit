package com.aliyun.ros.cdk.bss;

/**
 * A ROS resource type:  `ALIYUN::BSS::WaitOrder`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:49.474Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bss.$Module.class, fqn = "@alicloud/ros-cdk-bss.WaitOrder")
public class WaitOrder extends com.aliyun.ros.cdk.core.Resource {

    protected WaitOrder(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WaitOrder(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::BSS::WaitOrder`.
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
    public WaitOrder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.WaitOrderProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::BSS::WaitOrder`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public WaitOrder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.WaitOrderProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.bss.WaitOrder}.
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
