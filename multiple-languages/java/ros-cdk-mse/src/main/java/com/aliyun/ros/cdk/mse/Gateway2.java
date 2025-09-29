package com.aliyun.ros.cdk.mse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MSE::Gateway2</code>The ALIYUN::MSE::Use Gateway2 resource type to create cloud-native gateway.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.028Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.Gateway2")
public class Gateway2 extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mse.IGateway2 {

    protected Gateway2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Gateway2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Gateway2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.Gateway2Props props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Gateway2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.Gateway2Props props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GatewayUniqueId: The unique ID of the gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayUniqueId() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayUniqueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.Gateway2Props getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.Gateway2Props.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.Gateway2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.Gateway2> {
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
        private final com.aliyun.ros.cdk.mse.Gateway2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.Gateway2Props.Builder();
        }

        /**
         * Property vpcId: The ID of the vpc.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the vpc. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the vpc.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the vpc. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property acceptLanguage: The language of the response.
         * <p>
         * Valid values:
         * zh: Chinese
         * en: English
         * <p>
         * @return {@code this}
         * @param acceptLanguage Property acceptLanguage: The language of the response. This parameter is required.
         */
        public Builder acceptLanguage(final java.lang.String acceptLanguage) {
            this.props.acceptLanguage(acceptLanguage);
            return this;
        }
        /**
         * Property acceptLanguage: The language of the response.
         * <p>
         * Valid values:
         * zh: Chinese
         * en: English
         * <p>
         * @return {@code this}
         * @param acceptLanguage Property acceptLanguage: The language of the response. This parameter is required.
         */
        public Builder acceptLanguage(final com.aliyun.ros.cdk.core.IResolvable acceptLanguage) {
            this.props.acceptLanguage(acceptLanguage);
            return this;
        }

        /**
         * Property chargeType: The billing method you specify when you purchase an normal instance.
         * <p>
         * Valid values:
         * PREPAY: subscription
         * POSTPAY: pay-as-you-go
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method you specify when you purchase an normal instance. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The billing method you specify when you purchase an normal instance.
         * <p>
         * Valid values:
         * PREPAY: subscription
         * POSTPAY: pay-as-you-go
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method you specify when you purchase an normal instance. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
         * <p>
         * pubnet: Internet
         * privatenet: private network
         * privatepubnet: Internet and private network
         * <p>
         * @return {@code this}
         * @param clbNetworkType Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs. This parameter is required.
         */
        public Builder clbNetworkType(final java.lang.String clbNetworkType) {
            this.props.clbNetworkType(clbNetworkType);
            return this;
        }
        /**
         * Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
         * <p>
         * pubnet: Internet
         * privatenet: private network
         * privatepubnet: Internet and private network
         * <p>
         * @return {@code this}
         * @param clbNetworkType Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs. This parameter is required.
         */
        public Builder clbNetworkType(final com.aliyun.ros.cdk.core.IResolvable clbNetworkType) {
            this.props.clbNetworkType(clbNetworkType);
            return this;
        }

        /**
         * Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
         * <p>
         * @return {@code this}
         * @param enableHardwareAcceleration Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis. This parameter is required.
         */
        public Builder enableHardwareAcceleration(final java.lang.Boolean enableHardwareAcceleration) {
            this.props.enableHardwareAcceleration(enableHardwareAcceleration);
            return this;
        }
        /**
         * Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
         * <p>
         * @return {@code this}
         * @param enableHardwareAcceleration Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis. This parameter is required.
         */
        public Builder enableHardwareAcceleration(final com.aliyun.ros.cdk.core.IResolvable enableHardwareAcceleration) {
            this.props.enableHardwareAcceleration(enableHardwareAcceleration);
            return this;
        }

        /**
         * Property enableSls: Specifies whether to activate Log Service.
         * <p>
         * @return {@code this}
         * @param enableSls Property enableSls: Specifies whether to activate Log Service. This parameter is required.
         */
        public Builder enableSls(final java.lang.Boolean enableSls) {
            this.props.enableSls(enableSls);
            return this;
        }
        /**
         * Property enableSls: Specifies whether to activate Log Service.
         * <p>
         * @return {@code this}
         * @param enableSls Property enableSls: Specifies whether to activate Log Service. This parameter is required.
         */
        public Builder enableSls(final com.aliyun.ros.cdk.core.IResolvable enableSls) {
            this.props.enableSls(enableSls);
            return this;
        }

