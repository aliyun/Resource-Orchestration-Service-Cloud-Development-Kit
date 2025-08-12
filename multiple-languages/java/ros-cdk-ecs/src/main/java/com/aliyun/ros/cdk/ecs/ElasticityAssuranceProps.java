package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ElasticityAssurance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-elasticityassurance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.160Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.ElasticityAssuranceProps")
@software.amazon.jsii.Jsii.Proxy(ElasticityAssuranceProps.Jsii$Proxy.class)
public interface ElasticityAssuranceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
     * <p>
     * Valid values: 1 to 1000.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceAmount();

    /**
     * Property instanceTypes: Instance type.
     * <p>
     * Currently, an elasticity assurance can be created to reserve the capacity of a single instance type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceTypes();

    /**
     * Property zoneId: The zone ID of the elasticity assurance.
     * <p>
     * Currently, an elasticity assurance can be used to reserve resources within a single zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property autoRenew: Whether to enable automatic renewal.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: The period for automatic renewal.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property description: The description of the elasticity assurance.
     * <p>
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     * This parameter is empty by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property instanceCpuCoreCount: The number of CPU cores for the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceCpuCoreCount() {
        return null;
    }

    /**
     * Property period: The effective duration of the elasticity assurance.
     * <p>
     * The unit of the effective duration is determined by the PeriodUnit value. Valid values:
     * When the PeriodUnit parameter is set to Month, the valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * When the PeriodUnit parameter is set to Year, the valid values are 1, 2, 3, 4, and 5.
     * Default value: 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The unit of the effective duration of the elasticity assurance.
     * <p>
     * Valid values:
     * Month
     * Year
     * Default value: Year.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property privatePoolOptions:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivatePoolOptions() {
        return null;
    }

    /**
     * Property recurrenceRules: Recurrence rules for the elasticity assurance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRecurrenceRules() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property startTime: The time when the elasticity assurance takes effect.
     * <p>
     * The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartTime() {
        return null;
    }

    /**
     * Property tags:.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ElasticityAssuranceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ElasticityAssuranceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ElasticityAssuranceProps> {
        java.lang.Object instanceAmount;
        java.lang.Object instanceTypes;
        java.lang.Object zoneId;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object description;
        java.lang.Object instanceCpuCoreCount;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object privatePoolOptions;
        java.lang.Object recurrenceRules;
        java.lang.Object resourceGroupId;
        java.lang.Object startTime;
        java.util.List<com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty> tags;

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getInstanceAmount}
         * @param instanceAmount Property instanceAmount: The total number of instances for which to reserve capacity of an instance type. This parameter is required.
         *                       Valid values: 1 to 1000.
         * @return {@code this}
         */
        public Builder instanceAmount(java.lang.Number instanceAmount) {
            this.instanceAmount = instanceAmount;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getInstanceAmount}
         * @param instanceAmount Property instanceAmount: The total number of instances for which to reserve capacity of an instance type. This parameter is required.
         *                       Valid values: 1 to 1000.
         * @return {@code this}
         */
        public Builder instanceAmount(com.aliyun.ros.cdk.core.IResolvable instanceAmount) {
            this.instanceAmount = instanceAmount;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getInstanceTypes}
         * @param instanceTypes Property instanceTypes: Instance type. This parameter is required.
         *                      Currently, an elasticity assurance can be created to reserve the capacity of a single instance type.
         * @return {@code this}
         */
        public Builder instanceTypes(com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getInstanceTypes}
         * @param instanceTypes Property instanceTypes: Instance type. This parameter is required.
         *                      Currently, an elasticity assurance can be created to reserve the capacity of a single instance type.
         * @return {@code this}
         */
        public Builder instanceTypes(java.util.List<? extends java.lang.Object> instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the elasticity assurance. This parameter is required.
         *               Currently, an elasticity assurance can be used to reserve resources within a single zone.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the elasticity assurance. This parameter is required.
         *               Currently, an elasticity assurance can be used to reserve resources within a single zone.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether to enable automatic renewal.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether to enable automatic renewal.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The period for automatic renewal.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The period for automatic renewal.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getDescription}
         * @param description Property description: The description of the elasticity assurance.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         *                    This parameter is empty by default.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getDescription}
         * @param description Property description: The description of the elasticity assurance.
         *                    The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         *                    This parameter is empty by default.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getInstanceCpuCoreCount}
         * @param instanceCpuCoreCount Property instanceCpuCoreCount: The number of CPU cores for the instance.
         * @return {@code this}
         */
        public Builder instanceCpuCoreCount(java.lang.Number instanceCpuCoreCount) {
            this.instanceCpuCoreCount = instanceCpuCoreCount;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getInstanceCpuCoreCount}
         * @param instanceCpuCoreCount Property instanceCpuCoreCount: The number of CPU cores for the instance.
         * @return {@code this}
         */
        public Builder instanceCpuCoreCount(com.aliyun.ros.cdk.core.IResolvable instanceCpuCoreCount) {
            this.instanceCpuCoreCount = instanceCpuCoreCount;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getPeriod}
         * @param period Property period: The effective duration of the elasticity assurance.
         *               The unit of the effective duration is determined by the PeriodUnit value. Valid values:
         *               When the PeriodUnit parameter is set to Month, the valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
         *               When the PeriodUnit parameter is set to Year, the valid values are 1, 2, 3, 4, and 5.
         *               Default value: 1.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getPeriod}
         * @param period Property period: The effective duration of the elasticity assurance.
         *               The unit of the effective duration is determined by the PeriodUnit value. Valid values:
         *               When the PeriodUnit parameter is set to Month, the valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
         *               When the PeriodUnit parameter is set to Year, the valid values are 1, 2, 3, 4, and 5.
         *               Default value: 1.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the effective duration of the elasticity assurance.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Year.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the effective duration of the elasticity assurance.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Year.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getPrivatePoolOptions}
         * @param privatePoolOptions Property privatePoolOptions:.
         * @return {@code this}
         */
        public Builder privatePoolOptions(com.aliyun.ros.cdk.core.IResolvable privatePoolOptions) {
            this.privatePoolOptions = privatePoolOptions;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getPrivatePoolOptions}
         * @param privatePoolOptions Property privatePoolOptions:.
         * @return {@code this}
         */
        public Builder privatePoolOptions(com.aliyun.ros.cdk.ecs.RosElasticityAssurance.PrivatePoolOptionsProperty privatePoolOptions) {
            this.privatePoolOptions = privatePoolOptions;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getRecurrenceRules}
         * @param recurrenceRules Property recurrenceRules: Recurrence rules for the elasticity assurance.
         * @return {@code this}
         */
        public Builder recurrenceRules(com.aliyun.ros.cdk.core.IResolvable recurrenceRules) {
            this.recurrenceRules = recurrenceRules;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getRecurrenceRules}
         * @param recurrenceRules Property recurrenceRules: Recurrence rules for the elasticity assurance.
         * @return {@code this}
         */
        public Builder recurrenceRules(java.util.List<? extends java.lang.Object> recurrenceRules) {
            this.recurrenceRules = recurrenceRules;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getStartTime}
         * @param startTime Property startTime: The time when the elasticity assurance takes effect.
         *                  The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
         * @return {@code this}
         */
        public Builder startTime(java.lang.String startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getStartTime}
         * @param startTime Property startTime: The time when the elasticity assurance takes effect.
         *                  The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
         * @return {@code this}
         */
        public Builder startTime(com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link ElasticityAssuranceProps#getTags}
         * @param tags Property tags:.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ElasticityAssuranceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ElasticityAssuranceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ElasticityAssuranceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ElasticityAssuranceProps {
        private final java.lang.Object instanceAmount;
        private final java.lang.Object instanceTypes;
        private final java.lang.Object zoneId;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object description;
        private final java.lang.Object instanceCpuCoreCount;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object privatePoolOptions;
        private final java.lang.Object recurrenceRules;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object startTime;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceAmount = software.amazon.jsii.Kernel.get(this, "instanceAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceTypes = software.amazon.jsii.Kernel.get(this, "instanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceCpuCoreCount = software.amazon.jsii.Kernel.get(this, "instanceCpuCoreCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privatePoolOptions = software.amazon.jsii.Kernel.get(this, "privatePoolOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.recurrenceRules = software.amazon.jsii.Kernel.get(this, "recurrenceRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startTime = software.amazon.jsii.Kernel.get(this, "startTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceAmount = java.util.Objects.requireNonNull(builder.instanceAmount, "instanceAmount is required");
            this.instanceTypes = java.util.Objects.requireNonNull(builder.instanceTypes, "instanceTypes is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.description = builder.description;
            this.instanceCpuCoreCount = builder.instanceCpuCoreCount;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.privatePoolOptions = builder.privatePoolOptions;
            this.recurrenceRules = builder.recurrenceRules;
            this.resourceGroupId = builder.resourceGroupId;
            this.startTime = builder.startTime;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getInstanceAmount() {
            return this.instanceAmount;
        }

        @Override
        public final java.lang.Object getInstanceTypes() {
            return this.instanceTypes;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getInstanceCpuCoreCount() {
            return this.instanceCpuCoreCount;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getPrivatePoolOptions() {
            return this.privatePoolOptions;
        }

        @Override
        public final java.lang.Object getRecurrenceRules() {
            return this.recurrenceRules;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getStartTime() {
            return this.startTime;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceAmount", om.valueToTree(this.getInstanceAmount()));
            data.set("instanceTypes", om.valueToTree(this.getInstanceTypes()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getInstanceCpuCoreCount() != null) {
                data.set("instanceCpuCoreCount", om.valueToTree(this.getInstanceCpuCoreCount()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getPrivatePoolOptions() != null) {
                data.set("privatePoolOptions", om.valueToTree(this.getPrivatePoolOptions()));
            }
            if (this.getRecurrenceRules() != null) {
                data.set("recurrenceRules", om.valueToTree(this.getRecurrenceRules()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getStartTime() != null) {
                data.set("startTime", om.valueToTree(this.getStartTime()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.ElasticityAssuranceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ElasticityAssuranceProps.Jsii$Proxy that = (ElasticityAssuranceProps.Jsii$Proxy) o;

            if (!instanceAmount.equals(that.instanceAmount)) return false;
            if (!instanceTypes.equals(that.instanceTypes)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.instanceCpuCoreCount != null ? !this.instanceCpuCoreCount.equals(that.instanceCpuCoreCount) : that.instanceCpuCoreCount != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.privatePoolOptions != null ? !this.privatePoolOptions.equals(that.privatePoolOptions) : that.privatePoolOptions != null) return false;
            if (this.recurrenceRules != null ? !this.recurrenceRules.equals(that.recurrenceRules) : that.recurrenceRules != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.startTime != null ? !this.startTime.equals(that.startTime) : that.startTime != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceAmount.hashCode();
            result = 31 * result + (this.instanceTypes.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.instanceCpuCoreCount != null ? this.instanceCpuCoreCount.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.privatePoolOptions != null ? this.privatePoolOptions.hashCode() : 0);
            result = 31 * result + (this.recurrenceRules != null ? this.recurrenceRules.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.startTime != null ? this.startTime.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
