package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::ElasticityAssurance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:55.166Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.ElasticityAssurance")
public class ElasticityAssurance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.IElasticityAssurance {

    protected ElasticityAssurance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ElasticityAssurance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ElasticityAssurance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ElasticityAssuranceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ElasticityAssurance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ElasticityAssuranceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PrivatePoolOptionsId: The ID of the elasticity assurance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivatePoolOptionsId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivatePoolOptionsId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ElasticityAssuranceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.ElasticityAssuranceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.ElasticityAssurance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.ElasticityAssurance> {
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
        private final com.aliyun.ros.cdk.ecs.ElasticityAssuranceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.ElasticityAssuranceProps.Builder();
        }

        /**
         * Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
         * <p>
         * Valid values: 1 to 1000.
         * <p>
         * @return {@code this}
         * @param instanceAmount Property instanceAmount: The total number of instances for which to reserve capacity of an instance type. This parameter is required.
         */
        public Builder instanceAmount(final java.lang.Number instanceAmount) {
            this.props.instanceAmount(instanceAmount);
            return this;
        }
        /**
         * Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
         * <p>
         * Valid values: 1 to 1000.
         * <p>
         * @return {@code this}
         * @param instanceAmount Property instanceAmount: The total number of instances for which to reserve capacity of an instance type. This parameter is required.
         */
        public Builder instanceAmount(final com.aliyun.ros.cdk.core.IResolvable instanceAmount) {
            this.props.instanceAmount(instanceAmount);
            return this;
        }

        /**
         * Property instanceTypes: Instance type.
         * <p>
         * Currently, an elasticity assurance can be created to reserve the capacity of a single instance type.
         * <p>
         * @return {@code this}
         * @param instanceTypes Property instanceTypes: Instance type. This parameter is required.
         */
        public Builder instanceTypes(final com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
            this.props.instanceTypes(instanceTypes);
            return this;
        }
        /**
         * Property instanceTypes: Instance type.
         * <p>
         * Currently, an elasticity assurance can be created to reserve the capacity of a single instance type.
         * <p>
         * @return {@code this}
         * @param instanceTypes Property instanceTypes: Instance type. This parameter is required.
         */
        public Builder instanceTypes(final java.util.List<? extends java.lang.Object> instanceTypes) {
            this.props.instanceTypes(instanceTypes);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the elasticity assurance.
         * <p>
         * Currently, an elasticity assurance can be used to reserve resources within a single zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the elasticity assurance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID of the elasticity assurance.
         * <p>
         * Currently, an elasticity assurance can be used to reserve resources within a single zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the elasticity assurance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property autoRenew: Whether to enable automatic renewal.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to enable automatic renewal. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether to enable automatic renewal.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to enable automatic renewal. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewPeriod: The period for automatic renewal.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The period for automatic renewal. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: The period for automatic renewal.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The period for automatic renewal. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property description: The description of the elasticity assurance.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the elasticity assurance. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the elasticity assurance.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * This parameter is empty by default.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the elasticity assurance. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property instanceCpuCoreCount: The number of CPU cores for the instance.
         * <p>
         * @return {@code this}
         * @param instanceCpuCoreCount Property instanceCpuCoreCount: The number of CPU cores for the instance. This parameter is required.
         */
        public Builder instanceCpuCoreCount(final java.lang.Number instanceCpuCoreCount) {
            this.props.instanceCpuCoreCount(instanceCpuCoreCount);
            return this;
        }
        /**
         * Property instanceCpuCoreCount: The number of CPU cores for the instance.
         * <p>
         * @return {@code this}
         * @param instanceCpuCoreCount Property instanceCpuCoreCount: The number of CPU cores for the instance. This parameter is required.
         */
        public Builder instanceCpuCoreCount(final com.aliyun.ros.cdk.core.IResolvable instanceCpuCoreCount) {
            this.props.instanceCpuCoreCount(instanceCpuCoreCount);
            return this;
        }

        /**
         * Property period: The effective duration of the elasticity assurance.
         * <p>
         * The unit of the effective duration is determined by the PeriodUnit value. Valid values:
         * When the PeriodUnit parameter is set to Month, the valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
         * When the PeriodUnit parameter is set to Year, the valid values are 1, 2, 3, 4, and 5.
         * Default value: 1.
         * <p>
         * @return {@code this}
         * @param period Property period: The effective duration of the elasticity assurance. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The effective duration of the elasticity assurance.
         * <p>
         * The unit of the effective duration is determined by the PeriodUnit value. Valid values:
         * When the PeriodUnit parameter is set to Month, the valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
         * When the PeriodUnit parameter is set to Year, the valid values are 1, 2, 3, 4, and 5.
         * Default value: 1.
         * <p>
         * @return {@code this}
         * @param period Property period: The effective duration of the elasticity assurance. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the effective duration of the elasticity assurance.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Year.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the effective duration of the elasticity assurance. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the effective duration of the elasticity assurance.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Year.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the effective duration of the elasticity assurance. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property privatePoolOptions:.
         * <p>
         * @return {@code this}
         * @param privatePoolOptions Property privatePoolOptions:. This parameter is required.
         */
        public Builder privatePoolOptions(final com.aliyun.ros.cdk.core.IResolvable privatePoolOptions) {
            this.props.privatePoolOptions(privatePoolOptions);
            return this;
        }
        /**
         * Property privatePoolOptions:.
         * <p>
         * @return {@code this}
         * @param privatePoolOptions Property privatePoolOptions:. This parameter is required.
         */
        public Builder privatePoolOptions(final com.aliyun.ros.cdk.ecs.RosElasticityAssurance.PrivatePoolOptionsProperty privatePoolOptions) {
            this.props.privatePoolOptions(privatePoolOptions);
            return this;
        }

        /**
         * Property recurrenceRules: Recurrence rules for the elasticity assurance.
         * <p>
         * @return {@code this}
         * @param recurrenceRules Property recurrenceRules: Recurrence rules for the elasticity assurance. This parameter is required.
         */
        public Builder recurrenceRules(final com.aliyun.ros.cdk.core.IResolvable recurrenceRules) {
            this.props.recurrenceRules(recurrenceRules);
            return this;
        }
        /**
         * Property recurrenceRules: Recurrence rules for the elasticity assurance.
         * <p>
         * @return {@code this}
         * @param recurrenceRules Property recurrenceRules: Recurrence rules for the elasticity assurance. This parameter is required.
         */
        public Builder recurrenceRules(final java.util.List<? extends java.lang.Object> recurrenceRules) {
            this.props.recurrenceRules(recurrenceRules);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property startTime: The time when the elasticity assurance takes effect.
         * <p>
         * The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The time when the elasticity assurance takes effect. This parameter is required.
         */
        public Builder startTime(final java.lang.String startTime) {
            this.props.startTime(startTime);
            return this;
        }
        /**
         * Property startTime: The time when the elasticity assurance takes effect.
         * <p>
         * The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
         * <p>
         * @return {@code this}
         * @param startTime Property startTime: The time when the elasticity assurance takes effect. This parameter is required.
         */
        public Builder startTime(final com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.props.startTime(startTime);
            return this;
        }

        /**
         * Property tags:.
         * <p>
         * @return {@code this}
         * @param tags Property tags:. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.ElasticityAssurance}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.ElasticityAssurance build() {
            return new com.aliyun.ros.cdk.ecs.ElasticityAssurance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
