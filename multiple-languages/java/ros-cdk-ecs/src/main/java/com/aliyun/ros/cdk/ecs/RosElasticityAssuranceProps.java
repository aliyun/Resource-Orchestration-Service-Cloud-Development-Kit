package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosElasticityAssurance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-elasticityassurance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:38.219Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosElasticityAssuranceProps")
@software.amazon.jsii.Jsii.Proxy(RosElasticityAssuranceProps.Jsii$Proxy.class)
public interface RosElasticityAssuranceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceAmount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceTypes();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivatePoolOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosElasticityAssuranceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosElasticityAssuranceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosElasticityAssuranceProps> {
        java.lang.Object instanceAmount;
        java.lang.Object instanceTypes;
        java.lang.Object zoneId;
        java.lang.Object description;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object privatePoolOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object startTime;
        java.util.List<com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty> tags;

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getInstanceAmount}
         * @param instanceAmount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceAmount(java.lang.Number instanceAmount) {
            this.instanceAmount = instanceAmount;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getInstanceAmount}
         * @param instanceAmount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceAmount(com.aliyun.ros.cdk.core.IResolvable instanceAmount) {
            this.instanceAmount = instanceAmount;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getInstanceTypes}
         * @param instanceTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceTypes(com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getInstanceTypes}
         * @param instanceTypes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceTypes(java.util.List<? extends java.lang.Object> instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getPrivatePoolOptions}
         * @param privatePoolOptions the value to be set.
         * @return {@code this}
         */
        public Builder privatePoolOptions(com.aliyun.ros.cdk.core.IResolvable privatePoolOptions) {
            this.privatePoolOptions = privatePoolOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getPrivatePoolOptions}
         * @param privatePoolOptions the value to be set.
         * @return {@code this}
         */
        public Builder privatePoolOptions(com.aliyun.ros.cdk.ecs.RosElasticityAssurance.PrivatePoolOptionsProperty privatePoolOptions) {
            this.privatePoolOptions = privatePoolOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getStartTime}
         * @param startTime the value to be set.
         * @return {@code this}
         */
        public Builder startTime(java.lang.String startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getStartTime}
         * @param startTime the value to be set.
         * @return {@code this}
         */
        public Builder startTime(com.aliyun.ros.cdk.core.IResolvable startTime) {
            this.startTime = startTime;
            return this;
        }

        /**
         * Sets the value of {@link RosElasticityAssuranceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosElasticityAssurance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosElasticityAssuranceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosElasticityAssuranceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosElasticityAssuranceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosElasticityAssuranceProps {
        private final java.lang.Object instanceAmount;
        private final java.lang.Object instanceTypes;
        private final java.lang.Object zoneId;
        private final java.lang.Object description;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object privatePoolOptions;
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
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privatePoolOptions = software.amazon.jsii.Kernel.get(this, "privatePoolOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.description = builder.description;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.privatePoolOptions = builder.privatePoolOptions;
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
        public final java.lang.Object getDescription() {
            return this.description;
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
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosElasticityAssuranceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosElasticityAssuranceProps.Jsii$Proxy that = (RosElasticityAssuranceProps.Jsii$Proxy) o;

            if (!instanceAmount.equals(that.instanceAmount)) return false;
            if (!instanceTypes.equals(that.instanceTypes)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.privatePoolOptions != null ? !this.privatePoolOptions.equals(that.privatePoolOptions) : that.privatePoolOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.startTime != null ? !this.startTime.equals(that.startTime) : that.startTime != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceAmount.hashCode();
            result = 31 * result + (this.instanceTypes.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.privatePoolOptions != null ? this.privatePoolOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.startTime != null ? this.startTime.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
