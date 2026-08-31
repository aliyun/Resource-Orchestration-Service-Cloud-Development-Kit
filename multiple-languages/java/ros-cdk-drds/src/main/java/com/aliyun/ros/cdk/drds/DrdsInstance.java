package com.aliyun.ros.cdk.drds;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DRDS::DrdsInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:25:12.231Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.DrdsInstance")
public class DrdsInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.drds.IDrdsInstance {

    protected DrdsInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DrdsInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DrdsInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.DrdsInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DrdsInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.DrdsInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DrdsInstanceId: instance id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDrdsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetEndpoint: Public endpoint.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IntranetEndpoint: VPC endpoint.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIntranetEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrIntranetEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: order number.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.DrdsInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.drds.DrdsInstanceProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
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
         * Property description: Specifies the description of the instance.
         * <p>
         * The description must meet the
         * following requirements:
         * <p>
         * <ul>
         * <li>The description cannot contain the prefix http:// or https://.</li>
         * <li>The description must start with a letter or a Chinese character, and can
         * contain uppercase and lowercase letters, Chinese characters, digits, underscores
         * (_), and hyphens (-).</li>
         * <li>The description must be 2 to 256 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param description Property description: Specifies the description of the instance. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Specifies the description of the instance.
         * <p>
         * The description must meet the
         * following requirements:
         * <p>
         * <ul>
         * <li>The description cannot contain the prefix http:// or https://.</li>
         * <li>The description must start with a letter or a Chinese character, and can
         * contain uppercase and lowercase letters, Chinese characters, digits, underscores
         * (_), and hyphens (-).</li>
         * <li>The description must be 2 to 256 characters in length.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param description Property description: Specifies the description of the instance. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property instanceSeries: Specifies the instance type of the instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>drds.sn2.4c16g: The instance is of the Starter Edition.</li>
         * <li>drds.sn2.8c32g: The instance is of the Standard Edition</li>
         * <li>drds.sn2.16c64g: The instance is of the Enterprise Edition.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceSeries Property instanceSeries: Specifies the instance type of the instance. This parameter is required.
         */
        public Builder instanceSeries(final java.lang.String instanceSeries) {
            this.props.instanceSeries(instanceSeries);
            return this;
        }
        /**
         * Property instanceSeries: Specifies the instance type of the instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>drds.sn2.4c16g: The instance is of the Starter Edition.</li>
         * <li>drds.sn2.8c32g: The instance is of the Standard Edition</li>
         * <li>drds.sn2.16c64g: The instance is of the Enterprise Edition.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceSeries Property instanceSeries: Specifies the instance type of the instance. This parameter is required.
         */
        public Builder instanceSeries(final com.aliyun.ros.cdk.core.IResolvable instanceSeries) {
            this.props.instanceSeries(instanceSeries);
            return this;
        }

        /**
         * Property payType: Specifies the billing method of the instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>drdsPre: The instance uses the subscription billing method.</li>
         * <li>drdsPost: The instance uses the pay-as-you-go billing method.</li>
         * <li>drdsRo: By default, the pay-as-you-go billing method is used when you create
         * read-only instances.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param payType Property payType: Specifies the billing method of the instance. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: Specifies the billing method of the instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>drdsPre: The instance uses the subscription billing method.</li>
         * <li>drdsPost: The instance uses the pay-as-you-go billing method.</li>
         * <li>drdsRo: By default, the pay-as-you-go billing method is used when you create
         * read-only instances.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param payType Property payType: Specifies the billing method of the instance. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property specification: Specifies the specification code of the instance.
         * <p>
         * The value consists of the
         * instance type and the specified instance specification. For example, you can set
         * the value to drds.sn2.4c16g.8c32g.
         * <p>
         * @return {@code this}
         * @param specification Property specification: Specifies the specification code of the instance. This parameter is required.
         */
        public Builder specification(final java.lang.String specification) {
            this.props.specification(specification);
            return this;
        }
        /**
         * Property specification: Specifies the specification code of the instance.
         * <p>
         * The value consists of the
         * instance type and the specified instance specification. For example, you can set
         * the value to drds.sn2.4c16g.8c32g.
         * <p>
         * @return {@code this}
         * @param specification Property specification: Specifies the specification code of the instance. This parameter is required.
         */
        public Builder specification(final com.aliyun.ros.cdk.core.IResolvable specification) {
            this.props.specification(specification);
            return this;
        }

