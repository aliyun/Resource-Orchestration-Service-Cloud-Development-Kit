package com.aliyun.ros.cdk.drds;

/**
 * A ROS resource type:  `ALIYUN::DRDS::DrdsInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:28.463Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.DrdsInstance")
public class DrdsInstance extends com.aliyun.ros.cdk.core.Resource {

    protected DrdsInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DrdsInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::DRDS::DrdsInstance`.
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
    public DrdsInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.DrdsInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DRDS::DrdsInstance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DrdsInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.DrdsInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DrdsInstanceId: instance id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDrdsInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDrdsInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InternetEndpoint: Public endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInternetEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IntranetEndpoint: VPC endpoint.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIntranetEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: order number.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.drds.DrdsInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.drds.DrdsInstance> {
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
        private final com.aliyun.ros.cdk.drds.DrdsInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.drds.DrdsInstanceProps.Builder();
        }

        /**
         * Property description: Description of the DRDS instance, 2-128 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the DRDS instance, 2-128 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the DRDS instance, 2-128 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the DRDS instance, 2-128 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.
         * <p>
         * @return {@code this}
         * @param instanceSeries Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition. This parameter is required.
         */
        public Builder instanceSeries(final java.lang.String instanceSeries) {
            this.props.instanceSeries(instanceSeries);
            return this;
        }
        /**
         * Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition.
         * <p>
         * @return {@code this}
         * @param instanceSeries Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition. This parameter is required.
         */
        public Builder instanceSeries(final com.aliyun.ros.cdk.core.IResolvable instanceSeries) {
            this.props.instanceSeries(instanceSeries);
            return this;
        }

        /**
         * Property payType: For the type of payment, see "Payment Type Parameter Table".
         * <p>
         * @return {@code this}
         * @param payType Property payType: For the type of payment, see "Payment Type Parameter Table". This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: For the type of payment, see "Payment Type Parameter Table".
         * <p>
         * @return {@code this}
         * @param payType Property payType: For the type of payment, see "Payment Type Parameter Table". This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property quantity: Purchase quantity.
         * <p>
         * @return {@code this}
         * @param quantity Property quantity: Purchase quantity. This parameter is required.
         */
        public Builder quantity(final java.lang.Number quantity) {
            this.props.quantity(quantity);
            return this;
        }
        /**
         * Property quantity: Purchase quantity.
         * <p>
         * @return {@code this}
         * @param quantity Property quantity: Purchase quantity. This parameter is required.
         */
        public Builder quantity(final com.aliyun.ros.cdk.core.IResolvable quantity) {
            this.props.quantity(quantity);
            return this;
        }

        /**
         * Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.
         * <p>
         * @return {@code this}
         * @param specification Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing. This parameter is required.
         */
        public Builder specification(final java.lang.String specification) {
            this.props.specification(specification);
            return this;
        }
        /**
         * Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing.
         * <p>
         * @return {@code this}
         * @param specification Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing. This parameter is required.
         */
        public Builder specification(final com.aliyun.ros.cdk.core.IResolvable specification) {
            this.props.specification(specification);
            return this;
        }

        /**
         * Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.
         * <p>
         * @return {@code this}
         * @param type Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively.
         * <p>
         * @return {@code this}
         * @param type Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou). This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou). This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property duration: The number of cycles ordered.
         * <p>
         * When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The number of cycles ordered. This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration: The number of cycles ordered.
         * <p>
         * When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The number of cycles ordered. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year.
         * <p>
         * The parameter takes effect when the payment type is drdsPre.
         * <p>
         * @return {@code this}
         * @param isAutoRenew Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. This parameter is required.
         */
        public Builder isAutoRenew(final java.lang.Boolean isAutoRenew) {
            this.props.isAutoRenew(isAutoRenew);
            return this;
        }
        /**
         * Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year.
         * <p>
         * The parameter takes effect when the payment type is drdsPre.
         * <p>
         * @return {@code this}
         * @param isAutoRenew Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. This parameter is required.
         */
        public Builder isAutoRenew(final com.aliyun.ros.cdk.core.IResolvable isAutoRenew) {
            this.props.isAutoRenew(isAutoRenew);
            return this;
        }

        /**
         * Property mySqlVersion: The MySQL protocol version supported by DRDS.
         * <p>
         * Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
         * <p>
         * @return {@code this}
         * @param mySqlVersion Property mySqlVersion: The MySQL protocol version supported by DRDS. This parameter is required.
         */
        public Builder mySqlVersion(final java.lang.String mySqlVersion) {
            this.props.mySqlVersion(mySqlVersion);
            return this;
        }
        /**
         * Property mySqlVersion: The MySQL protocol version supported by DRDS.
         * <p>
         * Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
         * <p>
         * @return {@code this}
         * @param mySqlVersion Property mySqlVersion: The MySQL protocol version supported by DRDS. This parameter is required.
         */
        public Builder mySqlVersion(final com.aliyun.ros.cdk.core.IResolvable mySqlVersion) {
            this.props.mySqlVersion(mySqlVersion);
            return this;
        }

        /**
         * Property pricingCycle: The unit of the order period, year: year, month: month.
         * <p>
         * The parameter takes effect when the payment type is drdsPre.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The unit of the order period, year: year, month: month. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: The unit of the order period, year: year, month: month.
         * <p>
         * The parameter takes effect when the payment type is drdsPre.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The unit of the order period, year: year, month: month. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.drds.RosDrdsInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.
         * <p>
         * @return {@code this}
         * @param vswitchId Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type. This parameter is required.
         */
        public Builder vswitchId(final java.lang.String vswitchId) {
            this.props.vswitchId(vswitchId);
            return this;
        }
        /**
         * Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type.
         * <p>
         * @return {@code this}
         * @param vswitchId Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type. This parameter is required.
         */
        public Builder vswitchId(final com.aliyun.ros.cdk.core.IResolvable vswitchId) {
            this.props.vswitchId(vswitchId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.drds.DrdsInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.drds.DrdsInstance build() {
            return new com.aliyun.ros.cdk.drds.DrdsInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
