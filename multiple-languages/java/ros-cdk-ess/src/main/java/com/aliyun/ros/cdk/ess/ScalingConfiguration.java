package com.aliyun.ros.cdk.ess;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESS::ScalingConfiguration</code>, which is used to create a scaling configuration for a scaling group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.744Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScalingConfiguration")
public class ScalingConfiguration extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ess.IScalingConfiguration {

    protected ScalingConfiguration(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScalingConfiguration(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ScalingConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingConfigurationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ScalingConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingConfigurationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ScalingConfigurationId: The scaling configuration id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurationId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingGroupId: The id of the scaling group to which the scaling configuration belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ScalingConfigurationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.ScalingConfigurationProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.ScalingConfiguration}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.ScalingConfiguration> {
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
        private final com.aliyun.ros.cdk.ess.ScalingConfigurationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.ScalingConfigurationProps.Builder();
        }

        /**
         * Property scalingGroupId: Scaling group id to create the scaling configuration.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: Scaling group id to create the scaling configuration. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: Scaling group id to create the scaling configuration.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: Scaling group id to create the scaling configuration. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * Property affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>default</strong>: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.</li>
         * <li><strong>host</strong>: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
         * Default value: <strong>default</strong></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param affinity Property affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host. This parameter is required.
         */
        public Builder affinity(final java.lang.String affinity) {
            this.props.affinity(affinity);
            return this;
        }
        /**
         * Property affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>default</strong>: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.</li>
         * <li><strong>host</strong>: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
         * Default value: <strong>default</strong></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param affinity Property affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host. This parameter is required.
         */
        public Builder affinity(final com.aliyun.ros.cdk.core.IResolvable affinity) {
            this.props.affinity(affinity);
            return this;
        }

        /**
         * Property cpu: The number of vCPUs.
         * <p>
         * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
         * <strong>Note</strong>: You can specify <strong>Cpu</strong> and <strong>Memory</strong> to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: The number of vCPUs. This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }
        /**
         * Property cpu: The number of vCPUs.
         * <p>
         * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
         * <strong>Note</strong>: You can specify <strong>Cpu</strong> and <strong>Memory</strong> to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: The number of vCPUs. This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * Property creditSpecification: The performance mode of the burstable instance.
         * <p>
         * Valid values:
         * Standard: the standard mode.
         * Unlimited: the unlimited mode.
         * <p>
         * @return {@code this}
         * @param creditSpecification Property creditSpecification: The performance mode of the burstable instance. This parameter is required.
         */
        public Builder creditSpecification(final java.lang.String creditSpecification) {
            this.props.creditSpecification(creditSpecification);
            return this;
        }
        /**
         * Property creditSpecification: The performance mode of the burstable instance.
         * <p>
         * Valid values:
         * Standard: the standard mode.
         * Unlimited: the unlimited mode.
         * <p>
         * @return {@code this}
         * @param creditSpecification Property creditSpecification: The performance mode of the burstable instance. This parameter is required.
         */
        public Builder creditSpecification(final com.aliyun.ros.cdk.core.IResolvable creditSpecification) {
            this.props.creditSpecification(creditSpecification);
            return this;
        }

        /**
         * Property dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance.
         * <p>
         * You cannot create preemptible instances on dedicated hosts. If you specify <strong>DedicatedHostId</strong>, <strong>SpotStrategy</strong> and <strong>SpotPriceLimit</strong> are ignored.
         * You can call the <strong>DescribeDedicatedHosts</strong> operation to query dedicated host IDs.
         * <p>
         * @return {@code this}
         * @param dedicatedHostId Property dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance. This parameter is required.
         */
        public Builder dedicatedHostId(final java.lang.String dedicatedHostId) {
            this.props.dedicatedHostId(dedicatedHostId);
            return this;
        }
        /**
         * Property dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance.
         * <p>
         * You cannot create preemptible instances on dedicated hosts. If you specify <strong>DedicatedHostId</strong>, <strong>SpotStrategy</strong> and <strong>SpotPriceLimit</strong> are ignored.
         * You can call the <strong>DescribeDedicatedHosts</strong> operation to query dedicated host IDs.
         * <p>
         * @return {@code this}
         * @param dedicatedHostId Property dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance. This parameter is required.
         */
        public Builder dedicatedHostId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.props.dedicatedHostId(dedicatedHostId);
            return this;
        }

