package com.aliyun.ros.cdk.bss;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::BSS::WaitOrder</code>, which is used to wait for orders to be completed.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:35.213Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bss.$Module.class, fqn = "@alicloud/ros-cdk-bss.RosWaitOrder")
public class RosWaitOrder extends com.aliyun.ros.cdk.core.RosResource {

    protected RosWaitOrder(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosWaitOrder(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.bss.RosWaitOrder.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosWaitOrder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.RosWaitOrderProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getOrderIds() {
        return software.amazon.jsii.Kernel.get(this, "orderIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOrderIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "orderIds", java.util.Objects.requireNonNull(value, "orderIds is required"));
    }

    /**
     */
    public void setOrderIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "orderIds", java.util.Objects.requireNonNull(value, "orderIds is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCancelOnDelete() {
        return software.amazon.jsii.Kernel.get(this, "cancelOnDelete", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCancelOnDelete(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "cancelOnDelete", value);
    }

    /**
     */
    public void setCancelOnDelete(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cancelOnDelete", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWaitForOrderProduced() {
        return software.amazon.jsii.Kernel.get(this, "waitForOrderProduced", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWaitForOrderProduced(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "waitForOrderProduced", value);
    }

    /**
     */
    public void setWaitForOrderProduced(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "waitForOrderProduced", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.bss.RosWaitOrder}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bss.RosWaitOrder> {
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
        private final com.aliyun.ros.cdk.bss.RosWaitOrderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bss.RosWaitOrderProps.Builder();
        }

        /**
         * @return {@code this}
         * @param orderIds This parameter is required.
         */
        public Builder orderIds(final java.util.List<? extends java.lang.Object> orderIds) {
            this.props.orderIds(orderIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param orderIds This parameter is required.
         */
        public Builder orderIds(final com.aliyun.ros.cdk.core.IResolvable orderIds) {
            this.props.orderIds(orderIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param cancelOnDelete This parameter is required.
         */
        public Builder cancelOnDelete(final java.lang.Boolean cancelOnDelete) {
            this.props.cancelOnDelete(cancelOnDelete);
            return this;
        }
        /**
         * @return {@code this}
         * @param cancelOnDelete This parameter is required.
         */
        public Builder cancelOnDelete(final com.aliyun.ros.cdk.core.IResolvable cancelOnDelete) {
            this.props.cancelOnDelete(cancelOnDelete);
            return this;
        }

        /**
         * @return {@code this}
         * @param waitForOrderProduced This parameter is required.
         */
        public Builder waitForOrderProduced(final java.lang.Boolean waitForOrderProduced) {
            this.props.waitForOrderProduced(waitForOrderProduced);
            return this;
        }
        /**
         * @return {@code this}
         * @param waitForOrderProduced This parameter is required.
         */
        public Builder waitForOrderProduced(final com.aliyun.ros.cdk.core.IResolvable waitForOrderProduced) {
            this.props.waitForOrderProduced(waitForOrderProduced);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bss.RosWaitOrder}.
         */
        @Override
        public com.aliyun.ros.cdk.bss.RosWaitOrder build() {
            return new com.aliyun.ros.cdk.bss.RosWaitOrder(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
