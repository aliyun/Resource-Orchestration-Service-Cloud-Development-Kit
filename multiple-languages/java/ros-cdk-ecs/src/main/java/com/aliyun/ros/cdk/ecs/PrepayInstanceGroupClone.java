package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::PrepayInstanceGroupClone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:43.011Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.PrepayInstanceGroupClone")
public class PrepayInstanceGroupClone extends com.aliyun.ros.cdk.core.Resource {

    protected PrepayInstanceGroupClone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PrepayInstanceGroupClone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::PrepayInstanceGroupClone`.
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
    public PrepayInstanceGroupClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.PrepayInstanceGroupCloneProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::PrepayInstanceGroupClone`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public PrepayInstanceGroupClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.PrepayInstanceGroupCloneProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HostNames: Host names of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostNames() {
        return software.amazon.jsii.Kernel.get(this, "attrHostNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InnerIps: Inner IP address list of the specified instance.
     * <p>
     * Only for classical instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInnerIps() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceIds: The instance id list of created ecs instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrivateIps: Private IP address list of created ecs instance.
     * <p>
     * Only for VPC instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateIps() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicIps: Public IP address list of created ecs instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicIps() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RelatedOrderIds: The related order id list of created ecs instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRelatedOrderIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRelatedOrderIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneIds: Zone id of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneIds() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.PrepayInstanceGroupClone}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.PrepayInstanceGroupClone> {
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
        private final com.aliyun.ros.cdk.ecs.PrepayInstanceGroupCloneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.PrepayInstanceGroupCloneProps.Builder();
        }

        /**
         * Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
         * <p>
         * @return {@code this}
         * @param maxAmount Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100. This parameter is required.
         */
        public Builder maxAmount(final java.lang.Number maxAmount) {
            this.props.maxAmount(maxAmount);
            return this;
        }
        /**
         * Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
         * <p>
         * @return {@code this}
         * @param maxAmount Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100. This parameter is required.
         */
        public Builder maxAmount(final com.aliyun.ros.cdk.core.IResolvable maxAmount) {
            this.props.maxAmount(maxAmount);
            return this;
        }

        /**
         * Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
         * <p>
         * @return {@code this}
         * @param minAmount Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100. This parameter is required.
         */
        public Builder minAmount(final java.lang.Number minAmount) {
            this.props.minAmount(minAmount);
            return this;
        }
        /**
         * Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
         * <p>
         * @return {@code this}
         * @param minAmount Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100. This parameter is required.
         */
        public Builder minAmount(final com.aliyun.ros.cdk.core.IResolvable minAmount) {
            this.props.minAmount(minAmount);
            return this;
        }

        /**
         * Property period: Prepaid time period.
         * <p>
         * While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
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
         * While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodType: Charge period for created instances.
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         */
        public Builder periodType(final java.lang.String periodType) {
            this.props.periodType(periodType);
            return this;
        }
        /**
         * Property periodType: Charge period for created instances.
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         */
        public Builder periodType(final com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.props.periodType(periodType);
            return this;
        }

        /**
         * Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance.
         * <p>
         * It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
         * <p>
         * @return {@code this}
         * @param sourceInstanceId Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. This parameter is required.
         */
        public Builder sourceInstanceId(final java.lang.String sourceInstanceId) {
            this.props.sourceInstanceId(sourceInstanceId);
            return this;
        }
        /**
         * Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance.
         * <p>
         * It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
         * <p>
         * @return {@code this}
         * @param sourceInstanceId Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. This parameter is required.
         */
        public Builder sourceInstanceId(final com.aliyun.ros.cdk.core.IResolvable sourceInstanceId) {
            this.props.sourceInstanceId(sourceInstanceId);
            return this;
        }

        /**
         * Property autoRenew: Whether renew the fee automatically?
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?. This parameter is required.
         */
        public Builder autoRenew(final java.lang.String autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether renew the fee automatically?
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewPeriod: The time period of auto renew.
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: The time period of auto renew.
         * <p>
         * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property deploymentSetId: Deployment set ID.
         * <p>
         * The change of the property does not affect existing instances.
         * <p>
         * @return {@code this}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID. This parameter is required.
         */
        public Builder deploymentSetId(final java.lang.String deploymentSetId) {
            this.props.deploymentSetId(deploymentSetId);
            return this;
        }
        /**
         * Property deploymentSetId: Deployment set ID.
         * <p>
         * The change of the property does not affect existing instances.
         * <p>
         * @return {@code this}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID. This parameter is required.
         */
        public Builder deploymentSetId(final com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.props.deploymentSetId(deploymentSetId);
            return this;
        }

        /**
         * Property description: Description of the instance, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty. Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the instance, [2, 256] characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the instance, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty. Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the instance, [2, 256] characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property diskMappings: Disk mappings to attach to instance.
         * <p>
         * Max support 16 disks.
         * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance. This parameter is required.
         */
        public Builder diskMappings(final com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }
        /**
         * Property diskMappings: Disk mappings to attach to instance.
         * <p>
         * Max support 16 disks.
         * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance. This parameter is required.
         */
        public Builder diskMappings(final java.util.List<? extends java.lang.Object> diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }

        /**
         * Property eniMappings: NetworkInterface to attach to instance.
         * <p>
         * Max support 1 ENI.
         * <p>
         * @return {@code this}
         * @param eniMappings Property eniMappings: NetworkInterface to attach to instance. This parameter is required.
         */
        public Builder eniMappings(final com.aliyun.ros.cdk.core.IResolvable eniMappings) {
            this.props.eniMappings(eniMappings);
            return this;
        }
        /**
         * Property eniMappings: NetworkInterface to attach to instance.
         * <p>
         * Max support 1 ENI.
         * <p>
         * @return {@code this}
         * @param eniMappings Property eniMappings: NetworkInterface to attach to instance. This parameter is required.
         */
        public Builder eniMappings(final java.util.List<? extends java.lang.Object> eniMappings) {
            this.props.eniMappings(eniMappings);
            return this;
        }

        /**
         * Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
         * <p>
         * @return {@code this}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances. This parameter is required.
         */
        public Builder hpcClusterId(final java.lang.String hpcClusterId) {
            this.props.hpcClusterId(hpcClusterId);
            return this;
        }
        /**
         * Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
         * <p>
         * @return {@code this}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances. This parameter is required.
         */
        public Builder hpcClusterId(final com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.props.hpcClusterId(hpcClusterId);
            return this;
        }

        /**
         * Property imageId: Image ID to create ecs instance.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID to create ecs instance. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: Image ID to create ecs instance.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID to create ecs instance. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         * <p>
         * The range is [1,200], default is 200 Mbps.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final java.lang.Number internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
            return this;
        }
        /**
         * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         * <p>
         * The range is [1,200], default is 200 Mbps.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
            return this;
        }

        /**
         * Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
         * <p>
         * Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Set internet output bandwidth of instance. This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final java.lang.Number internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }
        /**
         * Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
         * <p>
         * Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Set internet output bandwidth of instance. This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * Property keyPairName: SSH key pair name.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name.Old instances will not be changed. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: SSH key pair name.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name.Old instances will not be changed. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property launchTemplateId: ID of launch template.
         * <p>
         * Launch template id or name must be specified to use launch template
         * <p>
         * @return {@code this}
         * @param launchTemplateId Property launchTemplateId: ID of launch template. This parameter is required.
         */
        public Builder launchTemplateId(final java.lang.String launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }
        /**
         * Property launchTemplateId: ID of launch template.
         * <p>
         * Launch template id or name must be specified to use launch template
         * <p>
         * @return {@code this}
         * @param launchTemplateId Property launchTemplateId: ID of launch template. This parameter is required.
         */
        public Builder launchTemplateId(final com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }

        /**
         * Property launchTemplateName: Name of launch template.
         * <p>
         * Launch template id or name must be specified to use launch template
         * <p>
         * @return {@code this}
         * @param launchTemplateName Property launchTemplateName: Name of launch template. This parameter is required.
         */
        public Builder launchTemplateName(final java.lang.String launchTemplateName) {
            this.props.launchTemplateName(launchTemplateName);
            return this;
        }
        /**
         * Property launchTemplateName: Name of launch template.
         * <p>
         * Launch template id or name must be specified to use launch template
         * <p>
         * @return {@code this}
         * @param launchTemplateName Property launchTemplateName: Name of launch template. This parameter is required.
         */
        public Builder launchTemplateName(final com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.props.launchTemplateName(launchTemplateName);
            return this;
        }

        /**
         * Property launchTemplateVersion: Version of launch template.
         * <p>
         * Default version is used if version is not specified.
         * <p>
         * @return {@code this}
         * @param launchTemplateVersion Property launchTemplateVersion: Version of launch template. This parameter is required.
         */
        public Builder launchTemplateVersion(final java.lang.String launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }
        /**
         * Property launchTemplateVersion: Version of launch template.
         * <p>
         * Default version is used if version is not specified.
         * <p>
         * @return {@code this}
         * @param launchTemplateVersion Property launchTemplateVersion: Version of launch template. This parameter is required.
         */
        public Builder launchTemplateVersion(final com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }

        /**
         * Property password: Password of created ecs instance.
         * <p>
         * Must contain at least 3 types of special character, lower character, upper character, number.
         * <p>
         * @return {@code this}
         * @param password Property password: Password of created ecs instance. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: Password of created ecs instance.
         * <p>
         * Must contain at least 3 types of special character, lower character, upper character, number.
         * <p>
         * @return {@code this}
         * @param password Property password: Password of created ecs instance. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property passwordInherit: Specifies whether to use the password preset in the image.
         * <p>
         * To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image. This parameter is required.
         */
        public Builder passwordInherit(final java.lang.Boolean passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }
        /**
         * Property passwordInherit: Specifies whether to use the password preset in the image.
         * <p>
         * To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image. This parameter is required.
         */
        public Builder passwordInherit(final com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }

        /**
         * Property periodUnit: Unit of prepaid time period, it could be Week/Month.
         * <p>
         * Default value is Month.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: Unit of prepaid time period, it could be Week/Month.
         * <p>
         * Default value is Month.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property ramRoleName: Instance RAM role name.
         * <p>
         * The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: Instance RAM role name. This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }
        /**
         * Property ramRoleName: Instance RAM role name.
         * <p>
         * The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: Instance RAM role name. This parameter is required.
         */
        public Builder ramRoleName(final com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * Property securityGroupId: Security group to create ecs instance.
         * <p>
         * For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Security group to create ecs instance.
         * <p>
         * For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property securityGroupIds: The IDs of security groups N to which the instance belongs.
         * <p>
         * The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The IDs of security groups N to which the instance belongs. This parameter is required.
         */
        public Builder securityGroupIds(final java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }
        /**
         * Property securityGroupIds: The IDs of security groups N to which the instance belongs.
         * <p>
         * The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The IDs of security groups N to which the instance belongs. This parameter is required.
         */
        public Builder securityGroupIds(final com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }

        /**
         * Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
         * <p>
         * @return {@code this}
         * @param systemDiskAutoSnapshotPolicyId Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID. This parameter is required.
         */
        public Builder systemDiskAutoSnapshotPolicyId(final java.lang.String systemDiskAutoSnapshotPolicyId) {
            this.props.systemDiskAutoSnapshotPolicyId(systemDiskAutoSnapshotPolicyId);
            return this;
        }
        /**
         * Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
         * <p>
         * @return {@code this}
         * @param systemDiskAutoSnapshotPolicyId Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID. This parameter is required.
         */
        public Builder systemDiskAutoSnapshotPolicyId(final com.aliyun.ros.cdk.core.IResolvable systemDiskAutoSnapshotPolicyId) {
            this.props.systemDiskAutoSnapshotPolicyId(systemDiskAutoSnapshotPolicyId);
            return this;
        }

        /**
         * Property systemDiskCategory: Category of system disk.
         * <p>
         * Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final java.lang.String systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }
        /**
         * Property systemDiskCategory: Category of system disk.
         * <p>
         * Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.Old instances will not be changed. This parameter is required.
         */
        public Builder systemDiskDescription(final java.lang.String systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }
        /**
         * Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.Old instances will not be changed. This parameter is required.
         */
        public Builder systemDiskDescription(final com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }

        /**
         * Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.Old instances will not be changed. This parameter is required.
         */
        public Builder systemDiskDiskName(final java.lang.String systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }
        /**
         * Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
         * <p>
         * @return {@code this}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.Old instances will not be changed. This parameter is required.
         */
        public Builder systemDiskDiskName(final com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone to which the instance belongs.
         * <p>
         * For more information,
         * call the DescribeZones operation to query the most recent zone list.
         * Default value is empty, which means random selection.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone to which the instance belongs. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone to which the instance belongs.
         * <p>
         * For more information,
         * call the DescribeZones operation to query the most recent zone list.
         * Default value is empty, which means random selection.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone to which the instance belongs. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.PrepayInstanceGroupClone}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.PrepayInstanceGroupClone build() {
            return new com.aliyun.ros.cdk.ecs.PrepayInstanceGroupClone(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