        /**
         * Property deploymentSetId: Deployment set ID.
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
         * @return {@code this}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID. This parameter is required.
         */
        public Builder deploymentSetId(final com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.props.deploymentSetId(deploymentSetId);
            return this;
        }

        /**
         * Property diskMappings: Disk mappings to attach to instance.
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
         * @return {@code this}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance. This parameter is required.
         */
        public Builder diskMappings(final java.util.List<? extends java.lang.Object> diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }

        /**
         * Property hostName: The hostname of the ECS instance.
         * <p>
         * The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
         * Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
         * Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: The hostname of the ECS instance. This parameter is required.
         */
        public Builder hostName(final java.lang.String hostName) {
            this.props.hostName(hostName);
            return this;
        }
        /**
         * Property hostName: The hostname of the ECS instance.
         * <p>
         * The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
         * Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
         * Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: The hostname of the ECS instance. This parameter is required.
         */
        public Builder hostName(final com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.props.hostName(hostName);
            return this;
        }

        /**
         * Property hpcClusterId: The HPC cluster ID to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs. This parameter is required.
         */
        public Builder hpcClusterId(final java.lang.String hpcClusterId) {
            this.props.hpcClusterId(hpcClusterId);
            return this;
        }
        /**
         * Property hpcClusterId: The HPC cluster ID to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs. This parameter is required.
         */
        public Builder hpcClusterId(final com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.props.hpcClusterId(hpcClusterId);
            return this;
        }

        /**
         * Property imageFamily: The name of the image family.
         * <p>
         * You can configure this parameter to obtain the latest available images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
         * <p>
         * @return {@code this}
         * @param imageFamily Property imageFamily: The name of the image family. This parameter is required.
         */
        public Builder imageFamily(final java.lang.String imageFamily) {
            this.props.imageFamily(imageFamily);
            return this;
        }
        /**
         * Property imageFamily: The name of the image family.
         * <p>
         * You can configure this parameter to obtain the latest available images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
         * <p>
         * @return {@code this}
         * @param imageFamily Property imageFamily: The name of the image family. This parameter is required.
         */
        public Builder imageFamily(final com.aliyun.ros.cdk.core.IResolvable imageFamily) {
            this.props.imageFamily(imageFamily);
            return this;
        }

        /**
         * Property imageId: Image ID to create ecs instance .
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID to create ecs instance . This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: Image ID to create ecs instance .
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID to create ecs instance . This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property imageName: The name of the image.
         * <p>
         * Each image name must be unique in a region. If you specify <strong>ImageId</strong>, <strong>ImageName</strong> is ignored.
         * You cannot use <strong>ImageName</strong> to specify images that are purchased from Alibaba Cloud Marketplace.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The name of the image. This parameter is required.
         */
        public Builder imageName(final java.lang.String imageName) {
            this.props.imageName(imageName);
            return this;
        }
        /**
         * Property imageName: The name of the image.
         * <p>
         * Each image name must be unique in a region. If you specify <strong>ImageId</strong>, <strong>ImageName</strong> is ignored.
         * You cannot use <strong>ImageName</strong> to specify images that are purchased from Alibaba Cloud Marketplace.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The name of the image. This parameter is required.
         */
        public Builder imageName(final com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.props.imageName(imageName);
            return this;
        }

        /**
         * Property imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values: - <strong>true</strong> - <strong>false</strong> Default value: <strong>false</strong>.
         * <p>
         * @return {@code this}
         * @param imageOptionsLoginAsNonRoot Property imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values: - <strong>true</strong> - <strong>false</strong> Default value: <strong>false</strong>. This parameter is required.
         */
        public Builder imageOptionsLoginAsNonRoot(final java.lang.Boolean imageOptionsLoginAsNonRoot) {
            this.props.imageOptionsLoginAsNonRoot(imageOptionsLoginAsNonRoot);
            return this;
        }
        /**
         * Property imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values: - <strong>true</strong> - <strong>false</strong> Default value: <strong>false</strong>.
         * <p>
         * @return {@code this}
         * @param imageOptionsLoginAsNonRoot Property imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values: - <strong>true</strong> - <strong>false</strong> Default value: <strong>false</strong>. This parameter is required.
         */
        public Builder imageOptionsLoginAsNonRoot(final com.aliyun.ros.cdk.core.IResolvable imageOptionsLoginAsNonRoot) {
            this.props.imageOptionsLoginAsNonRoot(imageOptionsLoginAsNonRoot);
            return this;
        }