        /**
         * Property enableXtrace: Whether to activate Tracing Analysis.
         * <p>
         * @return {@code this}
         * @param enableXtrace Property enableXtrace: Whether to activate Tracing Analysis. This parameter is required.
         */
        public Builder enableXtrace(final java.lang.Boolean enableXtrace) {
            this.props.enableXtrace(enableXtrace);
            return this;
        }
        /**
         * Property enableXtrace: Whether to activate Tracing Analysis.
         * <p>
         * @return {@code this}
         * @param enableXtrace Property enableXtrace: Whether to activate Tracing Analysis. This parameter is required.
         */
        public Builder enableXtrace(final com.aliyun.ros.cdk.core.IResolvable enableXtrace) {
            this.props.enableXtrace(enableXtrace);
            return this;
        }

        /**
         * Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
         * <p>
         * @return {@code this}
         * @param enterpriseSecurityGroup Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration. This parameter is required.
         */
        public Builder enterpriseSecurityGroup(final java.lang.Boolean enterpriseSecurityGroup) {
            this.props.enterpriseSecurityGroup(enterpriseSecurityGroup);
            return this;
        }
        /**
         * Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
         * <p>
         * @return {@code this}
         * @param enterpriseSecurityGroup Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration. This parameter is required.
         */
        public Builder enterpriseSecurityGroup(final com.aliyun.ros.cdk.core.IResolvable enterpriseSecurityGroup) {
            this.props.enterpriseSecurityGroup(enterpriseSecurityGroup);
            return this;
        }

        /**
         * Property internetSlb: Public network SLB specifications (for normal instances).
         * <p>
         * Simple type (slb.s1.small)
         * Standard type 1 (slb.s2.smal)
         * Standard type I(slb.s2.medium)
         * Advanced Type 1 (slb.s3.small)
         * Advanced I(slb.s3.medium)
         * Super strong type I (slb.s3.large)
         * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
         * <p>
         * @return {@code this}
         * @param internetSlb Property internetSlb: Public network SLB specifications (for normal instances). This parameter is required.
         */
        public Builder internetSlb(final java.lang.String internetSlb) {
            this.props.internetSlb(internetSlb);
            return this;
        }
        /**
         * Property internetSlb: Public network SLB specifications (for normal instances).
         * <p>
         * Simple type (slb.s1.small)
         * Standard type 1 (slb.s2.smal)
         * Standard type I(slb.s2.medium)
         * Advanced Type 1 (slb.s3.small)
         * Advanced I(slb.s3.medium)
         * Super strong type I (slb.s3.large)
         * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
         * <p>
         * @return {@code this}
         * @param internetSlb Property internetSlb: Public network SLB specifications (for normal instances). This parameter is required.
         */
        public Builder internetSlb(final com.aliyun.ros.cdk.core.IResolvable internetSlb) {
            this.props.internetSlb(internetSlb);
            return this;
        }

        /**
         * Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance) pubnet: public network privatenet: privatenet privatepubnet: public + private network.
         * <p>
         * @return {@code this}
         * @param managedEntryNetworkType Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance) pubnet: public network privatenet: privatenet privatepubnet: public + private network. This parameter is required.
         */
        public Builder managedEntryNetworkType(final java.lang.String managedEntryNetworkType) {
            this.props.managedEntryNetworkType(managedEntryNetworkType);
            return this;
        }
        /**
         * Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance) pubnet: public network privatenet: privatenet privatepubnet: public + private network.
         * <p>
         * @return {@code this}
         * @param managedEntryNetworkType Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance) pubnet: public network privatenet: privatenet privatepubnet: public + private network. This parameter is required.
         */
        public Builder managedEntryNetworkType(final com.aliyun.ros.cdk.core.IResolvable managedEntryNetworkType) {
            this.props.managedEntryNetworkType(managedEntryNetworkType);
            return this;
        }