        /**
         * Property type: Specifies the type of the instance.
         * <p>
         * Set the value to PRIVATE. The value PRIVATE
         * specifies that the instance is a dedicated instance.
         * <p>
         * <blockquote>
         * <p>
         * You can also set the value to 1 to specify that the instance is a dedicated
         * instance.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param type Property type: Specifies the type of the instance. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Specifies the type of the instance.
         * <p>
         * Set the value to PRIVATE. The value PRIVATE
         * specifies that the instance is a dedicated instance.
         * <p>
         * <blockquote>
         * <p>
         * You can also set the value to 1 to specify that the instance is a dedicated
         * instance.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param type Property type: Specifies the type of the instance. This parameter is required.
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
         * Property isAutoRenew: Specifies whether to enable automatic renewal.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: If the PricingCycle parameter is set to month, the subscription is
         * automatically renewed for one month. If the PricingCycle parameter is set to
         * year, the subscription is automatically renewed for one year.</li>
         * <li>false: The auto-renewal feature is disabled for the instance.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter only takes effect when the PayType parameter is set to drdsPre.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param isAutoRenew Property isAutoRenew: Specifies whether to enable automatic renewal. This parameter is required.
         */
        public Builder isAutoRenew(final java.lang.Boolean isAutoRenew) {
            this.props.isAutoRenew(isAutoRenew);
            return this;
        }
        /**
         * Property isAutoRenew: Specifies whether to enable automatic renewal.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: If the PricingCycle parameter is set to month, the subscription is
         * automatically renewed for one month. If the PricingCycle parameter is set to
         * year, the subscription is automatically renewed for one year.</li>
         * <li>false: The auto-renewal feature is disabled for the instance.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter only takes effect when the PayType parameter is set to drdsPre.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param isAutoRenew Property isAutoRenew: Specifies whether to enable automatic renewal. This parameter is required.
         */
        public Builder isAutoRenew(final com.aliyun.ros.cdk.core.IResolvable isAutoRenew) {
            this.props.isAutoRenew(isAutoRenew);
            return this;
        }

        /**
         * Property mySqlVersion: Specifies the MySQL version that is supported by the instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>5: The instance is fully compatible with MySQL 5.x. This value is the default
         * value.</li>
         * <li>8: The instance is fully compatible with MySQL 8.0.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter only takes effect when you create a primary instance. By
         * default, the MySQL version of the read-only instance is the same as that of the
         * primary instance.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param mySqlVersion Property mySqlVersion: Specifies the MySQL version that is supported by the instance. This parameter is required.
         */
        public Builder mySqlVersion(final java.lang.String mySqlVersion) {
            this.props.mySqlVersion(mySqlVersion);
            return this;
        }
        /**
         * Property mySqlVersion: Specifies the MySQL version that is supported by the instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>5: The instance is fully compatible with MySQL 5.x. This value is the default
         * value.</li>
         * <li>8: The instance is fully compatible with MySQL 8.0.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter only takes effect when you create a primary instance. By
         * default, the MySQL version of the read-only instance is the same as that of the
         * primary instance.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param mySqlVersion Property mySqlVersion: Specifies the MySQL version that is supported by the instance. This parameter is required.
         */
        public Builder mySqlVersion(final com.aliyun.ros.cdk.core.IResolvable mySqlVersion) {
            this.props.mySqlVersion(mySqlVersion);
            return this;
        }

        /**
         * Property pricingCycle: Specifies the unit of the subscription duration of the subscription instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>year: The unit of the subscription duration is year.</li>
         * <li>month: The unit of the subscription duration is month.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter is required if you set the PayType parameter to drdsPre.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Specifies the unit of the subscription duration of the subscription instance. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: Specifies the unit of the subscription duration of the subscription instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>year: The unit of the subscription duration is year.</li>
         * <li>month: The unit of the subscription duration is month.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter is required if you set the PayType parameter to drdsPre.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Specifies the unit of the subscription duration of the subscription instance. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.drds.DrdsInstance}.
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