        /**
         * Property instanceDescription: The description of the ECS instance.
         * <p>
         * The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param instanceDescription Property instanceDescription: The description of the ECS instance. This parameter is required.
         */
        public Builder instanceDescription(final java.lang.String instanceDescription) {
            this.props.instanceDescription(instanceDescription);
            return this;
        }
        /**
         * Property instanceDescription: The description of the ECS instance.
         * <p>
         * The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param instanceDescription Property instanceDescription: The description of the ECS instance. This parameter is required.
         */
        public Builder instanceDescription(final com.aliyun.ros.cdk.core.IResolvable instanceDescription) {
            this.props.instanceDescription(instanceDescription);
            return this;
        }

        /**
         * Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property instanceName: The name of the instance launched from the current scaling configuration.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance launched from the current scaling configuration. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the instance launched from the current scaling configuration.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance launched from the current scaling configuration. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria.
         * <p>
         * @return {@code this}
         * @param instancePatternInfos Property instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria. This parameter is required.
         */
        public Builder instancePatternInfos(final com.aliyun.ros.cdk.core.IResolvable instancePatternInfos) {
            this.props.instancePatternInfos(instancePatternInfos);
            return this;
        }
        /**
         * Property instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria.
         * <p>
         * @return {@code this}
         * @param instancePatternInfos Property instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria. This parameter is required.
         */
        public Builder instancePatternInfos(final java.util.List<? extends java.lang.Object> instancePatternInfos) {
            this.props.instancePatternInfos(instancePatternInfos);
            return this;
        }

        /**
         * Property instanceType: ecs supported instance type.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: ecs supported instance type. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: ecs supported instance type.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: ecs supported instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property instanceTypeOverrides: The instance types.
         * <p>
         * @return {@code this}
         * @param instanceTypeOverrides Property instanceTypeOverrides: The instance types. This parameter is required.
         */
        public Builder instanceTypeOverrides(final com.aliyun.ros.cdk.core.IResolvable instanceTypeOverrides) {
            this.props.instanceTypeOverrides(instanceTypeOverrides);
            return this;
        }
        /**
         * Property instanceTypeOverrides: The instance types.
         * <p>
         * @return {@code this}
         * @param instanceTypeOverrides Property instanceTypeOverrides: The instance types. This parameter is required.
         */
        public Builder instanceTypeOverrides(final java.util.List<? extends java.lang.Object> instanceTypeOverrides) {
            this.props.instanceTypeOverrides(instanceTypeOverrides);
            return this;
        }

        /**
         * Property instanceTypes: ecs supported instance types.
         * <p>
         * Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
         * <p>
         * @return {@code this}
         * @param instanceTypes Property instanceTypes: ecs supported instance types. This parameter is required.
         */
        public Builder instanceTypes(final com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
            this.props.instanceTypes(instanceTypes);
            return this;
        }
        /**
         * Property instanceTypes: ecs supported instance types.
         * <p>
         * Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
         * <p>
         * @return {@code this}
         * @param instanceTypes Property instanceTypes: ecs supported instance types. This parameter is required.
         */
        public Builder instanceTypes(final java.util.List<? extends java.lang.Object> instanceTypes) {
            this.props.instanceTypes(instanceTypes);
            return this;
        }

        /**
         * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
         * <p>
         * @return {@code this}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second).
         * <p>
         * The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final java.lang.Number internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
            return this;
        }
        /**
         * Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second).
         * <p>
         * The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
            return this;
        }

        /**
         * Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
         * <p>
         * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
         * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final java.lang.Number internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }
        /**
         * Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
         * <p>
         * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
         * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
         * <p>
         * @return {@code this}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second). This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * Property ioOptimized: The 'optimized' instance can provide better IO performance.
         * <p>
         * Support 'none' and 'optimized' only, default is 'none'.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance. This parameter is required.
         */
        public Builder ioOptimized(final java.lang.String ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }
        /**
         * Property ioOptimized: The 'optimized' instance can provide better IO performance.
         * <p>
         * Support 'none' and 'optimized' only, default is 'none'.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance. This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }

        /**
         * Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI). This parameter is required.
         */
        public Builder ipv6AddressCount(final java.lang.Number ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }
        /**
         * Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI). This parameter is required.
         */
        public Builder ipv6AddressCount(final com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }

        /**
         * Property keyPairName: SSH key pair name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: SSH key pair name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: SSH key pair name. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property loadBalancerWeight: The weight of the ECS instance as a backend server.
         * <p>
         * Valid values: 1 to 100.
         * Default value: 50.
         * <p>
         * @return {@code this}
         * @param loadBalancerWeight Property loadBalancerWeight: The weight of the ECS instance as a backend server. This parameter is required.
         */
        public Builder loadBalancerWeight(final java.lang.Number loadBalancerWeight) {
            this.props.loadBalancerWeight(loadBalancerWeight);
            return this;
        }
        /**
         * Property loadBalancerWeight: The weight of the ECS instance as a backend server.
         * <p>
         * Valid values: 1 to 100.
         * Default value: 50.
         * <p>
         * @return {@code this}
         * @param loadBalancerWeight Property loadBalancerWeight: The weight of the ECS instance as a backend server. This parameter is required.
         */
        public Builder loadBalancerWeight(final com.aliyun.ros.cdk.core.IResolvable loadBalancerWeight) {
            this.props.loadBalancerWeight(loadBalancerWeight);
            return this;
        }

        /**
         * Property memory: The memory size.
         * <p>
         * Unit: GiB.
         * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
         * <strong>Note</strong>: You can specify <strong>Cpu</strong> and <strong>Memory</strong> to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
         * <p>
         * @return {@code this}
         * @param memory Property memory: The memory size. This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }
        /**
         * Property memory: The memory size.
         * <p>
         * Unit: GiB.
         * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
         * <strong>Note</strong>: You can specify <strong>Cpu</strong> and <strong>Memory</strong> to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
         * <p>
         * @return {@code this}
         * @param memory Property memory: The memory size. This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props.memory(memory);
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
         * Property passwordInherit: Whether to use the password pre-configured in the image you select or not.
         * <p>
         * When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Whether to use the password pre-configured in the image you select or not. This parameter is required.
         */
        public Builder passwordInherit(final java.lang.Boolean passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }
        /**
         * Property passwordInherit: Whether to use the password pre-configured in the image you select or not.
         * <p>
         * When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
         * <p>
         * @return {@code this}
         * @param passwordInherit Property passwordInherit: Whether to use the password pre-configured in the image you select or not. This parameter is required.
         */
        public Builder passwordInherit(final com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }

        /**
         * Property privatePoolOptions: Option settings for private pools.
         * <p>
         * @return {@code this}
         * @param privatePoolOptions Property privatePoolOptions: Option settings for private pools. This parameter is required.
         */
        public Builder privatePoolOptions(final com.aliyun.ros.cdk.core.IResolvable privatePoolOptions) {
            this.props.privatePoolOptions(privatePoolOptions);
            return this;
        }
        /**
         * Property privatePoolOptions: Option settings for private pools.
         * <p>
         * @return {@code this}
         * @param privatePoolOptions Property privatePoolOptions: Option settings for private pools. This parameter is required.
         */
        public Builder privatePoolOptions(final com.aliyun.ros.cdk.ess.RosScalingConfiguration.PrivatePoolOptionsProperty privatePoolOptions) {
            this.props.privatePoolOptions(privatePoolOptions);
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
         * Property scalingConfigurationName: Name of created scaling configuration.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationName Property scalingConfigurationName: Name of created scaling configuration. This parameter is required.
         */
        public Builder scalingConfigurationName(final java.lang.String scalingConfigurationName) {
            this.props.scalingConfigurationName(scalingConfigurationName);
            return this;
        }
        /**
         * Property scalingConfigurationName: Name of created scaling configuration.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationName Property scalingConfigurationName: Name of created scaling configuration. This parameter is required.
         */
        public Builder scalingConfigurationName(final com.aliyun.ros.cdk.core.IResolvable scalingConfigurationName) {
            this.props.scalingConfigurationName(scalingConfigurationName);
            return this;
        }

        /**
         * Property securityEnhancementStrategy: Specifies whether to enable security hardening.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>Active</strong>: enables security hardening. This value is applicable only to public images.</li>
         * <li><strong>Deactive</strong>: disables security hardening. This value is applicable to all image types.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy: Specifies whether to enable security hardening. This parameter is required.
         */
        public Builder securityEnhancementStrategy(final java.lang.String securityEnhancementStrategy) {
            this.props.securityEnhancementStrategy(securityEnhancementStrategy);
            return this;
        }
        /**
         * Property securityEnhancementStrategy: Specifies whether to enable security hardening.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>Active</strong>: enables security hardening. This value is applicable only to public images.</li>
         * <li><strong>Deactive</strong>: disables security hardening. This value is applicable to all image types.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy: Specifies whether to enable security hardening. This parameter is required.
         */
        public Builder securityEnhancementStrategy(final com.aliyun.ros.cdk.core.IResolvable securityEnhancementStrategy) {
            this.props.securityEnhancementStrategy(securityEnhancementStrategy);
            return this;
        }

        /**
         * Property securityGroupId: Security Group to create ecs instance.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security Group to create ecs instance. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Security Group to create ecs instance.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security Group to create ecs instance. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration.
         * <p>
         * <strong>Note</strong>: If you specify <strong>SecurityGroupId</strong>, you cannot specify <strong>SecurityGroupIds</strong>.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration. This parameter is required.
         */
        public Builder securityGroupIds(final com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }
        /**
         * Property securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration.
         * <p>
         * <strong>Note</strong>: If you specify <strong>SecurityGroupId</strong>, you cannot specify <strong>SecurityGroupIds</strong>.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration. This parameter is required.
         */
        public Builder securityGroupIds(final java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }

        /**
         * Property spotDuration: The retention period of the preemptible instance.
         * <p>
         * Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
         * The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
         * If you set this parameter to 0, no protection period is specified for the preemptible instance.
         * Default value: 1
         * <p>
         * @return {@code this}
         * @param spotDuration Property spotDuration: The retention period of the preemptible instance. This parameter is required.
         */
        public Builder spotDuration(final java.lang.Number spotDuration) {
            this.props.spotDuration(spotDuration);
            return this;
        }
        /**
         * Property spotDuration: The retention period of the preemptible instance.
         * <p>
         * Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
         * The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
         * If you set this parameter to 0, no protection period is specified for the preemptible instance.
         * Default value: 1
         * <p>
         * @return {@code this}
         * @param spotDuration Property spotDuration: The retention period of the preemptible instance. This parameter is required.
         */
        public Builder spotDuration(final com.aliyun.ros.cdk.core.IResolvable spotDuration) {
            this.props.spotDuration(spotDuration);
            return this;
        }

        /**
         * Property spotInterruptionBehavior: The interruption mode of the preemptible instance.
         * <p>
         * Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
         * <p>
         * @return {@code this}
         * @param spotInterruptionBehavior Property spotInterruptionBehavior: The interruption mode of the preemptible instance. This parameter is required.
         */
        public Builder spotInterruptionBehavior(final java.lang.String spotInterruptionBehavior) {
            this.props.spotInterruptionBehavior(spotInterruptionBehavior);
            return this;
        }
        /**
         * Property spotInterruptionBehavior: The interruption mode of the preemptible instance.
         * <p>
         * Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
         * <p>
         * @return {@code this}
         * @param spotInterruptionBehavior Property spotInterruptionBehavior: The interruption mode of the preemptible instance. This parameter is required.
         */
        public Builder spotInterruptionBehavior(final com.aliyun.ros.cdk.core.IResolvable spotInterruptionBehavior) {
            this.props.spotInterruptionBehavior(spotInterruptionBehavior);
            return this;
        }

        /**
         * Property spotPriceLimit: Set the hourly maximum price for the instance.
         * <p>
         * Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: Set the hourly maximum price for the instance. This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.Number spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }
        /**
         * Property spotPriceLimit: Set the hourly maximum price for the instance.
         * <p>
         * Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: Set the hourly maximum price for the instance. This parameter is required.
         */
        public Builder spotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
         * <p>
         * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
         * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         * At most 50 items can be specified.
         * Key
         * ecs instance type
         * Value
         * Supports a maximum of 3 decimal places.
         * <p>
         * @return {@code this}
         * @param spotPriceLimitForInstanceType Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type. This parameter is required.
         */
        public Builder spotPriceLimitForInstanceType(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimitForInstanceType) {
            this.props.spotPriceLimitForInstanceType(spotPriceLimitForInstanceType);
            return this;
        }
        /**
         * Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
         * <p>
         * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
         * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         * At most 50 items can be specified.
         * Key
         * ecs instance type
         * Value
         * Supports a maximum of 3 decimal places.
         * <p>
         * @return {@code this}
         * @param spotPriceLimitForInstanceType Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type. This parameter is required.
         */
        public Builder spotPriceLimitForInstanceType(final java.util.Map<java.lang.String, ? extends java.lang.Object> spotPriceLimitForInstanceType) {
            this.props.spotPriceLimitForInstanceType(spotPriceLimitForInstanceType);
            return this;
        }

        /**
         * Property spotStrategy: Preemption strategy for post-paid instances.
         * <p>
         * It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
         * NoSpot: Normal pay-per-use instance
         * SpotWithPriceLimit: Set a preemptive instance of the cap price
         * SpotAsPriceGo: System automatic bidding, following the current market actual price
         * Default: NoSpot.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: Preemption strategy for post-paid instances. This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }
        /**
         * Property spotStrategy: Preemption strategy for post-paid instances.
         * <p>
         * It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
         * NoSpot: Normal pay-per-use instance
         * SpotWithPriceLimit: Set a preemptive instance of the cap price
         * SpotAsPriceGo: System automatic bidding, following the current market actual price
         * Default: NoSpot.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: Preemption strategy for post-paid instances. This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props.spotStrategy(spotStrategy);
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
         * Property systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong></li>
         * <li><strong>false</strong>
         * <strong>Note</strong>: This parameter is available only if you set <strong>SystemDiskCategory</strong> to <strong>cloud_auto</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskBurstingEnabled Property systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk. This parameter is required.
         */
        public Builder systemDiskBurstingEnabled(final java.lang.Boolean systemDiskBurstingEnabled) {
            this.props.systemDiskBurstingEnabled(systemDiskBurstingEnabled);
            return this;
        }
        /**
         * Property systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong></li>
         * <li><strong>false</strong>
         * <strong>Note</strong>: This parameter is available only if you set <strong>SystemDiskCategory</strong> to <strong>cloud_auto</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskBurstingEnabled Property systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk. This parameter is required.
         */
        public Builder systemDiskBurstingEnabled(final com.aliyun.ros.cdk.core.IResolvable systemDiskBurstingEnabled) {
            this.props.systemDiskBurstingEnabled(systemDiskBurstingEnabled);
            return this;
        }

        /**
         * Property systemDiskCategories: The categories of the system disks.
         * <p>
         * If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
         * <p>
         * <ul>
         * <li><strong>cloud</strong>: basic disk</li>
         * <li><strong>cloud_efficiency</strong>: ultra disk</li>
         * <li><strong>cloud_ssd</strong>: standard SSD</li>
         * <li><strong>cloud_essd</strong>: ESSD
         * <strong>Note</strong>: If you specify <strong>SystemDiskCategories</strong>, you cannot specify <strong>SystemDiskCategory</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskCategories Property systemDiskCategories: The categories of the system disks. This parameter is required.
         */
        public Builder systemDiskCategories(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategories) {
            this.props.systemDiskCategories(systemDiskCategories);
            return this;
        }
        /**
         * Property systemDiskCategories: The categories of the system disks.
         * <p>
         * If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
         * <p>
         * <ul>
         * <li><strong>cloud</strong>: basic disk</li>
         * <li><strong>cloud_efficiency</strong>: ultra disk</li>
         * <li><strong>cloud_ssd</strong>: standard SSD</li>
         * <li><strong>cloud_essd</strong>: ESSD
         * <strong>Note</strong>: If you specify <strong>SystemDiskCategories</strong>, you cannot specify <strong>SystemDiskCategory</strong>.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskCategories Property systemDiskCategories: The categories of the system disks. This parameter is required.
         */
        public Builder systemDiskCategories(final java.util.List<? extends java.lang.Object> systemDiskCategories) {
            this.props.systemDiskCategories(systemDiskCategories);
            return this;
        }

        /**
         * Property systemDiskCategory: Category of system disk.
         * <p>
         * Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
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
         * Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * Property systemDiskDescription: The description of the system disk.
         * <p>
         * The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param systemDiskDescription Property systemDiskDescription: The description of the system disk. This parameter is required.
         */
        public Builder systemDiskDescription(final java.lang.String systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }
        /**
         * Property systemDiskDescription: The description of the system disk.
         * <p>
         * The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param systemDiskDescription Property systemDiskDescription: The description of the system disk. This parameter is required.
         */
        public Builder systemDiskDescription(final com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }

        /**
         * Property systemDiskDiskName: The name of the system disk.
         * <p>
         * The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param systemDiskDiskName Property systemDiskDiskName: The name of the system disk. This parameter is required.
         */
        public Builder systemDiskDiskName(final java.lang.String systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }
        /**
         * Property systemDiskDiskName: The name of the system disk.
         * <p>
         * The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param systemDiskDiskName Property systemDiskDiskName: The name of the system disk. This parameter is required.
         */
        public Builder systemDiskDiskName(final com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }

        /**
         * Property systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>AES-256</strong></li>
         * <li><strong>SM4-128</strong>
         * Default value: <strong>AES-256</strong></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskEncryptAlgorithm Property systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk. This parameter is required.
         */
        public Builder systemDiskEncryptAlgorithm(final java.lang.String systemDiskEncryptAlgorithm) {
            this.props.systemDiskEncryptAlgorithm(systemDiskEncryptAlgorithm);
            return this;
        }
        /**
         * Property systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>AES-256</strong></li>
         * <li><strong>SM4-128</strong>
         * Default value: <strong>AES-256</strong></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskEncryptAlgorithm Property systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk. This parameter is required.
         */
        public Builder systemDiskEncryptAlgorithm(final com.aliyun.ros.cdk.core.IResolvable systemDiskEncryptAlgorithm) {
            this.props.systemDiskEncryptAlgorithm(systemDiskEncryptAlgorithm);
            return this;
        }

        /**
         * Property systemDiskEncrypted: Specifies whether to encrypt the system disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong></li>
         * <li><strong>false</strong>
         * Default value: <strong>false</strong></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskEncrypted Property systemDiskEncrypted: Specifies whether to encrypt the system disk. This parameter is required.
         */
        public Builder systemDiskEncrypted(final java.lang.Boolean systemDiskEncrypted) {
            this.props.systemDiskEncrypted(systemDiskEncrypted);
            return this;
        }
        /**
         * Property systemDiskEncrypted: Specifies whether to encrypt the system disk.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>true</strong></li>
         * <li><strong>false</strong>
         * Default value: <strong>false</strong></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param systemDiskEncrypted Property systemDiskEncrypted: Specifies whether to encrypt the system disk. This parameter is required.
         */
        public Builder systemDiskEncrypted(final com.aliyun.ros.cdk.core.IResolvable systemDiskEncrypted) {
            this.props.systemDiskEncrypted(systemDiskEncrypted);
            return this;
        }

        /**
         * Property systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskKmsKeyId Property systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk. This parameter is required.
         */
        public Builder systemDiskKmsKeyId(final java.lang.String systemDiskKmsKeyId) {
            this.props.systemDiskKmsKeyId(systemDiskKmsKeyId);
            return this;
        }
        /**
         * Property systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk.
         * <p>
         * @return {@code this}
         * @param systemDiskKmsKeyId Property systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk. This parameter is required.
         */
        public Builder systemDiskKmsKeyId(final com.aliyun.ros.cdk.core.IResolvable systemDiskKmsKeyId) {
            this.props.systemDiskKmsKeyId(systemDiskKmsKeyId);
            return this;
        }

        /**
         * Property systemDiskPerformanceLevel: The performance level of an ESSD.
         * <p>
         * @return {@code this}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of an ESSD. This parameter is required.
         */
        public Builder systemDiskPerformanceLevel(final java.lang.String systemDiskPerformanceLevel) {
            this.props.systemDiskPerformanceLevel(systemDiskPerformanceLevel);
            return this;
        }
        /**
         * Property systemDiskPerformanceLevel: The performance level of an ESSD.
         * <p>
         * @return {@code this}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of an ESSD. This parameter is required.
         */
        public Builder systemDiskPerformanceLevel(final com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
            this.props.systemDiskPerformanceLevel(systemDiskPerformanceLevel);
            return this;
        }

        /**
         * Property systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk.
         * <p>
         * <strong>Note</strong>: IOPS measures the number of read and write operations that an EBS device can process per second.
         * <p>
         * @return {@code this}
         * @param systemDiskProvisionedIops Property systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk. This parameter is required.
         */
        public Builder systemDiskProvisionedIops(final java.lang.Number systemDiskProvisionedIops) {
            this.props.systemDiskProvisionedIops(systemDiskProvisionedIops);
            return this;
        }
        /**
         * Property systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk.
         * <p>
         * <strong>Note</strong>: IOPS measures the number of read and write operations that an EBS device can process per second.
         * <p>
         * @return {@code this}
         * @param systemDiskProvisionedIops Property systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk. This parameter is required.
         */
        public Builder systemDiskProvisionedIops(final com.aliyun.ros.cdk.core.IResolvable systemDiskProvisionedIops) {
            this.props.systemDiskProvisionedIops(systemDiskProvisionedIops);
            return this;
        }

        /**
         * Property systemDiskSize: Size of system disk.
         * <p>
         * Unit is GB.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: Size of system disk. This parameter is required.
         */
        public Builder systemDiskSize(final java.lang.Number systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }
        /**
         * Property systemDiskSize: Size of system disk.
         * <p>
         * Unit is GB.
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: Size of system disk. This parameter is required.
         */
        public Builder systemDiskSize(final com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }

        /**
         * Property tagList: The tags of an instance in list format.
         * <p>
         * Do not use with Tags at the same time.
         * You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
         * At most 20 tags can be specified.
         * Key
         * It can be up to 64 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Cannot be a null string.
         * Value
         * It can be up to 128 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"&lt;resource_name&gt;<em>stack</em>&lt;stack_id&gt;") if possible.
         * <p>
         * @return {@code this}
         * @param tagList Property tagList: The tags of an instance in list format. This parameter is required.
         */
        public Builder tagList(final com.aliyun.ros.cdk.core.IResolvable tagList) {
            this.props.tagList(tagList);
            return this;
        }
        /**
         * Property tagList: The tags of an instance in list format.
         * <p>
         * Do not use with Tags at the same time.
         * You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
         * At most 20 tags can be specified.
         * Key
         * It can be up to 64 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Cannot be a null string.
         * Value
         * It can be up to 128 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"&lt;resource_name&gt;<em>stack</em>&lt;stack_id&gt;") if possible.
         * <p>
         * @return {@code this}
         * @param tagList Property tagList: The tags of an instance in list format. This parameter is required.
         */
        public Builder tagList(final java.util.List<? extends java.lang.Object> tagList) {
            this.props.tagList(tagList);
            return this;
        }

        /**
         * Property tenancy: Specifies whether to create an ECS instance on a dedicated host.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>default</strong>: does not create an ECS instance on a dedicated host.</li>
         * <li><strong>host</strong>: creates an ECS instance on a dedicated host. If you do not specify <strong>DedicatedHostId</strong>, Alibaba Cloud selects a dedicated host for the ECS instance.
         * Default value: <strong>default</strong></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param tenancy Property tenancy: Specifies whether to create an ECS instance on a dedicated host. This parameter is required.
         */
        public Builder tenancy(final java.lang.String tenancy) {
            this.props.tenancy(tenancy);
            return this;
        }
        /**
         * Property tenancy: Specifies whether to create an ECS instance on a dedicated host.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>default</strong>: does not create an ECS instance on a dedicated host.</li>
         * <li><strong>host</strong>: creates an ECS instance on a dedicated host. If you do not specify <strong>DedicatedHostId</strong>, Alibaba Cloud selects a dedicated host for the ECS instance.
         * Default value: <strong>default</strong></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param tenancy Property tenancy: Specifies whether to create an ECS instance on a dedicated host. This parameter is required.
         */
        public Builder tenancy(final com.aliyun.ros.cdk.core.IResolvable tenancy) {
            this.props.tenancy(tenancy);
            return this;
        }

        /**
         * Property userData: User data to pass to instance.
         * <p>
         * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * <p>
         * @return {@code this}
         * @param userData Property userData: User data to pass to instance. This parameter is required.
         */
        public Builder userData(final java.lang.String userData) {
            this.props.userData(userData);
            return this;
        }
        /**
         * Property userData: User data to pass to instance.
         * <p>
         * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * <p>
         * @return {@code this}
         * @param userData Property userData: User data to pass to instance. This parameter is required.
         */
        public Builder userData(final com.aliyun.ros.cdk.core.IResolvable userData) {
            this.props.userData(userData);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the ECS instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the ECS instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID of the ECS instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the ECS instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.ScalingConfiguration}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.ScalingConfiguration build() {
            return new com.aliyun.ros.cdk.ess.ScalingConfiguration(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