        /**
         * Property mserVersion: The MSE gateway instance type.
         * <p>
         * Valid values:
         * mse_pro: normal instance
         * mse_premium: professional normal instancemse_serverless: serverless instance
         * <p>
         * @return {@code this}
         * @param mserVersion Property mserVersion: The MSE gateway instance type. This parameter is required.
         */
        public Builder mserVersion(final java.lang.String mserVersion) {
            this.props.mserVersion(mserVersion);
            return this;
        }
        /**
         * Property mserVersion: The MSE gateway instance type.
         * <p>
         * Valid values:
         * mse_pro: normal instance
         * mse_premium: professional normal instancemse_serverless: serverless instance
         * <p>
         * @return {@code this}
         * @param mserVersion Property mserVersion: The MSE gateway instance type. This parameter is required.
         */
        public Builder mserVersion(final com.aliyun.ros.cdk.core.IResolvable mserVersion) {
            this.props.mserVersion(mserVersion);
            return this;
        }

        /**
         * Property name: The name of the created gateway.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the created gateway. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the created gateway.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the created gateway. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
         * <p>
         * pubnet: Internet
         * privatenet: private network
         * privatepubnet: Internet and private network
         * <p>
         * @return {@code this}
         * @param nlbNetworkType Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance. This parameter is required.
         */
        public Builder nlbNetworkType(final java.lang.String nlbNetworkType) {
            this.props.nlbNetworkType(nlbNetworkType);
            return this;
        }
        /**
         * Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
         * <p>
         * pubnet: Internet
         * privatenet: private network
         * privatepubnet: Internet and private network
         * <p>
         * @return {@code this}
         * @param nlbNetworkType Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance. This parameter is required.
         */
        public Builder nlbNetworkType(final com.aliyun.ros.cdk.core.IResolvable nlbNetworkType) {
            this.props.nlbNetworkType(nlbNetworkType);
            return this;
        }

