package com.aliyun.ros.cdk.sag;

/**
 * A ROS resource type:  `ALIYUN::SAG::App`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:11.563Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.App")
public class App extends com.aliyun.ros.cdk.core.Resource {

    protected App(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected App(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SAG::App`.
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
    public App(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.AppProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SAG::App`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public App(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.AppProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute OrderId: The ID of the order that you placed to subscribe to the SAG APP instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SmartAGId: The ID of the SAG APP instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSmartAgId() {
        return software.amazon.jsii.Kernel.get(this, "attrSmartAgId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.App}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.App> {
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
        private final com.aliyun.ros.cdk.sag.AppProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.AppProps.Builder();
        }

        /**
         * Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances.
         * <p>
         * Default value:
         * false. Valid values:
         * true: automatically pays the bills of SAG APP instances.
         * false: does not automatically pay the bills of SAG APP instances.
         * If you set the parameter to false, after you call this operation, go to Billing Management
         * of the SAG console to complete the payment, the instance can be created.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances.
         * <p>
         * Default value:
         * false. Valid values:
         * true: automatically pays the bills of SAG APP instances.
         * false: does not automatically pay the bills of SAG APP instances.
         * If you set the parameter to false, after you call this operation, go to Billing Management
         * of the SAG console to complete the payment, the instance can be created.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month.
         * <p>
         * Unit: GB. Set the value to 5.
         * Note The system allows each client account to use 5 GB traffic plan for free.
         * <p>
         * @return {@code this}
         * @param dataPlan Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month. This parameter is required.
         */
        public Builder dataPlan(final java.lang.Number dataPlan) {
            this.props.dataPlan(dataPlan);
            return this;
        }
        /**
         * Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month.
         * <p>
         * Unit: GB. Set the value to 5.
         * Note The system allows each client account to use 5 GB traffic plan for free.
         * <p>
         * @return {@code this}
         * @param dataPlan Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month. This parameter is required.
         */
        public Builder dataPlan(final com.aliyun.ros.cdk.core.IResolvable dataPlan) {
            this.props.dataPlan(dataPlan);
            return this;
        }

        /**
         * Property period: The subscription period of the SAG APP instance.
         * <p>
         * Unit: months.
         * Valid values: 1~9, 12, 24, and 36.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the SAG APP instance. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the SAG APP instance.
         * <p>
         * Unit: months.
         * Valid values: 1~9, 12, 24, and 36.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the SAG APP instance. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property userCount: The quota of client accounts for the SAG APP instance.
         * <p>
         * Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
         * <p>
         * @return {@code this}
         * @param userCount Property userCount: The quota of client accounts for the SAG APP instance. This parameter is required.
         */
        public Builder userCount(final java.lang.Number userCount) {
            this.props.userCount(userCount);
            return this;
        }
        /**
         * Property userCount: The quota of client accounts for the SAG APP instance.
         * <p>
         * Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
         * <p>
         * @return {@code this}
         * @param userCount Property userCount: The quota of client accounts for the SAG APP instance. This parameter is required.
         */
        public Builder userCount(final com.aliyun.ros.cdk.core.IResolvable userCount) {
            this.props.userCount(userCount);
            return this;
        }

        /**
         * Property chargeType: The billing method of the SAG APP instance.
         * <p>
         * Set the value to PREPAY.
         * This value indicates that the SAG APP instance is a subscription resource.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the SAG APP instance. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The billing method of the SAG APP instance.
         * <p>
         * Set the value to PREPAY.
         * This value indicates that the SAG APP instance is a subscription resource.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the SAG APP instance. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sag.App}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.App build() {
            return new com.aliyun.ros.cdk.sag.App(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