        /**
         * Property period: Prepaid time period.
         * <p>
         * While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Prepaid time period.
         * <p>
         * While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: Charge period for created instances.
         * <p>
         * This parameter is only valid when updating from postpaid instance to prepaid instance.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Charge period for created instances. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: Charge period for created instances.
         * <p>
         * This parameter is only valid when updating from postpaid instance to prepaid instance.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Charge period for created instances. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property replica: The number of nodes you specify when you purchase an normal instance.
         * <p>
         * For high availability, the value for this param is recommended to be greater than 2.
         * <p>
         * @return {@code this}
         * @param replica Property replica: The number of nodes you specify when you purchase an normal instance. This parameter is required.
         */
        public Builder replica(final java.lang.Number replica) {
            this.props.replica(replica);
            return this;
        }
        /**
         * Property replica: The number of nodes you specify when you purchase an normal instance.
         * <p>
         * For high availability, the value for this param is recommended to be greater than 2.
         * <p>
         * @return {@code this}
         * @param replica Property replica: The number of nodes you specify when you purchase an normal instance. This parameter is required.
         */
        public Builder replica(final com.aliyun.ros.cdk.core.IResolvable replica) {
            this.props.replica(replica);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property slbSpec: Private network SLB specifications (for normal instances).
         * <p>
         * Simple type (slb.s1.small)
         * Standard type 1 (slb.s2.small)
         * Standard type I(slb.s2.medium)
         * Advanced Type 1 (slb.s3.small)
         * Advanced I(slb.s3.medium)
         * Super strong type I (slb.s3.large)
         * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
         * <p>
         * @return {@code this}
         * @param slbSpec Property slbSpec: Private network SLB specifications (for normal instances). This parameter is required.
         */
        public Builder slbSpec(final java.lang.String slbSpec) {
            this.props.slbSpec(slbSpec);
            return this;
        }
        /**
         * Property slbSpec: Private network SLB specifications (for normal instances).
         * <p>
         * Simple type (slb.s1.small)
         * Standard type 1 (slb.s2.small)
         * Standard type I(slb.s2.medium)
         * Advanced Type 1 (slb.s3.small)
         * Advanced I(slb.s3.medium)
         * Super strong type I (slb.s3.large)
         * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
         * <p>
         * @return {@code this}
         * @param slbSpec Property slbSpec: Private network SLB specifications (for normal instances). This parameter is required.
         */
        public Builder slbSpec(final com.aliyun.ros.cdk.core.IResolvable slbSpec) {
            this.props.slbSpec(slbSpec);
            return this;
        }

        /**
         * Property spec: The node specifications you specify when you purchase an normal instance.
         * <p>
         * Valid values:
         * MSE_GTW_16_32_200_c(16C32G)
         * MSE_GTW_2_4_200_c(2C4G)
         * MSE_GTW_4_8_200_c(4C8G)
         * MSE_GTW_8_16_200_c(8C16G)
         * <p>
         * @return {@code this}
         * @param spec Property spec: The node specifications you specify when you purchase an normal instance. This parameter is required.
         */
        public Builder spec(final java.lang.String spec) {
            this.props.spec(spec);
            return this;
        }
        /**
         * Property spec: The node specifications you specify when you purchase an normal instance.
         * <p>
         * Valid values:
         * MSE_GTW_16_32_200_c(16C32G)
         * MSE_GTW_2_4_200_c(2C4G)
         * MSE_GTW_4_8_200_c(4C8G)
         * MSE_GTW_8_16_200_c(8C16G)
         * <p>
         * @return {@code this}
         * @param spec Property spec: The node specifications you specify when you purchase an normal instance. This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props.spec(spec);
            return this;
        }

        /**
         * Property tags: The list of tags in the form of key/value pairs.
         * <p>
         * You can define a maximum of 20 tags.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The list of tags in the form of key/value pairs. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.mse.RosGateway2.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vSwitchId: The primary VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The primary VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The primary VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The primary VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property vSwitchId2: The secondary VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId2 Property vSwitchId2: The secondary VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId2(final java.lang.String vSwitchId2) {
            this.props.vSwitchId2(vSwitchId2);
            return this;
        }
        /**
         * Property vSwitchId2: The secondary VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId2 Property vSwitchId2: The secondary VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId2(final com.aliyun.ros.cdk.core.IResolvable vSwitchId2) {
            this.props.vSwitchId2(vSwitchId2);
            return this;
        }

        /**
         * Property xtraceRatio: The sampling rate of Tracing Analysis.
         * <p>
         * Valid values: [1,100]
         * <p>
         * @return {@code this}
         * @param xtraceRatio Property xtraceRatio: The sampling rate of Tracing Analysis. This parameter is required.
         */
        public Builder xtraceRatio(final java.lang.Number xtraceRatio) {
            this.props.xtraceRatio(xtraceRatio);
            return this;
        }
        /**
         * Property xtraceRatio: The sampling rate of Tracing Analysis.
         * <p>
         * Valid values: [1,100]
         * <p>
         * @return {@code this}
         * @param xtraceRatio Property xtraceRatio: The sampling rate of Tracing Analysis. This parameter is required.
         */
        public Builder xtraceRatio(final com.aliyun.ros.cdk.core.IResolvable xtraceRatio) {
            this.props.xtraceRatio(xtraceRatio);
            return this;
        }

        /**
         * Property zoneInfo: The info details of the available zone.
         * <p>
         * @return {@code this}
         * @param zoneInfo Property zoneInfo: The info details of the available zone. This parameter is required.
         */
        public Builder zoneInfo(final com.aliyun.ros.cdk.core.IResolvable zoneInfo) {
            this.props.zoneInfo(zoneInfo);
            return this;
        }
        /**
         * Property zoneInfo: The info details of the available zone.
         * <p>
         * @return {@code this}
         * @param zoneInfo Property zoneInfo: The info details of the available zone. This parameter is required.
         */
        public Builder zoneInfo(final java.util.List<? extends java.lang.Object> zoneInfo) {
            this.props.zoneInfo(zoneInfo);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.Gateway2}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.Gateway2 build() {
            return new com.aliyun.ros.cdk.mse.Gateway2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
